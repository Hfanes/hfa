"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import Image from "next/image";
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {myProjects
            .filter((project) => project.display)
            .map((project, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between border gap-4 p-5 min-h-[200px] bg-deepBlue text-accentYellow"
              >
                {project.preview && (
                  <div className="relative mb-1 h-36 overflow-hidden border border-accentYellow/30 bg-black/20">
                    <Image
                      src={project.preview}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
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
      </div>
    </section>
  );
}
