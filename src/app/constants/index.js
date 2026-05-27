import { FaPython, FaDiscord, FaRust, FaReact } from "react-icons/fa";
import { SiPostgresql, SiJsonwebtokens, SiTauri } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

export const myProjects = [
  {
    title: "Hops",
    desc: "Hops is a lightweight Windows tray app that routes external links to the right browser based on your rules. It allows you to set up rules to open links in specific browsers, making it easier to manage your browsing experience.",
    href: "https://github.com/Hfanes/hops",
    logo: "",
    preview: "",
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
        icon: <FaReact />
      },
    ],
  },
  {
    title: "Blog App",
    desc: "Blog App is a personal project designed to create a blog platform where users can write, edit, and delete their posts. It features user authentication, post management, and a clean user interface.",
    href: "https://github.com/Hfanes/java-blog",
    logo: "",
    preview: "",
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
    href: "https://github.com/Hfanes/java-tasks",
    logo: "",
    preview: "",
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
    href: "https://github.com/Hfanes/discord-bot-cherry",
    logo: "",
    preview: "",
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
