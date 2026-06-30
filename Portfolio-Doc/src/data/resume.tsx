import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FolderKanban } from "lucide-react";

export const DATA = {
  name: "Yusuf Hameed",
  initials: "YH",
  url: "#",
  location: "India",
  description: "Software Engineer based in India. I love building cool things.",
  summary:
    "I am a full stack developer. More importantly though I am a problem solving fanatic with a relentless devotion to efficiency. I bring an 'above and beyond' approach to my work because I believe my goals should not be limited by familiarity or job descriptions.",
  avatarUrl: "",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Redux",
    "Node.js",
    "Nest.js",
    "Postgres",
    "Redis",
    "Docker",
    "Aws",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: FolderKanban, label: "Projects" },
  ],
  contact: {
    email: "yusufhameed911@gmail.com",
    tel: "+917007409200",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Nexonikk",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yusufhameed911",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/PrimeNexonik?t=9FlWzy_d1yBoEwNo-yiseA&s=08",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Xelron AI",
      href: "https://www.xelron.in/",
      badges: ["Freelance"],
      location: "Remote",
      title: "Software Developer AI",
      logoUrl: "/xelron_logo.jpg",
      start: "Oct 2025",
      end: "Present",
      description: [
        "Design and build standalone backend and system-level tasks used for training and evaluating Large Language Models (LLMs) within Snorkel AI’s Terminus / Terminal-Bench framework.",
        "Create Docker-based Linux (Ubuntu) execution environments with pinned dependencies to ensure reproducible, deterministic task runs.",
        "Implement backend logic, data transformations, and CLI-based workflows using Node.js, Python, Bash, and Linux tooling.",
        "Run CI and LLM-as-Judge evaluations locally and iterate based on automated and peer review feedback to meet benchmark quality standards.",
        "Contribute to production-grade AI agent benchmarking infrastructure, supporting research and deployment of real-world developer AI systems.",
      ],
    },

    {
      company: "Talecto",
      href: "#",
      badges: ["Internship"],
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "",
      start: "June 2024",
      end: "Dec 2024",
      description:
        "I've dedicated myself to honing my skills through hands-on experience in Talecto. My primary contribution where I helped to create backend using Node.js, and where I focused on agile methodology, structured code and proformance optimizations.",
    },
  ],
  education: [
    {
      school: "University of Intregral",
      href: "#",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "#",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Formzupp",
      href: "https://formzupp.vercel.app",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "Create, customize, and share powerful AI-powered forms. Formzupp is where smart forms begin.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Framer Motion",
        "Zustand",
        "Clerk",
        "Prisma",
        "Supabase",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://formzupp.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nexonikk/Formzupp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/formzupp.png",
      video: "",
    },
    {
      title: "ZoomIn",
      href: "https://zoom-in-amber.vercel.app",
      dates: "September 2024 - September 2024",
      active: true,
      description:
        "ZoomIn is a video chat app where you start or schedule a meeting. Create a meeting link and record your meetings.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Stream",
        "Clerk",
        "Prisma",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://zoom-in-amber.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nexonikk/ZoomIn",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zoomin.png",
      video: "",
    },
    {
      title: "Netflix | Watch Trailers",
      href: "netflix-five-wine.vercel.app",
      dates: "May 2024 - May 2024",
      active: true,
      description:
        "Netflix is a movie trailer web app, Where you can see all the lastest, upcoming, trending movies.",
      technologies: [
        "Next.js",
        "React.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "TMDB",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "netflix-five-wine.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nexonikk/Netflix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/netflix.png",
      video: "",
    },
    {
      title: "Climate App",
      href: "https://climate-app-khaki.vercel.app",
      dates: "April 2024 - April 2024",
      active: true,
      description:
        "A sleek and responsive weather app that shows real-time conditions, temperature trends, and a 5-day forecast. Includes city search, detailed metrics, and a dark-mode UI for a modern user experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Openweather API",
        "Tanstack Query",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://climate-app-khaki.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nexonikk/climate.app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/climateapp.png",
      video: "",
    },
    {
      title: "Softsell",
      href: "https://softsell-orcin.vercel.app",
      dates: "April 2024 - April 2024",
      active: true,
      description:
        "Turn unused software into cash with SoftSell. We make license resale fast, fair, and simple — just upload, evaluate, and earn.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://softsell-orcin.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nexonikk/Softsell",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/softsell.png",
      video: "",
    },
    {
      title: "NestLinks",
      href: "https://nest-link.vercel.app/",
      dates: "May 2024 - May 2024",
      active: false,
      description:
        "NestLinks is alternative Linktree, makes room for all of you. Get everything you create, curate and share,wherever it’s scattered online, and put it back together again in one place",
      technologies: [
        "Next.js",
        "React.js",
        "Node.js",
        "Javascript",
        "TailwindCSS",
        "Prisma",
        "PostgreSQL",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://nest-link.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nexonikk/NestLink",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nestlink.png",
      video: "",
    },
    {
      title: "House Marketplace",
      href: "https://house-marketplace-puce-delta.vercel.app",
      dates: "April 2024 - April 2024",
      active: true,
      description:
        "House marketplace is full stack web app, You can sell or buy houses.",
      technologies: ["React.js", "Javascript", "Firebase", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://house-marketplace-puce-delta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Nexonikk/House-Marketplace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/housemarket.png",
      video: "",
    },
  ],
} as const;
