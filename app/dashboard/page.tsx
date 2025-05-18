"use client";
import { useState, useEffect, useCallback } from "react";
import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import TechStackGrid from "@/components/tech-stack/tech-stack-grid";
import { AddTechForm } from "@/components/tech-stack/add-tech-form";
import { type Tech } from "@/components/tech-stack/tech-stack-grid";
import { toast } from "sonner";
import { allTechnologies } from "@/components/tech-stack/tech-data";
import Image from "next/image";
import { ExternalLink, GripVertical, Edit3, CheckSquare } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { TagManager } from "@/components/profile/tag-manager";
import { GlowingEffect } from "@/components/ui/glowing-effect";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  useDraggable,
  useDroppable,
  DragOverlay,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

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

// Interface for a complete stack (details + technologies)
export interface UserStack {
  id: number; // techStack ID
  name: string;
  technologies: Tech[];
  createdAt?: string;
  updatedAt?: string;
}

// Types pour les sections déplaçables et le layout simplifié
type DraggableSectionId = "profile" | "stacks";
type DroppableZoneId = "zoneLeft" | "zoneTopRight";

interface DashboardSectionDefinition {
  id: DraggableSectionId;
  title: string;
}

// Uniquement les sections déplaçables
const DRAGGABLE_SECTIONS: Record<
  DraggableSectionId,
  DashboardSectionDefinition
> = {
  profile: { id: "profile", title: "My Profile" },
  stacks: { id: "stacks", title: "My Stacks" },
};

interface DashboardLayout {
  zoneLeft: DraggableSectionId;
  zoneTopRight: DraggableSectionId;
  // zoneBottomRight est implicitement pour "bento"
}

function DraggableDashboardSection({
  sectionId,
  children,
  isPageEditMode,
}: {
  sectionId: DraggableSectionId;
  children: React.ReactNode;
  isPageEditMode: boolean;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: sectionId,
    disabled: !isPageEditMode,
  });

  const style = {
    zIndex: isDragging ? 100 : undefined,
    opacity: isDragging ? 0.75 : 1,
    height: "100%",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(isPageEditMode ? attributes : {})}
      className="relative h-full"
    >
      {isPageEditMode && (
        <button
          {...listeners}
          className="absolute top-2 right-2 p-1 cursor-grab active:cursor-grabbing opacity-60 hover:opacity-100 z-20 bg-background/50 rounded-sm"
        >
          <GripVertical size={20} />
        </button>
      )}
      {children}
    </div>
  );
}

function DroppableZone({
  zoneId,
  children,
  className,
}: {
  zoneId: DroppableZoneId;
  children: React.ReactNode;
  className?: string;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: zoneId });
  return (
    <div
      ref={setNodeRef}
      className={`p-1 border-2 border-dashed rounded-lg ${className || ""} ${
        isOver
          ? "border-[var(--primary)] bg-[var(--primary)]/10"
          : "border-transparent"
      } flex flex-col`}
      style={{ minHeight: "150px" }}
    >
      {children}
    </div>
  );
}

