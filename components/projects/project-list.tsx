"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import type { Project } from "@/types/project"

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project showcases different skills and technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  )
}

