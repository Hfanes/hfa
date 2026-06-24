import { FaPython, FaDiscord, FaRust, FaReact } from "react-icons/fa";
import { SiPostgresql, SiJsonwebtokens, SiTauri } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";

export const myProjects = [
  {
    title: "Treinante",
    desc: "Treinante is a running analytics platform for importing runs, analysing training, tracking progress, and using practical training tools. It is designed for road, trail, track, and mixed runners, with features that adapt to the data each runner provides.",
    website: "https://treinante.hfanes.com",
    github: "https://github.com/Hfanes/treinante",
    logo: "/images/treinante.png",
    preview: "/images/treinante-preview.png",
    display: true,
    tech: [
      {
        name: "Next.js",
        icon: <RiNextjsFill />,
      },
      {
        name: "Supabase",
        icon: <RiSupabaseFill />,
      },
    ],
  },
  {
    title: "Hops",
    desc: "Hops is a lightweight Windows tray app that routes external links to the right browser based on your rules. It allows you to set up rules to open links in specific browsers, making it easier to manage your browsing experience.",
    website: "https://hops.hfanes.com",
    github: "https://github.com/Hfanes/hops",
    logo: "/images/hops.webp",
    preview: "/images/settings.webp",
    display: true,
    tech: [
      {
        name: "Tauri",
        icon: <SiTauri />,
      },
      {
        name: "Rust",
        icon: <FaRust />,
      },
      {
        name: "React",
        icon: <FaReact />,
      },
    ],
  },
  {
    title: "Blog App",
    desc: "Blog App is a personal project designed to create a blog platform where users can write, edit, and delete their posts. It features user authentication, post management, and a clean user interface.",
    website: "",
    github: "https://github.com/Hfanes/java-blog",
    logo: "",
    preview: "",
    display: true,
    tech: [
      {
        name: "Spring Boot",
        icon: <BiLogoSpringBoot />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
      {
        name: "JWT",
        icon: <SiJsonwebtokens />,
      },
    ],
  },
  {
    title: "Tasks App",
    desc: "Tasks App is a full-stack personal project designed to create taks lists and tasks.",
    website: "",
    github: "https://github.com/Hfanes/java-tasks",
    logo: "",
    preview: "",
    display: true,

    tech: [
      {
        name: "Spring Boot",
        icon: <BiLogoSpringBoot />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
    ],
  },
  {
    title: "Discord Bot Cherry",
    desc: "Discord Bot Cherry is a personal project designed to fetch cryptocurrency prices from an API.",
    website: "",
    github: "https://github.com/Hfanes/discord-bot-cherry",
    logo: "",
    preview: "",
    display: true,
    tech: [
      {
        name: "Python",
        icon: <FaPython />,
      },
      {
        name: "Discord",
        icon: <FaDiscord />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
    ],
  },
];
