"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ name: "GitHub", href: "https://github.com/danblock97", icon: FaGithub },
		{
			name: "LinkedIn",
			href: "https://linkedin.com/in/dan-block-mbcs-40756b18a/",
			icon: FaLinkedin,
		},
		{
			name: "X",
			href: "https://x.com/goldiez2599",
			icon: FaXTwitter,
		},
	];

	const quickLinks = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Projects", href: "/projects" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<motion.footer
			className="relative bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] border-t border-[#33353F] py-12 overflow-hidden"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10" />

			<div className="relative container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand section */}
					<motion.div
						className="col-span-1 md:col-span-2"
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
					>
						<Link href="/">
							<motion.h3
								className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4 cursor-pointer"
								whileHover={{ scale: 1.05 }}
							>
								danblock.dev
							</motion.h3>
						</Link>
						<p className="text-gray-400 text-sm leading-relaxed max-w-md">
							Crafting digital experiences with passion and precision.
							Specializing in modern web development, UI/UX design, and creative
							problem-solving.
						</p>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						<h4 className="text-white font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						<h4 className="text-white font-semibold mb-4">Connect</h4>
						<div className="flex space-x-4">
							{socialLinks.map((social) => {
								const IconComponent = social.icon;
								return (
									<motion.a
										key={social.name}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300"
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										<IconComponent className="text-gray-400 hover:text-white text-lg" />
									</motion.a>
								);
							})}
						</div>
					</motion.div>
				</div>

				{/* Bottom section */}
				<motion.div
					className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					<p className="text-gray-400 text-sm">
						© {currentYear} danblock.dev. All rights reserved.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<a
							href="#"
							className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
						>
							Terms of Service
						</a>
					</div>
				</motion.div>
			</div>
		</motion.footer>
	);
};

export default Footer;
