"use client";

import { motion } from "framer-motion";
import EnhancedNavbar from "../components/EnhancedNavbar";
import Footer from "../components/Footer";
import EmailSection from "../components/EmailSection";

export default function Contact() {
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
							<span className="eyebrow">Contact</span>
							<h1 className="section-title">Let&apos;s build something useful</h1>
							<p className="section-copy max-w-3xl">
								Share what you are working on and I will get back to you. I read
								every message personally.
							</p>
						</div>
						<EmailSection />
					</motion.section>
				</div>
			</main>
			<Footer />
		</>
	);
}
