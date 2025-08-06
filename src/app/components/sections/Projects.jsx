"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import Link from "next/link";
import { myProjects } from "@/constants/index";

export default function Projects() {
  return (
    <section
      id="projects"
      className="c-space mt-10 w-full"
      data-cursor-color="bg-brightPurple"
    >
      <div className="flex flex-col gap-6 text-start">
        <div className="flex justify-between">
          <h3 className="font-bold text-xl sm:text-2xl">
            <span className="text-accentYellow">/ </span>
            projects
          </h3>
          <Link
            href="/projects"
            className="group flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors cursor-pointer default-cursor hover:underline underline-offset-4 hover:font-bold"
          >
            <span className="group-hover:scale-102">More</span>
            <span className="transform transition-transform duration-200 group-hover:translate-x-0.5">
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myProjects.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between border gap-4 p-5 min-h-[200px] bg-deepBlue text-accentYellow "
            >
              {/* GitHub icon on top-right */}
              <a
                className="absolute top-4 right-4 default-cursor"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit this project in github"
              >
                <FaGithub size={24} />
              </a>
              <div className="flex">
                {/* Title */}
                <a
                  className="group inline-flex items-center gap-1 text-sm md:text-lg sfm:text-2xl font-extrabold text-accentYellow hover:text-zinc-200 transition-colors cursor-pointer default-cursor"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit this project in github"
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
      </div>
    </section>
  );
}
