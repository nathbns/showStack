"use client";
import { useState, useEffect, useCallback } from "react";
import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { type Tech } from "@/components/tech-stack/tech-stack-grid";
import { allTechnologies } from "@/components/tech-stack/tech-data";
import Image from "next/image";
import { ExternalLink, RefreshCw, CreditCard, Share2 } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import GitHubLogo, { Stripe } from "@/components/logo-card";
import { useParams } from "next/navigation";
import { LoadingSkeleton } from "@/components/ui/skeleton";

const STRIPE_CARD_ID = "internal_stripe_card"; // Assurez-vous que c'est le même ID que sur le dashboard

// --- Interfaces pour les données du profil ---
interface ProfileUser {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  username: string | null;
  description: string | null;
  createdAt: string | null;
  hasStripeConnection?: boolean;
  shareCount?: number;
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

      {tech.isStripeCard && tech.mrr !== undefined && tech.mrrCurrency ? (
        <div className="relative z-10 flex-grow w-full flex flex-col justify-center">
          <span className="text-3xl font-bold text-[var(--text-foreground)]">
            {(tech.mrr / 100).toLocaleString("fr-FR", {
              style: "currency",
              currency: tech.mrrCurrency.toUpperCase(),
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
          <span className="text-xs text-[var(--muted-foreground)]">
            MRR Total
          </span>
        </div>
      ) : (
        tech.description && (
          <div
            className={`text-xs text-[var(--muted-foreground)] mt-1 relative z-10 flex-grow`}
          >
            {tech.description}
          </div>
        )
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
  const username = params.username as string;
  const { data: sessionData, isPending: sessionIsPending } = useSession();

  const [profileData, setProfileData] = useState<PublicProfileData | null>(
    null
  );
  const [userStacks, setUserStacks] = useState<UserStack[]>([]);
  const [activeStackId, setActiveStackId] = useState<number | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentShareCount, setCurrentShareCount] = useState<
    number | undefined
  >(undefined);

  const activeStack = userStacks.find((stack) => stack.id === activeStackId);
  const technologies = activeStack?.technologies || [];

  const hydrateTechnologies = useCallback((rawTechs: any[]): Tech[] => {
    if (!rawTechs) return [];
    console.log(
      "[Profile Page] Hydrating technologies, rawTechs received:",
      rawTechs
    );
    return rawTechs.map((rawTech, index) => {
      const isStripe =
        rawTech.id === STRIPE_CARD_ID ||
        rawTech.technologyId === STRIPE_CARD_ID;
      console.log(
        `[Profile Page] Processing rawTech (${rawTech.name || "No Name"}, ID: ${
          rawTech.id
        }, TechID: ${rawTech.technologyId}, isStripe: ${isStripe}):`,
        {
          isProject: rawTech.isProject,
          url: rawTech.url,
        }
      );

      let icon: React.ReactNode;
      const isProject = rawTech.isProject || false;
      const url = rawTech.url || undefined;
      const favicon = rawTech.favicon || undefined;

      if (isStripe) {
        // Icône spécifique pour Stripe
        icon = (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4764 7.45119C13.4764 6.54994 14.1659 6.12994 15.2364 6.12994C16.6114 6.12994 18.3889 6.63244 19.7239 7.49994V2.93744C18.2699 2.32494 16.8464 2.06244 15.2364 2.06244C11.3764 2.06244 8.77637 4.24494 8.77637 7.67994C8.77637 13.2349 16.2464 12.141 16.2464 14.8575C16.2464 15.9975 15.3539 16.4175 14.2464 16.4175C12.7414 16.4175 10.7764 15.7485 9.30137 14.7524V19.4324C10.9364 20.1675 12.5939 20.4999 14.2464 20.4999C18.1954 20.4999 20.9989 18.3749 20.9989 14.8575C20.9989 8.89119 13.4764 10.1625 13.4764 7.45119Z"
              fill="#635BFF"
            />
          </svg>
        );
      } else if (isProject) {
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
        color: rawTech.color || (isStripe ? "#635BFF" : "#808080"),
        icon: icon,
        technologyId: rawTech.technologyId,
        category: rawTech.category,
        gridSpan: gridSpan,
        order: rawTech.order ?? index,
        isProject: isProject,
        isStripeCard: isStripe,
        favicon: favicon,
        url: url,
        description: rawTech.description,
        stars: rawTech.stars,
        forks: rawTech.forks,
        mrr: rawTech.mrr,
        mrrCurrency: rawTech.mrrCurrency,
      } as Tech;
    });
  }, []);

  useEffect(() => {
    const fetchPublicProfileData = async () => {
      if (!username) {
        setError("Username not found in URL.");
        setIsLoadingProfile(false);
        return;
      }
      setIsLoadingProfile(true);
      setError(null);
      try {
        const response = await fetch(`/api/profile/${username}`);
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
        setCurrentShareCount(data.user.shareCount);
        if (data.stacks && data.stacks.length > 0) {
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
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoadingProfile(false);
      }
    };
    fetchPublicProfileData();
  }, [username, hydrateTechnologies]);

  const handleShareProfile = async () => {
    if (!profileData?.user.id) return;
    try {
      await navigator.clipboard.writeText(window.location.href);
      console.log("Profile link copied to clipboard!");

      const response = await fetch(
        `/api/profile/${profileData.user.username}/share`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        const result = await response.json();
        setCurrentShareCount(result.shareCount);
      } else {
        console.error("Failed to increment share count");
      }
    } catch (err) {
      console.error("Failed to share profile:", err);
    }
  };

  const ProfileHeader = () => {
    if (!profileData?.user) return null;
    const { name, image, description, createdAt, hasStripeConnection } =
      profileData.user;

    return (
      <div className="w-full max-w-4xl mx-auto p-4 md:p-6 bg-[var(--card)] rounded-xl shadow-lg mb-8 border border-[var(--border)] mask-b-from-30%">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {image && (
            <Image
              src={image}
              alt={name || "User avatar"}
              width={128}
              height={128}
              className="rounded-full border-4 border-[var(--primary-foreground)] shadow-md"
            />
          )}
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-foreground)] flex items-center gap-3">
              {name || "Anonymous User"}
              {hasStripeConnection && (
                <div
                  className="flex items-center justify-center hidden md:flex ml-3 mt-1 bg-[#635BFF]/40 hover:bg-[#635BFF]/60 py-0.5 px-1 rounded-sm transition-all duration-300 cursor-pointer"
                  title="Connecté à Stripe"
                >
                  <Stripe />
                </div>
              )}
            </h1>
            {description && (
              <p className="text-md text-[var(--muted-foreground)] mt-2">
                {description}
              </p>
            )}
            {createdAt && (
              <p className="text-xs text-[var(--muted-foreground)] mt-1">
                Joined: {new Date(createdAt).toLocaleDateString()}
              </p>
            )}
          </div>
          <div className="flex flex-col items-center md:items-end gap-2 mt-4 md:mt-0">
            <Button
              onClick={handleShareProfile}
              variant="outline"
              className="flex items-center gap-2 bg-transparent border-[var(--border)] hover:bg-[var(--hover-background)] hover:border-[var(--primary)] text-[var(--text-foreground)]"
            >
              <Share2 size={18} />
              Share Profile
            </Button>
            {currentShareCount !== undefined && (
              <p className="text-xs text-[var(--muted-foreground)]">
                Shared {currentShareCount} times
              </p>
            )}
          </div>
        </div>
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
        <GlowingEffect className="rounded-lg" />
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
    return <LoadingSkeleton />;
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
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-24">
      <div className="flex-grow container mx-auto px-4">
        <ProfileHeader />
        <BentoGridSection />
      </div>
    </div>
  );
}
