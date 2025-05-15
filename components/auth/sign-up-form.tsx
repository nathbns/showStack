"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { RiGithubFill } from "@remixicon/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { signUp, signIn } from "@/lib/auth-client";
import { SignUpFormData, signUpSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ImageUpload } from "../profile/image-upload";

export function SignUpForm() {
  const router = useRouter();
  const [loadingButtons, setLoadingButtons] = useState({
    google: false,
    email: false,
    github: false,
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleSignUpSocial = async (provider: "google" | "github") => {
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

  const handleImageUpload = (imageUrl: string) => {
    setProfileImage(imageUrl);
    setValue("profileImage", imageUrl);
  };

  const handleSignUpEmail = async (data: SignUpFormData) => {
    try {
      setLoadingButtons((prevState) => ({ ...prevState, email: true }));
      setGeneralError(null);

      await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.profileImage,
        callbackURL: "/dashboard",
      });
      toast.success("Account created successfully! Redirecting...");
      router.push("/dashboard");
    } catch (error) {
      setGeneralError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
      toast.error(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoadingButtons((prevState) => ({ ...prevState, email: false }));
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-4 sm:px-0">
      <Card className="w-full rounded-md shadow-none">
        <CardHeader className="flex flex-col items-center gap-2 px-4 sm:px-6">
          <CardTitle className="text-center text-xl sm:text-2xl">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your details to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 pb-6 sm:px-6">
          <form
            onSubmit={handleSubmit(handleSignUpEmail)}
            className="flex flex-col gap-4"
          >
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
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">
                Or continue with email
              </span>
            </div>
            <div className="flex justify-center my-2">
              <ImageUpload
                onImageUpload={handleImageUpload}
                initialImage={profileImage}
                isRegister={true}
              />
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name")}
                  placeholder="Your Name"
                  className="w-full"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="m@example.com"
                  className="w-full"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="w-full"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {generalError && (
                <p className="text-center text-sm text-red-500">
                  {generalError}
                </p>
              )}
              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={loadingButtons.email}
              >
                {loadingButtons.email
                  ? "Creating account..."
                  : "Create account"}
              </Button>
            </div>
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
