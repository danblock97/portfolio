"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
	{
		id: 1,
		title: "AstroStats Discord Bot",
		description:
			"A fully functional Discord Bot built entirely with Python. Hosted with 95% uptime. You can invite it from the link below where you can also check out the commands available.",
		image: "/images/projects/astrostats.png",
		tag: ["All", "Web"],
		gitUrl: "",
		previewUrl: "https://astrostats.info/",
	},
	{
		id: 2,
		title: "ClutchGG",
		description:
			"ClutchGG is a web app that focuses on player tracking and analytics for League of Legends & Teamfight Tactics",
		image: "/images/projects/clutchgg.png",
		tag: ["All", "Web"],
		gitUrl: "",
		previewUrl: "https://clutchgg.lol/",
	},
	{
		id: 4,
		title: "Schedulr",
		description:
			"A joint calendar scheduling app for iOS that helps you coordinate and schedule events with others seamlessly.",
		image: "/images/projects/schedulr.png",
		tag: ["All", "Mobile"],
		gitUrl: "",
		previewUrl: "https://apps.apple.com/gb/app/schedulr/id6754965988",
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");

	const filteredProjects = useMemo(
		() => projectsData.filter((project) => project.tag.includes(tag)),
		[tag]
	);

	return (
		<section id="projects" className="space-y-6">
			<div className="flex flex-wrap gap-2">
				<ProjectTag onClick={setTag} name="All" isSelected={tag === "All"} />
				<ProjectTag onClick={setTag} name="Web" isSelected={tag === "Web"} />
				<ProjectTag
					onClick={setTag}
					name="Mobile"
					isSelected={tag === "Mobile"}
				/>
			</div>

			<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
				{filteredProjects.map((project, index) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
						index={index}
					/>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
