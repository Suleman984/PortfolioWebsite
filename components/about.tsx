"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Workflow, Smartphone } from "lucide-react"

const expertise = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications with Node.js, Golang, and GraphQL.",
    icon: <Server className="h-10 w-10 text-primary" />,
  },
  {
    title: "Automations & Workflows",
    description:
      "Designing and implementing automated integrations and workflows to streamline processes and increase efficiency.",
    icon: <Workflow className="h-10 w-10 text-primary" />,
  },
  {
    title: "App Development",
    description: "Developing cross-platform mobile and desktop applications with modern frameworks and technologies.",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Full Stack Developer with expertise in both frontend and backend technologies. My goal is
            to create efficient, scalable, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground">
              I am an Associate Software Engineer with a strong passion for building efficient and scalable software
              solutions. My journey began during my bachelor’s degree in Computer Science, where I explored various
              technologies and honed my skills in web and software development. During my internship, I worked on
              multiple projects, creating responsive websites and applications using React, Material UI, JavaScript,
              CSS, Kotlin, and HTML.
            </p>
            <p className="text-muted-foreground">
              These experiences helped me gain hands-on expertise in frontend development,and API integration. Since
              then, I have continued expanding my knowledge, working on full-stack projects and automation workflows. My
              goal is to build high-performing, user-centric applications that solve real-world problems efficiently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">My Approach</h3>
            <p className="text-muted-foreground">
              I believe in writing clean, maintainable code and following best practices. My approach to development is
              user-centered, focusing on creating intuitive interfaces and seamless experiences.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about staying up-to-date with the latest technologies and industry trends. This allows me
              to implement innovative solutions that meet modern standards and exceed client expectations.
            </p>
          </motion.div>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-8">My Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

