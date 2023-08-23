"use client"
import React, { useEffect } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { InfoSection } from "./info-section"
import Link from "next/link"
import heroImg from "@/../public/dps-ceilings-1.jpg"
import { Button } from "@/components/ui/button"
import Hero from "./hero"

function initGSAP() {
	gsap.registerPlugin(ScrollTrigger)

	const slider = document.querySelector("#slider")!
	const slides = gsap.utils.toArray<HTMLElement>(slider.children)

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: slider,
			pin: true,
			scrub: 0,
			end: 3000,
		} as ScrollTrigger.Vars,
	})

	slides.forEach((slide, i) => {
		if (i === 0) return
		tl.from(slide, {
			xPercent: 100,
			ease: "none",
		})
	})
}

export function ScrollSlider() {
	useEffect(() => {
		initGSAP()
	}, [])

	return (
		<div
			id="slider"
			className="relative overflow-x-hidden w-screen h-screen flex flex-row children:absolute!"
		>
			<Hero />
			<Hero />
			<Hero />
		</div>
	)
}
