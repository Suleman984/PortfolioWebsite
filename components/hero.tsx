"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Muhammad Suleman</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
                Full Stack Developer
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
              I build exceptional digital experiences with modern technologies. Specializing in React, Node.js, and
              cloud services to create fast, responsive, and user-friendly applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=320&width=320"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-sm text-muted-foreground"
            aria-label="Scroll to About section"
          >
            <span className="mb-2">Scroll Down</span>
            <span className="animate-bounce">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

