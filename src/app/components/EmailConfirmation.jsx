"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
	CheckCircleIcon,
	EnvelopeIcon,
	ClockIcon,
} from "@heroicons/react/24/solid";
import { useEffect } from "react";

const EmailConfirmation = ({ isVisible, onClose }) => {
	// Prevent body scroll when modal is open
	useEffect(() => {
		if (isVisible) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		// Cleanup function to restore scroll when component unmounts
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isVisible]);
	const overlayVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	};

	const modalVariants = {
		hidden: {
			opacity: 0,
			scale: 0.3,
			y: -100,
			rotateX: -90,
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			rotateX: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 20,
				staggerChildren: 0.1,
			},
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			y: 50,
			transition: { duration: 0.3 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	const checkVariants = {
		hidden: {
			scale: 0,
			rotate: -180,
		},
		visible: {
			scale: 1,
			rotate: 0,
			transition: {
				type: "spring",
				stiffness: 500,
				damping: 15,
				delay: 0.3,
			},
		},
	};

	const pulseVariants = {
		animate: {
			scale: [1, 1.1, 1],
			opacity: [0.5, 0.8, 0.5],
			transition: {
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					variants={overlayVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100vh",
					}}
				>
					{/* Backdrop */}
					<motion.div
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
						onClick={onClose}
					/>

					{/* Modal */}
					<motion.div
						className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#33353F] rounded-3xl p-8 w-full max-w-md text-center shadow-2xl z-10"
						variants={modalVariants}
						style={{
							transformStyle: "preserve-3d",
						}}
					>
						{/* Animated background glow */}
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl"
							variants={pulseVariants}
							animate="animate"
						/>

						{/* Content */}
						<div className="relative z-10">
							{/* Success Icon */}
							<motion.div
								className="relative mx-auto mb-6 w-20 h-20"
								variants={itemVariants}
							>
								{/* Glow effect */}
								<motion.div
									className="absolute inset-0 bg-green-500/30 rounded-full blur-lg"
									variants={pulseVariants}
									animate="animate"
								/>
								<motion.div
									className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-full w-full h-full flex items-center justify-center"
									variants={checkVariants}
								>
									<CheckCircleIcon className="w-10 h-10 text-white" />
								</motion.div>
							</motion.div>

							{/* Title */}
							<motion.h2
								className="text-2xl font-bold text-white mb-4"
								variants={itemVariants}
							>
								Message Sent Successfully! 🎉
							</motion.h2>

							{/* Description */}
							<motion.p
								className="text-gray-300 mb-6 leading-relaxed"
								variants={itemVariants}
							>
								Thank you for reaching out! Your message has been delivered to
								my inbox.
							</motion.p>

							{/* Info Cards */}
							<motion.div className="space-y-3 mb-6" variants={itemVariants}>
								<div className="flex items-center justify-center space-x-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
									<EnvelopeIcon className="w-5 h-5 text-blue-400" />
									<span className="text-blue-300 text-sm">
										Email confirmation sent
									</span>
								</div>

								<div className="flex items-center justify-center space-x-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
									<ClockIcon className="w-5 h-5 text-yellow-400" />
									<span className="text-yellow-300 text-sm">
										Response within 24-48 hours
									</span>
								</div>
							</motion.div>

							{/* Professional Message */}
							<motion.div
								className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4 mb-6"
								variants={itemVariants}
							>
								<p className="text-gray-300 text-sm leading-relaxed">
									I'm excited to connect with you! I'll personally review your
									message and get back to you with a thoughtful response as soon
									as possible.
								</p>
							</motion.div>

							{/* Close Button */}
							<motion.button
								onClick={onClose}
								className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
								variants={itemVariants}
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="flex items-center justify-center gap-2">
									Got it!
									<motion.span className="group-hover:translate-x-1 transition-transform duration-300">
										✨
									</motion.span>
								</span>
							</motion.button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default EmailConfirmation;
