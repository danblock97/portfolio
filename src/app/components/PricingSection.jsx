"use client";

import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const includedFeatures = [
	"Planning session to define site goals, page structure, and key calls to action.",
	"Custom-designed static website (typically 4-7 pages) tailored to your brand.",
	"Mobile-first responsive build for desktop, tablet, and phone.",
	"Technical SEO setup (metadata, sitemap, indexing, and clean page structure).",
	"Contact form setup routed directly to your company inbox.",
	"Performance-focused delivery with accessibility best practices.",
	"Launch support and handover guidance so your team can manage content updates.",
];

const addOns = [
	"Additional page design + build: £85 per page",
	"Copywriting support and content polish: from £120 per page",
	"News/blog section for ongoing updates: from £250",
	"Monthly care plan (minor edits + monitoring): from £60/month",
];

const PricingSection = () => {
	return (
		<section className="space-y-6" aria-label="Pricing">
			<div>
				<span className="eyebrow">Services</span>
				<h2 className="mt-3 text-3xl font-semibold">
					Static company website package
				</h2>
				<p className="mt-2 text-sm text-[var(--muted)]">
					Focused on brochure-style business websites that look professional,
					load quickly, and turn visitors into enquiries.
				</p>
			</div>

			<div className="surface-soft grid gap-6 p-5 sm:p-7 md:grid-cols-[auto_1fr] md:items-start">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
						Starting at
					</p>
					<p className="mt-2 text-5xl font-semibold text-[var(--brand)]">£650</p>
					<p className="mt-2 max-w-xs text-sm text-[var(--muted)]">
						Typical delivery: 2-3 weeks for a complete 4-7 page static site.
					</p>
					<Link href="/contact" className="button-primary mt-5">
						Book a project
					</Link>
				</div>

				<ul className="grid gap-3">
					{includedFeatures.map((feature) => (
						<li key={feature} className="flex items-start gap-3 text-sm text-[var(--text)]">
							<CheckCircleIcon className="mt-[2px] h-5 w-5 shrink-0 text-[var(--brand)]" />
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="surface-soft space-y-3 p-5">
				<p className="text-sm font-semibold text-[var(--text)]">Optional add-ons</p>
				<ul className="grid gap-2 text-sm text-[var(--muted)]">
					{addOns.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<p className="text-xs text-[var(--muted)]">
					Domain and hosting costs are quoted separately based on your preferred
					setup and expected traffic.
				</p>
			</div>
		</section>
	);
};

export default PricingSection;
