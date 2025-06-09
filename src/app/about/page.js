"use client";
import { motion } from "framer-motion";
import EnhancedNavbar from "../components/EnhancedNavbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

const containerVariants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			delay: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
};

export default function About() {
	return (
		<>
			<EnhancedNavbar />
			<main className="flex-grow bg-[#121212]">
				<motion.div
					className="container mt-24 mx-auto py-4 px-12"
					variants={containerVariants}
					initial="initial"
					animate="animate"
				>
					<motion.div variants={itemVariants} className="text-center mb-16">
						<motion.h1
							className="text-6xl font-bold text-white mb-6"
							initial={{ opacity: 0, rotateX: -90 }}
							animate={{ opacity: 1, rotateX: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							About{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
								Me
							</span>
						</motion.h1>
						<motion.p
							className="text-[#ADB7BE] text-xl max-w-2xl mx-auto"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.6 }}
						>
							Get to know the person behind the code - my journey, skills, and
							passion for creating amazing digital experiences.
						</motion.p>
					</motion.div>

					<motion.div variants={itemVariants} className="relative">
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-3xl blur-xl"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 0.6, duration: 1 }}
						/>
						<div className="relative bg-[#18191E] border border-[#33353F] rounded-3xl p-8">
							<AboutSection />
						</div>
					</motion.div>
				</motion.div>
			</main>
			<Footer />
		</>
	);
}
