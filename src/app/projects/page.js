"use client";

import { motion } from "framer-motion";
import EnhancedNavbar from "../components/EnhancedNavbar";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";

export default function Projects() {
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
							<span className="eyebrow">Projects</span>
							<h1 className="section-title">Selected work</h1>
							<p className="section-copy max-w-3xl">
								A curated set of recent work focused on practical outcomes, product
								quality, and clean user experiences.
							</p>
						</div>
						<ProjectsSection />
					</motion.section>
				</div>
			</main>
			<Footer />
		</>
	);
}
