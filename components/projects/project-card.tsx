"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { ProjectDialog } from "./project-dialog"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=400&width=600"
            }}
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <ProjectDialog project={project} isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

