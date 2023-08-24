import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import heroImg from "@/../public/dps-ceilings-1.jpg"

export function Hero() {
	return (
		<article className="w-full h-screen relative">
			{/* Background image */}
			<Image
				src={heroImg.src}
				alt="DPS stretch ceiling"
				placeholder="blur"
				blurDataURL={heroImg.blurDataURL}
				fill
				priority={true}
				className="object-cover brightness-30"
			/>

			{/* Floating Content */}
			<div className="absolute w-90% left-1/2 -translate-x-1/2 bottom-1/10 sm:bottom-1/3 sm:translate-y-1/2 sm:w-2xl sm:max-w-90vw">
				<h1 className="font-black text-2xl text-primary sm:text-5xl">
					STRETCH CEILINGS & WALLS
				</h1>

				<p className="tracking-wide my-4 sm:my-8 sm:leading-loose">
					For 25 years we have helped bring to life amazing design
					ideas.
					<span className="lt-sm:hidden">
						{" "}
						Over 1 000 000 m2 of DPS stretch ceilings have been
						installed across the world in both commercial and
						residential areas.
					</span>
				</p>

				<div className="flex flex-col sm:flex-row w-full children:w-full gap-4">
					<Button asChild>
						<Link href={"/contact"}>Contact Us</Link>
					</Button>

					<Button variant={"secondary"} asChild>
						<Link href={"/gallery"}>View Gallery</Link>
					</Button>
				</div>
			</div>
		</article>
	)
}
