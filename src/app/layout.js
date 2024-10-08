import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Portfolio - Dan Block - Software Engineer",
	description:
		"Explore the portfolio of Dan Block, a passionate software engineer, showcasing a collection of projects developed using Next.js. Dive into a variety of web applications, demonstrating expertise in front-end development, user experience design, and innovative problem-solving. Discover Dan's skills, experience, and creativity through this curated selection of projects.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
