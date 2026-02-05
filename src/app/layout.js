import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import { ThemeProvider } from "./components/ThemeProvider";

const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["500", "600", "700"],
	variable: "--font-display",
});

export const metadata = {
	title: "Portfolio - Dan Block - Software Engineer",
	description:
		"Explore the portfolio of Dan Block, a passionate software engineer, showcasing a collection of projects developed using Next.js. Dive into a variety of web applications, demonstrating expertise in front-end development, user experience design, and innovative problem-solving. Discover Dan's skills, experience, and creativity through this curated selection of projects.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${manrope.variable} ${cormorant.variable} overflow-x-clip`}>
				<ThemeProvider>
					<div className="site-shell">
						<PageTransition>{children}</PageTransition>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
