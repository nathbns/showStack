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
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
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
import GitHubLogo from "@/components/logo-card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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
        {isOver ? "Relâcher pour supprimer" : "Glisser ici pour supprimer"}
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
}

function SortableTechCard({
  tech,
  isPageEditMode,
  isResizeMode,
  onRemoveTech,
  onUpdateTech,
  gridMax,
}: {
  tech: Tech;
  isPageEditMode: boolean;
  isResizeMode: boolean;
  onRemoveTech: (id: string) => void;
  onUpdateTech: (id: string, updates: Partial<Tech>) => void;
  gridMax: { cols: number; rows: number };
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
      className="bento-card p-4 rounded-2xl border border-[--border] flex flex-col items-start backdrop-blur-md relative overflow-hidden group transition-shadow hover:shadow-lg hover:border-[var(--primary)]"
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

  if (WrapperElement === "a") {
    wrapperProps.href = tech.url;
    wrapperProps.target = "_blank";
    wrapperProps.rel = "noopener noreferrer";
    wrapperProps["aria-label"] = `Voir le repo GitHub ${tech.name}`;
    wrapperProps.tabIndex = 0;
  }

  return <WrapperElement {...wrapperProps}>{CardContent}</WrapperElement>;
}

export default function Dashboard() {
  const { data: sessionData, isPending } = useSession();
  const [userStacks, setUserStacks] = useState<UserStack[]>([]);
  const [activeStackId, setActiveStackId] = useState<number | null>(null);
  const [isLoadingInitialData, setIsLoadingInitialData] = useState(true);
  const [userProfileDescription, setUserProfileDescription] = useState("");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editingDescription, setEditingDescription] = useState("");
  const [showAddStackForm, setShowAddStackForm] = useState(false);
  const [isPageEditMode, setIsPageEditMode] = useState(false);
  const [isResizeMode, setIsResizeMode] = useState(false);
  const [orderedTechIds, setOrderedTechIds] = useState<string[]>([]);
  const [isStackEditMode, setIsStackEditMode] = useState(false);
  const [stackToDeleteId, setStackToDeleteId] = useState<number | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const activeStack = userStacks.find((stack) => stack.id === activeStackId);
  const technologies = activeStack?.technologies || [];

  useEffect(() => {
    if (sessionData?.user) {
      const currentDesc = (sessionData.user as any).description || "";
      setUserProfileDescription(currentDesc);
      setEditingDescription(currentDesc);
    }
  }, [sessionData]);

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

      if (rawTech.isProject) {
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

      const gridCols = parseInt(rawTech.gridCols || "1", 10);
      const gridRows = parseInt(rawTech.gridRows || "1", 10);
      const gridSpan =
        gridCols > 1 || gridRows > 1
          ? { cols: gridCols as 1 | 2 | 3, rows: gridRows as 1 | 2 }
          : undefined;

      const techItem: Tech = {
        id: String(rawTech.id),
        name: rawTech.name,
        color: rawTech.color,
        icon: icon,
        technologyId: rawTech.technologyId,
        category: rawTech.category,
        gridSpan: gridSpan,
        order: rawTech.order !== undefined ? rawTech.order : index,
        isProject: isProject,
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

  // Modified to save the active stack
  const saveActiveStack = useCallback(
    async (stackToSave: UserStack) => {
      if (!sessionData?.user?.id) {
        toast.error("You must be logged in to save.");
        return null;
      }
      if (!stackToSave) {
        toast.error("No active stack to save.");
        return null;
      }

      console.log("[DEBUG] saveActiveStack - stackToSave:", stackToSave);
      try {
        const technologiesToSave = stackToSave.technologies.map(
          (tech, index) => {
            const isProject = (tech as any).isProject || false;
            const favicon = (tech as any).favicon || undefined;
            const url = (tech as any).url || undefined;
            const description = (tech as any).description || undefined;

            const apiTechItem = {
              id: tech.id,
              name: tech.name,
              color: tech.color,
              technologyId:
                tech.technologyId ||
                allTechnologies.find(
                  (t) => t.id.toLowerCase() === tech.id.toLowerCase()
                )?.id ||
                tech.id,
              category:
                tech.category ||
                allTechnologies.find(
                  (t) => t.id.toLowerCase() === tech.id.toLowerCase()
                )?.category ||
                "Custom",
              gridCols: tech.gridSpan?.cols || 1,
              gridRows: tech.gridSpan?.rows || 1,
              isProject,
              favicon,
              url,
              description,
              order: tech.order,
              stars: tech.stars,
              forks: tech.forks,
            };
            return apiTechItem;
          }
        );

        const response = await fetch("/api/tech/stack", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: stackToSave.id,
            name: stackToSave.name,
            technologies: technologiesToSave,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Error while saving the stack");
        }

        const savedStackData = await response.json();
        const hydratedFromApi = hydrateTechnologies(
          savedStackData.technologies || []
        );

        const finalStack = {
          ...savedStackData,
          technologies: hydratedFromApi,
        };

        setUserStacks((prevStacks) =>
          prevStacks.map((s) => (s.id === savedStackData.id ? finalStack : s))
        );
        if (activeStackId === null && savedStackData.id) {
          setActiveStackId(savedStackData.id);
        }
        toast.success(`Stack '${savedStackData.name}' saved successfully!`);
        return finalStack;
      } catch (error) {
        toast.error((error as Error).message || "Unable to save the stack.");
        return null;
      }
    },
    [sessionData, hydrateTechnologies, activeStackId]
  );

  useEffect(() => {
    const fetchUserStacks = async () => {
      if (sessionData?.user?.id) {
        setIsLoadingInitialData(true);
        try {
          const response = await fetch("/api/tech/stack");
          if (!response.ok) throw new Error("Network or server error");
          const stacksData: UserStack[] = await response.json();

          const hydratedStacks = stacksData.map((stack) => ({
            ...stack,
            technologies: hydrateTechnologies(stack.technologies || []),
          }));

          setUserStacks(hydratedStacks);

          if (activeStackId === null && hydratedStacks.length > 0) {
            setActiveStackId(hydratedStacks[0].id);
          } else if (hydratedStacks.length === 0) {
            setActiveStackId(null);
          }
        } catch (error) {
          toast.error("Unable to load your stacks.");
          setUserStacks([]);
          setActiveStackId(null);
        } finally {
          setIsLoadingInitialData(false);
        }
      } else if (!isPending && !sessionData) {
        setIsLoadingInitialData(false);
        setUserStacks([]);
        setActiveStackId(null);
      }
    };

    if (!isPending) {
      fetchUserStacks();
    }
  }, [isPending, sessionData, hydrateTechnologies]);

  const handleCreateNewStack = async (stackName: string) => {
    if (!sessionData?.user?.id) {
      toast.error("You must be logged in to create a stack.");
      return;
    }
    if (userStacks.length >= 5) {
      toast.error("Vous ne pouvez pas avoir plus de 5 stacks.");
      return;
    }
    try {
      const response = await fetch("/api/tech/stack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: stackName,
          technologies: [],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error while creating the stack");
      }
      const newStackData = await response.json();
      const hydratedNewStack: UserStack = {
        ...newStackData,
        technologies: hydrateTechnologies(newStackData.technologies || []),
      };

      setUserStacks((prevStacks) => [...prevStacks, hydratedNewStack]);
      setActiveStackId(hydratedNewStack.id);
      toast.success(`Stack '${hydratedNewStack.name}' created successfully!`);
    } catch (error) {
      toast.error((error as Error).message || "Unable to create the stack.");
    }
  };

  const handleDeleteStack = async (stackId: number) => {
    if (!sessionData?.user?.id) {
      toast.error("You must be logged in to delete a stack.");
      return;
    }
    setStackToDeleteId(stackId);
    setIsDeleteDialogOpen(true);
  };

  const confirmDeleteStack = async () => {
    if (stackToDeleteId === null) return;

    try {
      const response = await fetch(
        `/api/tech/stack?id=${stackToDeleteId}&stackId=true`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error while deleting the stack");
      }

      const updatedStacks = userStacks.filter(
        (stack) => stack.id !== stackToDeleteId
      );
      setUserStacks(updatedStacks);

      if (activeStackId === stackToDeleteId) {
        setActiveStackId(updatedStacks.length > 0 ? updatedStacks[0].id : null);
      }

      toast.success("Stack deleted successfully!");
    } catch (error) {
      toast.error((error as Error).message || "Unable to delete the stack.");
    } finally {
      setIsDeleteDialogOpen(false);
      setStackToDeleteId(null);
    }
  };

  const handleAddTech = async (newTechFromForm: Tech) => {
    if (!activeStack) {
      toast.error("Please select a stack to add a technology.");
      return;
    }

    const updatedTechnologies = [...activeStack.technologies, newTechFromForm];
    const updatedStack = { ...activeStack, technologies: updatedTechnologies };

    // Optimistic update (optionnel)
    setUserStacks((prevStacks) =>
      prevStacks.map((s) => (s.id === activeStackId ? updatedStack : s))
    );

    // Synchroniser avec la version serveur (pour avoir les bons ids)
    const savedStack = await saveActiveStack(updatedStack);
    if (savedStack) {
      setUserStacks((prevStacks) =>
        prevStacks.map((s) => (s.id === savedStack.id ? { ...savedStack } : s))
      );
    }
  };

  const handleRemoveTech = async (stackTechnologyItemId: string) => {
    if (!activeStack) return;
    try {
      const response = await fetch(
        `/api/tech/stack?id=${stackTechnologyItemId}`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error while deleting");
      }

      const updatedTechnologies = activeStack.technologies.filter(
        (tech) => tech.id !== stackTechnologyItemId
      );
      const updatedStack = {
        ...activeStack,
        technologies: updatedTechnologies,
      };
      setUserStacks((prevStacks) =>
        prevStacks.map((s) => (s.id === activeStackId ? updatedStack : s))
      );
      toast.success("Technology removed from the active stack!");
    } catch (error) {
      toast.error(
        (error as Error).message || "Unable to delete the technology."
      );
    }
  };

  const handleActiveStackNameChange = (newName: string) => {
    if (!activeStack) return;

    const updatedStack = { ...activeStack, name: newName };
    setUserStacks((prevStacks) =>
      prevStacks.map((s) => (s.id === activeStackId ? updatedStack : s))
    );
    saveActiveStack(updatedStack);
  };

  const handleProfileDescriptionChange = async (newDescription: string) => {
    setUserProfileDescription(newDescription);
    setIsEditingProfile(false);

    if (!sessionData?.user?.id) {
      toast.error("You must be logged in to save your description.");
      return;
    }

    try {
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: newDescription }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Error while saving the description."
        );
      }
      toast.success("Profile description saved!");
    } catch (error) {
      toast.error(
        (error as Error).message || "Unable to save the description."
      );
    }
  };

  const handleUpdateTech = (id: string, updates: Partial<Tech>) => {
    if (!activeStack) return;

    const updatedTechnologies = activeStack.technologies.map((tech) =>
      tech.id === id ? { ...tech, ...updates } : tech
    );
    const updatedStack = { ...activeStack, technologies: updatedTechnologies };

    console.log("[DEBUG] handleUpdateTech - id:", id, "updates:", updates);
    setUserStacks((prevStacks) =>
      prevStacks.map((s) => (s.id === activeStackId ? updatedStack : s))
    );

    // Si on met à jour les stars ou forks, on persiste
    if (
      typeof updates.stars !== "undefined" ||
      typeof updates.forks !== "undefined"
    ) {
      console.log(
        "[DEBUG] handleUpdateTech - saveActiveStack called with:",
        updatedStack
      );
      saveActiveStack(updatedStack);
    }
  };

  const handleReorderTechs = (reorderedTechs: Tech[]) => {
    if (!activeStack) return;

    const updatedStack = { ...activeStack, technologies: reorderedTechs };

    setUserStacks((prevStacks) =>
      prevStacks.map((s) => (s.id === activeStackId ? updatedStack : s))
    );
    saveActiveStack(updatedStack);
  };

  // Fonction pour charger manuellement la description de l'utilisateur
  const refreshUserProfileData = async () => {
    try {
      const response = await fetch("/api/user/profile");
      if (!response.ok) throw new Error("Failed to fetch user profile data");

      const userData = await response.json();

      if (userData.description) {
        setUserProfileDescription(userData.description);
        setEditingDescription(userData.description);
      }
    } catch (error) {
      // Silently fail
    }
  };

  // Charger la description au chargement initial
  useEffect(() => {
    if (sessionData?.user?.id) {
      refreshUserProfileData();
    }
  }, [sessionData?.user?.id]);

  // Nouveau composant ProfileHeader
  const ProfileHeader = () => (
    <div className="flex flex-col items-center justify-center pb-12 text-center pt-24">
      {sessionData?.user?.image && (
        <div className="relative w-28 h-28 mb-5 shadow-lg rounded-full">
          <Image
            src={sessionData.user.image}
            alt={sessionData.user.name || "Avatar utilisateur"}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">
        {sessionData?.user?.name || "Utilisateur anonyme"}
      </h1>
      {/* Vous pouvez ajouter une bio ou d'autres infos ici si disponibles */}
      {/* <p className="text-md text-[var(--muted-foreground)] mt-2">Bio de l'utilisateur...</p> */}
    </div>
  );

  // Composant StacksSelector modernisé
  const StacksSelector = () => {
    const [newStackName, setNewStackName] = useState("");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const openCreateModal = () => {
      if (isStackEditMode) return;
      setNewStackName("");
      setIsCreateModalOpen(true);
    };

    const closeCreateModal = () => {
      setIsCreateModalOpen(false);
    };

    useEffect(() => {
      if (isStackEditMode && isCreateModalOpen) {
        closeCreateModal();
      }
    }, [isStackEditMode, isCreateModalOpen]);

    const handleCreateAndClose = async () => {
      if (newStackName.trim()) {
        try {
          await handleCreateNewStack(newStackName.trim());
          closeCreateModal();
        } catch (error) {
          // L'erreur est gérée par le toast dans handleCreateNewStack
        }
      }
    };

    return (
      <>
        <div className="flex justify-end gap-4">
          <Button
            variant={isStackEditMode ? "secondary" : "outline"}
            onClick={() => setIsStackEditMode(!isStackEditMode)}
            className="text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
          >
            {isStackEditMode ? "Done Editing" : "Edit Grid"}
          </Button>

          {/* Carte pour créer une nouvelle stack */}
          {!isStackEditMode && (
            <button
              onClick={openCreateModal}
              className={`
            px-4 py-1 rounded-lg shadow-md transition-all duration-200 ease-in-out
            border-1 border-dashed border-[var(--muted-foreground)] text-[var(--muted-foreground)]
            flex flex-col items-center justify-center
            ${
              userStacks.length >= 5
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]"
            }
            `}
              disabled={userStacks.length >= 5 || isStackEditMode}
              title={
                userStacks.length >= 5
                  ? "Limite de 5 stacks atteinte"
                  : isStackEditMode
                  ? "Finish editing stacks to add a new one"
                  : ""
              }
            >
              <span className="text-sm cursor-pointer"> + New Grid</span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 px-4 py-4">
          {userStacks.map((stack) => (
            <div key={stack.id} className="relative group">
              {isStackEditMode ? (
                <div
                  className={`
                     px-3 py-1 rounded-lg border-1 flex items-center gap-2
                    text-[var(--foreground)] bg-[var(--card)] border-[var(--border)]
                    ${
                      activeStackId === stack.id
                        ? "border-[var(--primary)]/50 border-dashed bg-[var(--accent)]/70"
                        : ""
                    }
                  `}
                >
                  <span
                    onClick={() =>
                      !isStackEditMode && setActiveStackId(stack.id)
                    }
                    className={`${
                      !isStackEditMode ? "cursor-pointer" : "cursor-default"
                    } hover:text-[var(--primary)] transition-colors`}
                  >
                    {stack.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteStack(stack.id)}
                    className="p-0 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500/80 hover:text-red-500 transition-colors flex items-center justify-center cursor-pointer"
                    aria-label={`Delete stack ${stack.name}`}
                    style={{ width: "24px", height: "24px" }}
                  >
                    <XIcon size={14} />
                  </button>
                </div>
              ) : (
                <ContextMenu>
                  <ContextMenuTrigger asChild>
                    <button
                      onClick={() => setActiveStackId(stack.id)}
                      className={`
                        px-4 py-1 rounded-lg
                        border-1 
                        ${
                          activeStackId === stack.id
                            ? " text-[var(--foreground)] border-[var(--primary)]/30 border-dashed bg-[var(--accent)]/60"
                            : "hover:bg-[var(--accent)]/40 cursor-pointer"
                        }
                      `}
                    >
                      <span className="text-[var(--foreground)]">
                        {stack.name}
                      </span>
                    </button>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem
                      variant="destructive"
                      onClick={() => handleDeleteStack(stack.id)}
                      className="cursor-pointer"
                    >
                      Delete
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem
                      onClick={() => {
                        const newNamePrompt = prompt(
                          "New name for this grid:",
                          stack.name
                        );
                        if (
                          newNamePrompt &&
                          newNamePrompt.trim() &&
                          newNamePrompt !== stack.name
                        ) {
                          saveActiveStack?.({
                            ...stack,
                            name: newNamePrompt.trim(),
                          });
                        }
                      }}
                      className="cursor-pointer"
                    >
                      Rename
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              )}
            </div>
          ))}
        </div>

        {/* Modal pour créer une nouvelle stack */}
        {isCreateModalOpen && userStacks.length < 5 && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeCreateModal}
          >
            <div
              className="bg-[var(--card)] p-6 sm:p-8 rounded-xl mx-auto max-w-sm border border-[var(--border)]"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-6 text-center">
                Create a New Stack
              </h3>
              <input
                type="text"
                value={newStackName}
                onChange={(e) => setNewStackName(e.target.value)}
                placeholder="Enter stack name..."
                className="p-3 rounded-md bg-[var(--input)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] mb-6 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none"
                autoFocus
                onKeyPress={(e) => e.key === "Enter" && handleCreateAndClose()}
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleCreateAndClose}
                  className="w-full sm:flex-1 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 py-3 text-base"
                  disabled={!newStackName.trim()}
                >
                  Create
                </Button>
              </div>
            </div>
          </div>
        )}
        {isCreateModalOpen && userStacks.length >= 5 && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeCreateModal}
          >
            <div
              className="bg-[var(--card)] p-6 sm:p-8 rounded-xl mx-auto max-w-sm border border-[var(--border)] text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Limite atteinte
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4">
                Vous ne pouvez pas créer plus de 5 stacks.
              </p>
              <Button
                onClick={closeCreateModal}
                className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] mt-2"
              >
                Fermer
              </Button>
            </div>
          </div>
        )}
      </>
    );
  };

  const BentoGridSection = ({
    activeStack,
    technologies,
    isLoadingInitialData,
    handleAddTech,
    sessionUserId,
    handleRemoveTech,
    handleUpdateTech,
    handleReorderTechs,
    saveActiveStack,
  }: {
    activeStack: UserStack | undefined;
    technologies: Tech[];
    isLoadingInitialData: boolean;
    handleAddTech: (tech: Tech) => void;
    sessionUserId: string | undefined;
    handleRemoveTech: (id: string) => void;
    handleUpdateTech: (id: string, updates: Partial<Tech>) => void;
    handleReorderTechs: (reorderedTechs: Tech[]) => void;
    saveActiveStack?: (stack: UserStack) => Promise<any>;
  }) => {
    if (!sessionUserId) return null;
    // Limites de la grille
    const gridMax = { cols: 3, rows: 2 };
    // Limite à 5 lignes (3x5=15 emplacements max)
    // (On peut améliorer la logique pour empêcher le dépassement total si besoin)
    return (
      <>
        {activeStack && (
          <div
            className={`relative w-full bg-[var(--card)] p-4 rounded-lg border border-[var(--border)] h-full flex flex-col ${
              isPageEditMode || isResizeMode
                ? "border-2 border-dashed border-[var(--primary)]"
                : ""
            }`}
          >
            <GlowingEffect className="rounded-lg" />
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Your Bento Grid.
              </h2>
              <div className="flex gap-2">
                <Button
                  variant={isPageEditMode ? "secondary" : "outline"}
                  onClick={() => {
                    setIsPageEditMode(!isPageEditMode);
                    if (!isPageEditMode) setIsResizeMode(false);
                  }}
                  className="text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
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
                  className="text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                  disabled={isPageEditMode}
                >
                  {isResizeMode ? "Done Resizing" : "Resize"}
                </Button>
                <AddTechForm onAddTech={handleAddTech} userId={sessionUserId} />
              </div>
            </div>
            {technologies.length === 0 && !isLoadingInitialData && (
              <div className="text-center py-12 flex-grow flex flex-col justify-center items-center">
                <p className="text-[var(--muted-foreground)]">
                  No technology in the stack "{activeStack.name}".
                </p>
                <p className="text-[var(--muted-foreground)]">
                  Click "Add" to get started.
                </p>
              </div>
            )}
            {technologies.length > 0 &&
              !isLoadingInitialData &&
              (isPageEditMode ? (
                <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                  <SortableContext
                    items={orderedTechIds}
                    strategy={rectSortingStrategy}
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      // style={{ gridAutoRows: "150px" }} // COMMENTÉ POUR TEST
                    >
                      {orderedTechIds.map((id) => {
                        const tech = technologies.find((t) => t.id === id);
                        if (!tech) return null;
                        return (
                          <SortableTechCard
                            key={tech.id}
                            tech={tech}
                            isPageEditMode={true}
                            isResizeMode={false}
                            onRemoveTech={handleRemoveTech}
                            onUpdateTech={(id, updates) => {
                              handleUpdateTech(id, { ...updates });
                            }}
                            gridMax={gridMax}
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
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  // style={{ gridAutoRows: "150px" }} // COMMENTÉ POUR TEST
                >
                  {orderedTechIds.map((id) => {
                    const tech = technologies.find((t) => t.id === id);
                    if (!tech) return null;
                    return (
                      <SortableTechCard
                        key={tech.id}
                        tech={tech}
                        isPageEditMode={false}
                        isResizeMode={isResizeMode}
                        onRemoveTech={handleRemoveTech}
                        onUpdateTech={(id, updates) => {
                          handleUpdateTech(id, { ...updates });
                        }}
                        gridMax={gridMax}
                      />
                    );
                  })}
                </div>
              ))}
          </div>
        )}
        {!activeStack && !isLoadingInitialData && (
          <div className="text-center py-12 bg-[var(--card)] rounded-lg shadow h-full flex flex-col justify-center items-center">
            <p className="text-[var(--muted-foreground)]">
              Please select a stack to view its technologies or create a new
              one.
            </p>
          </div>
        )}
      </>
    );
  };

  if (isPending || isLoadingInitialData) {
    return <LoadingSkeleton />;
  }

  if (!sessionData?.user?.id) {
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

  return (
    <>
      {/* <Toaster position="bottom-right" richColors /> COMMENTED OUT */}
      <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] mx-auto max-w-4xl">
        <div className="flex-grow">
          <div className="mx-auto py-2 md:py-8 px-4 md:px-0">
            <ProfileHeader />
            <StacksSelector />
            <div className="mt-8">
              <BentoGridSection
                activeStack={activeStack}
                technologies={technologies}
                isLoadingInitialData={isLoadingInitialData}
                handleAddTech={handleAddTech}
                sessionUserId={sessionData?.user?.id}
                handleRemoveTech={handleRemoveTech}
                handleUpdateTech={handleUpdateTech}
                handleReorderTechs={handleReorderTechs}
                saveActiveStack={saveActiveStack}
              />
            </div>
          </div>
        </div>
        <AlertDialog
          open={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                stack and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsDeleteDialogOpen(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={confirmDeleteStack}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}
