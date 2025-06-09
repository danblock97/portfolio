"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CursorTrail = () => {
	const [trails, setTrails] = useState([]);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const trailId = useRef(0);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });

			// Create new trail particle
			const newTrail = {
				id: trailId.current++,
				x: e.clientX,
				y: e.clientY,
				timestamp: Date.now(),
			};

			setTrails((prev) => [...prev, newTrail]);

			// Remove old trails
			setTimeout(() => {
				setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
			}, 1000);
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className="fixed inset-0 pointer-events-none z-50">
			<AnimatePresence>
				{trails.map((trail) => (
					<motion.div
						key={trail.id}
						className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"
						style={{
							left: trail.x - 4,
							top: trail.y - 4,
						}}
						initial={{ scale: 1, opacity: 1 }}
						animate={{
							scale: 0,
							opacity: 0,
							x: Math.random() * 20 - 10,
							y: Math.random() * 20 - 10,
						}}
						exit={{ opacity: 0 }}
						transition={{
							duration: 1,
							ease: "easeOut",
						}}
					/>
				))}
			</AnimatePresence>
		</div>
	);
};

export default CursorTrail;
