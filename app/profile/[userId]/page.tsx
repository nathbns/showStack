"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useSession } from "@/lib/auth-client"; // Pour vérifier si le visiteur est le propriétaire
import TechStackGrid, { Tech } from "@/components/tech-stack/tech-stack-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allTechnologies } from "@/components/tech-stack/tech-data"; // Pour l'hydratation des icônes
import { DashboardView } from "@/app/dashboard/DashboardView";

// Configuration de la disposition (similaire à celle du dashboard)
interface ProfileLayoutConfig {
  zoneLeft: "profile" | "stacks";
  // zoneTopRight sera implicitement l'inverse de zoneLeft pour une structure à deux éléments principaux
}

// Type User étendu
interface ProfileUser {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  description: string | null;
  createdAt: string | null;
  layoutConfig?: ProfileLayoutConfig; // Configuration de la disposition, optionnelle
}

interface ProfileStack {
  id: number;
  name: string | null;
  technologies: any[]; // Les technologies brutes de l'API
  createdAt?: string;
  updatedAt?: string;
}

interface ProfileData {
  user: ProfileUser;
  stacks: ProfileStack[];
}

// Copié et adapté de la page Dashboard pour l'hydratation des icônes
const iconMap: Record<string, React.ReactNode> = {};
allTechnologies.forEach((tech) => {
  if (tech.id) {
    iconMap[tech.id.toLowerCase()] = tech.icon;
  }
});
const getDefaultIcon = (name: string) => (
  <span className="flex items-center justify-center w-full h-full text-sm font-bold bg-muted text-muted-foreground rounded-sm">
    {name?.charAt(0)?.toUpperCase() || "?"}
  </span>
);

