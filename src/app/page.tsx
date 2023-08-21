import { Hero } from "@/components/hero"
import { Slider, Slide, type ISlideProps } from "@/components/slider"

import img from "@/../public/dps-ceilings-3.jpg"
import img2 from "@/../public/dps-ceilings-2.jpg"

const slides: ISlideProps[] = [
	{
		img,
		title: "Zero limitations",
		subtext:
			"A ceiling in the form of a wave, multi-level or spatial? DPS® stretch membranes allow you to create surfaces in any shape and color.",
	},
	{
		img: img2,
		title: "Test",
		subtext:
			"			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit maiores fugit, reiciendis, impedit soluta nemo harum nobis laborum voluptate dolores delectus, ex ut rerum!",
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
