"use client"

import { useEffect } from "react"

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"
import EmblaClassNames from "embla-carousel-class-names"

import styles from "./styles.module.css"

type SliderPropsType = {
	children: React.ReactNode[]
	options?: EmblaOptionsType
}
export function Slider({ children, options }: SliderPropsType) {
	const [emblaRef, emblaAPI] = useEmblaCarousel(
		{ inViewThreshold: 1, ...options },
		[EmblaClassNames({ snapped: styles.active })]
	)

	useEffect(() => {
		if (!emblaAPI) return

		const { internalEngine: engine } = emblaAPI

		// disable translation
		const translate = engine().translate
		translate.toggleActive(false)
		translate.clear()
	}, [emblaAPI])

	return (
		<div className={styles.viewport} ref={emblaRef}>
			<div className={styles.container}>
				{children.map((slide, index) => (
					<div key={index} className={styles.slide}>
						{slide}
					</div>
				))}
			</div>
		</div>
	)
}
