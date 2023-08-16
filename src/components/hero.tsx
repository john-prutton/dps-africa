import Image from "next/image"
import Link from "next/link"
import heroImg from "@/../public/dps-ceilings-1.jpg"
import { Button } from "@/components/ui/button"
import { InfoSection } from "./info-section"

export default function Hero() {
	return (
		<InfoSection img={heroImg}>
			<h1 className="font-black text-5xl text-primary mb-8">
				STRETCH CEILINGS & WALLS
			</h1>

			<p className="leading-loose tracking-widest">
				DPS is a world leader in stretch ceilings and wall
				manufacturing. For 25 years we have helped bring to life amazing
				design ideas and have created some of the most stunning spaces.
				Over 1 000 000 m2 of DPS stretch ceilings have been installed
				across the world in both commercial and residential areas. DPS
				stretch ceilings and walls are 100% recyclable and covered by
				industry standard certificates (CE, Fire classification etc).
				All DPS stretch ceilings and walls have a 10-year warranty.
			</p>

			<div className="flex flex-row w-full children:w-full gap-4 mt-4">
				<Button size={"lg"} asChild>
					<Link href={"/contact"}>Contact Us</Link>
				</Button>

				<Button size={"lg"} variant={"secondary"} asChild>
					<Link href={"/gallery"}>View Gallery</Link>
				</Button>
			</div>
		</InfoSection>
	)
}
