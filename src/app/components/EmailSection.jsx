"use client";
import React, { useState } from "react";
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

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
				console.log("Message sent.");
				setIsLoading(false);
				setEmailSubmitted(true);
				setShowConfirmation(true);

				// Reset form
				e.target.reset();
			}
		} catch (error) {
			console.error("Error sending email:", error);
			setIsLoading(false);
			// You could add error handling here with another modal
		}
	};

	const handleCloseConfirmation = () => {
		setShowConfirmation(false);
		// Reset the submitted state after animation
		setTimeout(() => {
			setEmailSubmitted(false);
		}, 500);
	};

	return (
		<>
			<section
				id="contact"
				className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
			>
				<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
				<div className="z-10">
					<h5 className="text-xl font-bold text-white my-2">
						Let&apos;s Connect
					</h5>
					<p className="text-[#ADB7BE] mb-4 max-w-md">
						{" "}
						I'm currently looking for new opportunities, my inbox is always
						open. Whether you have a question or just want to say hi, I'll try
						my best to get back to you!
					</p>
					<div className="socials flex flex-row gap-2">
						<Link href="https://github.com/danblock97">
							<Image src={GithubIcon} alt="Github Icon" />
						</Link>
						<Link href="https://www.linkedin.com/in/dan-block-mbcs-40756b18a/">
							<Image src={LinkedinIcon} alt="Linkedin Icon" />
						</Link>
					</div>
				</div>
				<div>
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<div className="mb-6">
							<label
								htmlFor="name"
								className="text-white block mb-2 text-sm font-medium"
							>
								Your name
							</label>
							<input
								name="name"
								type="text"
								id="name"
								required
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder="Your Name..."
								disabled={isLoading}
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="text-white block mb-2 text-sm font-medium"
							>
								Your email
							</label>
							<input
								name="email"
								type="email"
								id="email"
								required
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder="Your Email..."
								disabled={isLoading}
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="subject"
								className="text-white block text-sm mb-2 font-medium"
							>
								Subject
							</label>
							<input
								name="subject"
								type="text"
								id="subject"
								required
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder="Your Subject..."
								disabled={isLoading}
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								className="text-white block text-sm mb-2 font-medium"
							>
								Message
							</label>
							<textarea
								name="message"
								id="message"
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder="Your Message"
								disabled={isLoading}
							/>
						</div>
						<button
							type="submit"
							disabled={isLoading}
							className="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors duration-300"
						>
							{isLoading ? "Sending..." : "Send Message"}
						</button>
					</form>
				</div>
			</section>

			{/* Loading Animation */}
			<EmailSendingLoader isVisible={isLoading} />

			{/* Success Confirmation */}
			<EmailConfirmation
				isVisible={showConfirmation}
				onClose={handleCloseConfirmation}
			/>
		</>
	);
};

export default EmailSection;
