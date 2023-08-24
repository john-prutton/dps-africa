import Image, { StaticImageData } from "next/image"

import { cn } from "@/lib/utils"

export interface ISlideProps {
	title: string
	subtext: string
	flip?: boolean
	img: StaticImageData
}

export function Slide({ title, subtext, flip = false, img }: ISlideProps) {
	return (
		<div className="absolute left-0 w-full h-screen">
			<Image
				src={img.src}
				alt=""
				placeholder="blur"
				blurDataURL={img.blurDataURL}
				fill
				sizes="(max-width: 400px) 800px, (max-width: 600px) 1200px, 100vw"
				className="object-cover"
			/>

			{/* Text container */}
			<div
				className={cn(
					"absolute",
					"lt-sm:bg-primary/75 lt-sm:py-8 lt-sm:rounded-lg lt-sm:bottom-4 lt-sm:left-4 lt-sm:right-4",
					"sm:bottom-0 sm:-translate-y-full sm:w-fit",
					flip ? "sm:right-0" : "sm:left-0"
				)}
			>
				{/* Background graphic */}
				<svg
					className={cn(
						"lt-sm:hidden absolute top-1/2 -translate-y-1/2 w-full lt-sm:scale-x-200 scale-y-80 opacity-70",
						flip && "sm:-scale-x-100"
					)}
					viewBox="0 0 500 300"
					fill="#00a8e6"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_241_41)">
						<path
							d="M166.979 7.25919L13.8584 145.839C6.57724 152.429 6.89584 163.962 14.5297 170.14L167.449 293.889C172.089 297.644 178.433 298.504 183.905 296.119L468.202 172.237C480.718 166.783 481.093 149.168 468.82 143.187L184.725 4.73915C178.85 1.87621 171.825 2.87388 166.979 7.25919Z"
							fill="#00ABE8"
						/>
					</g>
					<defs>
						<clipPath id="clip0_241_41">
							<rect width="500" height="300" fill="white" />
						</clipPath>
					</defs>
				</svg>

				{/* Text content */}
				<div
					className={cn(
						"relative max-w-lg mx-4 sm:mx-32 drop-shadow-lg",
						flip ? "sm:text-right" : "sm:text-left"
					)}
				>
					<h2 className="text-2xl sm:text-4xl w-full font-bold mb-4">
						{title}
					</h2>
					<p>{subtext}</p>
				</div>
			</div>
		</div>
	)
}
