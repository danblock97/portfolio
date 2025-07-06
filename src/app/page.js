"use client";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import EnhancedNavbar from "./components/EnhancedNavbar";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import PricingSection from "./components/PricingSection";

const containerVariants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			delay: 0.2,
			staggerChildren: 0.3,
		},
	},
};

const itemVariants = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
};

// Floating background elements
const floatingElements = [
	{ x: "5%", y: "15%", size: 30, delay: 0 },
	{ x: "85%", y: "25%", size: 20, delay: 1 },
	{ x: "75%", y: "65%", size: 35, delay: 2 },
	{ x: "15%", y: "75%", size: 25, delay: 1.5 },
	{ x: "60%", y: "10%", size: 15, delay: 3 },
];

export default function Home() {
	return (
		<>
			<EnhancedNavbar />
			<main className="flex-grow bg-[#121212] relative overflow-hidden">
				{/* Animated background elements */}
				{floatingElements.map((element, index) => (
					<motion.div
						key={index}
						className="absolute bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-xl"
						style={{
							left: element.x,
							top: element.y,
							width: element.size,
							height: element.size,
						}}
						animate={{
							y: [0, -20, 0],
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 4 + index,
							repeat: Infinity,
							ease: "easeInOut",
							delay: element.delay,
						}}
					/>
				))}

				<motion.div
					className="container mt-24 mx-auto py-4 px-12 relative z-10"
					variants={containerVariants}
					initial="initial"
					animate="animate"
				>
					<motion.div variants={itemVariants}>
						<HeroSection />
					</motion.div>
					<motion.div variants={itemVariants}>
						<AchievementsSection />
					</motion.div>
					<motion.div variants={itemVariants}>
						<PricingSection />
					</motion.div>
				</motion.div>
			</main>
			<Footer />
		</>
	);
}
