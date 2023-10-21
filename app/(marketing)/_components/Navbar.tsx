"use client"

import Logo from "@/components/Logo";
import ThemeToggle from "@/components/Theme-Toggle";
import { Button } from "@/components/ui/button";
import { ScrollStatus } from "@/hooks/scroll-status"
import { cn } from "@/lib/utils";

const Navbar = () => {

    const scrolled = ScrollStatus();

  return (
    <div className={cn(`p-6 w-full bg-background fixed top-0 flex items-center z-50 dark:bg-[#1F1F1F]`, scrolled && 'border-b shadow-md')}>
        <Logo />

        <div className="md:ml-auto md:justify-end flex justify-between w-full items-center gap-x-2">
            <ThemeToggle />
        </div>
    </div>
  )
}

export default Navbar