export interface ContentType {
  title: string;
  company: string;
  description: string;
  points: string[];
  url?: string;
  images?: string[];
}

export const CONTENTS: Record<"experience" | "projects", ContentType[]> = {
  experience: [
    {
      title: "Frontend Engineer",
      company: "Bluebird Group",
      description:
        "Bluebird Group is the leading transportation company in Indonesia, mainly known for its taxi services.",
      points: [
        "Pioneered the micro frontend pattern using React and Rollup",
        "Maintain and update a legacy project. Upgrading JavaScript code into TypeScript code",
        "Researched and implemented SSO integration for website applications",
        "Implement unit test using Jest and React Testing Library",
      ],
      images: ["/bluebird-1.png"],
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
      images: ["/myskill-1.png"],
      url: "https://myskill.id/course/introduction-to-html",
    },
    {
      title: "Frontend Engineer",
      company: "Society of Renewable Energy (SRE)",
      description:
        "An NGO accelerating Indonesia energy transition through youth empowerment and multi-institutional collaboration",
      points: [
        "Maintain and update landing page using NextJS, TypeScript and Firebase.",
        "Developed an E-commerce platform for SRE partners using NextJS and Typescript.",
      ],
      images: ["/sre-1.png"],
      url: "https://sre.co.id",
    },
    {
      title: "Frontend Engineer",
      company: "Arvis",
      description:
        "Arvis is a Software Development company, specializing in E-plantation products.",
      points: [
        "Developed an MVP for an agricultural startup with NextJS, Redux, and TypeScript.",
        "Developed a stock management app using React, Express, and PostgreSQL for a client’s yearly stock take.",
      ],
      images: ["/arvis-1.png"],
      url: "https://aria-indonesia.id/",
    },
    {
      title: "Frontend Engineer",
      company: "Loocale.id",
      description:
        "Loocale is a tourism startup aiming to bridge the gap between tourism provider and tourists",
      points: [
        "Developed an MVP for loocale using NextJS, Express, and MySQL, leading to a funding from a university incubation program",
      ],
      images: ["/loocale-1.png"],
      url: "https://loocale.id/discover/",
    },
  ],
  projects: [
		{
			title: "E-Timesheet Portal",
			company: "Bluebird Group",
			description: "A digitalized end-to-end timesheet solution for Bluebird Group drivers",
			points: [
				"Develop the portal using ReactJS and Redux",
				"Integrate with internal design system library and BE APIs",
				"Provide localization and multi role authorization"
			],
			images: ["/ets-portal.png"]
		},
		{
			title: "Area Management",
			company: "Bluebird Group",
			description: "Centralized area management for internal tools",
			points: [
				"Draw polygons and circles using ReactJS and Leaflet",
				"Export components as UI library for other internal tools",
			]
		},
		{
			title: "Private package registry",
			company: "Bluebird Group",
			description: "A private package registry to implement micro frontend architecture",
			points: [
				"Work with DevOps team to initialize a private registry on frontend team dedicated server",
				"Assited other frontend engineers on micro frontend implementation",
				"Initialize the library repository, leading to a standardized library boilerplate for our frontend team"
			],
			images: ["/verdaccio.png"]
		},
		{
			title: "Seller Dashboard",
			company: "Entity",
			description: "Seller dashboard to manage products and orders",
			points: [
				"Develop the design system components using TailwindCSS",
				"Develop the website using NextJS, Fastify, and PostgreSQL",
			],
			images: ["/seller-entity.png"],
			url: "https://www.entity.co.id/"
		},
		{
			title: "Landing Page",
			company: "Society of Renewable Energy (SRE)",
			description: "Landing page to showcase SRE activity and achievements",
			points: [
				"Developed the website using NextJS, TailwindCSS",
				"Integrate with Firebase Authentication for RBAC"
			],
			images: ["/sre-1.png"],
			url: "https://sre.co.id"
		},
		{
			title: "Landing Page",
			company: "Serenity",
			description: "Landing page showcasing The Serenity housing cluster",
			points: [
				"Developed the website using NextJS, TailwindCSS",
				"Integrate with Firebase Storage for storing images and videos"
			],
			images: ["/serenity.png"],
			url: "https://www.theserenity.co.id/projects/jatiasih"
		}
	],
};
