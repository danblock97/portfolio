"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
	const { theme, toggleTheme, mounted } = useTheme();
	const isDark = theme === "dark";
	const label = isDark ? "Switch to light mode" : "Switch to dark mode";

	return (
		<motion.button
			type="button"
			onClick={toggleTheme}
			className="surface-soft inline-flex h-10 w-10 items-center justify-center rounded-full"
			aria-label={label}
			whileTap={{ scale: 0.92 }}
		>
			{mounted && isDark ? (
				<SunIcon className="h-5 w-5 text-[var(--text)]" />
			) : (
				<MoonIcon className="h-5 w-5 text-[var(--text)]" />
			)}
		</motion.button>
	);
};

export default ThemeToggle;
