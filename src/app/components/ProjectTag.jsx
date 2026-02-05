import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
	return (
		<button
			type="button"
			className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors sm:text-base ${
				isSelected
					? "border-[var(--brand)] bg-[color:var(--surface-2)] text-[var(--text)]"
					: "border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]"
			}`}
			onClick={() => onClick(name)}
		>
			{name}
		</button>
	);
};

export default ProjectTag;
