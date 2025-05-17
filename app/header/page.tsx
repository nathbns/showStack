"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signOut, getSession } from "@/lib/auth-client";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSignOut = async () => {
    await signOut();
    setIsLoggedIn(false);
    window.location.reload();
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

  if (isLoading) {
    return (
      <div className="fixed top-3 left-0 w-full z-50 flex justify-center">
        <nav className="max-w-4xl h-12 w-full filter backdrop-blur-sm bg-background/80 rounded-lg border-2 border-[var(--sidebar-border)]">
          <div className="px-4 h-full">
            <div className="flex items-center justify-between h-full">
              <Link href="/" className="text-2md font-bold">
                SpreadStack
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-3 left-0 w-full z-50 flex justify-center transition-opacity duration-300">
        <nav className="max-w-4xl h-12 w-full filter backdrop-blur-sm bg-background/80 rounded-lg border-2 border-[var(--sidebar-border)]">
          <div className="px-4 h-full">
            <div className="flex items-center justify-between h-full">
              <Link href="/" className="text-2md font-bold">
                SpreadStack
              </Link>
              <div className="flex items-center space-x-4">
                {isLoggedIn && (
                  <>
                    <Link href="/dashboard" className="hover:text-primary">
                      Dashboard
                    </Link>
                    <Link href="/explore" className="hover:text-primary">
                      Explore
                    </Link>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                {isLoggedIn ? (
                  <button
                    onClick={handleSignOut}
                    className="flex items-center font-medium bg-white/10 hover:bg-black/5 dark:bg-white/5 dark:hover:bg-white/15 text-black dark:text-white rounded-lg px-4 py-1 border border-[var(--sidebar-border)]"
                  >
                    <span>Sign out</span>
                    <span className="ml-2 text-xs opacity-50 px-1.5 py-0.5 bg-slate-300/40 dark:bg-slate-700/40 rounded">
                      O
                    </span>
                  </button>
                ) : (
                  <>
                    <Link
                      href="/auth/signin"
                      className="flex items-center font-medium bg-white/10 hover:bg-black/5 dark:bg-white/5 dark:hover:bg-white/15 text-black dark:text-white rounded-lg px-4 py-1 border border-[var(--sidebar-border)]"
                    >
                      <span>Sign in</span>
                      <span className="ml-2 text-xs opacity-50 px-0.5 py-0.5 bg-slate-300/40 dark:bg-slate-700/40 rounded">
                        S
                      </span>
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="flex items-center font-medium bg-white/10 hover:bg-black/5 dark:bg-white/5 dark:hover:bg-white/15 text-black dark:text-white rounded-lg px-4 py-1 border border-[var(--sidebar-border)]"
                    >
                      <span>Sign Up</span>
                      <span className="ml-2 text-xs opacity-50 px-1.5 py-0.5 bg-slate-300/40 dark:bg-slate-700/40 rounded">
                        U
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
