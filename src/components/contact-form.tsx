"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const details = {
	action: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdaNjE0SPYgk0kKe02MHrRN-5dMkWuOf52TBuCYXHBYdq9QtA/formResponse",
	fullName: "entry.434016726",
	email: "entry.1980564442",
	message: "entry.1282317819",
}

const formSchema = z.object({
	fullName: z.string().nonempty("Your name is required."),
	email: z.string().email("A valid email address is required"),
	message: z.string().optional(),
})

const ContactForm: React.FC<{ className?: string }> = ({ className }) => {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true)
		var formData = new FormData()
		formData.append(details.fullName, values.fullName)
		formData.append(details.email, values.email)
		formData.append(details.message, values.message || "")

		// var resp = await fetch(details.action, {
		// 	method: "POST",
		// 	body: formData,
		// 	mode: "no-cors",
		// })
		await new Promise((r) => setTimeout(r, 5000))

		setIsLoading(false)

		form.reset({ email: "", fullName: "", message: "" })
	}

	return (
		<Form {...form}>
			<form
				action={details.action}
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn(
					className,
					"relative bg-card space-y-8 rounded-md p-8 shadow-md mx-auto max-w-5xl"
				)}
			>
				<FormField
					control={form.control}
					name="fullName"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="after:content-['*'] after:text-destructive after:ml-1">
								Full Name
							</FormLabel>
							<FormControl>
								<Input
									id="fullNameInput"
									placeholder="Jon Doe"
									disabled={isLoading}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="after:content-['*'] after:text-red after:ml-1">
								Email Address
							</FormLabel>
							<FormDescription>
								This is solely for communication purposes, and
								we will not share this email address.
							</FormDescription>
							<FormControl>
								<Input
									id="emailInput"
									placeholder="jon-doe@example.com"
									disabled={isLoading}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormDescription>
								This is an optional message describing what you
								are looking for.
							</FormDescription>
							<FormControl>
								<Textarea
									id="messageInput"
									placeholder="Hi there, I'm looking to..."
									disabled={isLoading}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button className="w-full" type="submit" disabled={isLoading}>
					{isLoading && (
						<Loader2 size={18} className="animate-spin mr-2" />
					)}
					Submit
				</Button>
			</form>
		</Form>
	)
}

export default ContactForm
