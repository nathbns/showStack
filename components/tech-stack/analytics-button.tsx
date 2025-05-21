import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type Tech } from "./tech-stack-grid";
import { AnalyticsCard } from "./analytics-card";
import { BarChart2 } from "lucide-react";

interface AnalyticsButtonProps {
  onAddTech: (tech: Tech) => void;
}

export function AnalyticsButton({ onAddTech }: AnalyticsButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className="bg-background hover:bg-background/90 text-[var(--foreground)] border border-[var(--border)] px-4 py-2 rounded-lg flex items-center gap-2"
          title="Ajouter un service d'analytics"
        >
          <BarChart2 size={18} />
          Analytics
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background border-[var(--border)] text-[var(--foreground)] p-6 overflow-hidden max-w-md">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-bold text-center">
            Ajouter un service d'analytics
          </DialogTitle>
        </DialogHeader>
        
        <AnalyticsCard 
          onAddTech={(tech) => {
            onAddTech(tech);
            setOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
