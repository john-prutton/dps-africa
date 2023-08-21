import { Hero } from "@/components/hero"
import { Slider, Slide, type ISlideProps } from "@/components/slider"

import img1 from "@/../public/dps-ceilings-3.jpg"
import img2 from "@/../public/dps-ceilings-9.jpg"
import img3 from "@/../public/dps-ceilings-4.jpg"
import img4 from "@/../public/dps-ceilings-5.jpg"
import img5 from "@/../public/dps-ceilings-6.jpg"
import img6 from "@/../public/dps-ceilings-7.jpg"
import img7 from "@/../public/dps-ceilings-10.jpg"
import img8 from "@/../public/dps-ceilings-1.jpg"
import img9 from "@/../public/dps-ceilings-8.jpg"

const slides: ISlideProps[] = [
	{
		img: img1,
		title: "Zero limitations",
		subtext:
			"A ceiling in the form of a wave, multi-level or spatial? DPS® stretch membranes allow you to create surfaces in any shape and color.",
	},
	{
		img: img2,
		title: "Small & big",
		subtext:
			"Our walls and ceilings are the perfect solution for any interior, from a large airport hall to a small bathroom.",
	},
	{
		img: img3,
		title: "Color & structure",
		subtext:
			"In our offer you will find over 110 foil and textile materials, in various structures and colors to choose from.",
	},
	{
		img: img4,
		title: "Perfect combination",
		subtext:
			"DPS Wall2Wall ® enables a perfect connection of the ceiling with the wall, without the assembly gap. This is a unique solution for greater aesthetics of the interior.",
	},
	{
		img: img5,
		title: "Functionality",
		subtext:
			"DPS ® ceilings and walls have many different advantages: they allow you to hide installations and plaster imperfections, they are waterproof, they improve acoustics and thermal insulation of the room.",
	},
	{
		img: img6,
		title: "Quick assembly",
		subtext:
			"Installation of a stretch ceiling is very quick and does not require time-consuming preparations. It only takes a few hours for your interior to gain a new look.",
	},
	{
		img: img7,
		title: "Quality for years",
		subtext:
			"The stretch ceiling does not require any work after installation. It is easy to maintain, has the appropriate certificates and a 10-year manufacturer's warranty.",
	},
	{
		img: img8,
		title: "Possibility of personalization",
		subtext:
			"Choose any photo or graphic and we will print it for you in the best quality.",
	},
	{
		img: img9,
		title: "High hygiene",
		subtext:
			"Ceilings and walls from the Biopruf series will make your interior more sterile.",
	},
]

export default function Home() {
	return (
		<main>
			<Slider>
				<Hero />

				{slides.map((slide, i) => (
					<Slide {...slide} key={i} flip={i % 2 != 0} />
				))}
			</Slider>
			<div className="w-full h-screen bg-yellow" />
		</main>
	)
}