export default function Dashboard() {
  const { data: sessionData, isPending } = useSession();
  const [userStacks, setUserStacks] = useState<UserStack[]>([]);
  const [activeStackId, setActiveStackId] = useState<number | null>(null);
  const [isLoadingInitialData, setIsLoadingInitialData] = useState(true);
  const [userProfileDescription, setUserProfileDescription] = useState("");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editingDescription, setEditingDescription] = useState("");

  // Déclaration de isPageEditMode AVANT son utilisation dans les handlers
  const [isPageEditMode, setIsPageEditMode] = useState(false);

  const activeStack = userStacks.find((stack) => stack.id === activeStackId);
  const technologies = activeStack?.technologies || [];

  const [layout, setLayout] = useState<DashboardLayout>(() => {
    const savedLayout =
      typeof window !== "undefined"
        ? localStorage.getItem("dashboardFixedBentoLayout")
        : null;
    if (savedLayout) {
      try {
        const parsed = JSON.parse(savedLayout);
        if (
          parsed.zoneLeft &&
          parsed.zoneTopRight &&
          (parsed.zoneLeft === "profile" || parsed.zoneLeft === "stacks") &&
          (parsed.zoneTopRight === "profile" ||
            parsed.zoneTopRight === "stacks") &&
          parsed.zoneLeft !== parsed.zoneTopRight
        ) {
          return parsed as DashboardLayout;
        }
      } catch (e) {
        console.error("Failed to parse layout from localStorage", e);
      }
    }
    return { zoneLeft: "profile", zoneTopRight: "stacks" };
  });

  const [activeDragId, setActiveDragId] = useState<DraggableSectionId | null>(
    null
  );
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (event: DragEndEvent) => {
    if (!isPageEditMode) return; // Vérification ici
    setActiveDragId(event.active.id as DraggableSectionId);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (!isPageEditMode) return; // Vérification ici
    setActiveDragId(null);
    const { active, over } = event;
    if (!over || !active || active.id === over.id) return;
    const activeItemId = active.id as DraggableSectionId;
    const targetZoneId = over.id as DroppableZoneId;
    setLayout((prevLayout) => {
      if (
        (activeItemId === prevLayout.zoneLeft &&
          targetZoneId === "zoneTopRight") ||
        (activeItemId === prevLayout.zoneTopRight &&
          targetZoneId === "zoneLeft")
      ) {
        return {
          zoneLeft: prevLayout.zoneTopRight,
          zoneTopRight: prevLayout.zoneLeft,
        };
      }
      return prevLayout;
    });
  };

  useEffect(() => {
    if (isPageEditMode) {
      // Sauvegarde conditionnelle dans le localStorage
      localStorage.setItem("dashboardFixedBentoLayout", JSON.stringify(layout));
    }
    // Sauvegarde côté serveur (API)
    if (sessionData?.user?.id) {
      fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          layoutConfig: JSON.stringify({ zoneLeft: layout.zoneLeft }),
        }),
      });
    }
  }, [layout, isPageEditMode, sessionData?.user?.id]);

  useEffect(() => {
    if (sessionData?.user) {
      const currentDesc = (sessionData.user as any).description || "";
      setUserProfileDescription(currentDesc);
      setEditingDescription(currentDesc);
    }
  }, [sessionData]);

  const hydrateTechnologies = useCallback((rawTechs: any[]): Tech[] => {
    if (!rawTechs) return [];
    const hydrated = rawTechs.map((rawTech, index) => {
      let icon;
      let isProject = false;
      let favicon = undefined;
      let url = undefined;
      let description = undefined;

      if (rawTech.isProject) {
        isProject = true;
        url = rawTech.url;
        description = rawTech.description;
        favicon = rawTech.favicon;

        if (rawTech.favicon) {
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
        return;
      }
      if (!stackToSave) {
        toast.error("No active stack to save.");
        return;
      }

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
        toast.success(`Stack '${savedStackData.name}' saved successfully!`);
      } catch (error) {
        toast.error((error as Error).message || "Unable to save the stack.");
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

    if (
      !confirm(
        "Are you sure you want to delete this stack? This action is irreversible."
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
        throw new Error(errorData.error || "Error while deleting the stack");
      }

      const updatedStacks = userStacks.filter((stack) => stack.id !== stackId);
      setUserStacks(updatedStacks);

      if (activeStackId === stackId) {
        setActiveStackId(updatedStacks.length > 0 ? updatedStacks[0].id : null);
      }

      toast.success("Stack deleted successfully!");
    } catch (error) {
      toast.error((error as Error).message || "Unable to delete the stack.");
    }
  };

  const handleAddTech = (newTechFromForm: Tech) => {
    if (!activeStack) {
      toast.error("Please select a stack to add a technology.");
      return;
    }

    const updatedTechnologies = [...activeStack.technologies, newTechFromForm];
    const updatedStack = { ...activeStack, technologies: updatedTechnologies };

    setUserStacks((prevStacks) =>
      prevStacks.map((s) => (s.id === activeStackId ? updatedStack : s))
    );
    saveActiveStack(updatedStack);
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

    setUserStacks((prevStacks) =>
      prevStacks.map((s) => (s.id === activeStackId ? updatedStack : s))
    );
    saveActiveStack(updatedStack);
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

  // --- Composants de Section (contenu réel) ---
  const ProfileSection = ({
    currentSessionData,
    isEditing,
    setIsEditing,
    currentDescription,
    editingDesc,
    setEditingDesc,
    onDescriptionChange,
  }: {
    currentSessionData: typeof sessionData;
    isEditing: boolean;
    setIsEditing: (val: boolean) => void;
    currentDescription: string;
    editingDesc: string;
    setEditingDesc: (val: string) => void;
    onDescriptionChange: (newDesc: string) => void;
  }) => (
    <div className="relative bg-[var(--card)] p-6 rounded-lg border-1 border-[var(--border)] flex flex-col gap-6 h-full">
      <GlowingEffect className="rounded-lg" />
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-[var(--card-foreground)]">
          My Profile
        </h2>
        {currentSessionData?.user?.image && (
          <div className="mb-4 relative w-32 h-32 mx-auto">
            <Image
              src={currentSessionData.user.image}
              alt={currentSessionData.user.name || "User avatar"}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        )}
        <h3 className="text-xl font-medium text-center text-[var(--card-foreground)] mb-1">
          {currentSessionData?.user?.name || "Anonymous User"}
        </h3>
        <p className="text-sm text-[var(--muted-foreground)] text-center mb-4">
          {currentSessionData?.user?.email}
        </p>
      </div>

      <div className="mt-0">
        {!isEditing ? (
          <div>
            <h4 className="text-md font-semibold text-[var(--card-foreground)] mb-1">
              My description
            </h4>
            <p
              className={`text-sm text-[var(--muted-foreground)] whitespace-pre-wrap min-h-[60px] ${
                !currentDescription && "italic"
              }`}
            >
              {currentDescription || "No description yet."}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
              onClick={() => {
                setEditingDesc(currentDescription);
                setIsEditing(true);
              }}
            >
              Edit description
            </Button>
          </div>
        ) : (
          <div>
            <label
              htmlFor="profileDescriptionTextarea"
              className="block text-sm font-medium text-[var(--muted-foreground)] mb-1"
            >
              Edit my description
            </label>
            <textarea
              id="profileDescriptionTextarea"
              value={editingDesc}
              onChange={(e) => setEditingDesc(e.target.value)}
              rows={4}
              className="w-full p-2 rounded bg-[var(--input)] border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
              placeholder="Introduce yourself in a few words..."
            />
            <div className="mt-2 flex gap-2">
              <Button
                size="sm"
                onClick={() => onDescriptionChange(editingDesc)}
                className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
              >
                Save
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(false)}
                className="text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      {!isEditing && currentSessionData?.user?.id && (
        <div className="mt-0">
          <TagManager userId={currentSessionData.user.id} />
        </div>
      )}

      {!isEditing && currentSessionData?.user?.id && (
        <div className="mt-auto pt-6">
          <Button
            variant="destructive"
            size="sm"
            onClick={async () => {
              if (
                confirm(
                  "Are you sure you want to delete your account? This action is irreversible and all your data will be lost."
                )
              ) {
                try {
                  const response = await fetch("/api/user/delete", {
                    method: "DELETE",
                  });
                  if (response.ok) {
                    toast.success(
                      "Account deleted successfully. Redirecting..."
                    );
                    // Déconnecter l'utilisateur et le rediriger
                    // Idéalement, utilisez une fonction de déconnexion de better-auth/react si disponible
                    // ou s'assurer que le cookie est effacé par le serveur et rediriger.
                    // authClient.signOut() ou similaire
                    window.location.href = "/"; // Redirection vers la page d'accueil
                  } else {
                    const errorData = await response.json();
                    toast.error(errorData.error || "Failed to delete account.");
                  }
                } catch (error) {
                  console.error("Error calling delete account API:", error);
                  toast.error("An error occurred while deleting the account.");
                }
              }
            }}
            className="w-full"
          >
            Delete My Account
          </Button>
        </div>
      )}
    </div>
  );

  const StacksSection = ({
    userStacks,
    activeStackId,
    handleCreateNewStack,
    setActiveStackId,
    handleDeleteStack,
    saveActiveStack,
  }: {
    userStacks: UserStack[];
    activeStackId: number | null;
    handleCreateNewStack: (name: string) => Promise<void>;
    setActiveStackId: (id: number | null) => void;
    handleDeleteStack: (id: number) => void;
    saveActiveStack: (stack: UserStack) => void;
  }) => {
    const [inputValue, setInputValue] = useState("");

    return (
      <div className="relative bg-[var(--card)] p-4 rounded-lg border border-[var(--border)] flex flex-col h-full">
        <GlowingEffect className="rounded-lg" />
        <h3 className="text-xl font-semibold mb-3 text-[var(--card-foreground)]">
          My Stacks
        </h3>
        <div className="flex-grow mb-4">
          {userStacks.length > 0 ? (
            <div className="flex flex-wrap gap-2" style={{ minHeight: "80px" }}>
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
                        Delete
                      </ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem
                        onClick={() => {
                          const newNamePrompt = prompt(
                            "New name for this stack:",
                            stack.name
                          );
                          if (
                            newNamePrompt &&
                            newNamePrompt.trim() &&
                            newNamePrompt !== stack.name
                          ) {
                            saveActiveStack({
                              ...stack,
                              name: newNamePrompt.trim(),
                            });
                          }
                        }}
                      >
                        Rename
                      </ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-[var(--muted-foreground)] text-sm">
                No stacks yet. Create one to get started!
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="New stack name..."
            className="w-full sm:flex-grow p-2 rounded bg-[var(--input)] border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
          />
          <Button
            onClick={async () => {
              if (inputValue.trim()) {
                try {
                  await handleCreateNewStack(inputValue.trim());
                  setInputValue("");
                } catch (error) {
                  // L'erreur est gérée par le toast dans handleCreateNewStack du parent
                  // L'input n'est pas vidé pour permettre la correction
                }
              }
            }}
            className="w-full sm:w-auto bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
          >
            Create Stack
          </Button>
        </div>
      </div>
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
  }: {
    activeStack: UserStack | undefined;
    technologies: Tech[];
    isLoadingInitialData: boolean;
    handleAddTech: (tech: Tech) => void;
    sessionUserId: string | undefined;
    handleRemoveTech: (id: string) => void;
    handleUpdateTech: (id: string, updates: Partial<Tech>) => void;
    handleReorderTechs: (reorderedTechs: Tech[]) => void;
  }) => {
    if (!sessionUserId) return null; // Garde pour sessionUserId
    return (
      <>
        {activeStack && (
          <div className="relative w-full bg-[var(--card)] p-4 rounded-lg border border-[var(--border)] h-full flex flex-col">
            <GlowingEffect className="rounded-lg" />
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Your Bento Grid.
              </h2>
              <AddTechForm onAddTech={handleAddTech} userId={sessionUserId} />
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

            {technologies.length > 0 && !isLoadingInitialData && (
              <div className="flex-grow overflow-auto">
                <TechStackGrid
                  technologies={technologies}
                  onRemoveTech={handleRemoveTech}
                  onUpdateTech={handleUpdateTech}
                  onReorderTechs={handleReorderTechs}
                />
              </div>
            )}
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

  // Fonction pour rendre le contenu de la section (pour DragOverlay et sections)
  const renderSectionContent = (sectionId: DraggableSectionId | null) => {
    if (!sectionId) return null;
    switch (sectionId) {
      case "profile":
        return (
          <ProfileSection
            currentSessionData={sessionData}
            isEditing={isEditingProfile}
            setIsEditing={setIsEditingProfile}
            currentDescription={userProfileDescription}
            editingDesc={editingDescription}
            setEditingDesc={setEditingDescription}
            onDescriptionChange={handleProfileDescriptionChange}
          />
        );
      case "stacks":
        return (
          <StacksSection
            userStacks={userStacks}
            activeStackId={activeStackId}
            handleCreateNewStack={handleCreateNewStack}
            setActiveStackId={setActiveStackId}
            handleDeleteStack={handleDeleteStack}
            saveActiveStack={saveActiveStack}
          />
        );
      default:
        return null;
    }
  };

  let mainContent;
  if (layout.zoneLeft === "profile") {
    // Configuration: Profile à gauche, Stacks & Bento à droite
    mainContent = (
      <main
        className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch ${
          isPageEditMode
            ? "outline-dashed outline-2 outline-[var(--primary)] p-2 rounded-lg"
            : ""
        }`}
      >
        <DroppableZone
          zoneId="zoneLeft"
          className="lg:col-span-1 h-full flex flex-col"
        >
          <DraggableDashboardSection
            sectionId="profile"
            isPageEditMode={isPageEditMode}
          >
            {renderSectionContent("profile")}
          </DraggableDashboardSection>
        </DroppableZone>
        <div className="lg:col-span-2 flex flex-col gap-8">
          <DroppableZone
            zoneId="zoneTopRight"
            className="flex flex-col flex-grow h-full"
          >
            <DraggableDashboardSection
              sectionId="stacks"
              isPageEditMode={isPageEditMode}
            >
              {renderSectionContent("stacks")}
            </DraggableDashboardSection>
          </DroppableZone>
          <div className="relative w-full bg-[var(--card)] p-4 rounded-lg border border-[var(--border)]">
            <BentoGridSection
              activeStack={activeStack}
              technologies={technologies}
              isLoadingInitialData={isLoadingInitialData}
              handleAddTech={handleAddTech}
              sessionUserId={sessionData?.user?.id}
              handleRemoveTech={handleRemoveTech}
              handleUpdateTech={handleUpdateTech}
              handleReorderTechs={handleReorderTechs}
            />
          </div>
        </div>
      </main>
    );
  } else {
    // layout.zoneLeft === "stacks"
    // Configuration: Stacks à gauche, Profile à droite HAUT, Bento en bas PLEINE LARGEUR
    mainContent = (
      <main
        className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch ${
          isPageEditMode
            ? "outline-dashed outline-2 outline-[var(--primary)] p-2 rounded-lg"
            : ""
        }`}
      >
        <div className="lg:col-span-1 flex flex-col">
          <DroppableZone zoneId="zoneLeft" className="h-full flex flex-col">
            <DraggableDashboardSection
              sectionId="stacks"
              isPageEditMode={isPageEditMode}
            >
              {renderSectionContent("stacks")}
            </DraggableDashboardSection>
          </DroppableZone>
        </div>
        <div className="lg:col-span-2 flex flex-col">
          <DroppableZone zoneId="zoneTopRight" className="h-full flex flex-col">
            <DraggableDashboardSection
              sectionId="profile"
              isPageEditMode={isPageEditMode}
            >
              {renderSectionContent("profile")}
            </DraggableDashboardSection>
          </DroppableZone>
        </div>
        <div className="lg:col-span-3">
          <div className="relative w-full bg-[var(--card)] p-4 rounded-lg border border-[var(--border)] min-h-[50vh]">
            <BentoGridSection
              activeStack={activeStack}
              technologies={technologies}
              isLoadingInitialData={isLoadingInitialData}
              handleAddTech={handleAddTech}
              sessionUserId={sessionData?.user?.id}
              handleRemoveTech={handleRemoveTech}
              handleUpdateTech={handleUpdateTech}
              handleReorderTechs={handleReorderTechs}
            />
          </div>
        </div>
      </main>
    );
  }

  if (isPending || isLoadingInitialData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        Loading your dashboard...
      </div>
    );
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
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] mx-auto max-w-4xl">
        <div className="flex-grow">
          <div className="py-4 px-4 md:px-0 flex justify-end">
            <Button
              variant="outline"
              onClick={() => setIsPageEditMode(!isPageEditMode)}
              className="hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
            >
              {isPageEditMode ? (
                <CheckSquare size={18} className="mr-2" />
              ) : (
                <Edit3 size={18} className="mr-2" />
              )}
              {isPageEditMode ? "Done Editing" : "Edit Layout"}
            </Button>
          </div>

          <div className="mx-auto py-2 md:py-8 px-4 md:px-0">{mainContent}</div>
        </div>
      </div>
      <DragOverlay>
        {activeDragId && isPageEditMode ? (
          <div className="bg-[var(--card)] p-4 rounded-lg border border-[var(--border)] opacity-90 shadow-2xl cursor-grabbing">
            {renderSectionContent(activeDragId)}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
