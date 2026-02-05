import React from "react";

const TabButton = ({ id, active, selectTab, children }) => {
	return (
		<button
			type="button"
			id={`${id}-tab`}
			role="tab"
			aria-selected={active}
			onClick={selectTab}
			className={`rounded-full px-4 py-2 text-sm font-medium transition-colors sm:text-base ${
				active
					? "bg-[var(--brand)] text-white"
					: "surface-soft text-[var(--muted)] hover:text-[var(--text)]"
			}`}
		>
			{children}
		</button>
	);
};

export default TabButton;
