"use client";
import { useState, useEffect, useCallback } from "react";
import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { type Tech } from "@/components/tech-stack/tech-stack-grid";
import { allTechnologies } from "@/components/tech-stack/tech-data";
import Image from "next/image";
import { ExternalLink, RefreshCw } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import GitHubLogo from "@/components/logo-card";
import { useParams } from "next/navigation";

// --- Interfaces pour les données du profil ---
interface ProfileUser {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  description: string | null;
  createdAt: string | null;
}

export interface UserStack {
  id: number;
  name: string;
  technologies: Tech[];
  createdAt?: string;
  updatedAt?: string;
}

interface PublicProfileData {
  user: ProfileUser;
  stacks: UserStack[];
}
// --- Fin Interfaces ---

const iconMap: Record<string, React.ReactNode> = {};
allTechnologies.forEach((tech) => {
  iconMap[tech.id.toLowerCase()] = tech.icon;
});

const getDefaultIcon = (name: string) => (
  <span className="flex items-center justify-center w-full h-full text-sm font-bold bg-[var(--muted)] text-[var(--muted-foreground)] rounded-sm">
    {name?.charAt(0)?.toUpperCase() || "?"}
  </span>
);

function TechDisplayCard({
  tech,
  gridMax,
}: {
  tech: Tech;
  gridMax: { cols: number; rows: number };
}) {
  const colSpan = tech.gridSpan?.cols || 1;
  const rowSpan = tech.gridSpan?.rows || 1;

  let colSpanClass = "col-span-1";
  if (colSpan === 2) {
    colSpanClass = "col-span-1 md:col-span-2";
  } else if (colSpan === 3) {
    colSpanClass = "col-span-1 md:col-span-2 lg:col-span-3";
  }
  const rowSpanClass = rowSpan === 2 ? "row-span-2" : "row-span-1";

  const gapPx = 16;
  let minHeight = rowSpan * 150 + (rowSpan - 1) * gapPx;

  const isGithubProject =
    tech.isProject && tech.url && tech.url.startsWith("https://github.com/");

  const CardContent = (
    <div
      className="bento-card h-full p-4 rounded-2xl border border-[var(--border)] flex flex-col items-start backdrop-blur-md relative overflow-hidden group transition-shadow hover:shadow-lg hover:border-[var(--primary)]"
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
        <span className="font-semibold text-lg text-[var(--text-foreground)]">
          {tech.name}
        </span>
      </div>
      {tech.description && (
        <div
          className={`text-xs text-[var(--muted-foreground)] mt-1 relative z-10 flex-grow`}
        >
          {tech.description}
        </div>
      )}
      {isGithubProject &&
        (tech.stars !== undefined || tech.forks !== undefined) && (
          <div className="flex gap-4 items-center mt-auto pt-2 text-xs text-[var(--muted-foreground)] relative z-10 self-start">
            {tech.stars !== undefined && (
              <span title="Stars">⭐ {tech.stars ?? 0}</span>
            )}
            {tech.forks !== undefined && (
              <span title="Forks">🍴 {tech.forks ?? 0}</span>
            )}
          </div>
        )}
    </div>
  );

  const WrapperElement = tech.url && tech.isProject ? "a" : "div";

  const wrapperProps: any = {
    className: `relative group ${colSpanClass} ${rowSpanClass} block`,
  };

  if (WrapperElement === "a") {
    wrapperProps.href = tech.url;
    wrapperProps.target = "_blank";
    wrapperProps.rel = "noopener noreferrer";
    wrapperProps["aria-label"] = `Voir le projet ${tech.name}`;
    wrapperProps.tabIndex = 0;
  }
  return <WrapperElement {...wrapperProps}>{CardContent}</WrapperElement>;
}

