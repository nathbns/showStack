"use client";
import { useState, useEffect, useCallback } from "react";
import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import TechStackGrid from "@/components/tech-stack/tech-stack-grid";
import { AddTechForm } from "@/components/tech-stack/add-tech-form";
import { Footer } from "@/components/ui/footer";
import { type Tech } from "@/components/tech-stack/tech-stack-grid";
import { toast } from "sonner";
import { allTechnologies } from "@/components/tech-stack/tech-data";
import Image from "next/image";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { TagManager } from "@/components/profile/tag-manager";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Créer un mapping des icônes à partir de allTechnologies pour un accès facile
const iconMap: Record<string, React.ReactNode> = {};
allTechnologies.forEach((tech) => {
  iconMap[tech.id.toLowerCase()] = tech.icon;
});

// Fonction pour obtenir l'icône par défaut si non trouvée dans le map
const getDefaultIcon = (name: string) => (
  <span className="flex items-center justify-center w-full h-full text-sm font-bold bg-[var(--muted)] text-[var(--muted-foreground)] rounded-sm">
    {name.charAt(0).toUpperCase()}
  </span>
);

// Interface pour une stack complète (détails + technologies)
export interface UserStack {
  id: number; // ID de la techStack
  name: string;
  technologies: Tech[];
  createdAt?: string;
  updatedAt?: string;
}

