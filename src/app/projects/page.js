"use client";
import { motion } from "framer-motion";
import EnhancedNavbar from "../components/EnhancedNavbar";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";

const headerVariants = {
	initial: { opacity: 0, scale: 0.9 },
	animate: {
		opacity: 1,
		scale: 1,
		transition: { delay: 0.2, duration: 0.6 },
	},
};

export default function Projects() {
	return (
		<>
			<EnhancedNavbar />
			<main className="flex-grow bg-[#121212]">
				<div className="container mt-24 mx-auto py-4 px-12">
					<motion.div
						variants={headerVariants}
						initial="initial"
						animate="animate"
						className="text-center mb-16"
					>
						<motion.h1
							className="text-6xl font-bold text-white mb-6"
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.8 }}
						>
							My{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
								Projects
							</span>
						</motion.h1>
						<motion.p
							className="text-[#ADB7BE] text-xl max-w-2xl mx-auto"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.6 }}
						>
							A showcase of my latest work, featuring innovative solutions and
							creative implementations.
						</motion.p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.8 }}
					>
						<ProjectsSection />
					</motion.div>
				</div>
			</main>
			<Footer />
		</>
	);
}
