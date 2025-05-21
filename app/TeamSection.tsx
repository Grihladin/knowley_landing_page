import React from "react";
import Image from 'next/image';

const teamMembers = [
	{
		name: "Pavel Senko",
		role: "CTO",
		image: "/logo-color.png",
		linkedin: "https://www.linkedin.com/in/plavik/",
		quote: "Running is not just a sport, it's a way of life.",
	},
	{
		name: "Michael Ratke",
		role: "CEO",
		image: "/logo-color.png",
		linkedin: "https://www.linkedin.com/in/michael-ratke-0b3304303/",
		quote: "Fuel your body, fuel your passion.",
	},
	{
		name: "Alexander Uplishvili",
		role: "COO",
		image: "/logo-color.png",
		linkedin: "https://www.linkedin.com/in/alexander-uplisashvili-800078201/",
		quote: "Every step forward is a step toward success.",
	},
];

export default function TeamSection() {
	// Section ref removed as it was unused

	// Animation code removed

	return (
		<section className="py-16 bg-white" id="team">
			<div
				className="max-w-4xl mx-auto px-4 text-center"
			>
				<h2 className="text-3xl font-bold mb-4">
					Our Team
				</h2>
				<p className="mb-10 text-gray-600">
					Meet the passionate people behind our club.
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-8">
					{teamMembers.map((member, idx) => (
						<div
							key={idx}
							className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center w-72 min-h-[320px] md:min-h-[340px]"
						>
							<div className="w-24 h-24 relative mb-4">
								<Image
									src={member.image}
									alt={member.name}
									className="rounded-full object-cover border-4 border-primary"
									width={96}
									height={96}
									priority
								/>
							</div>
							<h3 className="text-xl font-semibold mb-1">
								{member.name}
							</h3>
							<p className="text-gray-500 mb-3">
								{member.role}
							</p>
							<p className="italic text-gray-700 mb-4 text-sm text-center">
								&ldquo;{member.quote}&rdquo;
							</p>
							<a
								href={member.linkedin}
								className="inline-flex items-center justify-center p-2 bg-blue-600 text-white rounded-lg mt-auto"
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`LinkedIn profile of ${member.name}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
									className="w-6 h-6"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
								</svg>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
