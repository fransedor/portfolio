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
  ],
  projects: [],
};