export default function UserProfilePage() {
  const params = useParams();
  const userId = params.userId as string;
  const { data: sessionData, isPending: sessionIsPending } = useSession();

  const [profileData, setProfileData] = useState<PublicProfileData | null>(
    null
  );
  const [userStacks, setUserStacks] = useState<UserStack[]>([]);
  const [activeStackId, setActiveStackId] = useState<number | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const activeStack = userStacks.find((stack) => stack.id === activeStackId);
  const technologies = activeStack?.technologies || [];

  const hydrateTechnologies = useCallback((rawTechs: any[]): Tech[] => {
    if (!rawTechs) return [];
    console.log(
      "[Profile Page] Hydrating technologies, rawTechs received:",
      rawTechs
    );
    return rawTechs.map((rawTech, index) => {
      console.log(
        `[Profile Page] Processing rawTech (${rawTech.name || "No Name"}):`,
        {
          isProject: rawTech.isProject,
          url: rawTech.url,
          id: rawTech.id,
          technologyId: rawTech.technologyId,
        }
      );

      let icon: React.ReactNode;
      const isProject = rawTech.isProject || false;
      const url = rawTech.url || undefined;
      const favicon = rawTech.favicon || undefined;

      if (isProject) {
        if (
          url &&
          typeof url === "string" &&
          url.startsWith("https://github.com/")
        ) {
          icon = <GitHubLogo width={24} height={24} />;
        } else if (favicon) {
          icon = (
            <img
              src={favicon}
              alt={rawTech.name || "Favicon"}
              width={24}
              height={24}
              style={{ objectFit: "contain" }}
            />
          );
        } else {
          icon = <ExternalLink size={24} />;
        }
      } else {
        const techIdToLookup =
          rawTech.technologyId?.toLowerCase() ||
          rawTech.name?.toLowerCase() ||
          "";
        icon =
          iconMap[techIdToLookup] || getDefaultIcon(rawTech.name || "Unknown");
        if (!iconMap[techIdToLookup]) {
          console.log(
            `[Profile Page] Icon not found in iconMap for '${techIdToLookup}', using default icon for '${
              rawTech.name || "Unknown"
            }'.`
          );
        }
      }
      const gridCols = parseInt(rawTech.gridCols || "1", 10);
      const gridRows = parseInt(rawTech.gridRows || "1", 10);
      const gridSpan =
        gridCols > 1 || gridRows > 1
          ? { cols: gridCols as 1 | 2 | 3, rows: gridRows as 1 | 2 }
          : undefined;

      return {
        id: String(rawTech.id),
        name: rawTech.name || "Unnamed Item",
        color: rawTech.color || "#808080",
        icon: icon,
        technologyId: rawTech.technologyId,
        category: rawTech.category,
        gridSpan: gridSpan,
        order: rawTech.order ?? index,
        isProject: isProject,
        favicon: favicon,
        url: url,
        description: rawTech.description,
        stars: rawTech.stars,
        forks: rawTech.forks,
      } as Tech;
    });
  }, []);

  useEffect(() => {
    const fetchPublicProfileData = async () => {
      if (!userId) {
        setError("User ID not found in URL.");
        setIsLoadingProfile(false);
        return;
      }
      setIsLoadingProfile(true);
      setError(null);
      try {
        const response = await fetch(`/api/profile/${userId}`);
        if (!response.ok) {
          const errorData = await response
            .json()
            .catch(() => ({ error: "Failed to parse error response" }));
          throw new Error(
            errorData.error ||
              `Failed to fetch profile (status: ${response.status})`
          );
        }
        const data: PublicProfileData = await response.json();

        setProfileData(data);

        const hydratedStacks = (data.stacks || []).map((stack) => ({
          ...stack,
          technologies: hydrateTechnologies(stack.technologies || []),
        }));
        setUserStacks(hydratedStacks);

        if (hydratedStacks.length > 0) {
          setActiveStackId(hydratedStacks[0].id);
        } else {
          setActiveStackId(null);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoadingProfile(false);
      }
    };
    fetchPublicProfileData();
  }, [userId, hydrateTechnologies]);

  const ProfileHeader = () => {
    if (!profileData?.user) return null;
    const user = profileData.user;
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        {user.image && (
          <div className="relative w-28 h-28 mb-5 shadow-lg rounded-full">
            <Image
              src={user.image}
              alt={user.name || "Avatar"}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        )}
        <h1 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">
          {user.name || "Anonymous User"}
        </h1>
        {user.description && (
          <p className="text-md text-[var(--muted-foreground)] mt-3 max-w-2xl whitespace-pre-line">
            {user.description}
          </p>
        )}
        {sessionData?.user?.id === userId && (
          <Button asChild variant="outline" className="mt-6">
            <a href="/dashboard">Edit Your Profile & Stacks</a>
          </Button>
        )}
      </div>
    );
  };

  const StacksSelector = () => {
    if (!userStacks || userStacks.length === 0) {
      return (
        <div className="text-center py-4 text-[var(--muted-foreground)]">
          This user has not created any stacks yet.
        </div>
      );
    }
    return (
      <div className="flex flex-wrap justify-center items-center gap-3 px-4 py-6 mb-8 max-w-4xl mx-auto">
        {userStacks.map((stack) => (
          <Button
            key={stack.id}
            variant={activeStackId === stack.id ? "default" : "outline"}
            onClick={() => setActiveStackId(stack.id)}
            className={`px-5 py-2 rounded-lg shadow-sm transition-all border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)] ${
              activeStackId === stack.id
                ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)] scale-105"
                : "bg-[var(--card)] text-[var(--foreground)] border-[var(--border)] hover:bg-[var(--accent)] hover:border-[var(--primary)]"
            }`}
          >
            <span className="text-md font-medium">{stack.name}</span>
          </Button>
        ))}
      </div>
    );
  };

  const BentoGridSection = () => {
    if (!activeStack) {
      if (userStacks && userStacks.length > 0) {
        return (
          <div className="text-center py-12 bg-[var(--card)] rounded-lg shadow h-full flex flex-col justify-center items-center min-h-[300px]">
            <p className="text-[var(--muted-foreground)]">
              Select a stack to view its technologies.
            </p>
          </div>
        );
      }
      return null;
    }

    const gridMax = { cols: 3, rows: 2 };

    return (
      <div className="relative w-full bg-[var(--card)] p-4 sm:p-6 rounded-xl border border-[var(--border)] flex flex-col max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
            {activeStack.name}
          </h2>
        </div>
        {technologies.length === 0 ? (
          <div className="text-center py-12 flex-grow flex flex-col justify-center items-center min-h-[200px]">
            <p className="text-[var(--muted-foreground)]">
              This stack is empty.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
              .map((tech) => (
                <TechDisplayCard key={tech.id} tech={tech} gridMax={gridMax} />
              ))}
          </div>
        )}
      </div>
    );
  };

  if (isLoadingProfile) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        Loading profile...
      </div>
    );
  }

  if (error || !profileData?.user) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[var(--background)] text-[var(--foreground)] p-4 text-center">
        <p className="text-xl text-destructive mb-2">Error Loading Profile</p>
        <p className="text-sm text-[var(--muted-foreground)]">
          {error ||
            "User data could not be found. The profile may not exist or there was an issue fetching it."}
        </p>
        <Button asChild variant="outline" className="mt-6">
          <a href="/">Go to Homepage</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="flex-grow container mx-auto px-4 py-8">
        <ProfileHeader />
        <StacksSelector />
        <BentoGridSection />
      </div>
    </div>
  );
}
