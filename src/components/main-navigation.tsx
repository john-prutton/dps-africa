import Image from "next/image"
import Link from "next/link"

import {
	NavigationMenu,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import { links } from "@/lib/sitemap"
import logo from "@/../public/logo.png"

import { MenuIcon } from "lucide-react"

export default function MainNav() {
	return (
		<div className="backdrop-blur bg-background/30 fixed top-0 w-full z-1">
			<div className="container mx-auto px-2 py-4 sm:px-4 sm:py-8 flex flex-row items-center justify-between">
				<Link href={"/"} className="relative aspect-110/58 h-8 sm:h-12">
					<Image src={logo.src} alt="DPS Logo" fill />
				</Link>

				<NavigationMenu className="lt-sm:hidden max-w-full children:w-full">
					<NavigationMenuList className="justify-evenly">
						<Links />
					</NavigationMenuList>
				</NavigationMenu>

				<Sheet>
					<SheetTrigger className="sm:hidden">
						<MenuIcon />
					</SheetTrigger>
					<SheetContent className="flex flex-col flex-1 justify-center gap-8 items-center children:text-center">
						<Links />
					</SheetContent>
				</Sheet>
			</div>
		</div>
	)
}

function Links() {
	return (
		<>
			{links.map(({ title, link }, i) => (
				<Button
					asChild
					variant={title === "Contact Us" ? "default" : "ghost"}
					key={i}
				>
					<Link
						href={link}
						className="sm:text-4.25!"
						{...(title == "Sample Book" && {
							target: "_blank",
						})}
					>
						{title}
					</Link>
				</Button>
			))}
		</>
	)
}
