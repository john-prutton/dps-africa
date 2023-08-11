import Image from "next/image"

import contactImg from "@/../public/dps-ceilings-2.jpg"
import ContactForm from "@/components/contact-form"

export default function Contact() {
	return (
		<main>
			<Image
				src={contactImg.src}
				alt="DPS Ceiling photograph"
				placeholder="blur"
				blurDataURL={contactImg.blurDataURL}
				fill
				className="object-cover brightness-60"
			/>

			<div className="absolute w-full h-full grid place-items-center">
				<ContactForm />
			</div>
		</main>
	)
}
