"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signOut, getSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        // Échappe pour fermer le menu mobile
        else if (e.key === "Escape" && isMobileMenuOpen) {
          e.preventDefault();
          setIsMobileMenuOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Nettoyage
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLoggedIn, router, handleSignOut, isMobileMenuOpen]);

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
              <div className="hidden md:flex items-center space-x-4">
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
                    className="hidden md:flex items-center font-medium bg-white/10 hover:bg-black/5 dark:bg-white/5 dark:hover:bg-white/15 text-black dark:text-white rounded-lg px-4 py-1 border border-[var(--sidebar-border)] cursor-pointer"
                  >
                    <span>Sign out</span>
                    <span className="ml-2 text-xs opacity-50 px-1 py-0.5 bg-slate-300/40 dark:bg-slate-700/40 rounded">
                      <span className="hidden sm:inline">Cmd + O</span>
                    </span>
                  </button>
                ) : (
                  <Link
                    href="/auth/signin"
                    className="hidden md:flex items-center font-medium bg-white/10 hover:bg-black/5 dark:bg-white/5 dark:hover:bg-white/15 text-black dark:text-white rounded-lg px-4 py-1 border border-[var(--sidebar-border)]"
                  >
                    <span>Sign in</span>
                    <span className="ml-2 text-xs opacity-50 px-1 py-0.5 bg-slate-300/40 dark:bg-slate-700/40 rounded">
                      Cmd + S
                    </span>
                  </Link>
                )}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-md text-black dark:text-white"
                    aria-label="Open main menu"
                  >
                    {isMobileMenuOpen ? (
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden absolute right-0 mt-2 w-48 bg-background/80 backdrop-blur-sm rounded-lg border border-[var(--sidebar-border)] py-2">
              {isLoggedIn && (
                <>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/explore"
                    className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Explore
                  </Link>
                  <hr className="border-gray-300 dark:border-gray-600 my-1" />
                </>
              )}
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Sign out
                  <span className="ml-2 text-xs opacity-50 px-1 py-0.5 bg-slate-300/40 dark:bg-slate-700/40 rounded md:inline hidden">
                    Cmd + O
                  </span>
                </button>
              ) : (
                <Link
                  href="/auth/signin"
                  className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign in
                  <span className="ml-2 text-xs opacity-50 px-1 py-0.5 bg-slate-300/40 dark:bg-slate-700/40 rounded md:inline hidden">
                    Cmd + S
                  </span>
                </Link>
              )}
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;
