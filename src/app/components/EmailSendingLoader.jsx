"use client";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const EmailSendingLoader = ({ isVisible }) => {
	const containerVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 20,
			},
		},
	};

	const planeVariants = {
		animate: {
			x: [0, 40, 0],
			y: [0, -20, 0],
			rotate: [0, 10, 0],
			transition: {
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	const dotVariants = {
		animate: {
			scale: [1, 1.5, 1],
			opacity: [0.5, 1, 0.5],
			transition: {
				duration: 1,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	const waveVariants = {
		animate: {
			scale: [1, 2, 3],
			opacity: [0.8, 0.4, 0],
			transition: {
				duration: 2,
				repeat: Infinity,
				ease: "easeOut",
			},
		},
	};

	if (!isVisible) return null;

	return (
		<motion.div
			className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
			}}
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#33353F] rounded-2xl p-8 text-center">
				{/* Animated plane with waves */}
				<div className="relative mb-6 flex justify-center">
					{/* Wave effects */}
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-16 h-16 border-2 border-blue-500/30 rounded-full"
							variants={waveVariants}
							animate="animate"
							style={{ animationDelay: `${i * 0.5}s` }}
						/>
					))}

					{/* Paper plane */}
					<motion.div
						className="relative z-10 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center"
						variants={planeVariants}
						animate="animate"
					>
						<PaperAirplaneIcon className="w-6 h-6 text-white" />
					</motion.div>
				</div>

				{/* Loading text */}
				<h3 className="text-xl font-semibold text-white mb-3">
					Sending your message
				</h3>

				{/* Animated dots */}
				<div className="flex justify-center space-x-1 mb-4">
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							className="w-2 h-2 bg-blue-400 rounded-full"
							variants={dotVariants}
							animate="animate"
							style={{ animationDelay: `${i * 0.2}s` }}
						/>
					))}
				</div>

				<p className="text-gray-400 text-sm">
					Please wait while we deliver your message...
				</p>
			</div>
		</motion.div>
	);
};

export default EmailSendingLoader;
