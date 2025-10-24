"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  return (
    <div className="min-h-screen w-full flex">
      <div className="hidden lg:flex w-1/2 relative bg-muted">
        <Image
          src="/image.png"
          alt="Sign In"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-muted/50">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome to MySosmed
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>
          <Card className="p-6 border">
            <div className="space-y-4">
              <Button
                variant={"outline"}
                size={"lg"}
                className="w-full hover:border-primary transition-colors"
                onClick={() => signIn("github", { redirectTo: "/" })}
              >
                <FaGithub className="size-5 mr-2" />
                <span>Continue with Github</span>
              </Button>
              <Button
                variant={"outline"}
                size={"lg"}
                className="w-full hover:border-primary transition-colors"
                onClick={() => signIn("google")}
              >
                <FcGoogle className="size-5 mr-2" />
                <span>Continue with Google</span>
              </Button>
            </div>
          </Card>

          <div className="space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              By continuing, you agreen to our{" "}
              <Link href="/terms">Terms of Service</Link> and{" "}
              <Link href="/policy">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
