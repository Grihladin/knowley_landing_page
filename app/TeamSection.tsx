import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeInUp,
  staggerContainer,
  teamCardVariants,
  imageFrameVariants,
  linkedInButtonVariants,
} from "./utils/animations";

const teamMembers = [
	{
		name: "Pavel Senko",
		role: "CTO",
		image: "/logo-color.png",
		linkedin: "https://www.linkedin.com/in/alex-johnson",
		quote: "Running is not just a sport, it's a way of life.",
	},
	{
		name: "Michael Ratke",
		role: "CEO",
		image: "/logo-color.png",
		linkedin: "https://www.linkedin.com/in/maria-lee",
		quote: "Fuel your body, fuel your passion.",
	},
	{
		name: "Alexander Uplishvili",
		role: "COO",
		image: "/logo-color.png",
		linkedin: "https://www.linkedin.com/in/james-smith",
		quote: "Every step forward is a step toward success.",
	},
];

export default function TeamSection() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className="py-16 bg-white" id="team">
			<motion.div
				ref={ref}
				variants={staggerContainer}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
				className="max-w-4xl mx-auto px-4 text-center"
			>
				<motion.h2
					variants={fadeInUp}
					className="text-3xl font-bold mb-4"
				>
					Our Team
				</motion.h2>
				<motion.p
					variants={fadeInUp}
					className="mb-10 text-gray-600"
				>
					Meet the passionate people behind our club.
				</motion.p>
				<motion.div
					variants={staggerContainer}
					className="flex flex-col md:flex-row justify-center items-center gap-8"
				>
					{teamMembers.map((member, idx) => (
						<motion.div
							key={idx}
							variants={teamCardVariants}
							whileHover="hover"
							className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center w-72 min-h-[320px] md:min-h-[340px]"
						>
							<motion.div
								variants={imageFrameVariants}
								whileHover="hover"
							>
								<img
									src={member.image}
									alt={member.name}
									className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary"
								/>
							</motion.div>
							<motion.h3
								variants={fadeInUp}
								className="text-xl font-semibold mb-1"
							>
								{member.name}
							</motion.h3>
							<motion.p
								variants={fadeInUp}
								className="text-gray-500 mb-3"
							>
								{member.role}
							</motion.p>
							<motion.p
								variants={fadeInUp}
								className="italic text-gray-700 mb-4 text-sm text-center"
							>
								"{member.quote}"
							</motion.p>
							<motion.a
								href={member.linkedin}
								variants={linkedInButtonVariants}
								whileHover="hover"
								className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full transition mt-auto text-sm font-medium"
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`LinkedIn profile of ${member.name}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
									className="w-5 h-5"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
								</svg>
								LinkedIn
							</motion.a>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
