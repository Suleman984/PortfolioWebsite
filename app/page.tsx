import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Muhammad Suleman | Full Stack Developer",
  description: "Full Stack Developer specializing in React, Material UI, Javascript, Typescript, Node.js, Golang, GraphQL and more.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

