"use client";
import React from "react";
import { FaReact, FaJava, FaPython, FaDiscord, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { SiPostgresql, SiDotnet, SiJsonwebtokens } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";

const projects = [
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
        name: "React",
        icon: <FaReact />,
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
    title: "Discord bot cherry",
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

export default function Projects() {
  return (
    <section id="projects" className="c-space my-10 w-full">
      <div className="flex flex-col gap-4 text-start">
        <div className="flex justify-between">
          <div>Projects</div>
          <div>More -</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex border rounded-xl p-5 bg-accentYellow "
            >
              <div className="flex flex-col bg-red-100 w-full">
                <div className="p-2 w-9/10 bg-blue-200">
                  <div>{project.title}</div>
                  <div>{project.desc}</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="flex items-center gap-2 bg-white px-2 py-1 rounded shadow-sm"
                      >
                        {tech.icon}
                        <span className="text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <FaGithub />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
