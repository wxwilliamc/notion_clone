"use client"

import Logo from "@/components/Logo";
import ThemeToggle from "@/components/Theme-Toggle";
import { Button } from "@/components/ui/button";
import { ScrollStatus } from "@/hooks/scroll-status"
import { cn } from "@/lib/utils";
import NavigationCard from "./NavigationCard";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/Spinner";
import Link from "next/link";

const Navbar = () => {

    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = ScrollStatus();

  return (
    <div className={cn(`p-6 w-full bg-background fixed top-0 flex items-center z-50 dark:bg-[#1F1F1F]`, scrolled && 'border-b shadow-md')}>
        <Logo />

        <NavigationCard />

        <div className="md:ml-auto md:justify-end flex justify-between w-full items-center gap-x-2">
            {isLoading && (
              <Spinner 
                size="lg"
              />
            )}
            {!isAuthenticated && !isLoading && (
              <>
                <SignInButton mode="modal">
                  <Button variant='ghost'>
                    Sign in
                  </Button>
                </SignInButton>

                <SignInButton mode="modal">
                  <Button>
                    Get Gotion Free
                  </Button>
                </SignInButton>
              </>
            )}

            <ThemeToggle />

            {isAuthenticated && !isLoading && (
              <>
                <Button asChild variant='ghost'>
                  <Link href='/documents'>
                    Enter Gotion
                  </Link>
                </Button>
              </>
            )}
          
            {isAuthenticated && !isLoading && (
              <>
                <UserButton afterSignOutUrl="/"/>
              </>
            )}
        </div>
    </div>
  )
}

export default Navbar