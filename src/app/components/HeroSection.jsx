"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
	const containerVariants = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		initial: { opacity: 0, y: 50 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	const imageVariants = {
		initial: { opacity: 0, scale: 0.5, rotate: -10 },
		animate: {
			opacity: 1,
			scale: 1,
			rotate: 0,
			transition: {
				duration: 1.2,
				ease: "easeOut",
				type: "spring",
				stiffness: 100,
			},
		},
	};

	return (
		<section className="py-16 lg:py-24">
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center"
				variants={containerVariants}
				initial="initial"
				animate="animate"
			>
				<motion.div
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
					variants={itemVariants}
				>
					<motion.h1
						className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl lg:leading-tight font-extrabold"
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.3 }}
					>
						<motion.span
							className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
							initial={{ backgroundPosition: "0% 50%" }}
							animate={{ backgroundPosition: "100% 50%" }}
							transition={{
								duration: 3,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						>
							Hello, I'm Dan{" "}
						</motion.span>
						<br />
						<TypeAnimation
							sequence={[
								"Web Developer",
								1500,
								"Jira/Conf Admin",
								1500,
								"UI/UX Designer",
								1500,
								"Full Stack Engineer",
								1500,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
							className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
						/>
					</motion.h1>

					<motion.p
						className="text-[#adb7be] text-lg sm:text-xl mb-8 lg:text-2xl leading-relaxed max-w-2xl"
						variants={itemVariants}
					>
						Crafting digital experiences with passion and precision. Welcome to
						my creative universe where code meets design.
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-4"
						variants={itemVariants}
					>
						<Link href={"/contact"}>
							<motion.button
								className="group px-8 py-4 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="flex items-center justify-center gap-2">
									Let's Connect
									<motion.span className="group-hover:translate-x-1 transition-transform duration-300">
										→
									</motion.span>
								</span>
							</motion.button>
						</Link>

						<Link href={"/projects"}>
							<motion.button
								className="group px-8 py-4 w-full sm:w-fit rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-semibold transition-all duration-300"
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="flex items-center justify-center gap-2">
									View My Work
									<motion.span className="group-hover:translate-x-1 transition-transform duration-300">
										→
									</motion.span>
								</span>
							</motion.button>
						</Link>
					</motion.div>
				</motion.div>

				<motion.div
					className="col-span-4 place-self-center mt-8 lg:mt-0"
					variants={imageVariants}
				>
					<motion.div
						className="relative"
						animate={{
							rotate: [0, 1, 0, -1, 0],
						}}
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						{/* Glowing background */}
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"
							animate={{
								scale: [1, 1.1, 1],
								opacity: [0.5, 0.8, 0.5],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>

						{/* Main container */}
						<div className="relative rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#33353F] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] p-2">
							<div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm flex items-center justify-center">
								<Image
									src="/images/hero-image.png"
									alt="Dan Block - Software Engineer"
									className="rounded-full object-cover"
									width={300}
									height={300}
									priority
								/>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
