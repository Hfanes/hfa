import { FaReact, FaPython, FaDiscord, FaGithub } from "react-icons/fa";
import { SiPostgresql, SiDotnet, SiJsonwebtokens } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link";

export const myProjects = [
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
