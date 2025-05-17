import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { PlusCircle, Globe, ExternalLink, Loader2 } from "lucide-react";
import { techsByCategory } from "./tech-data";
import { type Tech } from "./tech-stack-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AddTechFormProps = {
  onAddTech: (tech: Tech) => void;
  userId: string;
};

// Type pour étendre Tech avec des propriétés de projet
interface ProjectTech extends Tech {
  url: string;
  description: string;
  isProject: boolean;
  favicon?: string;
}

export function AddTechForm({ onAddTech, userId }: AddTechFormProps) {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Frontend");

  // États pour l'ajout de projet
  const [projectUrl, setProjectUrl] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectColor, setProjectColor] = useState("#3b82f6"); // Bleu par défaut
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [favicon, setFavicon] = useState<string | null>(null);
  const [isFetchingFavicon, setIsFetchingFavicon] = useState(false);

  // Onglet actif (Technologies ou Projets)
  const [activeTab, setActiveTab] = useState<"technologies" | "projets">(
    "technologies"
  );

  // Nettoyage de l'URL pour éviter les problèmes CORS
  const cleanUrl = (url: string) => {
    let cleanedUrl = url.trim();
    if (!cleanedUrl.startsWith("http")) {
      cleanedUrl = "https://" + cleanedUrl;
    }
    try {
      const urlObj = new URL(cleanedUrl);
      return urlObj.toString();
    } catch (e) {
      return cleanedUrl;
    }
  };

  // Récupérer le favicon d'un site web
  useEffect(() => {
    if (!projectUrl || !projectUrl.includes(".")) {
      setFavicon(null);
      return;
    }

    const fetchFavicon = async () => {
      try {
        setIsFetchingFavicon(true);

        // Nettoyer l'URL
        const cleanedUrl = cleanUrl(projectUrl);

        try {
          const urlObj = new URL(cleanedUrl);
          // On utilise Google Favicon Service qui est généralement le plus fiable
          // et qui contourne les problèmes de CORS
          const faviconUrl = `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=128`;

          // On vérifie que le service renvoie bien une image
          const img = new Image();
          img.src = faviconUrl;
          img.onload = () => {
            // Si l'image est chargée avec succès, on utilise cette URL
            setFavicon(faviconUrl);
            setIsFetchingFavicon(false);
          };
          img.onerror = () => {
            // Si l'image ne se charge pas, on utilise une icône par défaut
            console.log("Favicon not found or not accessible");
            setFavicon(null);
            setIsFetchingFavicon(false);
          };
        } catch (e) {
          console.error("URL invalide", e);
          setFavicon(null);
          setIsFetchingFavicon(false);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du favicon:", error);
        setFavicon(null);
        setIsFetchingFavicon(false);
      }
    };

    // Attendre un peu que l'utilisateur finisse de taper
    const timer = setTimeout(() => {
      fetchFavicon();
    }, 500);

    return () => clearTimeout(timer);
  }, [projectUrl]);

  const handleTechSelect = (tech: Tech) => {
    // S'assurer que le technologyId est correctement défini
    onAddTech({
      ...tech,
      technologyId: tech.id, // Utiliser l'id original comme technologyId
    });
    setOpen(false);
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectUrl.trim() || !projectDescription.trim() || !projectName.trim())
      return;

    setIsSubmitting(true);
    try {
      // Créer un nouvel identifiant unique
      const newId = Math.random().toString(36).substring(2, 11);

      // Créer un nouvel élément de type ProjectTech pour représenter le projet
      const newProject: ProjectTech = {
        id: newId,
        name: projectName,
        color: projectColor,
        // Utiliser le favicon récupéré ou une icône par défaut
        icon: favicon ? (
          <img
            src={favicon}
            alt={projectName}
            width={24}
            height={24}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          <ExternalLink size={24} />
        ),
        category: "Project", // Marquer comme projet
        technologyId: newId,
        url: cleanUrl(projectUrl),
        description: projectDescription,
        isProject: true, // Marquer comme projet pour affichage différent
        favicon: favicon || undefined,
        gridSpan: {
          cols: 2, // Par défaut, les projets prennent 2 colonnes
          rows: 1,
        },
      };

      // Ajouter le projet à la grille en utilisant la même fonction que pour les technologies
      onAddTech(newProject);

      // Réinitialiser le formulaire
      setProjectUrl("");
      setProjectName("");
      setProjectDescription("");
      setFavicon(null);
      setOpen(false);
    } catch (error) {
      console.error("Erreur lors de l'ajout du projet :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Couleurs disponibles pour les projets
  const availableColors = [
    "#3b82f6", // blue
    "#06b6d4", // cyan
    "#10b981", // green
    "#282828", // black
    "#0ea5e9", // sky
    "#22c55e", // lime
    "#ef4444", // red
    "#ec4899", // pink
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-background hover:bg-background/90 text-[var(--foreground)] border border-[var(--border)] px-4 py-2 rounded-lg flex items-center gap-2">
          <PlusCircle size={18} />
          Ajouter
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background border-[var(--border)] text-[var(--foreground)] p-0 overflow-hidden">
        <div className="flex flex-col h-[600px] ">
          <DialogHeader className="p-4 pb-0 max-w-[500px]">
            <DialogTitle className="text-xl font-bold text-[var(--foreground)]">
              Ajouter à votre profil
            </DialogTitle>
            <DialogDescription className="text-[var(--muted-foreground)] text-center mx-auto">
              Enrichissez votre profil avec des technologies ou des projets.
            </DialogDescription>
          </DialogHeader>

          {/* Onglets principaux: Technologies / Projets */}
          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as "technologies" | "projets")}
            className="flex-1 flex flex-col w-full max-w-[500px] mx-auto"
          >
            <div className="px-4">
              <TabsList className="grid grid-cols-2 w-full max-w-[500px] mx-auto">
                <TabsTrigger
                  value="technologies"
                  className="data-[state=active]:bg-[var(--primary)] data-[state=active]:text-[var(--primary-foreground)]"
                >
                  Technologies
                </TabsTrigger>
                <TabsTrigger
                  value="projets"
                  className="data-[state=active]:bg-[var(--primary)] data-[state=active]:text-[var(--primary-foreground)]"
                >
                  Projets
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-hidden">
              {/* Contenu de l'onglet Technologies */}
              <TabsContent
                value="technologies"
                className="h-full p-4 overflow-y-auto"
              >
                <div className="flex-1 overflow-hidden flex flex-col">
                  <Tabs
                    defaultValue="Backend"
                    value={activeCategory}
                    onValueChange={setActiveCategory}
                    className="flex-1 flex flex-col"
                  >
                    <div className="px-4">
                      <TabsList className="flex overflow-x-auto w-full bg-background border-b border-[var(--border)]">
                        {Object.keys(techsByCategory).map((category) => (
                          <TabsTrigger
                            key={category}
                            value={category}
                            className="px-3 py-1.5 data-[state=active]:bg-[var(--muted)] data-[state=active]:text-[var(--primary)] data-[state=active]:shadow-sm"
                          >
                            {category}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>

                    <div className="flex-1 overflow-hidden">
                      {Object.entries(techsByCategory).map(
                        ([category, techs]) => (
                          <TabsContent
                            key={category}
                            value={category}
                            className="h-full overflow-y-auto p-4"
                          >
                            <div className="grid grid-cols-2 gap-2">
                              {techs.map((tech) => (
                                <div
                                  key={tech.id}
                                  className="flex items-center gap-2 p-2 rounded hover:bg-background/90 cursor-pointer border border-[var(--border)]"
                                  onClick={() => handleTechSelect(tech)}
                                >
                                  <div className="flex items-center justify-center h-6 w-6">
                                    {tech.icon}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-sm">{tech.name}</span>
                                    <div
                                      className="w-4 h-1 rounded-full"
                                      style={{ backgroundColor: tech.color }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </TabsContent>
                        )
                      )}
                    </div>
                  </Tabs>
                </div>
              </TabsContent>

              {/* Contenu de l'onglet Projets */}
              <TabsContent
                value="projets"
                className="h-full p-4 overflow-y-auto"
              >
                <form onSubmit={handleProjectSubmit} className="space-y-4">
                  <div>
                    <Label
                      htmlFor="projectName"
                      className="text-[var(--muted-foreground)]"
                    >
                      Nom du projet
                    </Label>
                    <Input
                      id="projectName"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="Mon Projet"
                      className="bg-background border-[var(--border)] text-[var(--foreground)]"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="projectUrl"
                      className="text-[var(--muted-foreground)]"
                    >
                      URL du projet
                    </Label>
                    <div className="flex">
                      <span className="inline-flex items-center justify-center px-3 bg-[var(--muted)] border border-r-0 border-[var(--border)] rounded-l-md w-10">
                        {isFetchingFavicon ? (
                          <Loader2
                            size={16}
                            className="text-[var(--muted-foreground)] animate-spin"
                          />
                        ) : favicon ? (
                          <img
                            src={favicon}
                            alt="Site favicon"
                            width={16}
                            height={16}
                          />
                        ) : (
                          <Globe
                            size={16}
                            className="text-[var(--muted-foreground)]"
                          />
                        )}
                      </span>
                      <Input
                        id="projectUrl"
                        type="url"
                        value={projectUrl}
                        onChange={(e) => setProjectUrl(e.target.value)}
                        placeholder="https://monprojetincroyable.com"
                        className="bg-background border-[var(--border)] text-[var(--foreground)] rounded-l-none"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="projectDescription"
                      className="text-[var(--muted-foreground)]"
                    >
                      Description
                    </Label>
                    <Textarea
                      id="projectDescription"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="Décrivez votre projet en quelques mots..."
                      className="bg-background border-[var(--border)] text-[var(--foreground)]"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-[var(--muted-foreground)]">
                      Couleur
                    </Label>
                    <div className="grid grid-cols-8 gap-1 mt-1">
                      {availableColors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          className={`w-6 h-6 rounded-full border-2 transition-transform ${
                            projectColor === color
                              ? "border-[var(--foreground)] scale-110"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => setProjectColor(color)}
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Ajout en cours..." : "Ajouter le projet"}
                  </Button>
                </form>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
