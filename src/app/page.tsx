import Hero from "@/components/hero"
import { ScrollSlider } from "@/components/scroll-slider"

export default function Home() {
	return (
		<main>
			<ScrollSlider>
				<Hero />
				<Hero />
				<Hero />
			</ScrollSlider>
		</main>
	)
}
