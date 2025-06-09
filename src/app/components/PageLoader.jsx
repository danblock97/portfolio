"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PageLoader = ({ isLoading = true }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (isLoading) {
			const timer = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) {
						clearInterval(timer);
						return 100;
					}
					return prev + Math.random() * 15;
				});
			}, 100);

			return () => clearInterval(timer);
		}
	}, [isLoading]);

	const containerVariants = {
		initial: { opacity: 1 },
		exit: {
			opacity: 0,
			transition: { duration: 0.5 },
		},
	};

	const logoVariants = {
		initial: { scale: 0.8, opacity: 0 },
		animate: {
			scale: 1,
			opacity: 1,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	const progressVariants = {
		initial: { width: 0 },
		animate: {
			width: `${progress}%`,
			transition: { duration: 0.3, ease: "easeOut" },
		},
	};

	const particleVariants = {
		animate: {
			y: [0, -20, 0],
			opacity: [0, 1, 0],
			transition: {
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					className="fixed inset-0 z-50 bg-[#121212] flex items-center justify-center"
					variants={containerVariants}
					initial="initial"
					exit="exit"
				>
					{/* Background particles */}
					{[...Array(20)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-purple-500 rounded-full"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
							variants={particleVariants}
							animate="animate"
							transition={{ delay: i * 0.1 }}
						/>
					))}

					<div className="text-center">
						{/* Logo/Brand */}
						<motion.div
							variants={logoVariants}
							initial="initial"
							animate="animate"
							className="mb-8"
						>
							<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
								danblock.dev
							</h1>
						</motion.div>

						{/* Progress bar */}
						<div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4">
							<motion.div
								className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
								variants={progressVariants}
								initial="initial"
								animate="animate"
							/>
						</div>

						{/* Loading text */}
						<motion.p
							className="text-gray-400 text-sm"
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 1.5, repeat: Infinity }}
						>
							Loading experience...
						</motion.p>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PageLoader;
