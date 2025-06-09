"use client";
import { motion } from "framer-motion";
import EnhancedNavbar from "../components/EnhancedNavbar";
import Footer from "../components/Footer";
import EmailSection from "../components/EmailSection";

const floatingVariants = {
	animate: {
		y: [0, -10, 0],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

const backgroundElements = [
	{ x: "10%", y: "20%", size: 20, delay: 0 },
	{ x: "80%", y: "10%", size: 15, delay: 1 },
	{ x: "70%", y: "70%", size: 25, delay: 2 },
	{ x: "20%", y: "80%", size: 18, delay: 1.5 },
];

export default function Contact() {
	return (
		<>
			<EnhancedNavbar />
			<main className="flex-grow bg-[#121212] relative overflow-hidden">
				{/* Animated background elements */}
				{backgroundElements.map((element, index) => (
					<motion.div
						key={index}
						className="absolute bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-xl"
						style={{
							left: element.x,
							top: element.y,
							width: element.size,
							height: element.size,
						}}
						variants={floatingVariants}
						animate="animate"
						transition={{ delay: element.delay }}
					/>
				))}

				<div className="container mt-24 mx-auto py-4 px-12 relative z-10">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8 }}
					>
						<motion.h1
							className="text-6xl font-bold text-white mb-6"
							initial={{ opacity: 0, letterSpacing: "0.5em" }}
							animate={{ opacity: 1, letterSpacing: "normal" }}
							transition={{ delay: 0.5, duration: 1 }}
						>
							Get In{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
								Touch
							</span>
						</motion.h1>
						<motion.p
							className="text-[#ADB7BE] text-xl max-w-2xl mx-auto"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7, duration: 0.6 }}
						>
							Ready to bring your ideas to life? Let's start a conversation and
							create something amazing together.
						</motion.p>
					</motion.div>

					<motion.div
						className="relative"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9, duration: 0.8 }}
					>
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-600/10 rounded-3xl blur-xl"
							initial={{ scale: 0.5, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 1.1, duration: 1 }}
						/>
						<div className="relative bg-[#18191E] border border-[#33353F] rounded-3xl p-8">
							<EmailSection />
						</div>
					</motion.div>
				</div>
			</main>
			<Footer />
		</>
	);
}
