"use client";

import { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";
import EmailConfirmation from "./EmailConfirmation";
import EmailSendingLoader from "./EmailSendingLoader";

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");

		const data = {
			name: e.target.name.value,
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};

		try {
			const response = await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				data,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			);

			if (response.status === 200) {
				setIsLoading(false);
				setEmailSubmitted(true);
				setShowConfirmation(true);
				e.target.reset();
			}
		} catch (error) {
			console.error("Error sending email:", error);
			setIsLoading(false);
			setErrorMessage("Message failed to send. Please try again.");
		}
	};

	const handleCloseConfirmation = () => {
		setShowConfirmation(false);
		setTimeout(() => {
			setEmailSubmitted(false);
		}, 500);
	};

	return (
		<>
			<section id="contact" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
				<div className="space-y-5">
					<h2 className="text-3xl font-semibold">Let&apos;s connect</h2>
					<p className="section-copy max-w-md">
						I&apos;m open to new opportunities. Whether you have a project in mind
						or a question, I&apos;d be happy to hear from you.
					</p>
					<div className="flex items-center gap-2">
						<Link
							href="https://github.com/danblock97"
							target="_blank"
							rel="noopener noreferrer"
							className="surface-soft inline-flex h-11 w-11 items-center justify-center rounded-full"
						>
							<Image src={GithubIcon} alt="GitHub" className="h-5 w-5" />
						</Link>
						<Link
							href="https://www.linkedin.com/in/dan-block-mbcs-40756b18a/"
							target="_blank"
							rel="noopener noreferrer"
							className="surface-soft inline-flex h-11 w-11 items-center justify-center rounded-full"
						>
							<Image src={LinkedinIcon} alt="LinkedIn" className="h-5 w-5" />
						</Link>
					</div>
					{emailSubmitted && (
						<p className="text-sm text-[var(--brand)]">
							Thanks, your message has been sent.
						</p>
					)}
				</div>

				<div className="surface-soft p-5 sm:p-6">
					<form className="grid gap-4" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="name" className="field-label">
								Your name
							</label>
							<input
								name="name"
								type="text"
								id="name"
								required
								className="field-input"
								placeholder="Jane Doe"
								disabled={isLoading}
							/>
						</div>
						<div>
							<label htmlFor="email" className="field-label">
								Your email
							</label>
							<input
								name="email"
								type="email"
								id="email"
								required
								className="field-input"
								placeholder="you@example.com"
								disabled={isLoading}
							/>
						</div>
						<div>
							<label htmlFor="subject" className="field-label">
								Subject
							</label>
							<input
								name="subject"
								type="text"
								id="subject"
								required
								className="field-input"
								placeholder="Project inquiry"
								disabled={isLoading}
							/>
						</div>
						<div>
							<label htmlFor="message" className="field-label">
								Message
							</label>
							<textarea
								name="message"
								id="message"
								className="field-input min-h-[7.5rem]"
								placeholder="Tell me a bit about your project"
								disabled={isLoading}
							/>
						</div>

						{errorMessage && (
							<p className="text-sm text-red-500" role="alert">
								{errorMessage}
							</p>
						)}

						<button
							type="submit"
							disabled={isLoading}
							className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
						>
							{isLoading ? "Sending..." : "Send message"}
						</button>
					</form>
				</div>
			</section>

			<EmailSendingLoader isVisible={isLoading} />
			<EmailConfirmation
				isVisible={showConfirmation}
				onClose={handleCloseConfirmation}
			/>
		</>
	);
};

export default EmailSection;
