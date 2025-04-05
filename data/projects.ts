import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: 1,
    title: "Optimize E-Commerce Store Through Social Analytics",
    description:
      "A final year project to enhance e-commerce sales using social analytics, machine learning, and web scraping.",
    image: "/images/projects/project1/thumbnail.jpg",
    tech: ["React", "Node.js", "MongoDB", "Firebase", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "#",
    longDescription:
      "This project was developed as a final year thesis, aimed at optimizing e-commerce performance through social analytics. The system allows users to view and compare web analytics of multiple e-commerce websites, explore top-performing stores, and receive update notifications. It includes authentication using Firebase and integrates a machine learning model for generating personalized recommendations based on user interactions and comparative data. The frontend is built using React and Material UI, while the backend uses Node.js, Express, and Cheerio for scraping and analyzing web data. MongoDB is used for storing analytics data, and the system enables actionable insights through a data-driven approach."
  },  
  {
    id: 2,
    title: "Lead Generator",
    description: "A browser extension that fetches leads from LinkedIn and allows exporting them as an Excel file.",
    image: "/images/projects/project2/thumbnail.jpg",
    tech: ["HTML", "CSS", "JavaScript", "SheetJS", "Chrome Extension APIs"],
    demoUrl: "#",
    githubUrl: "#",
    longDescription:
      "I created a lead generator web app that functions as a Chrome extension to extract lead data from LinkedIn. After collecting leads, the tool provides an option to export them into an Excel file, including the names and profile URLs. This extension was developed using HTML, CSS, JavaScript, and relevant libraries like SheetJS for Excel export functionality. It streamlines the process of lead collection for outreach and sales efforts."
  },
  {
    id: 3,
    title: "Data Analysis using Python",
    description: "Performed data analysis on a shop dataset with insights and visualizations using Python libraries.",
    image: "/images/projects/project3/thumbnail.jpg",
    tech: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn"],
    demoUrl: "#",
    githubUrl: "#",
    longDescription:
      "Created a data analysis project using Python in Jupyter Notebook, focusing on a shop dataset. The analysis involved extracting valuable insights such as identifying the top-selling products, evaluating regional product consumption, and understanding sales distribution. Visual representations were created using Matplotlib and Seaborn to support the analytical findings, providing clear and meaningful data-driven conclusions."
  },  
  {
    id: 4,
    title: "Bus Management System",
    description: "A C++ based bus reservation system with seat booking, cancellation, and admin management features.",
    image: "/images/projects/project4/thumbnail.jpg",
    tech: ["C++", "File Handling"],
    demoUrl: "#",
    githubUrl: "#",
    longDescription:
      "Developed a Bus Management System using C++ and file handling techniques. The system allows customers to reserve and cancel bus seats, view available buses for different routes, and check assigned drivers. It also includes an admin panel where the administrator can log in to manage buses, routes, and drivers. CRUD operations are supported for each module, providing a complete bus reservation and management experience in a console-based interface."
  }  
]

