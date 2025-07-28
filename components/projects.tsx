"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye, Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Ticketing System UI/UX Design",
      description:
        "Designed a comprehensive ticketing system interface, focusing on intuitive user flows for ticket creation, tracking, and resolution, with a clean and modern aesthetic.",
      image: "/ticket.png",
      technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
      github: "",
      demo: "https://www.figma.com/design/ITsB7pDlaLgkpH8nkhYwMW/TICKET?t=ZE9mom1DS0Nj2uxW-0",
      featured: true,
    },
    {
      title: "Interior Design WebsiteUI/UX Design",
      description:
    " Co-designed a responsive interior design website UI in Figma with a focus on elegance and mobile usability.",
      image: "/njema.png",
      technologies: ["Figma", "UI/UX Design", "Dashboard Design", "Data Visualization"],
      github: "",
      demo: "https://www.figma.com/design/Qa0rDjU1ZgOMiOzfv2uacO?fuid=1416342194716875130&prev-plan-id=1416342196679219404&prev-plan-type=team&prev-selected-view=recentsAndSharing",
      featured: true,
    },
    {
      title: "Vituhive E-Commerce Website",
      description:
        "A full-stack e-commerce platform built with React and Tailwind CSS, supporting product browsing, shopping, and checkout with authentication and product management.",
      image: "/vituhive.png", 
      technologies: ["React", "Tailwind CSS", "Authentication", "Product Management"],
      github: "https://github.com/Pearlgrowth/VITUHIVE-ECOMMERCE",
      demo: "https://vituhive-ecommerce.vercel.app/",
      featured: true,
    },
    {
      title: "Netflix Clone Web App",
      description: "A responsive Netflix UI clone built with React and Tailwind CSS, with Firebase Authentication.",
      image: "/netflix.png", // Updated image path
      technologies: ["React", "Tailwind CSS", "Firebase Authentication"],
      github: "https://github.com/Pearlgrowth/NETFLIX-CLONE",
      demo: "https://netflix-clone-47k2.vercel.app/",
      featured: true,
    },
    {
      title: "Library Management System",
      description:
        "A RESTful API backend built using Node.js and Express, supporting CRUD for books and authors and automated overdue tracking.",
      image: "/library.jpg", // Updated image path
      technologies: ["Node.js", "Express", "RESTful API", "CRUD Operations"],
      github: "https://github.com/Pearlgrowth/LIBRARY-MANAGEMENT-SYSTEM",
      demo: "", // No live demo provided
      featured: true,
    },
    {
      title: "M-Pesa Integration for E-Commerce",
      description:
        "A secure mobile payment gateway using M-Pesa Daraja API, integrated with an e-commerce platform to process real-time payments.",
      image: "/mpesa.png", // Updated image path
      technologies: ["M-Pesa Daraja API", "Payment Gateway", "Real-time Payments"],
      github: "https://github.com/Pearlgrowth/MPESA_INTEGRATION",
      demo: "", // No live demo provided
      featured: true,
    },
    {
      title: "ERPNext Customization for SACCOs/SMEs",
      description: "Customized ERPNext to streamline accounting, inventory, and CRM processes for SACCOs and SMEs.",
      image: "/sacco.png", // Updated image path
      technologies: ["ERPNext", "Accounting", "Inventory", "CRM"],
      github: "https://github.com/Pearlgrowth/ERPNEXT-SACCO-SYSTEM",
      demo: "https://sun-capital-nexus-sacco.vercel.app/",
      featured: true,
    },
    {
      title: "QuizNinja",
      description:
        "A quiz platform for adaptive learning using ReactJS, Node.js, and MySQL, optimized for performance.",
      image: "/quiz.png", // Updated image path
      technologies: ["ReactJS", "Node.js", "MySQL", "Adaptive Learning"],
      github: "https://github.com/Pearlgrowth/QUIZNINJA",
      demo: "", // No live demo provided
      featured: true,
    },
    {
      title: "Plastic-Sorting Robot – PlastiBot",
      description:
        "An AI-powered robot for plastic waste segregation at the Dandora landfill, achieving 75% accuracy via computer vision. Showcased at Kenya Innovation Week and featured by BBC Swahili.",
      image: "/robot.jpg", // Updated image path
      technologies: ["AI", "Robotics", "Computer Vision", "Waste Segregation"],
      github: "", // No source code provided
      demo: "", // No live demo provided, assuming media link
      media: "https://www.youtube.com/watch?v=example_video_link", // Placeholder for media link
      featured: true,
    },
    {
      title: "Green Thumb Movement Website",
      description: "A responsive website for an agricultural club using modern UI/UX practices.",
      image: "/gtm.png", // Updated image path
      technologies: ["UI/UX", "Responsive Design", "Web Development"],
      github: "", // No source code provided
      demo: "https://thegtm.or.ke",
      featured: true,
    },
    {
      title: "USSD Loan Application (Zimobi)",
      description:
        "A Java-based USSD application deployed on Apache Tomcat with M-Pesa STK Push, optimized for financial services.",
      image: "/loan.jpg", // Updated image path
      technologies: ["Java", "USSD", "Apache Tomcat", "M-Pesa STK Push"],
      github: "", // No source code provided
      demo: "", // No live demo provided
      featured: true,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-slate-800 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured Projects <span className="text-purple-400">🚀</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card
                  className={`overflow-hidden bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:scale-[1.02] ${
                    project.featured ? "ring-2 ring-purple-500/20" : ""
                  }`}
                >
                  <div className="relative overflow-hidden">
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="relative aspect-video bg-slate-700">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-500 ${
                          hoveredProject === index ? "scale-110" : "scale-100"
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent transition-opacity duration-300 ${
                          hoveredProject === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                          {project.demo && (
                            <Button size="sm" variant="secondary" asChild className="flex-1">
                              <Link href={project.demo} target="_blank">
                                <Eye className="h-4 w-4 mr-2" />
                                Demo
                              </Link>
                            </Button>
                          )}
                          {project.github && (
                            <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                              <Link href={project.github} target="_blank">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Link>
                            </Button>
                          )}
                          {project.media && (
                            <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                              <Link href={project.media} target="_blank">
                                <Video className="h-4 w-4 mr-2" />
                                Media
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-slate-600 text-slate-300 hover:border-purple-500/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.demo && (
                        <Button size="sm" variant="ghost" asChild className="text-purple-400 hover:text-purple-300">
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.github && (
                        <Button size="sm" variant="ghost" asChild className="text-slate-400 hover:text-slate-300">
                          <Link href={project.github} target="_blank">
                            <Github className="h-4 w-4 mr-2" />
                            Source
                          </Link>
                        </Button>
                      )}
                      {project.media && (
                        <Button size="sm" variant="ghost" asChild className="text-slate-400 hover:text-slate-300">
                          <Link href={project.media} target="_blank">
                            <Video className="h-4 w-4 mr-2" />
                            Media
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
