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
    <section id="contact" className="py-16 md:py-24">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg border p-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="website">Website Development</SelectItem>
                          <SelectItem value="webapp">Web Application</SelectItem>
                          <SelectItem value="ecommerce">E-Commerce</SelectItem>
                          <SelectItem value="mobile">Mobile App</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mt-4">
                  <Label htmlFor="file" className="mb-2 block">
                    Attach File (Optional)
                  </Label>
                  <Input id="file" type="file" />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

