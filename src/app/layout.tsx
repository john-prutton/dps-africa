import MainNav from "@/components/main-navigation"
import "./globals.css"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
	title: "DPS Africa",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="min-h-screen flex flex-col">
				<MainNav />
				{children}
				<Footer />
			</body>
		</html>
	)
}
