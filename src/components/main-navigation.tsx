import Image from "next/image"
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { links } from "@/lib/sitemap"

import logo from "@/../public/logo.png"
import Link from "next/link"
import { Button } from "./ui/button"

export default function MainNav() {
	return (
		<div className="backdrop-blur bg-background/50 fixed top-0 w-full z-1">
			<div className="container mx-auto p-8 flex flex-row items-center">
				<Link href={"/"}>
					<Image
						src={logo.src}
						alt="DPS Logo"
						width={logo.width}
						height={logo.height}
					/>
				</Link>
				<NavigationMenu className="max-w-full children:w-full">
					<NavigationMenuList className="justify-evenly">
						{links.map(({ title, link }, i) => (
							<Button asChild variant={"ghost"} key={i}>
								<Link
									href={link}
									className="text-4.25!"
									{...(title == "Sample Book" && {
										target: "_blank",
									})}
								>
									{title.toUpperCase()}
								</Link>
							</Button>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	)
}
