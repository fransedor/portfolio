export interface ContentType {
  title: string;
  company: string;
  description: string;
  points: string[];
  url?: string;
}

export const CONTENTS: Record<"experience" | "projects", ContentType[]> = {
  experience: [
    {
      title: "Frontend Engineer",
      company: "Bluebird Group",
      description:
        "Bluebird Group is the leading transportation company in Indonesia, mainly known for its taxi services, but also provide other services such as buses, executive taxis, and car rentals.",
      points: [
        "Pioneered the micro frontend pattern using React and Rollup, enabling cross-team collaborations and improving developer’s productivity.",
        "Maintain and update a legacy project, resolving 16 high priority bugs within 3 weeks of joining the project, and upgrading JavaScript code into TypeScript code to improve type safety and code quality.",
        "Researched and implemented SSO integration for website applications, enabling users to switch and use different internal applications easily.",
        "Assisted other frontend engineers when implementing new libraries, such as React Query, NextJS, and Verdaccio and ensuring efficient implementation through code reviews.",
      ],
    },
    {
      title: "Frontend Engineering Tutor",
      company: "MySkill",
      description:
        "MySkill is a upskilling & career preparation startup for aspiring professionals, helping individuals and companies to achieve their new heights by crafting their skills.",
      points: [
        "Provide a learning curriculum for Frontend debugging, along with all the learning materials needed",
        "Provide the learning materials for introduction to HTML course",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Society of Renewable Energy (SRE)",
      description:
        "An NGO accelerating Indonesia energy transition through youth empowerment and multi-institutional collaboration",
      points: [
        "Maintain and update landing page using NextJS, TypeScript and Firebase, allowing 1000 users to participate in SRE multi-institutional projects.",
        "Developed an E-commerce platform for SRE partners using NextJS and Typescript.",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Arvis",
      description:
        "Arvis is a Software Development company, providing solutions for real problems.",
      points: [
        "Developed an MVP for an agricultural startup with NextJS, Redux, and TypeScript, leading the startup to a Seed round funding.",
        "Developed a stock management app using React, Express, and PostgreSQL for a client’s yearly stock take.",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Loocale.id",
      description:
        "Loocale is a tourism startup aiming to bridge the gap between tourism provider and tourists",
      points: [
        "Developed an MVP for loocale using NextJS, Express, and MySQL, leading to a funding from a university incubation program",
      ],
    },
  ],
  projects: [
		
	],
};
