"use client";

import { motion, AnimatePresence } from "framer-motion";

const EmailSendingLoader = ({ isVisible }) => {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						className="surface-card w-[18rem] p-6 text-center"
						initial={{ scale: 0.95, y: 12 }}
						animate={{ scale: 1, y: 0 }}
						exit={{ scale: 0.95, y: 8 }}
					>
						<div className="mx-auto mb-4 h-9 w-9 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--brand)]" />
						<h3 className="text-lg font-semibold">Sending message</h3>
						<p className="mt-2 text-sm text-[var(--muted)]">
							Please wait while your message is delivered.
						</p>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default EmailSendingLoader;
