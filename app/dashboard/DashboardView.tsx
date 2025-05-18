import React from "react";
import Image from "next/image";
import TechStackGrid, { Tech } from "@/components/tech-stack/tech-stack-grid";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface Tag {
  id: number | string;
  name: string;
  color: string;
}

interface DashboardLayout {
  zoneLeft: "profile" | "stacks";
  zoneTopRight: "profile" | "stacks";
}

interface DashboardViewProps {
  user: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    description: string | null;
    createdAt: string | null;
    layoutConfig?: DashboardLayout;
  };
  stacks: Array<{
    id: number;
    name: string | null;
    technologies: Tech[];
    createdAt?: string;
    updatedAt?: string;
  }>;
  tags?: Tag[];
  layoutConfig?: DashboardLayout;
  activeStackId?: number | null;
  setActiveStackId?: (id: number) => void;
  readOnly?: boolean;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user,
  stacks,
  tags = [],
  layoutConfig: layoutConfigProp,
  activeStackId: propActiveStackId,
  setActiveStackId,
  readOnly = false,
}) => {
  // Gestion du stack actif (en lecture seule, on prend le premier par défaut ou celui passé en prop)
  const [activeStackId, setActiveStackIdLocal] = React.useState<number | null>(
    propActiveStackId ?? stacks[0]?.id ?? null
  );
  React.useEffect(() => {
    if (propActiveStackId !== undefined)
      setActiveStackIdLocal(propActiveStackId);
  }, [propActiveStackId]);
  const handleSetActiveStackId = (id: number) => {
    if (readOnly) setActiveStackIdLocal(id);
    else setActiveStackId?.(id);
  };
  const activeStack = stacks.find((s) => s.id === activeStackId) ?? stacks[0];
  const layoutConfig = layoutConfigProp ||
    user.layoutConfig || { zoneLeft: "profile", zoneTopRight: "stacks" };

  // Composant profil
  const ProfileCard = (
    <section className="relative bg-card p-6 rounded-lg border border-border flex flex-col gap-6 h-full">
      <div>
        <GlowingEffect className="rounded-lg" />

        <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
          My Profile
        </h2>
        {user.image && (
          <div className="mb-4 relative w-32 h-32 mx-auto">
            <Image
              src={user.image}
              alt={user.name || "User avatar"}
              width={128}
              height={128}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        )}
        <h3 className="text-xl font-medium text-center text-card-foreground mb-1">
          {user.name || "Anonymous User"}
        </h3>
        <p className="text-sm text-muted-foreground text-center mb-4">
          {user.email}
        </p>
      </div>
      <div>
        <h4 className="text-md font-semibold text-card-foreground mb-1">
          My description
        </h4>
        <p
          className={`text-sm text-muted-foreground whitespace-pre-wrap min-h-[60px] ${
            !user.description && "italic"
          }`}
        >
          {user.description || "No description yet."}
        </p>
      </div>
      <div className="mt-0">
        <h4 className="text-md font-semibold text-card-foreground mb-1">
          Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {tags.length > 0 ? (
            tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs border"
                style={{ borderColor: tag.color, color: tag.color }}
              >
                {tag.name}
              </span>
            ))
          ) : (
            <span className="italic text-xs text-muted-foreground">
              Aucun tag pour le moment.
            </span>
          )}
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Joined:{" "}
        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
      </p>
    </section>
  );

  // Composant stacks
  const StacksCard = (
    <section className="relative bg-card p-4 rounded-lg border border-border flex flex-col h-full">
      <GlowingEffect className="rounded-lg" />

      <h3 className="text-xl font-semibold mb-3 text-card-foreground">
        My Stacks
      </h3>
      <div className="flex-grow mb-4">
        {stacks.length > 0 ? (
          <div className="flex flex-wrap gap-2" style={{ minHeight: "80px" }}>
            {stacks.map((stack) => (
              <Button
                key={stack.id}
                variant={activeStack?.id === stack.id ? "default" : "outline"}
                onClick={() => handleSetActiveStackId(stack.id)}
                className={
                  activeStack?.id !== stack.id
                    ? "text-foreground hover:bg-accent hover:text-accent-foreground"
                    : ""
                }
                size="sm"
              >
                {stack.name}
              </Button>
            ))}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-muted-foreground text-sm">
              No stacks yet. Create one to get started!
            </p>
          </div>
        )}
      </div>
    </section>
  );

  // Composant bento grid
  const BentoGridCard = activeStack ? (
    <section className="relative w-full bg-[var(--card)] p-4 rounded-lg border border-[var(--border)] h-full flex flex-col">
      <div className="relative w-full bg-card p-4 rounded-lg border border-border min-h-[50vh] flex flex-col">
        <GlowingEffect className="rounded-lg" />
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Your Bento Grid.
          </h2>
          {!readOnly && (
            <Button onClick={() => {}} variant="outline" className="text-sm">
              Reorder
            </Button>
          )}
        </div>
        {activeStack.technologies.length === 0 ? (
          <div className="text-center py-12 flex-grow flex flex-col justify-center items-center">
            <p className="text-muted-foreground">
              No technology in the stack "{activeStack.name}".
            </p>
          </div>
        ) : (
          <div className="flex-grow">
            <TechStackGrid
              technologies={activeStack.technologies}
              onRemoveTech={() => {}}
              onUpdateTech={() => {}}
              onReorderTechs={() => {}}
              readOnly={readOnly}
            />
          </div>
        )}
      </div>
    </section>
  ) : null;

  // Layout identique au dashboard (lecture seule)
  if (layoutConfig.zoneLeft === "profile") {
    // Profile à gauche, Stacks à droite, Bento en dessous
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-4xl mx-auto">
        <div className="lg:col-span-1 h-full flex flex-col">{ProfileCard}</div>
        <div className="lg:col-span-2 flex flex-col gap-8">
          {StacksCard}
          {BentoGridCard}
        </div>
      </div>
    );
  } else {
    // Stacks à gauche, Profile à droite, Bento en bas pleine largeur
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-4xl mx-auto">
        <div className="lg:col-span-1 flex flex-col">{StacksCard}</div>
        <div className="lg:col-span-2 flex flex-col">{ProfileCard}</div>
        <div className="lg:col-span-3">{BentoGridCard}</div>
      </div>
    );
  }
};
