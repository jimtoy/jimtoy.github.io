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
			bullets: [] as string[],
		},
		{
			company: "Chariot Solutions",
			location: "Fort Washington, PA",
			title: "Consultant",
			dates: "January 2006—September 2006",
			bullets: [
				"Built an enterprise client/server system for food distribution using Java Swing, J2EE, and Sybase",
				"Developed business modules using custom MVC framework and EJB architecture",
				"Authored technical specifications and conducted peer reviews of documentation and test plans",
			],
		},
		{
			company: "Diamond Technologies, Inc",
			location: "Wilmington, DE",
			title: "Consultant",
			dates: "October 2000—January 2006",
			bullets: [
				"Led full lifecycle software development projects as technical consultant for major clients including AstraZeneca and Delaware state agencies",
				"Delivered end-to-end solutions from requirements gathering through deployment and maintenance",
			],
		},
		{
			company: "Rollins Leasing Corp",
			location: "Wilmington, DE",
			title: "Senior Programmer Analyst",
			dates: "May 1997—October 2000",
			bullets: [
				"Designed and maintained business-critical applications for fuel automation, billing, and rental systems",
				"Led a software development team, delegating modifications across multiple languages (Visual Basic, C++, Clipper)",
				"Collaborated with corporate and field offices to deliver custom business solutions, including end-user training and documentation",
			],
		},
		{
			company: "Rollins Leasing Corp",
			location: "Wilmington, DE",
			title: "Help Desk Analyst",
			dates: "April 1995—May 1997",
			bullets: [] as string[],
		},
	],
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
			"Tools & Platforms": ["Git", "Docker", "AWS"],
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
