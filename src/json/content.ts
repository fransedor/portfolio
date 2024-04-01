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
  projects: [],
};
