"use client";
import { useState, useEffect, useCallback } from "react";
import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { AddTechForm } from "@/components/tech-stack/add-tech-form";
import { type Tech } from "@/components/tech-stack/tech-stack-grid";
import { toast } from "sonner";
import { allTechnologies } from "@/components/tech-stack/tech-data";
import Image from "next/image";
import { LoadingSkeleton } from "@/components/ui/skeleton";
import {
  ExternalLink,
  RefreshCw,
  X as XIcon,
  Trash2 as TrashIcon,
  CreditCard,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import GitHubLogo, { Stripe } from "@/components/logo-card";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";

// Initialisation de iconMap au niveau du module
const iconMap: Record<string, React.ReactNode> = {};
allTechnologies.forEach((tech) => {
  iconMap[tech.id.toLowerCase()] = tech.icon;
});

const getDefaultIcon = (name: string) => (
  <span className="flex items-center justify-center w-full h-full text-sm font-bold bg-[var(--muted)] text-[var(--muted-foreground)] rounded-sm">
    {name.charAt(0).toUpperCase()}
  </span>
);

const TRASH_ID = "trash-can-droppable-id"; // ID unique pour la zone droppable
const STRIPE_CARD_ID = "internal_stripe_card"; // ID unique pour la carte Stripe

function DroppableTrash({ isVisible }: { isVisible: boolean }) {
  const { setNodeRef, isOver } = useDroppable({
    id: TRASH_ID,
  });

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={setNodeRef}
      className={`mt-8 p-6 border-2 ${
        isOver
          ? "border-red-500 bg-red-500/10"
          : "border-dashed border-[var(--border)]"
      } rounded-lg flex flex-col items-center justify-center transition-all`}
      style={{ minHeight: "100px" }}
    >
      <TrashIcon
        size={32}
        className={`${
          isOver ? "text-red-500" : "text-[var(--muted-foreground)]"
        } mb-2`}
      />
      <p
        className={`text-sm ${
          isOver ? "text-red-500" : "text-[var(--muted-foreground)]"
        }`}
      >
        {isOver ? "Release to delete" : "glide to delete"}
      </p>
    </div>
  );
}

// Interface for a complete stack (details + technologies)
export interface UserStack {
  id: number; // techStack ID
  name: string;
  technologies: Tech[];
  createdAt?: string;
  updatedAt?: string;
  // Ajouts pour la carte Stripe
  showStripeCard?: boolean;
  stripeCardColSpan?: 1 | 2 | 3;
  stripeCardRowSpan?: 1 | 2;
  stripeCardOrder?: number;
}

