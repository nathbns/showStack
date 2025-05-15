"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { X, Plus } from "lucide-react";

export interface Tag {
  id: number;
  name: string;
  color: string;
}

interface TagManagerProps {
  userId: string;
}

export function TagManager({ userId }: TagManagerProps) {
  const [tags, setTags] = useState<Tag[]>([]);
  const [newTagName, setNewTagName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  // Charger les tags à l'initialisation
  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/user/tag");
      if (!response.ok) {
        throw new Error("Erreur lors du chargement des tags");
      }
      const data = await response.json();
      setTags(data);
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Impossible de charger vos tags");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTag = async () => {
    if (!newTagName.trim()) return;

    try {
      setIsAdding(true);
      const response = await fetch("/api/user/tag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newTagName.trim(),
          // La couleur est générée aléatoirement côté serveur ou utilise la valeur par défaut
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erreur lors de l'ajout du tag");
      }

      const newTag = await response.json();
      setTags([...tags, newTag]);
      setNewTagName("");
      toast.success("Tag ajouté avec succès");
    } catch (error) {
      console.error("Erreur:", error);
      toast.error((error as Error).message || "Impossible d'ajouter le tag");
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteTag = async (tagId: number) => {
    try {
      const response = await fetch(`/api/user/tag?id=${tagId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erreur lors de la suppression du tag");
      }

      setTags(tags.filter((tag) => tag.id !== tagId));
      toast.success("Tag supprimé avec succès");
    } catch (error) {
      console.error("Erreur:", error);
      toast.error((error as Error).message || "Impossible de supprimer le tag");
    }
  };

  return (
    <div className="mt-4">
      <h4 className="text-md font-semibold text-[var(--card-foreground)] mb-2">
        Mes tags
      </h4>

      {/* Affichage des tags existants */}
      <div className="flex flex-wrap gap-1 mb-3">
        {isLoading ? (
          <p className="text-sm text-[var(--muted-foreground)]">
            Chargement...
          </p>
        ) : tags.length === 0 ? (
          <p className="text-sm text-[var(--muted-foreground)] italic">
            Aucun tag pour le moment.
          </p>
        ) : (
          tags.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center rounded-full px-3 py-1 text-sm"
              style={{ backgroundColor: tag.color, color: "#fff" }}
            >
              <span>{tag.name}</span>
              <button
                onClick={() => handleDeleteTag(tag.id)}
                className="ml-1 hover:text-gray-200 focus:outline-none"
                aria-label={`Supprimer le tag ${tag.name}`}
              >
                <X size={14} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Formulaire d'ajout de tag */}
      <div className="flex items-center gap-2">
        <Input
          type="text"
          value={newTagName}
          onChange={(e) => setNewTagName(e.target.value)}
          placeholder="Nouveau tag..."
          className="flex-grow text-sm bg-[var(--input)] border-[var(--border)]"
          disabled={isAdding}
        />
        <Button
          size="sm"
          onClick={handleAddTag}
          disabled={!newTagName.trim() || isAdding}
          className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
        >
          <Plus size={16} className="mr-1" />
          Ajouter
        </Button>
      </div>
    </div>
  );
}
