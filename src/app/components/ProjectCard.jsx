"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, previewUrl, index = 0 }) => {
	return (
		<motion.article
			className="surface-soft overflow-hidden"
			initial={{ opacity: 0, y: 18 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.28, delay: index * 0.06 }}
		>
			<Link
				href={previewUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="block h-full"
			>
				<div className="relative h-44 overflow-hidden sm:h-52">
					<Image
						src={imgUrl}
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
						className="object-cover"
					/>
				</div>
				<div className="space-y-3 p-4">
					<div className="flex items-start justify-between gap-3">
						<h3 className="text-xl font-semibold">{title}</h3>
						<ArrowTopRightOnSquareIcon className="h-5 w-5 shrink-0 text-[var(--muted)]" />
					</div>
					<p className="text-sm text-[var(--muted)]">{description}</p>
				</div>
			</Link>
		</motion.article>
	);
};

export default ProjectCard;
