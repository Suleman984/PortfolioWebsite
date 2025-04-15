import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 py-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              Building exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Suleman984/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-suleman-55bb8020a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <p className="text-muted-foreground text-sm">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
            <p className="text-muted-foreground text-sm">
              Email:{" "}
              <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                sulemanefc@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© {currentYear} Portfolio. All rights reserved.</p>
            <p className="text-muted-foreground text-sm mt-4 sm:mt-0">
              Designed and built with ❤️ using Next.js and Tailwind CSS
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

