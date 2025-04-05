"use client"

import { ProjectList } from "./projects/project-list"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectList projects={projects} />
      </div>
    </section>
  )
}

