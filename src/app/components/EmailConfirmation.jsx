"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const EmailConfirmation = ({ isVisible, onClose }) => {
	useEffect(() => {
		document.body.style.overflow = isVisible ? "hidden" : "unset";

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isVisible]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div
						className="absolute inset-0 bg-black/35 backdrop-blur-sm"
						onClick={onClose}
					/>
					<motion.div
						className="surface-card relative z-10 w-full max-w-md p-6 text-center"
						initial={{ scale: 0.95, y: 16 }}
						animate={{ scale: 1, y: 0 }}
						exit={{ scale: 0.95, y: 8 }}
					>
						<div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--surface-2)] text-[var(--brand)]">
							<CheckCircleIcon className="h-8 w-8" />
						</div>
						<h2 className="text-2xl font-semibold">Message sent</h2>
						<p className="mt-3 text-sm text-[var(--muted)]">
							Thanks for reaching out. I&apos;ll review your message and reply as
							soon as possible.
						</p>
						<button onClick={onClose} className="button-primary mt-6 w-full">
							Close
						</button>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default EmailConfirmation;
