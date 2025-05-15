import TechCard from "../ui/tech-card";
import * as React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
} from "@/components/ui/context-menu";
import { useState, useEffect, useMemo } from "react";

// Définition du type Tech avec la taille de la carte
export type Tech = {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  category?: string;
  technologyId?: string;
  gridSpan?: {
    cols?: 1 | 2 | 3;
    rows?: 1 | 2;
  };
};

type TechStackGridProps = {
  technologies: Tech[];
  onRemoveTech?: (id: string) => void;
  onUpdateTech?: (id: string, updates: Partial<Tech>) => void;
};

export default function TechStackGrid({
  technologies,
  onRemoveTech,
  onUpdateTech,
}: TechStackGridProps) {
  const handleUpdateGridSpan = (
    techId: string,
    span: { cols?: 1 | 2 | 3; rows?: 1 | 2 }
  ) => {
    console.log(`Mise à jour de la grille pour tech ${techId}:`, span);
    if (onUpdateTech) {
      onUpdateTech(techId, { gridSpan: span });
    }
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {technologies.map((tech) => {
        const colSpanToApply = tech.gridSpan?.cols || 1;
        const rowSpanToApply = tech.gridSpan?.rows || 1;

        // Déterminer la classe col-span basée sur la valeur de colSpanToApply
        const colSpanClass =
          colSpanToApply === 3
            ? "col-span-3"
            : colSpanToApply === 2
            ? "col-span-2"
            : "col-span-1";

        // Déterminer la classe row-span basée sur la valeur de rowSpanToApply
        const rowSpanClass = rowSpanToApply === 2 ? "row-span-2" : "row-span-1";

        return (
          // Applique les classes de span directement au conteneur du ContextMenu
          <div className={`${colSpanClass} ${rowSpanClass}`} key={tech.id}>
            <ContextMenu>
              <ContextMenuTrigger>
                <div className="relative transition-all duration-300 ease-in-out h-full w-full">
                  {/* Suppression de l'indicateur de dimensions */}
                  <TechCard
                    id={tech.id}
                    name={tech.name}
                    color={tech.color}
                    icon={tech.icon}
                    gridSpan={tech.gridSpan}
                  />
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem
                  variant="destructive"
                  onClick={() => onRemoveTech && onRemoveTech(tech.id)}
                >
                  Supprimer
                </ContextMenuItem>
                <ContextMenuSeparator />

                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    Taille en colonnes
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuRadioGroup
                      value={String(tech.gridSpan?.cols || 1)}
                      onValueChange={(value) => {
                        console.log(`Changement de colonnes: ${value}`);
                        const numValue = parseInt(value, 10) as 1 | 2 | 3;
                        handleUpdateGridSpan(tech.id, {
                          cols: numValue,
                          rows: tech.gridSpan?.rows || 1,
                        });
                      }}
                    >
                      <ContextMenuRadioItem value="1">
                        1 colonne
                      </ContextMenuRadioItem>
                      <ContextMenuRadioItem value="2">
                        2 colonnes
                      </ContextMenuRadioItem>
                      <ContextMenuRadioItem value="3">
                        Pleine largeur
                      </ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                  </ContextMenuSubContent>
                </ContextMenuSub>

                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    Taille en lignes
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuRadioGroup
                      value={String(tech.gridSpan?.rows || 1)}
                      onValueChange={(value) => {
                        console.log(`Changement de lignes: ${value}`);
                        const numValue = parseInt(value, 10) as 1 | 2;
                        handleUpdateGridSpan(tech.id, {
                          cols: tech.gridSpan?.cols || 1,
                          rows: numValue,
                        });
                      }}
                    >
                      <ContextMenuRadioItem value="1">
                        1 ligne
                      </ContextMenuRadioItem>
                      <ContextMenuRadioItem value="2">
                        2 lignes
                      </ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        );
      })}
    </div>
  );
}
