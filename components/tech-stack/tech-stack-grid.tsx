import TechCard from "../ui/tech-card";
import * as React from "react";
import { TypeScript, Vue, NextJS, TailwindCSS, Node } from "../logo-card";

// Définition du type Tech
export type Tech = {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  category?: string;
};

type TechStackGridProps = {
  technologies: Tech[];
  onRemoveTech?: (id: string) => void;
};

// Technologies par défaut
const defaultTechs: Tech[] = [
  { id: "1", name: "TypeScript", color: "#3178C6", icon: <TypeScript /> },
  { id: "2", name: "Vue.js", color: "#41B883", icon: <Vue /> },
  { id: "3", name: "Next.js", color: "#000000", icon: <NextJS /> },
  { id: "4", name: "Tailwind CSS", color: "#38B2AC", icon: <TailwindCSS /> },
  { id: "5", name: "Node.js", color: "#539E43", icon: <Node /> },
];

export default function TechStackGrid({
  technologies = defaultTechs,
  onRemoveTech,
}: TechStackGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          id={tech.id}
          name={tech.name}
          color={tech.color}
          icon={tech.icon}
          onRemove={onRemoveTech ? () => onRemoveTech(tech.id) : undefined}
        />
      ))}
    </div>
  );
}
