import Image, { type StaticImageData } from "next/image"

export function InfoSection({
	img,
	children,
}: {
	img: StaticImageData
	children: React.ReactNode
}) {
	return (
		<article className="w-screen h-screen relative">
			{/* Background image */}
			<Image
				src={img.src}
				alt="DPS stretch ceiling"
				placeholder="blur"
				blurDataURL={img.blurDataURL}
				fill
				className="object-cover"
			/>

			{/* Mask */}
			<svg className="absolute w-full h-screen">
				<defs>
					<mask id="myMask">
						<rect className="w-full h-full fill-white" />
						<circle
							cx="100%"
							cy="50%"
							r="max(50vw, 50vh)"
							fill="black"
						/>
					</mask>
				</defs>

				<rect
					className="w-full h-full fill-background/80"
					mask="url(#myMask)"
				/>
			</svg>

			<div className="absolute left-1/2 -translate-x-[min(50vw,45rem)] top-1/2 -translate-y-1/2 max-w-[min(50vw,40rem)]">
				{children}
			</div>
		</article>
	)
}
