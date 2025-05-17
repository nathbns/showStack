"use client";

import { /* useEffect, */ useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { RiGithubFill, RiTwitterFill } from "@remixicon/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { signIn } from "@/lib/auth-client";
import { SignInFormData, signInSchema } from "@/lib/validations/auth";
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
    twitter: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleLogin = async (provider: string) => {
    setLoadingButtons((prevState) => ({ ...prevState, [provider]: true }));
    try {
      await signIn.social({
        provider: provider as "github" | "twitter",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      setGeneralError(
        error instanceof Error ? error.message : "An error occurred"
      );
      toast.error(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoadingButtons((prevState) => ({ ...prevState, [provider]: false }));
    }
  };

  const handleLoginEmail = async (data: SignInFormData) => {
    const options = {
      email: data.email,
      password: data.password,
      callbackURL: "/dashboard",
    };

    try {
      setLoadingButtons((prevState) => ({ ...prevState, email: true }));
      setGeneralError(null);

      const response = await signIn.email(options);
      console.log(
        "Auth Response (Bad Password Scenario):",
        JSON.stringify(response, null, 2)
      );

      if (response && response.error) {
        let errorMessage =
          "The email or password you entered is incorrect. Please try again.";
        if (response.error.message) {
          if (response.error.code === "INVALID_EMAIL_OR_PASSWORD") {
            errorMessage =
              "Invalid email or password. Please check your credentials and try again.";
          } else if (response.error.code === "USER_NOT_FOUND") {
            errorMessage =
              "No account found with that email address. Please sign up or try a different email.";
          } else {
            errorMessage = response.error.message;
          }
        }
        setGeneralError(errorMessage);
        toast.error(errorMessage);
      } else if (response && response.data) {
        toast.success("Successfully signed in!");
        router.push("/dashboard");
      } else {
        console.error("Unexpected auth response structure:", response);
        setGeneralError("An unexpected issue occurred. Please try again.");
        toast.error("An unexpected issue occurred. Please try again.");
      }
    } catch (error: any) {
      console.error(
        "Auth Error Caught in Catch Block:",
        JSON.stringify(error, null, 2)
      );
      let errorMessage = "An unexpected error occurred. Please try again.";
      if (error && typeof error.message === "string") {
        errorMessage =
          error.message.length < 150
            ? error.message
            : "An error occurred during login.";
      }
      setGeneralError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoadingButtons((prevState) => ({ ...prevState, email: false }));
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-4 sm:px-0">
      <Card className="w-full rounded-md shadow-none">
        <CardHeader className="flex flex-col items-center gap-2 px-4 sm:px-6">
          <CardTitle className="text-center text-xl sm:text-2xl">
            Welcome back
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 pb-6 sm:px-6">
          <form
            onSubmit={handleSubmit(handleLoginEmail)}
            className="flex flex-col gap-4"
          >
            <Button
              className="w-full cursor-pointer"
              variant="outline"
              type="button"
              onClick={() => handleLogin("github")}
              disabled={loadingButtons.github}
            >
              <RiGithubFill className="me-1" size={16} aria-hidden="true" />
              {loadingButtons.github ? "Loading..." : "Login with GitHub"}
            </Button>
            <Button
              className="w-full cursor-pointer"
              variant="outline"
              type="button"
              onClick={() => handleLogin("twitter")}
              disabled={loadingButtons.twitter}
            >
              <RiTwitterFill className="me-1" size={16} aria-hidden="true" />
              {loadingButtons.twitter ? "Loading..." : "Login with Twitter"}
            </Button>
            <div className="text-muted-foreground text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="text-primary underline-offset-4 hover:underline"
              >
                Sign up
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
