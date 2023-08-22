"use client"

import React, { useCallback, useEffect, useState } from "react"
import { flushSync } from "react-dom"
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"

const TWEEN_FACTOR = 3
const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max)

type SliderPropsType = {
	children: React.ReactNode[]
	options?: EmblaOptionsType
}

export function Slider({ children, options }: SliderPropsType) {
	const [emblaRef, emblaApi] = useEmblaCarousel(options)
	const [tweenValues, setTweenValues] = useState<number[]>([])

	const onScroll = useCallback(() => {
		if (!emblaApi) return

		const engine = emblaApi.internalEngine()
		const scrollProgress = emblaApi.scrollProgress()

		const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
			let diffToTarget = scrollSnap - scrollProgress

			if (engine.options.loop) {
				engine.slideLooper.loopPoints.forEach((loopItem) => {
					const target = loopItem.target()
					if (index === loopItem.index && target !== 0) {
						const sign = Math.sign(target)
						if (sign === -1)
							diffToTarget = scrollSnap - (1 + scrollProgress)
						if (sign === 1)
							diffToTarget = scrollSnap + (1 - scrollProgress)
					}
				})
			}
			const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
			return numberWithinRange(tweenValue, 0, 1)
		})
		setTweenValues(styles)
	}, [emblaApi, setTweenValues])

	useEffect(() => {
		if (!emblaApi) return

		onScroll()
		emblaApi.on("scroll", () => {
			flushSync(() => onScroll())
		})
		emblaApi.on("reInit", onScroll)
	}, [emblaApi, onScroll])

	return (
		<div className="[--slide-spacing:0] [--slide-size:100%]">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex backface-hidden touch-pan-y ml-[calc(var(--slide-spacing)*-1)]">
					{children.map((slide, index) => (
						<div
							className="relative flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)] h-screen"
							key={index}
						>
							{/* <div
								className="relative h-full backface-hidden"
								style={{
									...(tweenValues.length && {
										transform: `scale(${tweenValues[index]})`,
									}),
								}}
							> */}
							{slide}
						</div>
						// </div>
					))}
				</div>
			</div>
		</div>
	)
}
