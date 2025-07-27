"use client";
import React from "react";
import { motion } from "framer-motion";
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
			<Link href={previewUrl} target="_blank" rel="noopener noreferrer" className="block">
				<FloatingCard className="h-full cursor-pointer hover:scale-[1.02] transition-transform duration-300">
					<div
						className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden bg-center bg-no-repeat bg-cover"
						style={{ backgroundImage: `url(${imgUrl})` }}
					>
						{/* Gradient overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
			</Link>
		</motion.div>
	);
};

export default ProjectCard;