// Composant pour la carte de profil utilisateur
const UserProfileDisplayCard = ({ user }: { user: ProfileUser }) => (
  <section className="bg-card border border-border rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-fit">
    {user.image ? (
      <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center border-2 border-primary/30 shadow-md mb-4">
        <Image
          src={user.image}
          alt={`${user.name || "User"}\'s avatar`}
          width={128}
          height={128}
          className="w-full h-full object-cover"
        />
      </div>
    ) : (
      <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-5xl font-semibold border-2 border-primary/30 shadow-md mb-4">
        {user.name?.charAt(0).toUpperCase() || "?"}
      </div>
    )}
    <h1 className="text-2xl font-bold mb-1">{user.name || "Anonymous User"}</h1>
    {user.email && (
      <p className="text-sm text-muted-foreground mb-3">{user.email}</p>
    )}
    {user.description && (
      <>
        <h2 className="text-lg font-semibold mt-4 mb-1 self-start">
          My description
        </h2>
        <p className="text-sm text-foreground/80 text-left whitespace-pre-line">
          {user.description}
        </p>
      </>
    )}
    <p className="text-xs text-muted-foreground mt-4">
      Joined:{" "}
      {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
    </p>
  </section>
);

// Composant pour la carte de sélection des stacks
const UserStackSelectorCard = ({
  stacks,
  activeStackId,
  setActiveStackId,
  isOwner,
  user,
  loading,
}: {
  stacks: ProfileStack[];
  activeStackId: number | null;
  setActiveStackId: (id: number | null) => void;
  isOwner: boolean;
  user: ProfileUser;
  loading: boolean;
}) => (
  <section className="bg-card border border-border rounded-xl shadow-lg p-6">
    <h3 className="text-xl font-semibold mb-4">
      {isOwner ? "My Tech Stacks" : `${user.name || "User"}\'s Tech Stacks`}
    </h3>
    {stacks.length > 0 && (
      <div className="flex flex-wrap gap-3">
        {stacks.map((stack) => (
          <Button
            key={stack.id}
            variant={activeStackId === stack.id ? "default" : "secondary"}
            onClick={() => setActiveStackId(stack.id)}
            size="sm"
            className="text-sm"
          >
            {stack.name || `Stack ${stack.id}`}
          </Button>
        ))}
      </div>
    )}
    {stacks.length === 0 && !loading && (
      <div className="text-center py-5 text-muted-foreground">
        <p>This user hasn\'t configured any tech stacks yet.</p>
      </div>
    )}
  </section>
);

// Composant pour la carte d'affichage de la grille Bento
const UserBentoGridCard = ({
  activeStack,
}: {
  activeStack: ProfileStack | undefined;
}) => {
  if (!activeStack) return null; // Ne rien rendre si aucun stack n'est actif

  return (
    <section className="bg-card border border-border rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        {activeStack.name || "Selected Stack"}
      </h2>
      {activeStack.technologies.length > 0 ? (
        <div className="mt-0">
          <TechStackGrid
            technologies={activeStack.technologies.sort(
              (a, b) => (a.order ?? 0) - (b.order ?? 0)
            )}
            onRemoveTech={() => {}} // No-op
            onUpdateTech={() => {}} // No-op
            onReorderTechs={() => {}} // No-op
          />
        </div>
      ) : (
        <div className="text-center py-10 text-muted-foreground">
          <p>This stack is empty.</p>
        </div>
      )}
    </section>
  );
};

export default function UserProfilePage() {
  const params = useParams();
  const userId = params.userId as string;
  const { data: sessionData } = useSession();

  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeStackId, setActiveStackId] = useState<number | null>(null);

  const hydrateTechnologies = useCallback((rawTechs: any[]): Tech[] => {
    if (!rawTechs) return [];
    return rawTechs.map((rawTech) => {
      // Vérifier si c'est un projet avec favicon
      if (rawTech.isProject && rawTech.favicon) {
        // Pour les projets, on utilise le favicon comme icône
        return {
          id: rawTech.id?.toString() || Math.random().toString(),
          name: rawTech.name || "Unnamed Project",
          color: rawTech.color || "#808080",
          icon: (
            <img
              src={rawTech.favicon}
              alt={rawTech.name}
              width={18}
              height={18}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          ),
          technologyId: rawTech.technologyId,
          category: rawTech.category,
          gridSpan: {
            cols: parseInt(rawTech.gridCols || "2", 10) as 1 | 2 | 3,
            rows: parseInt(rawTech.gridRows || "1", 10) as 1 | 2,
          },
          isProject: true,
          favicon: rawTech.favicon,
          url: rawTech.url,
          description: rawTech.description,
          order: rawTech.order ?? 0,
        };
      }

      // Pour les technologies normales
      const techIdToLookup =
        rawTech.technologyId?.toLowerCase() ||
        rawTech.name?.toLowerCase() ||
        "";
      const icon =
        iconMap[techIdToLookup] || getDefaultIcon(rawTech.name || "Unknown");
      const gridCols = parseInt(rawTech.gridCols || "1", 10);
      const gridRows = parseInt(rawTech.gridRows || "1", 10);
      const gridSpan =
        gridCols > 1 || gridRows > 1
          ? { cols: gridCols as 1 | 2 | 3, rows: gridRows as 1 | 2 }
          : undefined;

      return {
        id: rawTech.id?.toString() || Math.random().toString(), // ID de stackTechnologyItem
        name: rawTech.name || "Unnamed Tech",
        color: rawTech.color || "#808080", // Default color
        icon: icon,
        technologyId: rawTech.technologyId,
        category: rawTech.category,
        gridSpan: gridSpan,
        order: rawTech.order ?? 0,
      };
    });
  }, []);

  useEffect(() => {
    if (userId) {
      async function fetchProfileData() {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`/api/profile/${userId}`);
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              errorData.error ||
                `API request failed with status ${response.status}`
            );
          }
          const data: ProfileData = await response.json();

          const hydratedStacks = data.stacks.map((stack) => ({
            ...stack,
            technologies: hydrateTechnologies(stack.technologies || []),
          }));

          setProfileData({ ...data, stacks: hydratedStacks as any }); // cast `as any` car le type de tech est différent

          if (hydratedStacks.length > 0) {
            setActiveStackId(hydratedStacks[0].id);
          }
        } catch (err) {
          console.error("Failed to fetch profile data:", err);
          setError(
            err instanceof Error ? err.message : "Could not load profile data."
          );
        } finally {
          setLoading(false);
        }
      }
      fetchProfileData();
    }
  }, [userId, hydrateTechnologies]);

  const isOwner = sessionData?.user?.id === userId;
  const activeStack = profileData?.stacks.find(
    (stack) => stack.id === activeStackId
  );

  if (!profileData?.user) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12 text-center">
        User not found.
      </div>
    );
  }

  // Déplacer la déstructuration et la logique de layout ici, après les gardes
  const { user, stacks } = profileData;
  const tags = (profileData as any).tags || [];
  // Génère un layout complet (zoneLeft + zoneTopRight)
  const zoneLeft = user.layoutConfig
    ? typeof user.layoutConfig === "string"
      ? (JSON.parse(user.layoutConfig).zoneLeft as "profile" | "stacks")
      : (user.layoutConfig.zoneLeft as "profile" | "stacks")
    : "profile";
  const layoutConfig = {
    zoneLeft,
    zoneTopRight:
      zoneLeft === "profile" ? "stacks" : ("profile" as "profile" | "stacks"),
  };

  const ZoneLeftComponent =
    layoutConfig.zoneLeft === "profile" ? (
      <UserProfileDisplayCard user={user} />
    ) : (
      <UserStackSelectorCard
        stacks={stacks}
        activeStackId={activeStackId}
        setActiveStackId={setActiveStackId}
        isOwner={isOwner}
        user={user}
        loading={loading}
      />
    );

  const ZoneTopRightComponent =
    layoutConfig.zoneLeft === "profile" ? (
      <UserStackSelectorCard
        stacks={stacks}
        activeStackId={activeStackId}
        setActiveStackId={setActiveStackId}
        isOwner={isOwner}
        user={user}
        loading={loading}
      />
    ) : (
      <UserProfileDisplayCard user={user} />
    );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        <p className="text-lg mt-4 ml-4">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12 text-center text-red-500 bg-red-500/10 p-6 rounded-lg">
        <p className="text-xl font-semibold">Oops! Something went wrong.</p>
        <p className="text-md mt-2">Error: {error}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {isOwner && (
          <div className="mb-6 text-right max-w-4xl mx-auto">
            <Button asChild variant="outline">
              <Link href="/dashboard">Edit Your Profile & Stacks</Link>
            </Button>
          </div>
        )}
        <DashboardView
          user={{ ...user, layoutConfig: undefined }}
          stacks={stacks}
          tags={tags}
          layoutConfig={layoutConfig}
          readOnly
        />
      </div>
    </main>
  );
}
