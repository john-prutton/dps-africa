"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"

import img1 from "@/../public/dps-ceilings-1.jpg"
import img2 from "@/../public/dps-ceilings-2.jpg"
import img3 from "@/../public/dps-ceilings-3.jpg"
import img4 from "@/../public/dps-ceilings-4.jpg"
import img5 from "@/../public/dps-ceilings-5.jpg"
import img6 from "@/../public/dps-ceilings-6.jpg"
import img7 from "@/../public/dps-ceilings-7.jpg"
import img8 from "@/../public/dps-ceilings-8.jpg"
import img9 from "@/../public/dps-ceilings-9.jpg"
import img10 from "@/../public/dps-ceilings-10.jpg"

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

type TImageOptions = {
	img: StaticImageData
	isOpen: boolean
}

export function ImageGallery() {
	const [{ img, isOpen }, setImgOps] = useState<TImageOptions>({
		img: img1,
		isOpen: false,
	})

	function viewImage(img: StaticImageData) {
		setImgOps({
			img,
			isOpen: true,
		})
	}

	function closeImage(open: boolean = false) {
		setImgOps({ img, isOpen: false })
	}

	return (
		<div className="relative m-2 flex flex-wrap flex-col sm:flex-row">
			<Dialog open={isOpen} onOpenChange={closeImage}>
				<DialogContent className="max-w-80vw! aspect-square sm:aspect-video border-none">
					<Image
						src={img!.src}
						alt="A picture of DPS ceilings in action."
						fill
						className="object-cover rounded-lg"
					/>
				</DialogContent>
			</Dialog>

			{images.map((img, i) => (
				<div
					key={i}
					onClick={() => viewImage(img)}
					className="relative aspect-square w-full sm:w-1/2 lg:w-1/3"
				>
					<Image
						src={img.src}
						alt="A picture of DPS ceilings in action"
						placeholder="blur"
						blurDataURL={img.blurDataURL}
						fill
						className="object-cover rounded-lg scale-95 cursor-zoom-in"
						sizes="(max-width: 640px) 640px, 512px"
					/>
				</div>
			))}
		</div>
	)
}
