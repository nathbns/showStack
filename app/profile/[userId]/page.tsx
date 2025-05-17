"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useSession } from "@/lib/auth-client"; // Pour vérifier si le visiteur est le propriétaire
import TechStackGrid, { Tech } from "@/components/tech-stack/tech-stack-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allTechnologies } from "@/components/tech-stack/tech-data"; // Pour l'hydratation des icônes

// Types pour les données du profil
interface ProfileUser {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  description: string | null;
  createdAt: string | null;
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
      <div className="container mx-auto px-4 py-12 text-center text-red-500 bg-red-500/10 p-6 rounded-lg">
        <p className="text-xl font-semibold">Oops! Something went wrong.</p>
        <p className="text-md mt-2">Error: {error}</p>
      </div>
    );
  }

  if (!profileData?.user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        User not found.
      </div>
    );
  }

  const { user, stacks } = profileData;

  return (
    <main className="container max-w-4xl mx-auto px-4 py-12 md:py-16 min-h-screen">
      {/* Section Profil Utilisateur */}
      <section className="mb-12 p-6 bg-card border border-border rounded-xl shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {user.image ? (
            <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center border-4 border-primary/40 shadow-md">
              <Image
                src={user.image}
                alt={`${user.name || "User"}'s avatar`}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-5xl font-semibold border-4 border-primary/40 shadow-md">
              {user.name?.charAt(0).toUpperCase() || "?"}
            </div>
          )}
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold tracking-tight mb-1">
              {user.name || "Anonymous User"}
            </h1>
            {user.email && (
              <p className="text-md text-muted-foreground mb-2">{user.email}</p>
            )}
            {user.description && (
              <p className="text-sm text-foreground/80 mb-3">
                {user.description}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Joined:{" "}
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </div>
        {isOwner && (
          <div className="mt-6 text-right">
            <Button asChild variant="outline">
              <Link href="/dashboard">Edit Your Profile & Stacks</Link>
            </Button>
          </div>
        )}
      </section>

      {/* Section Stacks Technologiques */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">
          {isOwner ? "My Tech Stacks" : `${user.name || "User"}'s Tech Stacks`}
        </h2>
        {stacks.length > 0 ? (
          <>
            <div className="flex flex-wrap gap-3 mb-6">
              {stacks.map((stack) => (
                <Button
                  key={stack.id}
                  variant={activeStackId === stack.id ? "default" : "secondary"}
                  onClick={() => setActiveStackId(stack.id)}
                  className="text-sm px-3 py-1 h-auto"
                >
                  {stack.name || `Stack ${stack.id}`}
                </Button>
              ))}
            </div>
            {activeStack ? (
              <div className="p-1 bg-card border border-border rounded-xl shadow-md">
                <TechStackGrid
                  technologies={activeStack.technologies as Tech[]} // Cast ici car hydraté
                  // Pas d'options d'édition pour le mode visiteur
                  // onRemoveTech={isOwner ? handleRemoveTech : undefined}
                  // onUpdateTech={isOwner ? handleUpdateTech : undefined}
                />
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                Select a stack to view its technologies.
              </p>
            )}
          </>
        ) : (
          <div className="text-center py-10 bg-card border border-border rounded-lg p-8">
            <p className="text-lg text-muted-foreground">
              {isOwner
                ? "You haven't created any tech stacks yet."
                : `${
                    user.name || "This user"
                  } hasn't shared any tech stacks yet.`}
            </p>
            {isOwner && (
              <Button asChild className="mt-4">
                <Link href="/dashboard">Create Your First Stack</Link>
              </Button>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
