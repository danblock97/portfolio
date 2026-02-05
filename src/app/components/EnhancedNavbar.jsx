"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
	{ title: "Home", path: "/" },
	{ title: "About", path: "/about" },
	{ title: "Projects", path: "/projects" },
	{ title: "Contact", path: "/contact" },
];

const EnhancedNavbar = () => {
	const pathname = usePathname();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		setMobileMenuOpen(false);
	}, [pathname]);

	return (
		<header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--border)] bg-[color:var(--surface)]/95 backdrop-blur">
			<div className="content-wrap flex h-16 items-center justify-between gap-4 px-3 sm:px-4">
				<Link href="/" className="text-xl font-semibold tracking-tight text-[var(--text)]">
					danblock.dev
				</Link>

				<nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
					{navLinks.map((link) => {
						const isActive = pathname === link.path;

						return (
							<Link
								key={link.path}
								href={link.path}
								className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
									isActive
										? "bg-[color:var(--surface-2)] text-[var(--text)]"
										: "text-[var(--muted)] hover:text-[var(--text)]"
								}`}
							>
								{link.title}
							</Link>
						);
					})}
				</nav>

				<div className="hidden md:block">
					<ThemeToggle />
				</div>

				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<button
						type="button"
						onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
						className="surface-soft inline-flex h-10 w-10 items-center justify-center rounded-full"
						aria-expanded={mobileMenuOpen}
						aria-label="Toggle navigation menu"
					>
						{mobileMenuOpen ? (
							<XMarkIcon className="h-5 w-5" />
						) : (
							<Bars3Icon className="h-5 w-5" />
						)}
					</button>
				</div>
			</div>

			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.nav
						className="border-t border-[var(--border)] bg-[color:var(--surface)] px-4 pb-4 pt-2 md:hidden"
						initial={{ opacity: 0, y: -14 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						aria-label="Mobile"
					>
						<div className="content-wrap grid gap-2">
							{navLinks.map((link) => {
								const isActive = pathname === link.path;
								return (
									<Link
										key={link.path}
										href={link.path}
										className={`rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
											isActive
												? "border-[var(--brand)] text-[var(--text)]"
												: "border-[var(--border)] text-[var(--muted)]"
										}`}
									>
										{link.title}
									</Link>
								);
							})}
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default EnhancedNavbar;
