"use client"

import { Spinner } from "@/components/Spinner"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import { MousePointerClick } from "lucide-react"
import Link from "next/link"

const HeadingCom = () => {

  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Welcome to <span className="underline underline-offset-4">Gotion</span>, where your thoughts, files, and strategies come together as one.
        </h1>

        <h3 className="text-based sm:text-xl md:text-2xl font-medium">
            Gotion is your dedicated notetaking haven, tailored for personal productivity and organization.
        </h3>

        {isAuthenticated && !isLoading && (
          <Button asChild className="text-lg p-6 font-bold hover:scale-105 transform duration-300 transition">
            <Link href='/documents'>
              Go Note
            <MousePointerClick className="w-6 h-6 ml-2"/>
            </Link>
          </Button>
        )}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button>
                Get Gotion Now
              </Button>
            </SignInButton>
          </>
        )}

        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <Spinner size='lg'/>
          </div>
        )}
    </div>
  )
}

export default HeadingCom