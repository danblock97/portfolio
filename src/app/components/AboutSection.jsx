"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const tabData = [
	{
		title: "Skills",
		id: "skills",
		content: ["Node.js", "Axios", "NextJS", "React", ".NET", "Javascript", "Python"],
	},
	{
		title: "Qualifications",
		id: "qualifications",
		content: ["MBCS", "IT Practitioners", "C# Foundations"],
	},
	{
		title: "Experience",
		id: "experience",
		content: [
			".NET Full Stack Software Engineer",
			"Jira/Confluence Admin & Configurator",
			"Oracle Apex Developer",
			"React/NextJS Web Applications",
		],
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	const activeTab = tabData.find((item) => item.id === tab);

	return (
		<section className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
			<div className="surface-soft overflow-hidden p-3">
				<Image
					src="/images/about-image.png"
					alt="Dan Block working"
					height={700}
					width={700}
					className="h-full w-full rounded-[1rem] object-cover"
				/>
			</div>

			<div className="space-y-6">
				<p className="section-copy">
					I am a multifaceted professional skilled in web development,
					Jira/Confluence administration, and UI/UX design. I combine creative
					thinking with technical depth to ship clean, useful digital products.
				</p>

				<div className="flex flex-wrap gap-2" role="tablist" aria-label="About tabs">
					{tabData.map((item) => (
						<TabButton
							key={item.id}
							id={item.id}
							selectTab={() => handleTabChange(item.id)}
							active={tab === item.id}
						>
							{item.title}
						</TabButton>
					))}
				</div>

				<div
					className="surface-soft p-5"
					role="tabpanel"
					aria-live="polite"
					aria-busy={isPending}
				>
					<ul className="grid gap-2 text-sm text-[var(--text)] sm:text-base">
						{activeTab.content.map((item) => (
							<li key={item} className="flex items-center gap-2">
								<span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