function SortableTechCard({
  tech,
  isPageEditMode,
  isResizeMode,
  onUpdateTech,
  gridMax,
  // Props Stripe (nécessaires si tech.isStripeCard est true)
  hasStripeConnection,
  isConnectingStripe,
  handleConnectStripe,
  stripeAccountMrr,
  isLoadingStripeAccountMrr,
  handleFetchStripeAccountMrr,
  isDisconnectingStripe,
  handleDisconnectStripe,
}: {
  tech: Tech;
  isPageEditMode: boolean;
  isResizeMode: boolean;
  onUpdateTech: (id: string, updates: Partial<Tech>) => void;
  gridMax: { cols: number; rows: number };
  // Types pour les props Stripe
  hasStripeConnection?: boolean;
  isConnectingStripe?: boolean;
  handleConnectStripe?: () => void;
  stripeAccountMrr?: { total: number; currency: string } | null;
  isLoadingStripeAccountMrr?: boolean;
  handleFetchStripeAccountMrr?: () => void;
  isDisconnectingStripe?: boolean;
  handleDisconnectStripe?: () => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: tech.id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
    zIndex: isDragging ? 50 : undefined,
    opacity: isDragging ? 0.7 : 1,
  };

  const colSpan = tech.gridSpan?.cols || 1;
  const rowSpan = tech.gridSpan?.rows || 1;

  // Logique de colSpan responsive
  let colSpanClass = "col-span-1"; // Par défaut pour mobile (grille à 1 colonne)
  if (colSpan === 2) {
    colSpanClass = "col-span-1 md:col-span-2"; // Prend 2 colonnes sur md+, sinon 1
  } else if (colSpan === 3) {
    colSpanClass = "col-span-1 md:col-span-2 lg:col-span-3"; // Prend 3 sur lg+, 2 sur md+, sinon 1
  }
  // Pour colSpan === 1, reste col-span-1 sur toutes les tailles implicitement

  // Pour rowSpan, c'est généralement moins problématique, mais on peut standardiser
  const rowSpanClass = rowSpan === 2 ? "row-span-2" : "row-span-1";

  const maxCols = gridMax.cols;
  const maxRows = gridMax.rows;
  const showControls = isResizeMode;
  const gapPx = 16;
  let minHeight = rowSpan * 150 + (rowSpan - 1) * gapPx;
  // if (isResizeMode) {
  //   minHeight += 70;
  // }

  const isGithubProject =
    tech.isProject && tech.url && tech.url.startsWith("https://github.com/");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshGithubStats = async () => {
    if (!tech.url) return;
    setIsRefreshing(true);
    try {
      const match = tech.url.match(/github.com\/([^/]+)\/([^/]+)/);
      if (!match) return;
      const owner = match[1];
      const repo = match[2];
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      if (!res.ok) throw new Error("Erreur lors du fetch GitHub");
      const data = await res.json();
      onUpdateTech(tech.id, {
        stars: data.stargazers_count,
        forks: data.forks_count,
      });
    } catch (e) {
      // Gérer l'erreur
    } finally {
      setIsRefreshing(false);
    }
  };

  const CardContent = (
    <div
      className="bento-card p-4 rounded-2xl border border-[--border] flex flex-col items-start backdrop-blur-md relative overflow-hidden group hover:border-[var(--primary)]"
      style={{ minHeight }}
    >
      {/* Halo lumineux décoratif */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, ${tech.color}55 0%, transparent 80%)`,
          }}
        />
      </div>
      <div className="flex items-center gap-2 mb-2 relative z-10">
        <div className="w-8 h-8 flex items-center justify-center">
          {tech.icon}
        </div>
        <span className="font-semibold text-lg text-[--text-foreground]">
          {tech.name}
        </span>
        {isGithubProject && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleRefreshGithubStats();
            }}
            disabled={isRefreshing}
            className="ml-2 p-1 rounded hover:bg-[var(--muted)] transition-colors"
            title="Rafraîchir les stats GitHub"
            aria-label="Rafraîchir les stats GitHub"
            type="button"
          >
            <RefreshCw
              size={16}
              className={isRefreshing ? "animate-spin" : ""}
            />
          </button>
        )}
      </div>
      {/* Cacher la description si en mode Resize */}
      {tech.description && !isResizeMode && (
        <div className={`text-xs text-[--text-foreground] mt-1 relative z-10`}>
          {tech.description}
        </div>
      )}
      {/* Cacher les stats GitHub si en mode Resize */}
      {isGithubProject && !isResizeMode && (
        <div className="flex gap-4 items-center mt-2 text-xs text-[var(--muted-foreground)]">
          <span title="Stars">⭐ {tech.stars ?? 0}</span>
          <span title="Forks">🍴 {tech.forks ?? 0}</span>
        </div>
      )}

      {showControls && (
        <div className="mt-2 flex flex-col gap-1 w-full relative z-10">
          <div className="flex gap-1 items-center">
            <span className="text-xs">Width :</span>
            {[1, 2, 3].map((c) => (
              <Button
                key={c}
                size="sm"
                variant={colSpan === c ? "secondary" : "outline"}
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateTech(tech.id, {
                    gridSpan: { ...tech.gridSpan, cols: c as 1 | 2 | 3 },
                  });
                }}
                disabled={c > maxCols}
                className="px-2 py-0.5 text-xs h-auto min-w-[24px]"
              >
                {c}
              </Button>
            ))}
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-xs">Height :</span>
            {[1, 2].map((r) => (
              <Button
                key={r}
                size="sm"
                variant={rowSpan === r ? "secondary" : "outline"}
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateTech(tech.id, {
                    gridSpan: { ...tech.gridSpan, rows: r as 1 | 2 },
                  });
                }}
                disabled={r > maxRows}
                className="px-2 py-0.5 text-xs h-auto min-w-[24px]"
              >
                {r}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const WrapperElement =
    isGithubProject && !isPageEditMode && !isResizeMode ? "a" : "div";

  const wrapperProps: any = {
    ref: setNodeRef,
    style: style,
    className: `relative group ${colSpanClass} ${rowSpanClass} ${
      isPageEditMode ? "cursor-grab active:cursor-grabbing" : ""
    }`,
    ...(isPageEditMode ? { ...attributes, ...listeners } : {}),
  };

  if (WrapperElement === "a" && !tech.isStripeCard) {
    // Ne pas faire un lien pour la carte Stripe
    wrapperProps.href = tech.url;
    wrapperProps.target = "_blank";
    wrapperProps.rel = "noopener noreferrer";
    wrapperProps["aria-label"] = `Voir le repo GitHub ${tech.name}`;
    wrapperProps.tabIndex = 0;
  }

  // Si c'est la carte Stripe, rendre le composant StripeCard
  if (tech.isStripeCard) {
    if (
      hasStripeConnection === undefined ||
      !handleConnectStripe ||
      !handleFetchStripeAccountMrr ||
      !handleDisconnectStripe ||
      !onUpdateTech // Assure que onUpdateTech est disponible pour onUpdateStripeCardSize
    ) {
      // Fallback simple si des props cruciales manquent
      return (
        <div
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
          className={`${colSpanClass} ${rowSpanClass} bg-red-100 p-2 border border-red-500`}
        >
          Erreur: Props Stripe ou callback manquantes pour StripeCard via
          SortableTechCard. ID: {tech.id}
        </div>
      );
    }
    console.log(
      "[DEBUG SortableTechCard for Stripe] props.hasStripeConnection:",
      hasStripeConnection
    );
    return (
      <StripeCard
        id={tech.id} // STRIPE_CARD_ID
        ref={setNodeRef} // DND: Attacher la référence du nœud ici
        style={style} // DND: Appliquer le style de transformation/transition
        dndAttributes={isPageEditMode ? attributes : undefined}
        dndListeners={isPageEditMode ? listeners : undefined}
        hasStripeConnection={hasStripeConnection}
        isConnectingStripe={isConnectingStripe || false}
        handleConnectStripe={handleConnectStripe}
        mrrData={stripeAccountMrr}
        onFetchMrr={handleFetchStripeAccountMrr}
        isFetchingMrr={isLoadingStripeAccountMrr || false}
        handleDisconnectStripe={handleDisconnectStripe}
        isDisconnectingStripe={isDisconnectingStripe || false}
        isPageEditMode={isPageEditMode}
      />
    );
  }

  // Sinon, rendre le contenu normal de la carte technologique
  return <WrapperElement {...wrapperProps}>{CardContent}</WrapperElement>;
}

// Après la fonction SortableTechCard, ajoutons une fonction pour créer la carte Stripe

function StripeCard({
  id,
  hasStripeConnection,
  isConnectingStripe,
  handleConnectStripe,
  mrrData,
  isFetchingMrr,
  isPageEditMode,
  style: dndStyle,
  ref: dndRef,
  dndAttributes,
  dndListeners,
}: {
  id: string;
  hasStripeConnection: boolean;
  isConnectingStripe: boolean;
  handleConnectStripe: () => void;
  mrrData?: { total: number; currency: string } | null;
  onFetchMrr: () => void;
  isFetchingMrr: boolean;
  handleDisconnectStripe: () => void;
  isDisconnectingStripe: boolean;
  isPageEditMode: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
  dndAttributes?: ReturnType<typeof useSortable>["attributes"];
  dndListeners?: ReturnType<typeof useSortable>["listeners"];
}) {
  // Forcer la carte Stripe à être 1x1
  const colSpanClass = "col-span-1"; // Toujours col-span-1
  const rowSpanClass = "row-span-1"; // Toujours row-span-1
  const minHeight = 1 * 150 + (1 - 1) * 16; // Hauteur pour 1 ligne (150px)
  const showResizeControls = false; // La carte Stripe n'est jamais redimensionnable

  return (
    <div
      ref={dndRef}
      style={dndStyle}
      className={`${colSpanClass} ${rowSpanClass} ${
        isPageEditMode ? "cursor-grab active:cursor-grabbing" : ""
      }`}
      {...(isPageEditMode ? { ...dndAttributes, ...dndListeners } : {})}
    >
      <div
        className="bento-card p-4 rounded-2xl border border-[--border] flex flex-col items-start backdrop-blur-md relative overflow-hidden group hover:border-[var(--primary)] h-full"
        style={{ minHeight }}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl"
            style={{
              background: `radial-gradient(circle, rgba(103, 73, 255, 0.3) 0%, transparent 80%)`,
            }}
          />
        </div>

        <div className="flex items-center gap-2 mb-4 relative z-10 w-full">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4764 7.45119C13.4764 6.54994 14.1659 6.12994 15.2364 6.12994C16.6114 6.12994 18.3889 6.63244 19.7239 7.49994V2.93744C18.2699 2.32494 16.8464 2.06244 15.2364 2.06244C11.3764 2.06244 8.77637 4.24494 8.77637 7.67994C8.77637 13.2349 16.2464 12.141 16.2464 14.8575C16.2464 15.9975 15.3539 16.4175 14.2464 16.4175C12.7414 16.4175 10.7764 15.7485 9.30137 14.7524V19.4324C10.9364 20.1675 12.5939 20.4999 14.2464 20.4999C18.1954 20.4999 20.9989 18.3749 20.9989 14.8575C20.9989 8.89119 13.4764 10.1625 13.4764 7.45119Z"
                fill="#635BFF"
              />
            </svg>
          </div>
          <span className="font-semibold text-lg text-[--text-foreground]">
            Stripe MRR
          </span>
        </div>

        <div className="flex-grow w-full flex flex-col">
          {!hasStripeConnection ? (
            <Button
              onClick={handleConnectStripe}
              disabled={isConnectingStripe}
              className="mt-2 w-full"
            >
              {isConnectingStripe ? (
                <>
                  <RefreshCw size={16} className="animate-spin mr-2" />
                  Connexion...
                </>
              ) : (
                "Connecter avec Stripe"
              )}
            </Button>
          ) : mrrData ? (
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-bold text-[--text-foreground]">
                  {(mrrData.total / 100).toLocaleString("fr-FR", {
                    style: "currency",
                    currency: mrrData.currency.toUpperCase(),
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <span className="text-xs text-[var(--muted-foreground)]">
                  MRR Total
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center flex-grow w-full">
              {isFetchingMrr ? (
                <>
                  <RefreshCw size={20} className="animate-spin my-4" />
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Chargement du MRR...
                  </p>
                </>
              ) : (
                // Cas où la connexion est établie mais MRR non encore chargé (ou échec précédent)
                // On pourrait afficher un message ou un bouton de rafraîchissement manuel ici si souhaité
                // Pour l'instant, on affiche un chargement subtil ou rien jusqu'à ce que MRR soit là
                <p className="text-sm text-[var(--muted-foreground)]">
                  Actualisation des données Stripe...
                </p>
              )}
            </div>
          )}
        </div>

        {showResizeControls && (
          <div className="mt-auto pt-2 flex flex-col gap-1 w-full relative z-10 border-t border-[var(--border)]">
            <div className="flex gap-1 items-center">
              <span className="text-xs">Width :</span>
              {[1, 2, 3].map((c) => (
                <Button
                  key={`stripe-width-${c}`}
                  size="sm"
                  variant={1 === c ? "secondary" : "outline"}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  disabled={c > 3}
                  className="px-2 py-0.5 text-xs h-auto min-w-[24px]"
                >
                  {c}
                </Button>
              ))}
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-xs">Height :</span>
              {[1, 2].map((r) => (
                <Button
                  key={`stripe-height-${r}`}
                  size="sm"
                  variant={1 === r ? "secondary" : "outline"}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  disabled={r > 2}
                  className="px-2 py-0.5 text-xs h-auto min-w-[24px]"
                >
                  {r}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// NOUVEAU COMPOSANT POUR GÉRER LES CALLBACKS STRIPE
function StripeCallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const stripeSuccess = searchParams.get("stripe_success");
    const stripeError = searchParams.get("stripe_error");

    if (stripeSuccess) {
      toast.success("Stripe account connected successfully!");
      router.replace("/dashboard", { scroll: false });
    }
    if (stripeError) {
      toast.error(`Stripe connection failed: ${stripeError}`);
      router.replace("/dashboard", { scroll: false });
    }
  }, [searchParams, router]);

  return null;
}

export default function Dashboard() {
  const { data: session, isPending: isLoadingSession } = useSession();

  const [userStack, setUserStack] = useState<UserStack | undefined>(undefined);
  const [isLoadingInitialData, setIsLoadingInitialData] = useState(true);
  const [isPageEditMode, setIsPageEditMode] = useState(false);
  const [isResizeMode, setIsResizeMode] = useState(false);

  // États pour Stripe
  const [hasStripeConnection, setHasStripeConnection] = useState(false);
  const [isCheckingStripeConnection, setIsCheckingStripeConnection] =
    useState(true);
  const [isConnectingStripe, setIsConnectingStripe] = useState(false);

  // Nouveaux états pour le MRR total du compte Stripe
  const [stripeAccountMrr, setStripeAccountMrr] = useState<{
    total: number;
    currency: string;
  } | null>(null);
  const [isLoadingStripeAccountMrr, setIsLoadingStripeAccountMrr] =
    useState(false);
  const [isDisconnectingStripe, setIsDisconnectingStripe] = useState(false);

  // Supprimé : Hydrate activeStack based on activeStackId and userStacks

  // useEffect pour le statut de connexion Stripe
  useEffect(() => {
    const checkStripeStatus = async () => {
      setIsCheckingStripeConnection(true);
      setHasStripeConnection(false); // Initialiser à false
      try {
        const response = await fetch("/api/stripe/connection-status");
        const data = await response.json();
        if (response.ok) {
          setHasStripeConnection(data.isConnected);
          if (data.isConnected) {
            // Si connecté, récupérer le MRR immédiatement
            handleFetchStripeAccountMrr();
          }
        } else {
          toast.error(
            data.error || "Could not check Stripe connection status."
          );
          setHasStripeConnection(false);
        }
      } catch (error) {
        toast.error("Failed to check Stripe connection status.");
        setHasStripeConnection(false);
      } finally {
        setIsCheckingStripeConnection(false);
      }
    };
    if (!isLoadingSession && session?.user?.id) {
      checkStripeStatus();
    } else if (!isLoadingSession && !session?.user?.id) {
      setHasStripeConnection(false);
      setIsCheckingStripeConnection(false);
    }
  }, [
    session,
    isLoadingSession,

    // setHasStripeConnection, // Retiré car géré dans la fonction
    // setIsCheckingStripeConnection, // Retiré car géré dans la fonction
  ]);

  const [profileDescription, setProfileDescription] = useState<string>("");
  const [orderedTechIds, setOrderedTechIds] = useState<string[]>([]);

  const technologies = userStack?.technologies || [];

  useEffect(() => {
    if (session?.user) {
      const currentDesc = (session.user as any).description || "";
      setProfileDescription(currentDesc);
    }
  }, [session]);

  useEffect(() => {
    if (technologies.length > 0) {
      setOrderedTechIds(technologies.map((t) => t.id));
    }
  }, [technologies]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.id === TRASH_ID) {
      // Si déposé sur la poubelle
      console.log(`[DEBUG] DragEnd - Item ${active.id} dropped on TRASH`);
      handleRemoveTech(active.id as string);
      return; // Fin du traitement pour la suppression
    }

    // Logique de réorganisation existante
    if (over && active.id !== over.id) {
      const oldIndex = orderedTechIds.indexOf(active.id as string);
      const newIndex = orderedTechIds.indexOf(over.id as string);
      // Vérifier si oldIndex et newIndex sont valides (parfois over.id peut être la poubelle si mal géré plus haut)
      if (oldIndex !== -1 && newIndex !== -1) {
        const newOrder = arrayMove(orderedTechIds, oldIndex, newIndex);
        setOrderedTechIds(newOrder);
        const reorderedTechs = newOrder
          .map((id) => technologies.find((t) => t.id === id))
          .filter(Boolean) as Tech[];
        handleReorderTechs(reorderedTechs);
      }
    }
  };

  const hydrateTechnologies = useCallback((rawTechs: any[]): Tech[] => {
    if (!rawTechs) return [];
    const hydrated = rawTechs.map((rawTech, index) => {
      let icon;
      let isProject = false;
      let favicon = undefined;
      let url = undefined;
      let description = undefined;
      let stars = 0;
      let forks = 0;
      let isStripeCard = false;
      let specificGridSpan: { cols: 1 | 2 | 3; rows: 1 | 2 } | undefined =
        undefined;

      if (rawTech.id === STRIPE_CARD_ID) {
        isStripeCard = true;
        icon = <CreditCard size={24} className="text-[#635BFF]" />;
        specificGridSpan = { cols: 1, rows: 1 };
      } else if (rawTech.isProject) {
        isProject = true;
        url = rawTech.url;
        description = rawTech.description;
        favicon = rawTech.favicon;
        stars = rawTech.stars;
        forks = rawTech.forks;
        if (
          url &&
          typeof url === "string" &&
          url.startsWith("https://github.com/")
        ) {
          icon = <GitHubLogo width={24} height={24} />;
        } else if (favicon) {
          icon = (
            <img
              src={rawTech.favicon}
              alt={rawTech.name}
              width={24}
              height={24}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          );
        } else {
          icon = <ExternalLink size={24} />;
        }
      } else {
        const techIdToLookup = rawTech.technologyId
          ? rawTech.technologyId.toLowerCase()
          : "";
        icon = iconMap[techIdToLookup] || getDefaultIcon(rawTech.name);
      }

      const calculatedGridSpan = (() => {
        if (specificGridSpan) return specificGridSpan; // Priorité à la carte Stripe
        const gridCols = parseInt(rawTech.gridCols || "1", 10);
        const gridRows = parseInt(rawTech.gridRows || "1", 10);
        if (gridCols > 1 || gridRows > 1) {
          return { cols: gridCols as 1 | 2 | 3, rows: gridRows as 1 | 2 };
        }
        return undefined;
      })();

      const techItem: Tech = {
        id: String(rawTech.id),
        name: rawTech.name,
        color: rawTech.color,
        icon: icon,
        technologyId: rawTech.technologyId,
        category: rawTech.category,
        gridSpan: calculatedGridSpan, // Utiliser le gridSpan calculé ou forcé
        order: rawTech.order !== undefined ? rawTech.order : index,
        isProject: isProject,
        isStripeCard: isStripeCard,
        favicon: favicon,
        url: url,
        description: description,
        stars,
        forks,
      };
      return techItem;
    });
    return hydrated;
  }, []);

  // Modified to save the user stack
  const saveUserStack = useCallback(
    async (stackToSave: UserStack, showSuccessToast: boolean = true) => {
      if (!session?.user?.id) {
        toast.error("Vous devez être connecté pour sauvegarder.");
        return null;
      }
      if (!stackToSave) {
        toast.error("Aucune grille à sauvegarder.");
        return null;
      }

      console.log("[DEBUG] saveUserStack - stackToSave:", stackToSave);

      const requestData = {
        id: stackToSave.id,
        technologies: stackToSave.technologies.map((tech) => ({
          id: tech.id,
          name: tech.name,
          color: tech.color,
          technologyId: tech.technologyId || tech.id, // Assurer un technologyId
          category: tech.category || "Custom",
          gridCols: tech.gridSpan?.cols || 1,
          gridRows: tech.gridSpan?.rows || 1,
          order: tech.order,
          isProject: tech.isProject || false,
          favicon: tech.favicon,
          url: tech.url,
          description: tech.description,
          stars: tech.stars,
          forks: tech.forks,
        })),
      };

      console.log("[DEBUG] saveUserStack - requestData:", requestData);

      try {
        const response = await fetch("/api/tech/stack", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || "Erreur lors de la sauvegarde de la grille"
          );
        }

        const savedStackData = await response.json();
        const hydratedFromApi = hydrateTechnologies(
          savedStackData.technologies || []
        );

        const finalStack = {
          ...savedStackData,
          technologies: hydratedFromApi,
        };

        setUserStack(finalStack);

        if (showSuccessToast) {
          toast.success("Grille sauvegardée avec succès !");
        }
        return finalStack;
      } catch (error) {
        toast.error(
          (error as Error).message || "Impossible de sauvegarder la grille."
        );
        return null;
      }
    },
    [session, hydrateTechnologies]
  );

  useEffect(() => {
    const fetchUserStack = async () => {
      if (session?.user?.id) {
        setIsLoadingInitialData(true);
        try {
          const response = await fetch("/api/tech/stack");
          if (!response.ok) throw new Error("Network or server error");
          const stacksData: UserStack[] = await response.json();

          // Prendre la première stack (ou créer une stack par défaut si aucune n'existe)
          const stackData = stacksData.length > 0 ? stacksData[0] : null;

          if (stackData) {
            console.log("[DEBUG] Stack existante trouvée, ID:", stackData.id);
            const hydratedStack = {
              ...stackData,
              technologies: hydrateTechnologies(stackData.technologies || []),
            };
            setUserStack(hydratedStack);
          } else {
            console.log(
              "[DEBUG] Aucune stack trouvée, création d'une stack par défaut"
            );
            // Créer une stack par défaut si l'utilisateur n'en a pas
            try {
              const createResponse = await fetch("/api/tech/stack", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  technologies: [],
                }),
              });

              if (createResponse.ok) {
                const newStackData = await createResponse.json();
                console.log(
                  "[DEBUG] Nouvelle stack créée avec succès, ID:",
                  newStackData.id
                );
                const hydratedNewStack = {
                  ...newStackData,
                  technologies: hydrateTechnologies(
                    newStackData.technologies || []
                  ),
                };
                setUserStack(hydratedNewStack);
              } else {
                console.error(
                  "[ERROR] Échec de création de la stack par défaut"
                );
                toast.error("Impossible de créer votre grille.");
              }
            } catch (createError) {
              console.error(
                "[ERROR] Exception lors de la création de la stack:",
                createError
              );
              toast.error("Erreur lors de la création de votre grille.");
            }
          }
        } catch (error) {
          console.error("[ERROR] Impossible de charger la grille:", error);
          toast.error("Impossible de charger votre grille.");

          // Tentative de création d'une grille même en cas d'erreur de chargement
          try {
            const createResponse = await fetch("/api/tech/stack", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                technologies: [],
              }),
            });

            if (createResponse.ok) {
              const newStackData = await createResponse.json();
              console.log(
                "[DEBUG] Nouvelle stack créée après échec de chargement, ID:",
                newStackData.id
              );
              const hydratedNewStack = {
                ...newStackData,
                technologies: hydrateTechnologies(
                  newStackData.technologies || []
                ),
              };
              setUserStack(hydratedNewStack);
            }
          } catch (createError) {
            console.error(
              "[ERROR] Échec de la tentative de récupération:",
              createError
            );
            setUserStack(undefined);
          }
        } finally {
          setIsLoadingInitialData(false);
        }
      } else if (!isLoadingSession && !session) {
        setIsLoadingInitialData(false);
        setUserStack(undefined);
      }
    };

    if (!isLoadingSession) {
      fetchUserStack();
    }
  }, [isLoadingSession, session, hydrateTechnologies]);

  const handleAddTech = async (newTechFromForm: Tech) => {
    if (!userStack) {
      toast.error("Impossible d'ajouter une technologie sans grille.");
      return;
    }

    const newOrder =
      userStack.technologies.length > 0
        ? Math.max(...userStack.technologies.map((t: Tech) => t.order || 0)) + 1
        : 0;

    const techToAddWithOrder = { ...newTechFromForm, order: newOrder };

    const updatedTechnologies = [...userStack.technologies, techToAddWithOrder];
    const updatedStack = { ...userStack, technologies: updatedTechnologies };

    setUserStack(updatedStack); // Optimistic update

    const savedStack = await saveUserStack(updatedStack);
    if (savedStack) {
      setUserStack(savedStack); // Mettre à jour avec les données du serveur
    } else {
      // Revert optimistic update if save failed
      setUserStack(userStack);
      toast.error(
        "Impossible de sauvegarder la nouvelle technologie, veuillez réessayer."
      );
    }
  };

  const handleRemoveTech = async (
    itemIdToRemove: string,
    showSuccessToast: boolean = true
  ) => {
    if (!userStack) return;

    // Si c'est la carte Stripe, on déconnecte Stripe entièrement
    if (itemIdToRemove === STRIPE_CARD_ID) {
      await handleDisconnectStripe(); // handleDisconnectStripe s'occupera de la sauvegarde et du toast
      return; // Sortir tôt, car handleDisconnectStripe gère la suite
    }

    // Logique pour les autres technologies
    let updatedStack = { ...userStack };
    updatedStack.technologies = userStack.technologies.filter(
      (tech: Tech) => tech.id !== itemIdToRemove
    );
    updatedStack.technologies = updatedStack.technologies.map(
      (tech: Tech, index: number) => ({
        ...tech,
        order: index,
      })
    );

    setUserStack(updatedStack); // Optimistic update

    const savedStack = await saveUserStack(updatedStack, false);

    if (savedStack) {
      setUserStack(savedStack);
      if (showSuccessToast) {
        toast.success("Technology deleted.");
      }
    } else {
      setUserStack(userStack);
      toast.error("Unable to update the grid after deletion.");
    }
  };

  const handleUpdateTech = (id: string, updates: Partial<Tech>) => {
    if (!userStack) return;

    const updatedTechnologies = userStack.technologies.map((tech: Tech) =>
      tech.id === id ? { ...tech, ...updates } : tech
    );
    const updatedStack = { ...userStack, technologies: updatedTechnologies };

    console.log("[DEBUG] handleUpdateTech - id:", id, "updates:", updates);
    setUserStack(updatedStack);

    // Si on met à jour les stars, forks ou gridSpan, on persiste
    if (
      typeof updates.stars !== "undefined" ||
      typeof updates.forks !== "undefined" ||
      typeof updates.gridSpan !== "undefined"
    ) {
      console.log(
        "[DEBUG] handleUpdateTech - saveUserStack called with:",
        updatedStack
      );
      saveUserStack(updatedStack);
    }
  };

  const handleReorderTechs = (reorderedTechsInput: Tech[]) => {
    if (!userStack) return;

    // Mettre à jour la propriété 'order' de chaque tech en fonction de sa nouvelle position
    const finalReorderedTechs = reorderedTechsInput.map(
      (tech: Tech, index: number) => ({
        ...tech,
        order: index, // Assigner le nouvel ordre basé sur l'index
      })
    );

    const updatedStack = { ...userStack, technologies: finalReorderedTechs };

    setUserStack(updatedStack);
    // Sauvegarder le stack avec les ordres mis à jour.
    // Le showSuccessToast est false car le DND est une opération fluide, pas besoin de toast à chaque fois.
    saveUserStack(updatedStack, false);
  };

  // Fonction pour charger manuellement la description de l'utilisateur
  const refreshUserProfileData = async () => {
    try {
      const response = await fetch("/api/user/profile");
      if (!response.ok) throw new Error("Failed to fetch user profile data");

      const userData = await response.json();

      if (userData.description) {
        setProfileDescription(userData.description);
      }
    } catch (error) {
      // Silently fail
    }
  };

  // Charger la description au chargement initial
  useEffect(() => {
    if (session?.user?.id) {
      refreshUserProfileData();
    }
  }, [session?.user?.id]);

  // >>> BLOC DES FONCTIONS STRIPE INSÉRÉ ICI <<<
  // Fonction pour la connexion Stripe
  const handleConnectStripe = async () => {
    setIsConnectingStripe(true);
    window.location.href = "/api/stripe/oauth/authorize";
  };

  // Nouvelle fonction pour récupérer le MRR total du compte
  const handleFetchStripeAccountMrr = useCallback(async () => {
    setIsLoadingStripeAccountMrr(true);
    try {
      const response = await fetch("/api/stripe/mrr");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Échec de la récupération du MRR");
      }
      const data = await response.json();
      setStripeAccountMrr(data);
      // Le toast de succès ici peut être redondant si checkStripeStatus s'en charge aussi.
      // toast.success("MRR du compte Stripe récupéré avec succès !");
    } catch (error: any) {
      console.error(
        "Erreur lors de la récupération du MRR du compte Stripe:",
        error
      );
      toast.error(
        error.message || "Impossible de récupérer le MRR du compte Stripe."
      );
      setStripeAccountMrr(null);
    } finally {
      setIsLoadingStripeAccountMrr(false);
    }
  }, [setIsLoadingStripeAccountMrr, setStripeAccountMrr]); // Dépendances: fonctions setState

  const handleDisconnectStripe = useCallback(async () => {
    setIsDisconnectingStripe(true);
    try {
      const response = await fetch("/api/stripe/disconnect", {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Échec de la déconnexion de Stripe");
      }

      setHasStripeConnection(false);
      setStripeAccountMrr(null);

      let finalStackToSave = userStack;

      // Retirer la carte Stripe de la grille si elle y est et sauvegarder
      if (
        userStack &&
        userStack.technologies.some((t: Tech) => t.id === STRIPE_CARD_ID)
      ) {
        console.log(
          "[DEBUG] DisconnectStripe - Hiding StripeCard from userStack"
        );
        let updatedStack = { ...userStack };
        updatedStack.technologies = userStack.technologies.filter(
          (tech: Tech) => tech.id !== STRIPE_CARD_ID
        );
        updatedStack.technologies = updatedStack.technologies.map(
          (tech: Tech, index: number) => ({
            ...tech,
            order: index,
          })
        );

        setUserStack(updatedStack); // Optimistic update UI
        finalStackToSave = updatedStack;
      }

      if (finalStackToSave) {
        await saveUserStack(finalStackToSave, false); // Sauvegarder l'état sans la carte Stripe
      }

      toast.success("Stripe account disconnected and card hidden.");
    } catch (error: any) {
      console.error("Error disconnecting Stripe:", error);
      toast.error(error.message || "Unable to disconnect Stripe account.");
    } finally {
      setIsDisconnectingStripe(false);
    }
  }, [
    userStack,
    saveUserStack,
    setHasStripeConnection,
    setStripeAccountMrr,
    setIsDisconnectingStripe,
  ]); // Dépendances

  // Fonction pour ajouter/afficher la carte Stripe
  const handleShowStripeCardInGrid = useCallback(async () => {
    if (!userStack) {
      toast.error("Impossible d'ajouter la carte Stripe sans grille.");
      return;
    }
    if (userStack.technologies.find((t: Tech) => t.id === STRIPE_CARD_ID)) {
      toast.info("La carte Stripe est déjà dans la grille.");
      return;
    }

    const newOrder =
      userStack.technologies.length > 0
        ? Math.max(...userStack.technologies.map((t: Tech) => t.order || 0)) + 1
        : 0;

    // Créer un objet Tech pour la carte Stripe
    const stripeTech: Tech = {
      id: STRIPE_CARD_ID,
      name: "Stripe MRR", // Nom par défaut
      isStripeCard: true,
      // Icône SVG pour Stripe
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4764 7.45119C13.4764 6.54994 14.1659 6.12994 15.2364 6.12994C16.6114 6.12994 18.3889 6.63244 19.7239 7.49994V2.93744C18.2699 2.32494 16.8464 2.06244 15.2364 2.06244C11.3764 2.06244 8.77637 4.24494 8.77637 7.67994C8.77637 13.2349 16.2464 12.141 16.2464 14.8575C16.2464 15.9975 15.3539 16.4175 14.2464 16.4175C12.7414 16.4175 10.7764 15.7485 9.30137 14.7524V19.4324C10.9364 20.1675 12.5939 20.4999 14.2464 20.4999C18.1954 20.4999 20.9989 18.3749 20.9989 14.8575C20.9989 8.89119 13.4764 10.1625 13.4764 7.45119Z"
            fill="#635BFF"
          />
        </svg>
      ),
      color: "#635BFF", // Couleur par défaut
      gridSpan: { cols: 1, rows: 1 }, // Dimensions par défaut
      order: newOrder,
      category: "API",
      technologyId: STRIPE_CARD_ID,
    };

    const updatedTechnologies = [...userStack.technologies, stripeTech].sort(
      (a, b) => (a.order || 0) - (b.order || 0)
    );
    const updatedStack = {
      ...userStack,
      technologies: updatedTechnologies,
    };

    setUserStack(updatedStack); // Optimistic update

    const savedStack = await saveUserStack(updatedStack, false);
    if (savedStack) {
      setUserStack(savedStack);
      toast.success("Carte Stripe ajoutée à la grille.");
    } else {
      // Revert
      setUserStack(userStack);
      toast.error("Impossible d'ajouter la carte Stripe.");
    }
  }, [userStack, saveUserStack]); // Dépendances

  // Nouveau composant ProfileHeader
  const ProfileHeader = () => {
    const name = session?.user?.name;
    const image = session?.user?.image;
    const description = profileDescription;
    const createdAt = session?.user?.createdAt;

    return (
      <div className="w-full max-w-4xl mx-auto p-4 md:p-6 bg-[var(--card)] rounded-xl mb-8 border border-[var(--border)] mask-b-from-30%">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {image && (
            <Image
              src={image}
              alt={name || "User avatar"}
              width={128}
              height={128}
              className="rounded-full border-4 border-[var(--primary-foreground)]"
            />
          )}
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-foreground)] flex items-center gap-3">
              {name || "Anonymous User"}
              {hasStripeConnection && (
                <div className="flex items-center justify-center hidden md:flex ml-3 mt-1 bg-[#635BFF]/40 py-0.5 px-1 rounded-sm">
                  <Stripe className="my-auto" />
                </div>
              )}
            </h1>
            {description && (
              <p className="text-md text-[var(--muted-foreground)] mt-2">
                {description}
              </p>
            )}
            {createdAt && (
              <p className="text-xs text-[var(--muted-foreground)] mt-1">
                Joined: {new Date(createdAt).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const BentoGridSection = ({
    technologies,
    isLoadingInitialData,
    handleAddTech,
    sessionUserId,
    handleRemoveTech,
    handleUpdateTech,
    hasStripeConnection,
    isConnectingStripe,
    handleConnectStripe,
    stripeAccountMrr,
    isLoadingStripeAccountMrr,
    handleFetchStripeAccountMrr,
    isDisconnectingStripe,
    handleDisconnectStripe,
    handleShowStripeCardInGrid, // Prop passée
  }: {
    technologies: Tech[];
    isLoadingInitialData: boolean;
    handleAddTech: (tech: Tech) => void;
    sessionUserId: string | undefined;
    handleRemoveTech: (id: string) => void;
    handleUpdateTech: (id: string, updates: Partial<Tech>) => void;
    hasStripeConnection: boolean;
    isConnectingStripe: boolean;
    handleConnectStripe: () => void;
    stripeAccountMrr: { total: number; currency: string } | null;
    isLoadingStripeAccountMrr: boolean;
    handleFetchStripeAccountMrr: () => void;
    isDisconnectingStripe: boolean;
    handleDisconnectStripe: () => void;
    handleShowStripeCardInGrid: () => void; // Modifié: rendu non optionnel
  }) => {
    if (!sessionUserId) return null;
    // Limites de la grille
    const gridMax = { cols: 3, rows: 2 };
    // Limite à 5 lignes (3x5=15 emplacements max)
    // (On peut améliorer la logique pour empêcher le dépassement total si besoin)
    console.log(
      "[DEBUG BentoGridSection] props.hasStripeConnection:",
      hasStripeConnection
    );
    return (
      <>
        {
          <div
            className={`relative w-full bg-[var(--card)] p-4 rounded-lg border border-[var(--border)] h-full flex flex-col ${
              isPageEditMode || isResizeMode
                ? "border-2 border-dashed border-[var(--primary)]"
                : ""
            }`}
          >
            <GlowingEffect className="rounded-lg" />
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xs sm:text-base md:text-lg lg:text-2xl font-bold text-[var(--foreground)] text-center md:text-left break-words">
                <span className="hidden sm:inline">Your Bento Grid. </span>
              </h2>
              <div className="flex gap-2 items-center">
                {" "}
                {/* Ajout de items-center pour l'alignement vertical */}
                <Button
                  variant={isPageEditMode ? "secondary" : "outline"}
                  onClick={() => {
                    setIsPageEditMode(!isPageEditMode);
                    if (!isPageEditMode) setIsResizeMode(false);
                  }}
                  className="text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base"
                  disabled={isResizeMode}
                >
                  {isPageEditMode ? "Done Editing" : "Reorder"}
                </Button>
                <Button
                  variant={isResizeMode ? "secondary" : "outline"}
                  onClick={() => {
                    setIsResizeMode(!isResizeMode);
                    if (!isResizeMode) setIsPageEditMode(false);
                  }}
                  className="hidden sm:inline-flex text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base"
                  disabled={isPageEditMode}
                >
                  {isResizeMode ? "Done Resizing" : "Resize"}
                </Button>
                <div className="flex items-center">
                  <AddTechForm
                    onAddTech={handleAddTech}
                    userId={sessionUserId}
                    // Props pour Stripe (résout l'erreur linter)
                    hasStripeConnection={hasStripeConnection}
                    onConnectStripe={handleConnectStripe}
                    onShowStripeInGrid={handleShowStripeCardInGrid}
                  />
                </div>
                {/* NOUVEAU BOUTON DE DÉCONNEXION STRIPE */}
                {hasStripeConnection && (
                  <Button
                    variant="outline"
                    onClick={handleDisconnectStripe}
                    disabled={isDisconnectingStripe}
                    className="text-red-500 hover:bg-red-500/10 border-red-500/50 hover:border-red-500 px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base"
                    title="Disconnect Stripe account"
                  >
                    {isDisconnectingStripe ? (
                      <RefreshCw
                        size={16}
                        className="animate-spin mr-0 sm:mr-2"
                      />
                    ) : (
                      <XIcon size={16} className="mr-0 sm:mr-2" />
                    )}
                    <span className="hidden sm:inline">Disconnect Stripe</span>
                    <span className="sm:hidden">Disconnect</span>{" "}
                    {/* Texte plus court pour mobile */}
                  </Button>
                )}
              </div>
            </div>
            {technologies.length === 0 &&
              !isLoadingInitialData &&
              !hasStripeConnection &&
              (!userStack ||
                userStack.technologies.filter((t) => !t.isStripeCard).length ===
                  0) && (
                <div className="text-center py-12 flex-grow flex flex-col justify-center items-center">
                  <p className="text-[var(--muted-foreground)]">
                    No technology in the stack "{userStack?.name}".
                  </p>
                  <p className="text-[var(--muted-foreground)]">
                    Click "Add" to get started.
                  </p>
                </div>
              )}
            {(technologies.length > 0 || hasStripeConnection) &&
              !isLoadingInitialData &&
              (isPageEditMode ? (
                <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                  <SortableContext
                    items={orderedTechIds}
                    strategy={rectSortingStrategy}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* La carte Stripe est maintenant rendue via cette boucle si présente dans orderedTechIds */}
                      {orderedTechIds.map((id) => {
                        const tech = technologies.find((t) => t.id === id);
                        if (!tech) return null;
                        return (
                          <SortableTechCard
                            key={tech.id}
                            tech={tech}
                            isPageEditMode={true}
                            isResizeMode={false}
                            onUpdateTech={handleUpdateTech}
                            gridMax={gridMax}
                            // Props Stripe passées à chaque SortableTechCard
                            hasStripeConnection={hasStripeConnection}
                            isConnectingStripe={isConnectingStripe}
                            handleConnectStripe={handleConnectStripe}
                            stripeAccountMrr={stripeAccountMrr}
                            isLoadingStripeAccountMrr={
                              isLoadingStripeAccountMrr
                            }
                            handleFetchStripeAccountMrr={
                              handleFetchStripeAccountMrr
                            }
                            isDisconnectingStripe={isDisconnectingStripe}
                            handleDisconnectStripe={handleDisconnectStripe}
                          />
                        );
                      })}
                    </div>
                  </SortableContext>
                  {/* Affiche la poubelle en dessous de la grille si en mode édition */}
                  {isPageEditMode && (
                    <DroppableTrash isVisible={isPageEditMode} />
                  )}
                </DndContext>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* La carte Stripe est maintenant rendue via cette boucle si présente dans orderedTechIds */}
                  {orderedTechIds.map((id) => {
                    const tech = technologies.find((t) => t.id === id);
                    if (!tech) return null;
                    return (
                      <SortableTechCard
                        key={tech.id}
                        tech={tech}
                        isPageEditMode={false}
                        isResizeMode={isResizeMode}
                        onUpdateTech={handleUpdateTech}
                        gridMax={gridMax}
                        // Props Stripe passées à chaque SortableTechCard
                        hasStripeConnection={hasStripeConnection}
                        isConnectingStripe={isConnectingStripe}
                        handleConnectStripe={handleConnectStripe}
                        stripeAccountMrr={stripeAccountMrr}
                        isLoadingStripeAccountMrr={isLoadingStripeAccountMrr}
                        handleFetchStripeAccountMrr={
                          handleFetchStripeAccountMrr
                        }
                        isDisconnectingStripe={isDisconnectingStripe}
                        handleDisconnectStripe={handleDisconnectStripe}
                      />
                    );
                  })}
                </div>
              ))}
          </div>
        }
      </>
    );
  };

  if (isLoadingSession || isLoadingInitialData) {
    return <LoadingSkeleton />;
  }

  if (!session?.user?.id) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <p className="text-xl mb-4">Please sign in to access your dashboard.</p>
        <Button
          onClick={() => (window.location.href = "/auth/signin")}
          className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
        >
          Sign in
        </Button>
      </div>
    );
  }

  console.log(
    "[DEBUG Dashboard] hasStripeConnection:",
    hasStripeConnection,
    "isCheckingStripeConnection:",
    isCheckingStripeConnection
  );
  return (
    <>
      {/* AJOUT DE SUSPENSE AUTOUR DU NOUVEAU COMPOSANT */}
      <Suspense fallback={<LoadingSkeleton />}>
        <StripeCallbackHandler />
      </Suspense>

      <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] mx-auto max-w-4xl pt-24">
        <div className="flex-grow">
          <div className="mx-auto py-2 md:py-8 px-4 md:px-0">
            <ProfileHeader />
            <div className="mt-8">
              <BentoGridSection
                technologies={technologies}
                isLoadingInitialData={isLoadingInitialData}
                handleAddTech={handleAddTech}
                sessionUserId={session?.user?.id}
                handleRemoveTech={handleRemoveTech}
                handleUpdateTech={handleUpdateTech}
                hasStripeConnection={hasStripeConnection}
                isConnectingStripe={isConnectingStripe}
                handleConnectStripe={handleConnectStripe}
                stripeAccountMrr={stripeAccountMrr}
                isLoadingStripeAccountMrr={isLoadingStripeAccountMrr}
                handleFetchStripeAccountMrr={handleFetchStripeAccountMrr}
                isDisconnectingStripe={isDisconnectingStripe}
                handleDisconnectStripe={handleDisconnectStripe}
                handleShowStripeCardInGrid={handleShowStripeCardInGrid}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
