"use client";
import React, { use, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { BiGitRepoForked } from "react-icons/bi";
import { HiOutlineArrowNarrowRight, HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";
import { myProjects } from "@/constants/index";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(myProjects);
  const projectsNumber = myProjects.length;

  useEffect(() => {
    const filtered = myProjects.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [query, myProjects]);

  return (
    <section
      className="max-w-4xl mx-auto c-space
     transition-colors"
    >
      <div className="c-space mt-30 sm:mt-20 w-full flex flex-col gap-4 justify-center">
        <h1>
          <span className="text-brightPurple">/ </span>
          my projects
        </h1>
        <div className="relative mb-2 flex items-center w-full">
          <HiOutlineSearch
            className="absolute left-3 pointer-events-non"
            size={18}
          />
          <input
            type="text"
            className="border w-full p-2 pl-10
             focus:outline-none focus:ring-1 focus:ring-accentYellow transition-colors"
            placeholder="Search projects..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <BiGitRepoForked />
            {projectsNumber} repositories
          </div>
          <Link
            href="https://github.com/Hfanes"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 hover:text-white transition-colors cursor-pointer default-cursor hover:font-bold"
          >
            <span className="group-hover:scale-102">View on my github</span>
            <span className="transform transition-transform duration-200 group-hover:translate-x-0.5">
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between border gap-4 p-5 bg-deepBlue text-accentYellow "
          >
            {/* GitHub icon on top-right */}
            <a
              className="absolute top-4 right-4 default-cursor"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <div className="flex">
              {/* Title */}
              <a
                className="group inline-flex items-center gap-1 text-sm md:text-lg sm:text-2xl font-extrabold text-accentYellow hover:text-zinc-200 transition-colors cursor-pointer default-cursor"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group-hover:scale-102 transition-transform">
                  {project.title}
                </span>
                <span className="transform transition-transform duration-200 group-hover:translate-x-0.5">
                  <HiOutlineArrowTrendingUp />
                </span>
              </a>
            </div>

            {/* Description (centered if short) */}
            <div className="flex-grow flex items-center">
              <p className="text-zinc-400">{project.desc}</p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 cursor-default default-cursor">
              {project.tech.map((tech, tagIndex) => (
                <div
                  key={tagIndex}
                  className="flex items-center gap-2 px-2 py-1 rounded font-semibold text-sm bg-accentYellow text-deepBlue"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
