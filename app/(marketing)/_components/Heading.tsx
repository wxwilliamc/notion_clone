"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const HeadingCom = () => {
  return (
    <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold md:mt-6">
            Welcome to <span className="underline underline-offset-2">Gotion</span>, where your thoughts, files, and strategies come together as one.
        </h1>

        <h3 className="text-based sm:text-xl md:text-2xl font-medium">
            Gotion is your dedicated notetaking haven, tailored for personal productivity and organization.
        </h3>

        <Button className="text-lg p-6 font-bold hover:scale-105 transform duration-300 transition">
            Go Note
            <ArrowRight className="w-6 h-6 ml-2"/>
        </Button>
    </div>
  )
}

export default HeadingCom