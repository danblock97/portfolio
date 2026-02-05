"use client";

import { motion } from "framer-motion";
import EnhancedNavbar from "../components/EnhancedNavbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

export default function About() {
	return (
		<>
			<EnhancedNavbar />
			<main className="page-main">
				<div className="content-wrap section-stack">
					<motion.section
						className="surface-card p-6 sm:p-8 lg:p-10"
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<div className="mb-8 space-y-3 sm:mb-10">
							<span className="eyebrow">About</span>
							<h1 className="section-title">Background, skills, and experience</h1>
							<p className="section-copy max-w-3xl">
								Get to know the person behind the code, including qualifications,
								practical strengths, and professional history.
							</p>
						</div>
						<AboutSection />
					</motion.section>
				</div>
			</main>
			<Footer />
		</>
	);
}
