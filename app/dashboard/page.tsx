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

// Créer un mapping des icônes à partir de allTechnologies pour un accès facile
const iconMap: Record<string, React.ReactNode> = {};
allTechnologies.forEach((tech) => {
  iconMap[tech.id.toLowerCase()] = tech.icon;
});

// Fonction pour obtenir l'icône par défaut si non trouvée dans le map
const getDefaultIcon = (name: string) => (
  <span className="flex items-center justify-center w-full h-full text-sm font-bold bg-gray-700 rounded-sm">
    {name.charAt(0).toUpperCase()}
  </span>
);

export default function Dashboard() {
  const { data: sessionData, isPending } = useSession();
  const [technologies, setTechnologies] = useState<Tech[]>([]);
  const [isLoadingInitialData, setIsLoadingInitialData] = useState(true);
  const [stackDetails, setStackDetails] = useState<{
    name: string;
    description: string;
    isPublic: boolean;
  }>({ name: "Ma Stack", description: "", isPublic: false });

  const hydrateTechnologies = useCallback((rawTechs: any[]): Tech[] => {
    return rawTechs.map((rawTech) => {
      const techIdToLookup = rawTech.technologyId
        ? rawTech.technologyId.toLowerCase()
        : "";
      const icon = iconMap[techIdToLookup] || getDefaultIcon(rawTech.name);

      return {
        id: rawTech.id.toString(),
        name: rawTech.name,
        color: rawTech.color,
        icon: icon,
        technologyId: rawTech.technologyId,
        category: rawTech.category,
      };
    });
  }, []);

  const saveStack = useCallback(
    async (currentTechnologies: Tech[], details: typeof stackDetails) => {
      if (!sessionData?.user?.id) {
        toast.error("Vous devez être connecté pour sauvegarder.");
        return;
      }
      try {
        // Avant de sauvegarder, s'assurer que les technologies ont le bon format pour l'API
        // L'API s'attend à technologyId, name, color, category
        const technologiesToSave = currentTechnologies.map((tech) => ({
          id: tech.id, // Ceci est l'id de la stackTechnologyItem si elle existe déjà, ou un nouveau pour les nouvelles techs
          name: tech.name,
          color: tech.color,
          technologyId:
            tech.technologyId ||
            allTechnologies.find(
              (t) => t.id.toLowerCase() === tech.id.toLowerCase()
            )?.id ||
            tech.id, // Utiliser tech.technologyId en priorité s'il existe
          category:
            tech.category ||
            allTechnologies.find(
              (t) => t.id.toLowerCase() === tech.id.toLowerCase()
            )?.category ||
            "Custom",
        }));

        const response = await fetch("/api/tech/stack", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: details.name,
            description: details.description,
            isPublic: details.isPublic,
            technologies: technologiesToSave, // Utiliser les technologies formatées
          }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || "Erreur lors de la sauvegarde de la stack"
          );
        }
        const savedStack = await response.json();
        // `savedStack.technologies` devrait être une liste d'objets avec technologyId, name, color
        setTechnologies(hydrateTechnologies(savedStack.technologies || []));
        setStackDetails({
          name: savedStack.name || "Ma Stack",
          description: savedStack.description || "",
          isPublic: savedStack.isPublic || false,
        });
        toast.success("Stack sauvegardée avec succès!");
      } catch (error) {
        console.error("Erreur sauvegarde stack:", error);
        toast.error(
          (error as Error).message || "Impossible de sauvegarder la stack."
        );
      }
    },
    [sessionData, hydrateTechnologies] // Ajouter hydrateTechnologies aux dépendances
  );

  useEffect(() => {
    const fetchStack = async () => {
      if (sessionData?.user?.id) {
        setIsLoadingInitialData(true);
        try {
          const response = await fetch("/api/tech/stack");
          if (!response.ok) throw new Error("Erreur réseau ou serveur");
          const data = await response.json();
          // data est la réponse de GET /api/tech/stack
          // Elle contient { id, name, description, isPublic, technologies: [ { id (stackTechItem), techStackId, technologyId, name, color, category } ] }
          if (data && data.id) {
            // Hydrater les technologies récupérées
            setTechnologies(hydrateTechnologies(data.technologies || []));
            setStackDetails({
              name: data.name || "Ma Stack",
              description: data.description || "",
              isPublic: data.isPublic || false,
            });
          } else {
            setTechnologies([]);
            setStackDetails({
              name: "Ma Stack par défaut",
              description: "Décrivez votre stack !",
              isPublic: false,
            });
          }
        } catch (error) {
          console.error("Erreur chargement stack:", error);
          toast.error("Impossible de charger votre stack.");
          setTechnologies([]);
          setStackDetails({
            name: "Ma Stack",
            description: "",
            isPublic: false,
          });
        } finally {
          setIsLoadingInitialData(false);
        }
      } else if (!isPending && !sessionData) {
        setIsLoadingInitialData(false);
        setTechnologies([]);
        setStackDetails({ name: "", description: "", isPublic: false });
      }
    };

    if (!isPending) {
      fetchStack();
    }
  }, [isPending, sessionData, hydrateTechnologies]); // Ajouter hydrateTechnologies aux dépendances

  const handleAddTech = (newTechFromForm: Tech) => {
    const updatedTechnologies = [...technologies, newTechFromForm];
    setTechnologies(updatedTechnologies);
    saveStack(updatedTechnologies, stackDetails);
  };

  const handleRemoveTech = async (stackTechnologyItemId: string) => {
    // L'ID reçu ici est l'ID de l'objet Tech, qui est l'ID de stackTechnologyItem après hydratation.
    try {
      const response = await fetch(
        `/api/tech/stack?id=${stackTechnologyItemId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erreur lors de la suppression");
      }

      setTechnologies((prevTechs) =>
        prevTechs.filter((tech) => tech.id !== stackTechnologyItemId)
      );
      toast.success("Technologie supprimée de votre stack !");
    } catch (error) {
      console.error("Erreur suppression tech:", error);
      toast.error(
        (error as Error).message || "Impossible de supprimer la technologie."
      );
    }
  };

  const handleDetailsChange = (newDetails: Partial<typeof stackDetails>) => {
    const updatedDetails = { ...stackDetails, ...newDetails };
    setStackDetails(updatedDetails);
    // Les technologies actuelles sont déjà hydratées, saveStack s'en chargera
    saveStack(technologies, updatedDetails);
  };

  if (isPending || isLoadingInitialData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[var(--background)] text-white">
        Chargement de votre dashboard...
      </div>
    );
  }

  if (!sessionData?.user?.id) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[var(--background)] text-white">
        <p className="text-xl mb-4">
          Veuillez vous connecter pour accéder à votre dashboard.
        </p>
        <Button onClick={() => (window.location.href = "/auth/signin")}>
          Se connecter
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-white pt-20 mx-auto max-w-4xl">
      <div className="flex-grow">
        <div className="mx-auto px-6 py-8">
          <header className="flex flex-col gap-1 mb-12">
            <h1 className="text-3xl font-bold text-white text-center">
              Bienvenue, {sessionData.user.name || "Développeur"}
            </h1>
            <p className="text-gray-500 text-lg text-center">
              Gérez votre stack technologique ici.
            </p>
          </header>

          <main className="flex flex-col gap-8">
            <div className="bg-zinc-800 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">
                Détails de la Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="stackName"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Nom de la Stack
                  </label>
                  <input
                    type="text"
                    id="stackName"
                    value={stackDetails.name}
                    onChange={(e) =>
                      handleDetailsChange({ name: e.target.value })
                    }
                    onBlur={() =>
                      handleDetailsChange({
                        name: (
                          document.getElementById(
                            "stackName"
                          ) as HTMLInputElement
                        ).value,
                      })
                    }
                    className="w-full p-2 rounded bg-zinc-700 border-zinc-600 text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="stackDescription"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="stackDescription"
                    value={stackDetails.description}
                    onChange={(e) =>
                      handleDetailsChange({ description: e.target.value })
                    }
                    onBlur={() =>
                      handleDetailsChange({
                        description: (
                          document.getElementById(
                            "stackDescription"
                          ) as HTMLTextAreaElement
                        ).value,
                      })
                    }
                    rows={3}
                    className="w-full p-2 rounded bg-zinc-700 border-zinc-600 text-white"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  id="isPublic"
                  checked={stackDetails.isPublic}
                  onChange={(e) =>
                    handleDetailsChange({ isPublic: e.target.checked })
                  }
                  className="h-4 w-4 rounded text-primary-500 focus:ring-primary-500 border-gray-300 bg-zinc-700"
                />
                <label htmlFor="isPublic" className="text-sm text-gray-300">
                  Rendre cette stack publique
                </label>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                Votre Stack Technologique
              </h2>
              <AddTechForm onAddTech={handleAddTech} />
            </div>

            {technologies.length === 0 && !isLoadingInitialData ? (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  Aucune technologie dans votre stack.
                </p>
                <p className="text-gray-500">
                  Cliquez sur "Ajouter" pour commencer.
                </p>
              </div>
            ) : (
              <TechStackGrid
                technologies={technologies}
                onRemoveTech={handleRemoveTech}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
