"use client";

import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
	ssr: false,
});

const achievementsList = [
	{ metric: "Projects", value: "3", postfix: "+" },
	{ prefix: "~", metric: "Users", value: "55000" },
	{ metric: "Awards", value: "2" },
	{ metric: "Years", value: "7" },
];

const AchievementsSection = () => {
	return (
		<section className="space-y-5" aria-label="Achievements">
			<div>
				<span className="eyebrow">Highlights</span>
				<h2 className="mt-3 text-3xl font-semibold">Key outcomes</h2>
			</div>
			<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
				{achievementsList.map((achievement) => (
					<article key={achievement.metric} className="surface-soft p-4">
						<div className="mb-1 text-3xl font-semibold">
							{achievement.prefix}
							<AnimatedNumbers
								includeComma
								animateToNumber={parseInt(achievement.value, 10)}
								locale="en-US"
								className="inline"
								configs={(_, index) => ({
									mass: 1,
									friction: 110,
									tension: 130 * (index + 1),
								})}
							/>
							{achievement.postfix}
						</div>
						<p className="text-sm text-[var(--muted)]">{achievement.metric}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default AchievementsSection;
