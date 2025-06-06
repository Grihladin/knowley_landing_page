import React from "react";
import Image from 'next/image';

const teamMembers = [
	{
		name: "Pavel Senko",
		role: "CTO",
		image: "/pavel.jpg",
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
		name: "Alexander Uplisashvili",
		role: "COO",
		image: "/alex.JPG",
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
									className="aspect-square rounded-full object-cover border-4 border-primary"
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
								className="text-primary bg-primary/5 p-3 rounded-lg inline-flex items-center justify-center mt-auto hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`LinkedIn profile of ${member.name}`}
								title="LinkedIn"
							>
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									className="h-7 w-7" 
									fill="currentColor" 
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
