"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const tab_data = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>Node.js</li>
				<li>Axios</li>
				<li>NextJS</li>
				<li>React</li>
				<li>.NET</li>
				<li>Javascript</li>
			</ul>
		),
	},
	{
		title: "Qualifications",
		id: "qualifications",
		content: (
			<ul className="list-disc pl-2">
				<li>MBCS</li>
				<li>IT Practitioners</li>
				<li>C# Foundations</li>
			</ul>
		),
	},
	{
		title: "Experience",
		id: "experience",
		content: (
			<ul className="list-disc pl-2">
				<li>.NET Full Stack Software Engineer</li>
				<li>Jira/Confluence Admin & Configurator</li>
				<li>Oracle Apex Developer</li>
				<li>React/NextJS Web Applications</li>
			</ul>
		),
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
	return (
		<section className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/about-image.png"
					alt="about image"
					height={500}
					width={500}
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						I am a multifaceted professional skilled in web development,
						Jira/Confluence administration, and UI/UX design. With a passion for
						creating seamless digital experiences, I thrive on blending
						creativity with technical expertise to bring innovative solutions to
						life. Whether it's crafting user-friendly interfaces, configuring
						Jira/Confluence environments for optimal collaboration, or
						developing dynamic websites, I am dedicated to delivering projects
						that exceed expectations. Explore my work and discover how I can
						help bring your digital vision to reality.
					</p>
					<div className="flex flex-row mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							Skills
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("qualifications")}
							active={tab === "qualifications"}
						>
							Qualifications
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("experience")}
							active={tab === "experience"}
						>
							Experience
						</TabButton>
					</div>
					<div className="mt-8">
						{tab_data.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
