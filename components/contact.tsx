"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, MessageSquare, Twitter } from "lucide-react"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  projectType: z.string().min(1, {
    message: "Please select a project type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log(values)
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    form.reset()
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-16 md:py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
        </motion.div>
      <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
              I'm currently available for freelance work and full-time positions. If you have a project that needs
              some creative touch, I'd love to hear about it.
              </p>

              <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                sulemanefc@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-3 text-primary" />
                <span>Available for calls by appointment</span>
              </div>
              </div>

              <div>
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                </Button>
                
              </div>
              </div>
            </div>
          </motion.div>
       

        <div className="grid grid-cols-1 gap-8 mt-5 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-8 "
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here is a summary of my professional experience.
          </p>
        </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg border p-6 ml-2 mr-2 bg-muted/30"
          >
            <h3 className="text-2xl font-semibold mb-2">Solution Engineer</h3>
            <p className="text-muted-foreground mb-1">Phebsoft</p>
            <p className="text-muted-foreground mb-1">5 Nov 2024 - 28 March 2024</p>
            <p className="text-muted-foreground mb-4">Islamabad, Pakistan</p>
            <p className="text-muted-foreground">
              Worked on designing and implementing scalable software solutions for clients. Collaborated with cross-functional teams to deliver high-quality projects on time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg border p-6 ml-2 mr-2 mb-2 bg-muted/30"
          >
            <h3 className="text-2xl font-semibold mb-2">Web Developer Intern</h3>
            <p className="text-muted-foreground mb-1">Bitsol Technologies</p>
            <p className="text-muted-foreground mb-1">3 Aug 2023 - 22 Sep 2023</p>
            <p className="text-muted-foreground mb-4">Islamabad, Pakistan</p>
            <p className="text-muted-foreground">
              Assisted in developing and maintaining web applications. Gained hands-on experience with modern web technologies and contributed to improving user interfaces.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
