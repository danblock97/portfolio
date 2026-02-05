"use client";

import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import EnhancedNavbar from "./components/EnhancedNavbar";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import PricingSection from "./components/PricingSection";

const reveal = {
	initial: { opacity: 0, y: 22 },
	animate: { opacity: 1, y: 0 },
};

export default function Home() {
	return (
		<>
			<EnhancedNavbar />
			<main className="page-main">
				<div className="content-wrap section-stack">
					<motion.section
						className="surface-card p-6 sm:p-8 lg:p-10"
						variants={reveal}
						initial="initial"
						animate="animate"
					>
						<HeroSection />
					</motion.section>

					<motion.section
						className="surface-card p-6 sm:p-8"
						variants={reveal}
						initial="initial"
						animate="animate"
						transition={{ delay: 0.08 }}
					>
						<AchievementsSection />
					</motion.section>

					<motion.section
						className="surface-card p-6 sm:p-8"
						variants={reveal}
						initial="initial"
						animate="animate"
						transition={{ delay: 0.16 }}
					>
						<PricingSection />
					</motion.section>
				</div>
			</main>
			<Footer />
		</>
	);
}
