"use client";
import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import FloatingCard from "./FloatingCard";

const ProjectCard = ({
	imgUrl,
	title,
	description,
	gitUrl,
	previewUrl,
	index = 0,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
				ease: "easeOut",
			}}
		>
			<FloatingCard className="h-full">
				<div
					className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
					style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
				>
					{/* Gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

					{/* Hover overlay */}
					<motion.div
						className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/90 to-pink-600/90 backdrop-blur-sm"
						initial={{ opacity: 0, scale: 0.8 }}
						whileHover={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							className="flex space-x-4"
							initial={{ y: 20, opacity: 0 }}
							whileHover={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.1 }}
						>
							<Link href={gitUrl} className="group/link">
								<motion.div
									className="h-14 w-14 border-2 rounded-full border-white/50 backdrop-blur-md bg-white/10 flex items-center justify-center hover:border-white hover:bg-white/20 transition-all duration-300"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									<CodeBracketIcon className="h-6 w-6 text-white" />
								</motion.div>
							</Link>
							<Link href={previewUrl} className="group/link">
								<motion.div
									className="h-14 w-14 border-2 rounded-full border-white/50 backdrop-blur-md bg-white/10 flex items-center justify-center hover:border-white hover:bg-white/20 transition-all duration-300"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									<EyeIcon className="h-6 w-6 text-white" />
								</motion.div>
							</Link>
						</motion.div>
					</motion.div>
				</div>
				<div className="text-white p-6">
					<motion.h5
						className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						{title}
					</motion.h5>
					<motion.p
						className="text-[#ADB7BE] leading-relaxed"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
					>
						{description}
					</motion.p>
				</div>
			</FloatingCard>
		</motion.div>
	);
};

export default ProjectCard;
