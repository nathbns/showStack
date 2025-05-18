"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { RiGithubFill } from "@remixicon/react";
import { toast } from "sonner";

import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SignInForm() {
  const router = useRouter();
  const [loadingButtons, setLoadingButtons] = useState({
    github: false,
  });

  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleLoginSocial = async (provider: "github") => {
    setLoadingButtons((prevState) => ({ ...prevState, [provider]: true }));
    setGeneralError(null);
    try {
      await signIn.social({
        provider: provider,
      });
      toast.success(`Attempting to sign in with ${provider}...`);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred during social sign-in";
      setGeneralError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoadingButtons((prevState) => ({ ...prevState, [provider]: false }));
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-4 sm:px-0">
      <Card className="w-full rounded-md shadow-none">
        <CardHeader className="flex flex-col items-center gap-2 px-4 sm:px-6">
          <CardTitle className="text-center text-xl sm:text-2xl">
            Sign In
          </CardTitle>
          <CardDescription className="text-center">
            Connect with your GitHub account to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 pb-6 sm:px-6">
          {generalError && (
            <p className="text-sm text-red-500 text-center">{generalError}</p>
          )}
          <div className="flex flex-col gap-4">
            <Button
              className="w-full cursor-pointer"
              variant="outline"
              type="button"
              onClick={() => handleLoginSocial("github")}
              disabled={loadingButtons.github}
            >
              <RiGithubFill className="me-1" size={16} aria-hidden="true" />
              {loadingButtons.github ? "Signing in..." : "Sign In with GitHub"}
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground [&_a]:hover:text-primary px-4 text-center text-xs text-balance [&_a]:underline [&_a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <Link href="/legal/terms">Terms of Service</Link> and{" "}
        <Link href="/legal/privacy">Privacy Policy</Link>.
      </div>
    </div>
  );
}
