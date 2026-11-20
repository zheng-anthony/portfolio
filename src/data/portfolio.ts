import type {
  Experience,
  Profile,
  SkillCategory,
} from "../types/portfolio";

// Replace the placeholders here with your own details and links.
export const profile: Profile = {
  name: "Anthony Zheng",
  github: "https://github.com/zheng-anthony",
  linkedin: "https://www.linkedin.com/in/zheng-anthony",
  resume: `${import.meta.env.BASE_URL}Anthony_Zheng_Resume.pdf`,
  email: "anthonyzheng124@gmail.com",
  education: {
    institution: "University of Florida",
    dates: "2024 – 2028",
    degree: "B.S. in Computer Science",
  },
};

export const experience: Experience[] = [
  {
    role: "Software Engineering Intern",
    organization: "NASA — Spaceport Command & Control",
    date: "Aug 2026 – Present",
    description:
      "Developing launch-control software and automated testing systems for the Artemis program. Building a custom messaging test harness while modernizing and optimizing infrastructure checks to keep environment reliable.",
  },
  {
    role: "Software Engineer",
    organization: "QualityReports.AI",
    date: "Jan 2026 – Jul 2026",
    description:
      "Developed maintenance and asset management software for inspections and field operations. Owned features end-to-end, from launching a new parts and inventory system to re-architecting PostgreSQL analytics queries and shipping user-focused improvements.",
  },
  {
    role: "Software Engineer Intern",
    organization: "C&S Community Management Services",
    date: "Oct 2025 – Dec 2025",
    description:
      "Developed backend services for a property management web application. Implemented secure role-based access control and designed the data models linking property managers to properties for an internal dashboard.",
  },
  {
    role: "Lead Software Engineer",
    organization: "Solar Gators",
    date: "Jan 2025 – Present",
    description:
      "Leading the software behind our solar car’s race strategy and live operations. Designed and shipped a race simulator and telemetry dashboard, enabling the race crew and engineering subteams to monitor vehicle performance and plan strategy.",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      "Python",
      "Go",
      "C++",
      "SQL",
      "Java",
      "TypeScript",
      "JavaScript",
      "Bash",
    ],
  },
  {
    category: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Express.js",
      "Hono",
      "FastAPI",
      "Robot Framework",
      "JUnit",
    ],
  },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "DynamoDB"] },
  {
    category: "Infrastructure",
    items: ["AWS", "Terraform", "Docker", "GitHub Actions"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "Linux",
      "Node.js",
      "Drizzle ORM",
      "SQLAlchemy",
      "YOLOv8",
      "OpenCV",
    ],
  },
];
