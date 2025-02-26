import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import AuthForm from "@/app/auth/components/AuthForm"
import { AuthFormLegacy } from '@/app/auth-server-action/components/AuthFormLegacy'
import { Icon } from "@radix-ui/react-select"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Onboarding",
  description: "Resend-it new customer onboarding",
}

export default function OnboardingPage() {
  return (
    <>
      <div className="hidden">
        <Image
          src="https://quantumone.b-cdn.net/onyx/IMG_4777.jpeg"
          width={1280}
          height={843}
          alt="Onboarding"
          className="block dark:hidden"
        />
        <Image
          src="https://quantumone.b-cdn.net/onyx/IMG_5036.jpeg"
          width={1280}
          height={843}
          alt="Onboarding-two"
          className="hidden"
        />
      </div>
      <div className="container relative h-[640px] grid grid-cols-1 flex-col items-center justify-center mx-auto md:grid-cols-2 lg:max-w-none lg:px-0">
        <Link
          href="/auth"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white md:flex dark:border-r">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          <Image
          src="https://quantumone.b-cdn.net/onyx/resendit-og-image.png"
          width={2048}
          height={2048}
          alt="resend-it-og-image"
          style={{objectFit: "contain"}}
          
        />
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
          <Icons.resenditIcon className="h-6 w-6" /> 
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;In 6 months, Resend-It has increased our conversions and NPS by 68% and
                58% respectively.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <AuthFormLegacy />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}