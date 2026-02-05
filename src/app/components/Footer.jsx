"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
	{ name: "GitHub", href: "https://github.com/danblock97", icon: FaGithub },
	{
		name: "LinkedIn",
		href: "https://linkedin.com/in/dan-block-mbcs-40756b18a/",
		icon: FaLinkedin,
	},
	{ name: "X", href: "https://x.com/goldiez2599", icon: FaXTwitter },
];

const quickLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-[var(--border)] bg-[color:var(--surface)] px-4 py-10">
			<div className="content-wrap grid gap-8 md:grid-cols-[1.3fr_1fr]">
				<div className="space-y-3">
					<Link href="/" className="inline-block text-2xl font-semibold tracking-tight">
						danblock.dev
					</Link>
					<p className="max-w-lg text-sm text-[var(--muted)]">
						Crafting reliable digital products with careful UI/UX thinking and
						high-quality engineering.
					</p>
					<div className="flex items-center gap-2">
						{socialLinks.map((social) => {
							const Icon = social.icon;
							return (
								<a
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="surface-soft inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:text-[var(--text)]"
									aria-label={social.name}
								>
									<Icon className="h-4 w-4" />
								</a>
							);
						})}
					</div>
				</div>

				<div className="grid gap-6 sm:grid-cols-2">
					<div>
						<h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
							Navigate
						</h4>
						<ul className="space-y-2 text-sm">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-[var(--muted)] transition-colors hover:text-[var(--text)]"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
							Info
						</h4>
						<p className="text-sm text-[var(--muted)]">
							Open to freelance and full-time opportunities.
						</p>
					</div>
				</div>
			</div>

			<div className="content-wrap mt-8 border-t border-[var(--border)] pt-4 text-sm text-[var(--muted)]">
				© {currentYear} danblock.dev. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
