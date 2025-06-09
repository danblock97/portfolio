"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const FloatingCard = ({ children, className = "", ...props }) => {
	const [isHovered, setIsHovered] = useState(false);

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]));
	const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]));

	const handleMouseMove = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseXRelative = (event.clientX - rect.left) / width - 0.5;
		const mouseYRelative = (event.clientY - rect.top) / height - 0.5;

		mouseX.set(mouseXRelative);
		mouseY.set(mouseYRelative);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		mouseX.set(0);
		mouseY.set(0);
	};

	return (
		<motion.div
			className={`relative ${className}`}
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
			}}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
			{...props}
		>
			{/* Glow effect */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl"
				animate={{
					opacity: isHovered ? 1 : 0,
					scale: isHovered ? 1.1 : 1,
				}}
				transition={{ duration: 0.3 }}
			/>

			{/* Card content */}
			<div
				className="relative bg-[#18191E] border border-[#33353F] rounded-xl overflow-hidden"
				style={{ transform: "translateZ(50px)" }}
			>
				{children}
			</div>
		</motion.div>
	);
};

export default FloatingCard;
