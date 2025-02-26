import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import AuthForm from "@/app/auth/components/AuthForm"
import { AuthFormLegacy } from '@/app/auth-server-action/components/AuthFormLegacy'

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
          src="https://quantumone.b-cdn.net/onyx/resendit-onboard-1.jpg"
          width={2048}
          height={2048}
          alt="Onboarding-two"
          style={{objectFit: "contain"}}
          
        />
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg width="32" height="24" viewBox="0.000000 0.000000 32 24" stroke="none" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
<path d='M78.6 137.0 C74.1 155.5 47.3 149.6 52.0 131.7 C57.9 119.2 63.9 106.9 70.0 94.7 C73.1 88.6 71.6 85.8 64.9 85.8 C48.7 84.0 0.0 94.7 14.2 64.1 C22.5 52.3 56.3 63.0 70.3 57.2 C67.8 44.2 58.5 33.8 53.9 21.5 C48.9 10.3 60.6 0.0 71.6 4.2 C74.1 4.5 76.7 8.5 78.3 11.4 C87.0 28.1 96.2 44.7 105.1 61.3 C107.2 
        67.3 111.3 74.5 106.3 80.2 C96.2 98.8 89.1 118.8 78.6 137.0 M18.3 77.3 C29.8 87.7 79.5 70.5 76.7 89.8 C74.1 101.8 48.4 135.5 61.5 142.5 C74.5 146.9 76.7 125.8 82.3 117.9 C88.7 103.5 95.3 89.2 102.3 75.2 C104.8 67.5 97.2 60.6 94.7 53.7 C88.1 41.0 81.3 28.3 75.4 15.2 C69.9 3.0 53.3 9.1 59.3 21.3 C63.4 
        32.3 90.0 62.8 65.1 63.7 C53.6 64.0 42.1 63.8 30.6 63.8 C22.1 63.8 14.8 65.1 18.3 77.3 ' fill ="currentColor" stroke="none"/>
<path d='M169.3 139.8 C168.5 152.7 150.8 157.0 144.7 145.5 C134.6 125.6 125.0 105.4 115.4 85.3 C109.1 64.7 128.4 45.8 135.4 27.3 C141.0 19.4 146.0 2.6 158.5 7.5 C163.6 9.6 167.3 12.7 167.5 19.1 C166.4 33.3 156.5 43.9 150.6 56.1 C144.2 68.0 189.1 61.2 196.0 62.7 C213.1 62.6 213.8 88.3 197.9 88.7 C181.8 90.2 
        165.3 87.9 149.4 91.2 C153.0 108.4 166.3 122.8 169.3 139.8 M156.8 121.8 C129.5 71.4 152.2 87.5 191.5 84.7 C196.0 84.7 200.9 83.9 203.2 79.7 C212.2 60.0 164.7 70.1 154.3 67.8 C130.2 65.2 163.8 31.7 162.1 18.2 C162.8 13.7 155.7 10.8 151.6 12.9 C142.0 20.5 140.3 33.6 134.0 43.6 C115.5 78.0 113.4 71.3 
        131.8 106.7 C138.3 118.5 143.3 131.0 149.3 142.9 C150.2 144.8 153.3 146.5 155.4 146.5 C169.2 146.0 161.7 129.0 156.8 121.8 ' fill ="currentColor" stroke="none"/>
</svg>
            
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