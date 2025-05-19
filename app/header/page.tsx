"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signOut, getSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    setIsLoggedIn(false);
    router.push("/");
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const loggedIn = await getSession();
        setIsLoggedIn(loggedIn.data?.user.id !== undefined);
      } catch (error) {
        console.error("Erreur lors de la vérification de la session:", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkLogin();
  }, []);

  // Gestion des raccourcis clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Vérifier si cmd/ctrl est pressé
      if (e.metaKey || e.ctrlKey) {
        // Cmd+O pour se déconnecter
        if (e.key === "o" && isLoggedIn) {
          e.preventDefault();
          handleSignOut();
        }
        // Cmd+S pour se connecter
        else if (e.key === "s" && !isLoggedIn) {
          e.preventDefault();
          router.push("/auth/signin");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Nettoyage
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLoggedIn, router, handleSignOut]);

  if (isLoading) {
    return (
      <div className="fixed top-3 left-0 w-full z-50 flex justify-center">
        <nav className="max-w-4xl h-12 w-full filter backdrop-blur-sm bg-background/80 rounded-lg border-2 border-[var(--sidebar-border)]">
          <div className="px-4 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="text-2md font-bold">BentoGr.id</div>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-3 left-0 w-full z-50 flex justify-center transition-opacity duration-300">
        <nav className="max-w-4xl h-12 w-full filter backdrop-blur-sm bg-background/60 rounded-lg border-1 border-[var(--sidebar-border)] border-dashed">
          <div className="px-4 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="text-2md font-bold">BentoGr.id</div>
              <div className="flex items-center space-x-4">
                {isLoggedIn && (
                  <>
                    <Link
                      href="/dashboard"
                      className="relative cursor-pointer group"
                    >
                      <span className="relative z-10">Dashboard</span>
                      <span
                        className="absolute left-0 -bottom-0.5 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                        style={{
                          backgroundSize: "6px 1px",
                          backgroundImage:
                            "linear-gradient(to right, var(--sidebar-border) 50%, transparent 50%)",
                          backgroundRepeat: "repeat-x",
                        }}
                        aria-hidden="true"
                      ></span>
                    </Link>
                    <Link
                      href="/explore"
                      className="relative cursor-pointer group"
                    >
                      <span className="relative z-10">Explore</span>
                      <span
                        className="absolute left-0 -bottom-0.5 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                        style={{
                          backgroundSize: "6.5px 1px",
                          backgroundImage:
                            "linear-gradient(to right, var(--sidebar-border) 50%, transparent 50%)",
                          backgroundRepeat: "repeat-x",
                        }}
                        aria-hidden="true"
                      ></span>
                    </Link>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                {isLoggedIn ? (
                  <button
                    onClick={handleSignOut}
                    className="flex items-center font-medium bg-white/10 hover:bg-black/5 dark:bg-white/5 dark:hover:bg-white/15 text-black dark:text-white rounded-lg px-4 py-1 border border-[var(--sidebar-border)] cursor-pointer"
                  >
                    <span>Sign out</span>
                    <span className="ml-2 text-xs opacity-50 px-1 py-0.5 bg-slate-300/40 dark:bg-slate-700/40 rounded">
                      Cmd + O
                    </span>
                  </button>
                ) : (
                  <>
                    <Link
                      href="/auth/signin"
                      className="flex items-center font-medium bg-white/10 hover:bg-black/5 dark:bg-white/5 dark:hover:bg-white/15 text-black dark:text-white rounded-lg px-4 py-1 border border-[var(--sidebar-border)]"
                    >
                      <span>Sign in</span>
                      <span className="ml-2 text-xs opacity-50 px-1 py-0.5 bg-slate-300/40 dark:bg-slate-700/40 rounded">
                        Cmd + S
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
