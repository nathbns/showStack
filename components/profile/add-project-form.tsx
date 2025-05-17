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
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";

type AddProjectFormProps = {
  userId: string;
};

export function AddProjectForm({ userId }: AddProjectFormProps) {
  const [open, setOpen] = useState(false);
  const [projectUrl, setProjectUrl] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectUrl.trim() || !projectDescription.trim()) return;

    setIsSubmitting(true);
    console.log("Soumission du projet :", {
      projectUrl,
      projectDescription,
      userId,
    });
    alert("Logique de soumission à implémenter ! Voir la console.");
    setIsSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto">
          <PlusCircle size={18} className="mr-2" />
          Ajouter un projet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px] bg-background border-[var(--border)] text-[var(--foreground)]">
        <DialogHeader>
          <DialogTitle className="text-[var(--foreground)]">
            Ajouter un nouveau projet
          </DialogTitle>
          <DialogDescription className="text-[var(--muted-foreground)]">
            Partagez un lien vers votre projet et décrivez-le brièvement.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-2 pb-4">
          <div>
            <Label
              htmlFor="projectUrl"
              className="text-[var(--muted-foreground)]"
            >
              URL du projet
            </Label>
            <Input
              id="projectUrl"
              type="url"
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              placeholder="https://monprojetincroyable.com"
              className="bg-background border-[var(--border)] text-[var(--foreground)]"
              required
            />
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
          <DialogFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)]"
            >
              {isSubmitting ? "Ajout en cours..." : "Ajouter le projet"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
