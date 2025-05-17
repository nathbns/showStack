"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { RiGithubFill, RiTwitterFill } from "@remixicon/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { signUp, signIn } from "@/lib/auth-client";
import { SignUpFormData, signUpSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function SignUpForm() {
  const router = useRouter();
  const [loadingButtons, setLoadingButtons] = useState({
    github: false,
    twitter: false,
  });

  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleSignUpSocial = async (provider: "github" | "twitter") => {
    setLoadingButtons((prevState) => ({ ...prevState, [provider]: true }));
    try {
      await signIn.social({
        provider: provider,
        callbackURL: "/dashboard",
      });
    } catch (error) {
      setGeneralError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
      toast.error(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoadingButtons((prevState) => ({ ...prevState, [provider]: false }));
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-4 sm:px-0">
      <Card className="w-full rounded-md shadow-none">
        <CardContent className="px-4 pb-6 sm:px-6">
          <CardTitle className="text-center text-xl sm:text-2xl mb-4">
            Create an account
          </CardTitle>
          <form className="flex flex-col gap-4">
            <Button
              className="w-full cursor-pointer"
              variant="outline"
              type="button"
              onClick={() => handleSignUpSocial("github")}
              disabled={loadingButtons.github}
            >
              <RiGithubFill className="me-1" size={16} aria-hidden="true" />
              {loadingButtons.github ? "Signing up..." : "Sign up with GitHub"}
            </Button>
            <Button
              className="w-full cursor-pointer"
              variant="outline"
              type="button"
              onClick={() => handleSignUpSocial("twitter")}
              disabled={loadingButtons.twitter}
            >
              <RiTwitterFill className="me-1" size={16} aria-hidden="true" />
              {loadingButtons.twitter
                ? "Signing up..."
                : "Sign up with Twitter"}
            </Button>

            <div className="text-muted-foreground text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="text-primary underline-offset-4 hover:underline"
              >
                Sign in
              </Link>
            </div>
          </form>
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
