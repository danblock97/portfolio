"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
			<div className="space-y-6">
				<span className="eyebrow">Software Engineer</span>
				<h1 className="section-title text-balance">
					Hello, I&apos;m Dan. I build dependable products as a
					<br className="hidden sm:block" />
					<span className="text-[var(--brand)]">
						<TypeAnimation
							sequence={[
								"Web Developer",
								1500,
								"Jira/Confluence Admin",
								1500,
								"UI/UX Designer",
								1500,
								"Full Stack Engineer",
								1500,
							]}
							wrapper="span"
							speed={45}
							repeat={Infinity}
						/>
					</span>
				</h1>
				<p className="section-copy max-w-2xl">
					I focus on practical, polished experiences that feel clear to users and
					stay reliable as products grow.
				</p>
				<div className="flex flex-wrap gap-3">
					<Link href="/contact" className="button-primary">
						Let&apos;s Connect
					</Link>
					<Link href="/projects" className="button-secondary">
						View Projects
					</Link>
				</div>
			</div>

			<motion.div
				className="surface-soft mx-auto w-full max-w-[26rem] overflow-hidden rounded-[2rem] p-3"
				initial={{ opacity: 0, scale: 0.94, y: 16 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 0.45 }}
			>
				<div className="surface-card overflow-hidden rounded-[1.4rem] p-3">
					<Image
						src="/images/hero-image.png"
						alt="Dan Block - Software Engineer"
						className="h-auto w-full rounded-[1rem] object-cover"
						width={720}
						height={720}
						priority
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