export default function Dashboard() {
  const { data: sessionData, isPending } = useSession();

  // Remplacer l'état unique par un tableau de stacks
  const [userStacks, setUserStacks] = useState<UserStack[]>([]);
  // ID de la stack actuellement sélectionnée pour édition
  const [activeStackId, setActiveStackId] = useState<number | null>(null);

  const [isLoadingInitialData, setIsLoadingInitialData] = useState(true);
  const [userProfileDescription, setUserProfileDescription] = useState("");
  const [newStackName, setNewStackName] = useState("");

  // États pour l'édition du profil
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editingDescription, setEditingDescription] = useState("");

  // Dériver la stack active à partir de userStacks et activeStackId
  const activeStack = userStacks.find((stack) => stack.id === activeStackId);
  // Dériver les technologies de la stack active
  const technologies = activeStack?.technologies || [];

  useEffect(() => {
    if (sessionData?.user) {
      // @ts-ignore
      const currentDesc = (sessionData.user as any).description || "";
      setUserProfileDescription(currentDesc);
      setEditingDescription(currentDesc); // Initialiser aussi la description en édition
    }
  }, [sessionData]);

  const hydrateTechnologies = useCallback((rawTechs: any[]): Tech[] => {
    console.log(
      "Dashboard hydrateTechnologies: Raw tech data for hydration:",
      JSON.parse(
        JSON.stringify(
          rawTechs.map((t) => ({ id: t.id, name: t.name, order: t.order }))
        )
      )
    );
    if (!rawTechs) return [];
    const hydrated = rawTechs.map((rawTech, index) => {
      let icon;
      let isProject = false;
      let favicon = undefined;
      let url = undefined;
      let description = undefined;

      if (rawTech.isProject && rawTech.favicon) {
        isProject = true;
        favicon = rawTech.favicon;
        url = rawTech.url;
        description = rawTech.description;
        icon = (
          <img
            src={rawTech.favicon}
            alt={rawTech.name}
            width={18}
            height={18}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        );
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
        order: rawTech.order !== undefined ? rawTech.order : index, // Fallback to index
        isProject: isProject,
        favicon: favicon,
        url: url,
        description: description,
      };
      console.log(
        `Dashboard hydrateTechnologies: Hydrated item (index ${index}):`,
        JSON.parse(
          JSON.stringify({
            id: techItem.id,
            name: techItem.name,
            order: techItem.order,
          })
        )
      );
      return techItem;
    });
    console.log(
      "Dashboard hydrateTechnologies: All hydrated technologies:",
      JSON.parse(
        JSON.stringify(
          hydrated.map((t) => ({ id: t.id, name: t.name, order: t.order }))
        )
      )
    );
    return hydrated;
  }, []);

  // Modifié pour sauvegarder la stack active
  const saveActiveStack = useCallback(
    async (stackToSave: UserStack) => {
      if (!sessionData?.user?.id) {
        toast.error("Vous devez être connecté pour sauvegarder.");
        return;
      }
      if (!stackToSave) {
        toast.error("Aucune stack active à sauvegarder.");
        return;
      }
      console.log(
        "Dashboard saveActiveStack: Stack being prepared for API:",
        JSON.parse(
          JSON.stringify(
            stackToSave.technologies.map((t) => ({
              id: t.id,
              name: t.name,
              order: t.order,
            }))
          )
        )
      );

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
                  (t) => t.id.toLowerCase() === tech.id.toLowerCase() // This seems problematic if tech.id is a DB id
                )?.id ||
                tech.id, // Fallback to tech.id if no match
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
            };
            console.log(
              `Dashboard saveActiveStack: Tech item (index ${index}) being sent to API:`,
              JSON.parse(
                JSON.stringify({
                  id: apiTechItem.id,
                  name: apiTechItem.name,
                  order: apiTechItem.order,
                  technologyId: apiTechItem.technologyId,
                })
              )
            );
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
          throw new Error(
            errorData.error || "Erreur lors de la sauvegarde de la stack"
          );
        }

        const savedStackData = await response.json();

        // Log pour le debug de la duplication
        console.log(
          "Dashboard saveActiveStack: Raw technologies from API response:",
          JSON.parse(
            JSON.stringify(
              savedStackData.technologies.map((t: any) => ({
                id: t.id,
                name: t.name,
                order: t.order,
              }))
            )
          )
        );
        const hydratedFromApi = hydrateTechnologies(
          savedStackData.technologies || []
        );
        console.log(
          "Dashboard saveActiveStack: Technologies hydrated from API:",
          JSON.parse(
            JSON.stringify(
              hydratedFromApi.map((t: Tech) => ({
                id: t.id,
                name: t.name,
                order: t.order,
              }))
            )
          )
        );

        // Mettre à jour la stack dans l'état userStacks
        setUserStacks((prevStacks) =>
          prevStacks.map((s) =>
            s.id === savedStackData.id
              ? {
                  ...savedStackData,
                  technologies: hydratedFromApi,
                }
              : s
          )
        );
        if (activeStackId === null && savedStackData.id) {
          setActiveStackId(savedStackData.id);
        }
        toast.success(
          `Stack '${savedStackData.name}' sauvegardée avec succès!`
        );
      } catch (error) {
        console.error("Erreur sauvegarde stack:", error);
        toast.error(
          (error as Error).message || "Impossible de sauvegarder la stack."
        );
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
          if (!response.ok) throw new Error("Erreur réseau ou serveur");
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
          console.error("Erreur chargement des stacks:", error);
          toast.error("Impossible de charger vos stacks.");
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
      toast.error("Vous devez être connecté pour créer une stack.");
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
        throw new Error(
          errorData.error || "Erreur lors de la création de la stack"
        );
      }
      const newStackData = await response.json();
      const hydratedNewStack: UserStack = {
        ...newStackData,
        technologies: hydrateTechnologies(newStackData.technologies || []),
      };

      setUserStacks((prevStacks) => [...prevStacks, hydratedNewStack]);
      setActiveStackId(hydratedNewStack.id);
      toast.success(`Stack '${hydratedNewStack.name}' créée avec succès!`);
    } catch (error) {
      console.error("Erreur création stack:", error);
      toast.error((error as Error).message || "Impossible de créer la stack.");
    }
  };

  const handleDeleteStack = async (stackId: number) => {
    if (!sessionData?.user?.id) {
      toast.error("Vous devez être connecté pour supprimer une stack.");
      return;
    }

    if (
      !confirm(
        "Êtes-vous sûr de vouloir supprimer cette stack? Cette action est irréversible."
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `/api/tech/stack?id=${stackId}&stackId=true`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Erreur lors de la suppression de la stack"
        );
      }

      // Mettre à jour l'état local
      const updatedStacks = userStacks.filter((stack) => stack.id !== stackId);
      setUserStacks(updatedStacks);

      // Si la stack supprimée était la stack active, on sélectionne la première stack disponible ou null
      if (activeStackId === stackId) {
        setActiveStackId(updatedStacks.length > 0 ? updatedStacks[0].id : null);
      }

      toast.success("Stack supprimée avec succès!");
    } catch (error) {
      console.error("Erreur suppression stack:", error);
      toast.error(
        (error as Error).message || "Impossible de supprimer la stack."
      );
    }
  };

  const handleAddTech = (newTechFromForm: Tech) => {
    if (!activeStack) {
      toast.error(
        "Veuillez sélectionner une stack pour y ajouter une technologie."
      );
      return;
    }

    // Vérifier si c'est un projet avec un favicon
    const isProject = (newTechFromForm as any).isProject;
    const favicon = (newTechFromForm as any).favicon;

    const updatedTechnologies = [...activeStack.technologies, newTechFromForm];
    const updatedStack = { ...activeStack, technologies: updatedTechnologies };

    setUserStacks((prevStacks) =>
      prevStacks.map((s) => (s.id === activeStackId ? updatedStack : s))
    );
    saveActiveStack(updatedStack); // Sauvegarder la stack active modifiée
  };

  const handleRemoveTech = async (stackTechnologyItemId: string) => {
    if (!activeStack) return;
    // La suppression se fait via API qui utilise l'ID de stackTechnologyItem
    try {
      const response = await fetch(
        `/api/tech/stack?id=${stackTechnologyItemId}`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erreur lors de la suppression");
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
      // Pas besoin de saveActiveStack ici si l'API a déjà fait la modif persistante et que la suppression affecte globalement stackTechnologyItem
      toast.success("Technologie supprimée de la stack active!");
    } catch (error) {
      console.error("Erreur suppression tech:", error);
      toast.error(
        (error as Error).message || "Impossible de supprimer la technologie."
      );
    }
  };

  // Gère les changements de nom de la stack ACTIVE
  const handleActiveStackNameChange = (newName: string) => {
    if (!activeStack) return;

    const updatedStack = { ...activeStack, name: newName };
    setUserStacks((prevStacks) =>
      prevStacks.map((s) => (s.id === activeStackId ? updatedStack : s))
    );
    saveActiveStack(updatedStack);
  };

  const handleProfileDescriptionChange = async (newDescription: string) => {
    // Mise à jour optimiste de l'UI principale
    setUserProfileDescription(newDescription);
    // Quitter le mode édition après sauvegarde
    setIsEditingProfile(false);

    if (!sessionData?.user?.id) {
      toast.error(
        "Vous devez être connecté pour sauvegarder votre description."
      );
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
          errorData.error || "Erreur lors de la sauvegarde de la description."
        );
      }
      toast.success("Description du profil sauvegardée !");
      // Optionnel: rafraîchir les données de session si la description y est stockée et que useSession ne le fait pas automatiquement
      // Par exemple: refetchSession(); ou une logique similaire si votre hook useSession le permet
    } catch (error) {
      console.error("Erreur sauvegarde description profil:", error);
      toast.error(
        (error as Error).message || "Impossible de sauvegarder la description."
      );
      // Rollback optimiste si nécessaire, ou re-fetch des données utilisateur
    }
  };

  const handleUpdateTech = (id: string, updates: Partial<Tech>) => {
    if (!activeStack) return;

    const updatedTechnologies = activeStack.technologies.map((tech) =>
      tech.id === id ? { ...tech, ...updates } : tech
    );
    const updatedStack = { ...activeStack, technologies: updatedTechnologies };

    setUserStacks((prevStacks) =>
      prevStacks.map((s) => (s.id === activeStackId ? updatedStack : s))
    );
    saveActiveStack(updatedStack);
  };

  const handleReorderTechs = (reorderedTechs: Tech[]) => {
    console.log(
      "Dashboard handleReorderTechs: Technologies received with new order:",
      JSON.parse(
        JSON.stringify(
          reorderedTechs.map((t: Tech) => ({
            id: t.id,
            name: t.name,
            order: t.order,
          }))
        )
      )
    );
    if (!activeStack) {
      console.error("Dashboard handleReorderTechs: No active stack!");
      return;
    }

    const updatedStack = { ...activeStack, technologies: reorderedTechs };
    console.log(
      "Dashboard handleReorderTechs: Updated stack to be saved (structure for saveActiveStack):",
      JSON.parse(
        JSON.stringify(
          updatedStack.technologies.map((t: Tech) => ({
            id: t.id,
            name: t.name,
            order: t.order,
          }))
        )
      )
    );

    setUserStacks((prevStacks) => {
      const newStacks = prevStacks.map((s) =>
        s.id === activeStackId ? updatedStack : s
      );
      console.log(
        "Dashboard handleReorderTechs: setUserStacks called with (showing only active stack technologies for brevity if active):"
      );
      const activeStackInNew = newStacks.find((s) => s.id === activeStackId);
      if (activeStackInNew) {
        console.log(
          JSON.parse(
            JSON.stringify(
              activeStackInNew.technologies.map((t: Tech) => ({
                id: t.id,
                name: t.name,
                order: t.order,
              }))
            )
          )
        );
      } else {
        console.log(
          "Active stack not found in newStacks after reorder update."
        );
      }
      return newStacks;
    });
    saveActiveStack(updatedStack);
  };

  if (isPending || isLoadingInitialData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        Chargement de votre dashboard...
      </div>
    );
  }

  if (!sessionData?.user?.id) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <p className="text-xl mb-4">
          Veuillez vous connecter pour accéder à votre dashboard.
        </p>
        <Button
          onClick={() => (window.location.href = "/auth/signin")}
          className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
        >
          Se connecter
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] mx-auto max-w-4xl">
      <div className="flex-grow">
        <div className="mx-auto py-8">
          <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="relative lg:col-span-1 bg-[var(--card)] p-6 rounded-lg border border-[var(--border)] flex flex-col gap-6">
              <GlowingEffect className="rounded-lg" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-[var(--card-foreground)]">
                  Mon Profil
                </h2>
                {sessionData?.user?.image && (
                  <div className="mb-4 relative w-32 h-32 mx-auto">
                    <Image
                      src={sessionData.user.image}
                      alt={sessionData.user.name || "Avatar de l'utilisateur"}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                )}
                <h3 className="text-xl font-medium text-center text-[var(--card-foreground)] mb-1">
                  {sessionData?.user?.name || "Utilisateur Anonyme"}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] text-center mb-4">
                  {sessionData?.user?.email}
                </p>
              </div>

              <div className="mt-0">
                {!isEditingProfile ? (
                  <div>
                    <h4 className="text-md font-semibold text-[var(--card-foreground)] mb-1">
                      Ma description
                    </h4>
                    <p
                      className={`text-sm text-[var(--muted-foreground)] whitespace-pre-wrap min-h-[60px] ${
                        !userProfileDescription && "italic"
                      }`}
                    >
                      {userProfileDescription ||
                        "Aucune description pour le moment."}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                      onClick={() => {
                        setEditingDescription(userProfileDescription); // Synchroniser avant d'éditer
                        setIsEditingProfile(true);
                      }}
                    >
                      Modifier la description
                    </Button>
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor="profileDescriptionTextarea"
                      className="block text-sm font-medium text-[var(--muted-foreground)] mb-1"
                    >
                      Modifier ma description
                    </label>
                    <textarea
                      id="profileDescriptionTextarea"
                      value={editingDescription}
                      onChange={(e) => setEditingDescription(e.target.value)}
                      rows={4}
                      className="w-full p-2 rounded bg-[var(--input)] border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                      placeholder="Présentez-vous en quelques mots..."
                    />
                    <div className="mt-2 flex gap-2">
                      <Button
                        size="sm"
                        onClick={() =>
                          handleProfileDescriptionChange(editingDescription)
                        }
                        className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
                      >
                        Enregistrer
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditingProfile(false)}
                        className="text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                      >
                        Annuler
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {!isEditingProfile && sessionData?.user?.id && (
                <div className="mt-0">
                  <h4 className="text-md font-semibold text-[var(--card-foreground)] mb-2">
                    Tags
                  </h4>
                  <TagManager userId={sessionData.user.id} />
                </div>
              )}
            </div>

            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="relative bg-[var(--card)] p-4 rounded-lg border border-[var(--border)]">
                <GlowingEffect className="rounded-lg" />
                <h3 className="text-xl font-semibold mb-3 text-[var(--card-foreground)]">
                  Mes Stacks
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {userStacks.map((stack) => (
                    <div key={stack.id} className="flex items-center">
                      <ContextMenu>
                        <ContextMenuTrigger>
                          <Button
                            variant={
                              activeStackId === stack.id ? "default" : "outline"
                            }
                            onClick={() => setActiveStackId(stack.id)}
                            className={
                              activeStackId !== stack.id
                                ? "text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                                : ""
                            }
                          >
                            {stack.name}
                          </Button>
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                          <ContextMenuItem
                            variant="destructive"
                            onClick={() => handleDeleteStack(stack.id)}
                          >
                            Supprimer
                          </ContextMenuItem>
                          <ContextMenuSeparator />
                          <ContextMenuItem
                            onClick={() => {
                              // Ouvrir un prompt pour renommer la stack
                              const newName = prompt(
                                "Nouveau nom pour cette stack:",
                                stack.name
                              );
                              if (
                                newName &&
                                newName.trim() &&
                                newName !== stack.name
                              ) {
                                const updatedStack = {
                                  ...stack,
                                  name: newName,
                                };
                                setUserStacks((prevStacks) =>
                                  prevStacks.map((s) =>
                                    s.id === stack.id ? updatedStack : s
                                  )
                                );
                                saveActiveStack(updatedStack);
                              }
                            }}
                          >
                            Renommer
                          </ContextMenuItem>
                        </ContextMenuContent>
                      </ContextMenu>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={newStackName}
                    onChange={(e) => setNewStackName(e.target.value)}
                    placeholder="Nom de la nouvelle stack..."
                    className="flex-grow p-2 rounded bg-[var(--input)] border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                  />
                  <Button
                    onClick={() => {
                      if (newStackName.trim()) {
                        handleCreateNewStack(newStackName.trim());
                        setNewStackName("");
                      }
                    }}
                    className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
                  >
                    Créer Stack
                  </Button>
                </div>
                {userStacks.length === 0 && !isLoadingInitialData && (
                  <p className="text-[var(--muted-foreground)] mt-2 text-sm">
                    Aucune stack pour le moment. Créez-en une !
                  </p>
                )}
              </div>

              {activeStack && (
                <div className="relative w-full bg-[var(--card)] p-4 rounded-lg border border-[var(--border)]">
                  <GlowingEffect className="rounded-lg" />
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-[var(--foreground)]">
                      Your Bento Grig.
                    </h2>
                    <AddTechForm
                      onAddTech={handleAddTech}
                      userId={sessionData.user.id}
                    />
                  </div>

                  {technologies.length === 0 && !isLoadingInitialData && (
                    <div className="text-center py-12">
                      <p className="text-[var(--muted-foreground)]">
                        Aucune technologie dans la stack "{activeStack.name}".
                      </p>
                      <p className="text-[var(--muted-foreground)]">
                        Cliquez sur "Ajouter" pour commencer.
                      </p>
                    </div>
                  )}

                  {technologies.length > 0 && !isLoadingInitialData && (
                    <TechStackGrid
                      technologies={technologies}
                      onRemoveTech={handleRemoveTech}
                      onUpdateTech={handleUpdateTech}
                      onReorderTechs={handleReorderTechs}
                    />
                  )}
                </div>
              )}

              {!activeStack &&
                !isLoadingInitialData &&
                userStacks.length > 0 && (
                  <div className="text-center py-12 bg-[var(--card)] rounded-lg shadow">
                    <p className="text-[var(--muted-foreground)]">
                      Veuillez sélectionner une stack pour voir ses
                      technologies.
                    </p>
                  </div>
                )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
