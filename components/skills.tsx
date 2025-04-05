"use client"

import { motion } from "framer-motion"
import { Code2, Server, Database, Globe, Layers, Cpu, PenTool } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <Code2 className="h-6 w-6" /> },
      { name: "Next.js", icon: <Globe className="h-6 w-6" /> },
      { name: "Tailwind CSS", icon: <PenTool className="h-6 w-6" /> },
      { name: "TypeScript", icon: <Code2 className="h-6 w-6" /> },
      { name: "Framer Motion", icon: <Layers className="h-6 w-6" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <Server className="h-6 w-6" /> },
      { name: "Golang", icon: <Cpu className="h-6 w-6" /> },
      { name: "Python", icon: <Code2 className="h-6 w-6" /> },
      { name: "GraphQL", icon: <Globe className="h-6 w-6" /> },
      { name: "REST APIs", icon: <Globe className="h-6 w-6" /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: <Database className="h-6 w-6" /> },
      { name: "PostgreSQL", icon: <Database className="h-6 w-6" /> },
      { name: "Firebase", icon: <Database className="h-6 w-6" /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build modern, efficient, and scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-center mb-4">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center p-4 rounded-lg bg-card border hover:border-primary/50 transition-colors"
                  >
                    <div className="mr-4 text-primary">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Additionally</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm constantly learning and expanding my skill set. I enjoy exploring new technologies and finding the best
            tools for each project's unique requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

