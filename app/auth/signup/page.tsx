"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createAuthClient } from "better-auth/client";
import { SignUpForm } from "@/components/auth/sign-up-form";

const authClient = createAuthClient();

export default function SignUpPage() {
  const handleGithubSignIn = async () => {
    await authClient.signIn.social({ provider: "github" });
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <SignUpForm />
    </div>
  );
}
