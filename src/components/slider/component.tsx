"use client"
import React, { useEffect } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

function initGSAP() {
	gsap.registerPlugin(ScrollTrigger)

	const slider = document.querySelector("#slider")!
	const slides = gsap.utils.toArray<HTMLElement>(slider.children)

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: slider,
			pin: true,
			scrub: 1,
			end: () => "+=" + 1000 * slides.length,
			snap: 1 / (slides.length - 1),
		} as ScrollTrigger.Vars,
	})

	slides.forEach((slide, i) => {
		if (i === 0) return
		tl.fromTo(
			slide,
			{
				opacity: 0,
				ease: "none",
			},
			{
				opacity: 1.2,
			}
		)
	})
}

export function Slider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		initGSAP()
	}, [])

	return (
		<div
			id="slider"
			className="relative overflow-hidden w-full h-screen children:absolute! children:inset-0"
		>
			{children}
		</div>
	)
}
