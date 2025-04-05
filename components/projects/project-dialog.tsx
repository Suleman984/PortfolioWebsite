"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/types/project"

interface ProjectDialogProps {
  project: Project
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectDialog({ project, isOpen, onOpenChange }: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => onOpenChange(true)}>
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-wrap gap-2 my-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="relative h-64 my-4 rounded-md overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=400&width=600"
            }}
          />
        </div>
        <p className="text-muted-foreground mb-6">{project.longDescription}</p>
        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

