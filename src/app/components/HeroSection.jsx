"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
							Hello, I'm Dan{" "}
						</span>
						<br />
						<TypeAnimation
							sequence={[
								"Web Developer",
								1000,
								"Jira/Conf Admin",
								1000,
								"UI/UX Designer",
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
						Welcome to my portfolio! Feel free to check out my latest projects.
					</p>
					<Link href={"#contact"}>
						<button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-amber-500 to-pink-500 hover:bg-slate-200 text-white">
							Hire Me
						</button>
					</Link>
					<Link href={"#projects"}>
						<button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-amber-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								My Work
							</span>
						</button>
					</Link>
				</div>
				<div className="col-span-4 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src="/images/hero-image.png"
							alt="hero image"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
