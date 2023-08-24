"use client"

import { useEffect, useState } from "react"

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"
import EmblaClassNames from "embla-carousel-class-names"
import EmblaAutoplay from "embla-carousel-autoplay"

type SliderPropsType = {
	children: React.ReactNode[]
	options?: EmblaOptionsType
}
export function Slider({ children, options }: SliderPropsType) {
	const [emblaRef, emblaAPI] = useEmblaCarousel(
		{ inViewThreshold: 1, ...options },
		[
			EmblaClassNames({ snapped: "opacity-100" }),
			EmblaAutoplay({ delay: 5000 }),
		]
	)
	const [scrollProgress, setScrollProgress] = useState<number>(0)

	useEffect(() => {
		if (!emblaAPI) return

		const { internalEngine: engine } = emblaAPI

		emblaAPI.on("scroll", (api, evt) => {
			setScrollProgress(api.scrollProgress())
		})

		// disable translation
		const translate = engine().translate
		translate.toggleActive(false)
		translate.clear()
	}, [emblaAPI])

	return (
		<div className="relative">
			<div className="z-1 overflow-hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-full bg-background/20">
				<div
					className="bg-primary h-full"
					style={{
						width: `${scrollProgress * 100}%`,
					}}
				></div>
			</div>

			<div className="relative overflow-hidden" ref={emblaRef}>
				<div className="flex flex-row h-screen">
					{children.map((slide, index) => (
						<div
							key={index}
							className="opacity-0 flex-[0_0_100%] transition-opacity-1000"
						>
							{slide}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
