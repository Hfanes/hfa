"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { BiGitRepoForked } from "react-icons/bi";
import { HiOutlineArrowNarrowRight, HiOutlineSearch } from "react-icons/hi";
import Image from "next/image";
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
        <h3>
          <span className="text-brightPurple">/ </span>
          my projects
        </h3>
        <div className="relative mb-2 flex items-center w-full">
          <HiOutlineSearch
            className="absolute left-3 pointer-events-none"
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
            className="group flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors cursor-pointer default-cursor hover:font-bold"
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
            className="relative flex flex-col justify-between border gap-4 p-5 bg-deepBlue text-accentYellow"
          >
            {project.preview && (
              <div className="relative mb-1 h-48 overflow-hidden border border-accentYellow/30 bg-black/20">
                <Image
                  src={project.preview}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 896px) 896px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            )}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {project.logo && (
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0 rounded object-contain"
                  />
                )}
                {/* Title */}
                <a
                  className="group inline-flex items-center gap-1 text-sm md:text-lg sm:text-2xl font-extrabold text-accentYellow hover:text-zinc-200 transition-colors cursor-pointer default-cursor"
                  href={project.website || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  <span className="group-hover:scale-102 transition-transform">
                    {project.title}
                  </span>
                  <span className="transform transition-transform duration-200 group-hover:translate-x-0.5">
                    <HiOutlineArrowTrendingUp />
                  </span>
                </a>
              </div>
              {project.github && (
                <a
                  className="shrink-0 default-cursor"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} on GitHub`}
                >
                  <FaGithub size={24} />
                </a>
              )}
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
