export const resume = {
	name: "Jim Toy",
	location: "Newark, DE, USA",
	contact: {
		email: "jim.toy@gmail.com",
		linkedin: "https://www.linkedin.com/in/jim-toy-591b051/",
		github: "https://github.com/jimtoy",
	},
	experience: [
		{
			company: "JPMorgan Chase",
			location: "Wilmington, DE",
			title: "Vice President",
			dates: "September 2006—Present",
			bullets: [
				"Provide technical leadership across enterprise-scale, business-critical systems supporting global banking operations",
				"Partner with cross-functional teams to modernize legacy platforms and improve system resilience and uptime",
				"Mentor engineering teams and guide adoption of modern development practices",
				"Oversee design and delivery of high-availability systems supporting customer-facing and call center operations",
			],
		},
	],
	earlierCareer: {
		dates: "1995—2006",
		roles: "Consultant (Chariot Solutions; Diamond Technologies, Inc.) · Senior Programmer Analyst & Help Desk Analyst (Rollins Leasing Corp)",
		location: "Wilmington, DE & Fort Washington, PA",
		summary:
			"Delivered enterprise client/server and business-critical systems across consulting and in-house roles, including client engagements with AstraZeneca and Delaware state agencies.",
	},
	education: [
		{
			school: "Goldey-Beacom College",
			location: "Wilmington, DE",
			degree: "B.S. in Computer Information Systems",
			year: "1994",
		},
	],
	skills: {
		technical: {
			"Programming Languages": ["Java", "JavaScript"],
			"Frameworks & Libraries": ["React"],
			Databases: ["MySQL", "Oracle"],
			"Cloud & Infrastructure": [
				"AWS",
				"Docker",
				"Kubernetes",
				"Terraform",
				"CI/CD pipelines",
				"Microservices architecture",
			],
			"AI & Modern Tooling": ["AI-assisted development (e.g. Claude Code)", "LLM-based tooling & workflows"],
			"Tools & Platforms": ["Git"],
		},
		soft: ["Leadership", "Problem-solving", "Communication", "Project management", "Team collaboration"],
	},
	projects: [
		{
			name: "Blackout System",
			role: "Software Developer Lead",
			bullets: [
				"Provided technical oversight for the Blackout system, a business process used when other production systems are unavailable",
				"Performed code reviews, created designs and estimates for modular development to replace legacy \"all or nothing\" solution",
				"Improved business up-time and customer experience with JPMorgan Chase call centers through modular system design",
			],
			technologies: ["Java", "Servlets", "Weblogic 10", "Oracle 9i", "JDBC", "SQL", "WebWork"],
		},
	],
};
