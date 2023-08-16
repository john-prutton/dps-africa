"use client"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

function initGSAP() {
	gsap.registerPlugin(ScrollTrigger)
	const sections = gsap.utils.toArray("#slider article")

	const scrollTween = gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: "#slider",
			pin: true,
			scrub: 1,
			end: "+=3000",
			//snap: 1 / (sections.length - 1),
			markers: true,
		},
	})

	sections.forEach((section) => {
		gsap.from(section!, {
			scrollTrigger: {
				pin: true,
			},
		})
	})
}

export function ScrollSlider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		initGSAP()
	}, [])

	return (
		<div className="wrapper relative overflow-x-hidden">
			<div
				id="slider"
				className="flex flex-row"
				style={{
					width: `${100 * React.Children.count(children)}vw`,
				}}
			>
				{children}
			</div>
		</div>
	)
}
