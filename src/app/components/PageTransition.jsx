"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
	const pathname = usePathname();

	const pageVariants = {
		initial: {
			opacity: 0,
			y: 20,
		},
		animate: {
			opacity: 1,
			y: 0,
		},
		exit: {
			opacity: 0,
			y: -20,
		},
	};

	const pageTransition = {
		type: "tween",
		ease: "anticipate",
		duration: 0.5,
	};

	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.div
				key={pathname}
				initial="initial"
				animate="animate"
				exit="exit"
				variants={pageVariants}
				transition={pageTransition}
				className="w-full"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;
