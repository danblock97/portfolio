"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Projects",
		path: "/projects",
	},
	{
		title: "Contact",
		path: "/contact",
	},
];

const NavLink = ({ href, title, isActive, onHover, onLeave, linkRef }) => {
	return (
		<Link
			ref={linkRef}
			href={href}
			className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
				isActive ? "text-white" : "text-[#ADB7BE] hover:text-white"
			}`}
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
		>
			<span className="relative z-10">{title}</span>
		</Link>
	);
};

const GooeyNavigation = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [indicatorStyle, setIndicatorStyle] = useState({});
	const pathname = usePathname();
	const linkRefs = useRef([]);

	useEffect(() => {
		const currentIndex = navLinks.findIndex((link) => link.path === pathname);
		setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
	}, [pathname]);

	const updateIndicatorPosition = (index) => {
		if (index !== null && linkRefs.current[index]) {
			const linkElement = linkRefs.current[index];
			const rect = linkElement.getBoundingClientRect();
			const containerRect = linkElement.parentElement.getBoundingClientRect();

			setIndicatorStyle({
				left: `${rect.left - containerRect.left}px`,
				width: `${rect.width}px`,
			});
		}
	};

	useEffect(() => {
		// Update indicator position when active index changes
		updateIndicatorPosition(activeIndex);
	}, [activeIndex]);

	const handleHover = (index) => {
		setHoveredIndex(index);
		updateIndicatorPosition(index);
	};

	const handleLeave = () => {
		setHoveredIndex(null);
		updateIndicatorPosition(activeIndex);
	};

	const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

	return (
		<motion.div
			className="relative flex items-center bg-[#1a1a1a]/80 backdrop-blur-md rounded-full border border-[#33353F] p-2"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			{/* Gooey background indicator */}
			<motion.div
				className="absolute bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-12"
				initial={false}
				animate={indicatorStyle}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 30,
				}}
				style={{
					filter: "url(#gooey)",
				}}
			/>

			{/* Navigation Links */}
			{navLinks.map((link, index) => (
				<NavLink
					key={index}
					href={link.path}
					title={link.title}
					isActive={index === activeIndex}
					onHover={() => handleHover(index)}
					onLeave={handleLeave}
					linkRef={(el) => (linkRefs.current[index] = el)}
				/>
			))}

			{/* SVG Filter for Gooey Effect */}
			<svg width="0" height="0">
				<defs>
					<filter id="gooey" colorInterpolationFilters="sRGB">
						<feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
							result="gooey"
						/>
						<feComposite in="SourceGraphic" in2="gooey" operator="atop" />
					</filter>
				</defs>
			</svg>
		</motion.div>
	);
};

const MobileMenu = ({ isOpen, links, onClose }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 z-50 md:hidden"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						className="absolute inset-0 bg-black/50 backdrop-blur-sm"
						onClick={onClose}
					/>
					<motion.div
						className="absolute top-0 right-0 w-80 h-full bg-[#121212] border-l border-[#33353F]"
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
					>
						<div className="p-6">
							<button
								onClick={onClose}
								className="mb-8 p-2 text-white hover:text-purple-400 transition-colors"
							>
								<XMarkIcon className="h-6 w-6" />
							</button>
							<nav className="space-y-4">
								{links.map((link, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Link
											href={link.path}
											className="block text-2xl font-medium text-white hover:text-purple-400 transition-colors py-2"
											onClick={onClose}
										>
											{link.title}
										</Link>
									</motion.div>
								))}
							</nav>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const EnhancedNavbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<motion.nav
			className="fixed mx-auto top-0 left-0 right-0 z-40 bg-[#121212]/80 backdrop-blur-md border-b border-[#33353F]"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
				<Link
					href={"/"}
					className="text-2xl md:text-4xl text-white font-bold hover:text-purple-400 transition-colors duration-300"
				>
					<motion.span
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
					>
						danblock.dev
					</motion.span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:block">
					<GooeyNavigation />
				</div>

				{/* Mobile Menu Button */}
				<motion.button
					className="md:hidden p-2 text-white hover:text-purple-400 transition-colors"
					onClick={() => setMobileMenuOpen(true)}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					<Bars3Icon className="h-6 w-6" />
				</motion.button>
			</div>

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={mobileMenuOpen}
				links={navLinks}
				onClose={() => setMobileMenuOpen(false)}
			/>
		</motion.nav>
	);
};

export default EnhancedNavbar;
