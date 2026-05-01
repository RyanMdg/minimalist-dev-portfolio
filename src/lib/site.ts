// Edit these values to personalize your portfolio.
export const site = {
  name: "Your Name",
  role: "Web Developer",
  tagline: "Crafting fast, accessible web experiences with modern tools.",
  location: "Available worldwide — remote",
  email: "hello@example.com",
  about: [
    "I'm a web developer with 2 years of experience building production web apps for startups, small businesses, and educational platforms.",
    "I focus on clean interfaces, performant front-ends, and pragmatic full-stack solutions — most of my recent work uses React, Next.js, Tailwind, and modern hosting on Vercel.",
  ],
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },
  // EmailJS — fill these with your real keys (Public Key is safe in the client)
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
};

export const skills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Tailwind CSS", "Node.js", "Express", "PostgreSQL",
  "Supabase", "Git", "Vercel", "REST APIs",
];

export const experience = [
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2024 — Present",
    description:
      "Designing and shipping production websites and web apps for clients across education, real estate, and small business.",
  },
  {
    role: "Junior Web Developer",
    company: "First Studio / Agency",
    period: "2023 — 2024",
    description:
      "Built responsive marketing sites and internal tools using React, Tailwind, and Node — collaborating closely with designers.",
  },
];

export type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Step Up Canada",
    description:
      "Marketing & enrollment site for an international study program based in Canada.",
    url: "https://www.stepupcanada.online/",
    tags: ["React", "Tailwind", "Education"],
  },
  {
    title: "Step Up Philippines",
    description:
      "Companion site for the Philippines branch of the Step Up program.",
    url: "https://www.stepupphilippines.online/",
    tags: ["React", "Tailwind", "Education"],
  },
  {
    title: "CPB Pro Painting",
    description:
      "Service website for a professional painting company with quote inquiries.",
    url: "https://cpbpropainting.vercel.app/",
    tags: ["React", "Vercel", "Business"],
  },
  {
    title: "Loan Tracker",
    description:
      "A simple, focused loan tracking app for managing balances and payments.",
    url: "https://loantracker-indol.vercel.app/",
    tags: ["React", "App", "Tailwind"],
  },
  {
    title: "Coach Mardee",
    description:
      "Personal coaching website with services, programs, and contact flow.",
    url: "https://coachmardee.com/",
    tags: ["Web", "Coaching"],
  },
  {
    title: "Bridgeway Educational Consultancy",
    description:
      "Consultancy site for an educational services company — programs and inquiries.",
    url: "https://bridgewayconsultancy.com/",
    tags: ["Web", "Education"],
  },
];
