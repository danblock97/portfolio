"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";



const PricingSection = () => {
	return (
		<section className="py-20">
			<div className="mx-auto px-4 max-w-full">
				
				<motion.div
					className="max-w-3xl mx-auto bg-[#1a1a1a]/80 rounded-lg p-8 text-white border border-[#33353F]"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<h3 className="text-3xl font-bold text-center mb-4">Full Static Site Package</h3>
					<p className="text-4xl font-bold text-center mb-6">£400</p>
					<p className="text-center text-lg mb-8">Includes 4-9 pages, tailored to your business needs.</p>
					<ul className="space-y-3 mb-8 text-gray-300">
						{[
							"Search Engine Optimisation (SEO) to help your business get found online.",
							"Fully mobile-responsive design, looking great on any device.",
							"Integrated contact form for direct inquiries to your company email.",
							"Website preview before launch to ensure your complete satisfaction.",
							"Basic maintenance and security updates for the first year.",
							"Updates and additions can be made post-launch; quotes will be provided based on your specific requirements.",
						].map((feature, index) => (
							<li key={index} className="flex items-center">
								<svg
									className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								{feature}
							</li>
						))}
					</ul>
					<Link
						href="/contact"
						className="block w-full py-3 rounded-lg font-semibold bg-purple-500 hover:bg-purple-600 transition-colors duration-300 mb-8 text-center"
					>
						Get Started
					</Link>
					<div className="text-center text-gray-400 mt-12">
						<p className="text-lg">Domain names can be purchased for 1 year or more. The final domain pricing will be added to your total, depending on your chosen domain and desired registration period.</p>
						<p className="mt-4">Hosting costs are determined based on your needs and will be quoted separately.</p>
						
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default PricingSection;
