"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
	{
		id: 1,
		title: "AstroStats Discord Bot",
		description:
			"A fully functional Discord Bot built entirely with Python. Hosted with 95% uptime. You can invite it from the link below where you can also check out the commands available.",
		image: "/images/projects/astrostats.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/danblock97/AstroStats",
		previewUrl: "https://astrostats.vercel.app",
	},
	{
		id: 2,
		title: "ClutchGG",
		description:
			"ClutchGG is a web app that focuses on player tracking and analytics for League of Legends",
		image: "/images/projects/rift-spy.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/danblock97/clutch-gg",
		previewUrl: "https://clutchgg.lol/",
	},
	{
		id: 3,
		title: "Diverse Diaries",
		description:
			"Diverse Diaries is a NextJS 15 Blog Application that allows users to create, read, update, and delete blog posts.",
		image: "/images/projects/diversediaries.png",
		tag: ["All", "Web"],
		gitUrl: "",
		previewUrl: "https://diversediaries.com/",
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Mobile"
					isSelected={tag === "Mobile"}
				/>
			</div>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
