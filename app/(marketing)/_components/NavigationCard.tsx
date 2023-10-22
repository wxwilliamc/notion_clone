import { cn } from "@/lib/utils"
import React from "react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { components } from "@/constants/data"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const NavigationCard = () => {
  return (
    <NavigationMenu>
        <NavigationMenuList className="hidden md:flex md:space-x-1 max-w-2xl items-center justify-center pl-12">
            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md font-medium">Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-1 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem title="Blog"/>
                            <ListItem title="Guides & Tutorials"/>
                            <ListItem title="Webinars"/>
                            <ListItem title="Help Center"/>
                            <ListItem title="Community"/>
                            <ListItem title="Find a consultant"/>
                        </ul>
                    </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md font-medium">Product</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                            <ListItem
                            key={component.title}
                            title={component.title}
                            >
                            {component.description}
                            </ListItem>
                        ))}
                        </ul>
                    </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="font-medium">
                    Pricing
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md font-medium">Download</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-1 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem title="iOS & Android"/>
                            <ListItem title="Mac & Windows"/>
                        </ul>
                    </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationCard