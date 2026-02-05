"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(undefined);

const isValidTheme = (value) => value === "light" || value === "dark";

const readSystemTheme = () => {
	if (typeof window === "undefined") {
		return "light";
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
};

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const storedTheme = window.localStorage.getItem("theme");
		const initialTheme = isValidTheme(storedTheme)
			? storedTheme
			: readSystemTheme();

		setTheme(initialTheme);
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) {
			return;
		}

		document.documentElement.setAttribute("data-theme", theme);
		window.localStorage.setItem("theme", theme);
	}, [theme, mounted]);

	const toggleTheme = () => {
		setTheme((previousTheme) =>
			previousTheme === "dark" ? "light" : "dark"
		);
	};

	const value = useMemo(
		() => ({ theme, toggleTheme, mounted }),
		[theme, mounted]
	);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used inside ThemeProvider");
	}

	return context;
};
