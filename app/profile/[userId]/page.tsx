"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useSession } from "@/lib/auth-client"; // Pour vérifier si le visiteur est le propriétaire
import TechStackGrid, { Tech } from "@/components/tech-stack/tech-stack-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allTechnologies } from "@/components/tech-stack/tech-data"; // Pour l'hydratation des icônes

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
        id: rawTech.id?.toString() || Math.random().toString(),
        name: rawTech.name || "Unnamed Tech",
        color: rawTech.color || "#808080",
        icon: icon,
        technologyId: rawTech.technologyId,
        gridSpan: gridSpan,
        order: rawTech.order ?? 0,
        description: rawTech.description,
      };
    });
  }, []);

  useEffect(() => {
    async function fetchProfileData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/profile/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch profile data");
        const data = await res.json();
        // Hydrate les stacks
        const hydratedStacks = (data.stacks || []).map((stack: any) => ({
          ...stack,
          technologies: hydrateTechnologies(stack.technologies || []),
        }));
        setProfileData({
          user: data.user,
          stacks: hydratedStacks,
        });
        setActiveStackId(hydratedStacks[0]?.id ?? null);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchProfileData();
  }, [userId, hydrateTechnologies]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background text-foreground">
        Chargement du profil…
      </div>
    );
  }
  if (error || !profileData || !profileData.user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background text-foreground">
        Erreur lors du chargement du profil : {error || "Données manquantes"}
      </div>
    );
  }

  // Composant profil (lecture seule)
  const ProfileHeader = () => (
    <div className="flex flex-col items-center justify-center py-8">
      {profileData.user.image && (
        <div className="relative w-24 h-24 mb-4">
          <Image
            src={profileData.user.image}
            alt={profileData.user.name || "Avatar utilisateur"}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      )}
      <h2 className="text-2xl font-semibold text-[var(--foreground)]">
        {profileData.user.name || "Utilisateur anonyme"}
      </h2>
      {profileData.user.description && (
        <p className="mt-2 text-[var(--muted-foreground)] text-center whitespace-pre-line">
          {profileData.user.description}
        </p>
      )}
    </div>
  );

  // Sélecteur de stacks (lecture seule)
  const StacksSelector = () => (
    <div className="flex flex-col items-center gap-4 py-4">
      <div className="flex flex-wrap justify-center gap-2">
        {profileData.stacks.map((stack) => (
          <Button
            key={stack.id}
            variant={activeStackId === stack.id ? "default" : "outline"}
            onClick={() => setActiveStackId(stack.id)}
            className={
              activeStackId !== stack.id
                ? "text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                : ""
            }
          >
            {stack.name}
          </Button>
        ))}
      </div>
    </div>
  );

  // Grille Bento (lecture seule)
  const BentoGridSection = () => {
    const activeStack = profileData.stacks.find((s) => s.id === activeStackId);
    const technologies = activeStack?.technologies || [];
    return (
      <div className="relative w-full bg-[var(--card)] p-4 rounded-lg border border-[var(--border)] min-h-[50vh] mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            Your Bento Grid.
          </h2>
        </div>
        {technologies.length === 0 ? (
          <div className="text-center py-12 flex-grow flex flex-col justify-center items-center">
            <p className="text-[var(--muted-foreground)]">
              No technology in the stack "{activeStack?.name}".
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-3 gap-4"
            style={{ gridAutoRows: "150px" }}
          >
            {technologies
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
              .map((tech) => {
                const colSpan = tech.gridSpan?.cols || 1;
                const rowSpan = tech.gridSpan?.rows || 1;
                const colSpanClass =
                  colSpan === 3
                    ? "col-span-3"
                    : colSpan === 2
                    ? "col-span-2"
                    : "col-span-1";
                const rowSpanClass =
                  rowSpan === 2 ? "row-span-2" : "row-span-1";
                const gapPx = 16;
                const minHeight = rowSpan * 150 + (rowSpan - 1) * gapPx;
                return (
                  <div
                    key={tech.id}
                    className={`relative group ${colSpanClass} ${rowSpanClass}`}
                  >
                    <div
                      className="bento-card p-4 rounded-2xl border border-[--border] flex flex-col items-start backdrop-blur-md relative overflow-hidden"
                      style={{ minHeight }}
                    >
                      <div className="absolute inset-0 pointer-events-none z-0">
                        <div
                          className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl"
                          style={{
                            background: `radial-gradient(circle, ${tech.color}55 0%, transparent 80%)`,
                          }}
                        />
                      </div>
                      <div className="flex items-center gap-2 mb-2 relative z-10">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {tech.icon}
                        </div>
                        <span className="font-semibold text-lg text-[--text-foreground]">
                          {tech.name}
                        </span>
                      </div>
                      {tech.description && (
                        <div className="text-xs text-[--text-foreground] mt-1 relative z-10">
                          {tech.description}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] mx-auto max-w-4xl">
      <div className="flex-grow">
        <div className="mx-auto py-2 md:py-8 px-4 md:px-0">
          <ProfileHeader />
          <StacksSelector />
          <BentoGridSection />
        </div>
      </div>
    </div>
  );
}
