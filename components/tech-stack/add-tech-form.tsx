import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { PlusCircle, Search } from "lucide-react";
import { techsByCategory, availableColors, allTechnologies } from "./tech-data";
import { type Tech } from "./tech-stack-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AddTechFormProps = {
  onAddTech: (tech: Tech) => void;
};

export function AddTechForm({ onAddTech }: AddTechFormProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [techName, setTechName] = useState("");
  const [techColor, setTechColor] = useState("#3b82f6");
  const [activeCategory, setActiveCategory] = useState("Frontend");

  // Filtrer les technologies par la recherche
  const filteredTechs = search
    ? allTechnologies.filter((tech) =>
        tech.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!techName.trim()) return;

    // Créer un nouvel identifiant unique
    const newId = Math.random().toString(36).substring(2, 11);

    // Ajouter la nouvelle technologie
    onAddTech({
      id: newId,
      name: techName,
      color: techColor,
      icon: <span className="text-xl">{techName.charAt(0)}</span>,
      technologyId: techName.toLowerCase().replace(/\s+/g, "-"), // Convertir le nom en un id technique valide
      category: "Custom",
    });

    // Réinitialiser le formulaire
    setTechName("");
    setTechColor("#3b82f6");
    setSearch("");

    // Fermer le dialogue
    setOpen(false);
  };

  const handleTechSelect = (tech: Tech) => {
    // S'assurer que le technologyId est correctement défini
    onAddTech({
      ...tech,
      technologyId: tech.id, // Utiliser l'id original comme technologyId
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <PlusCircle size={18} />
          Ajouter
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] max-w-[500px] max-h-[90vh] overflow-hidden bg-zinc-900 border border-zinc-800 text-white p-4">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-xl font-bold text-white">
            Ajouter une technologie
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-center mx-auto">
            Choisissez une technologie parmi les catégories ou créez-en une
            personnalisée.
          </DialogDescription>
        </DialogHeader>

        {/* Catégories de technologies */}
        <div className="overflow-hidden flex flex-col max-h-[60vh]">
          <Tabs
            defaultValue="Frontend"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <TabsList className="bg-zinc-900 border-b border-zinc-800 w-full justify-start overflow-x-auto">
              {Object.keys(techsByCategory).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-2 py-1"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(techsByCategory).map(([category, techs]) => (
              <TabsContent
                key={category}
                value={category}
                className="mt-2 overflow-y-auto"
                style={{ maxHeight: "40vh" }}
              >
                <div className="grid grid-cols-2 gap-2">
                  {techs.map((tech) => (
                    <div
                      key={tech.id}
                      className="flex items-center gap-2 p-2 rounded hover:bg-zinc-800 cursor-pointer border border-zinc-800"
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
            ))}
          </Tabs>
        </div>

        {/* Création personnalisée */}
        <div className="border-t border-zinc-800 mt-3 pt-3">
          <h3 className="text-sm font-medium text-gray-400 mb-2">
            Ou créer une technologie personnalisée
          </h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="techName" className="text-gray-300">
                  Nom
                </Label>
                <Input
                  id="techName"
                  value={techName}
                  onChange={(e) => setTechName(e.target.value)}
                  placeholder="ex: React, Angular, etc."
                  className="bg-zinc-900 border-zinc-700 text-white h-8"
                  required
                />
              </div>

              <div>
                <Label className="text-gray-300">Couleur</Label>
                <div className="grid grid-cols-8 gap-1 mt-1">
                  {availableColors.slice(0, 8).map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={`w-5 h-5 rounded-full border-2 transition-transform ${
                        techColor === color
                          ? "border-white scale-110"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setTechColor(color)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-1.5"
            >
              Ajouter à ma stack
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
