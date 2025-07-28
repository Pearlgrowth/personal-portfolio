"use client";

import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Web Developer & Technical Content Writer",
      company: "gaif.ai",
      period: "Present",
      location: "Remote",
      type: "Full Time",
      description:
        "Maintaining the GAIF website and occasionally writing blogs on AI innovations in Africa.",
      skills: [
        "Web Development",
        "Technical Writing",
        "AI",
        "Content Creation",
      ],
      status: "current",
      link: "https://www.gaif.ai/articles/6",
    },
    {
      title: "Software Developer Intern",
      company: "Ngong Road, Nairobi",
      period: "Jan 2025 – Apr 2025",
      location: "Nairobi, Kenya (Hybrid)",
      type: "Internship",
      description:
        "Built and deployed a Java-based USSD loan application that handled 1,000+ transactions. Integrated M-Pesa STK Push to automate secure mobile payments. Improved backend performance by optimizing SQL queries and managing sessions on Apache Tomcat.",
      skills: [
        "Java",
        "USSD",
        "M-Pesa API",
        "SQL Optimization",
        "Apache Tomcat",
      ],
      status: "past",
    },
    {
      title: "Software Developer Intern",
      company: "Teach2Give (The Jitu)",
      period: "Jan 2024 – Apr 2024",
      location: "On-site",
      type: "Internship",
      description:
        "Created an online quiz application using React, Node.js, and MySQL for 200+ learners. Reduced quiz load times by 30% through frontend and backend optimizations.",
      skills: [
        "React",
        "Node.js",
        "MySQL",
        "Frontend Optimization",
        "Backend Optimization",
      ],
      status: "past",
    },
    {
      title: "Bachelor of Science in Computer Science",
      company: "Dedan Kimathi University of Technology",
      period: "2022-2026",
      location: "Nyeri, Kenya",
      type: "Education",
      description:
        "Comprehensive study of computer science principles, including Data Structures and Algorithms (DSA), software engineering, database management, and network security. Engaged in various practical projects and research.",
      skills: [
        "Data Structures",
        "Algorithms",
        "Software Engineering",
        "Database Management",
        "Networking",
      ],
      status: "education",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 bg-slate-800 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Work & Education <span className="text-purple-400">📚</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              An overview of my professional experience and academic journey,
              showcasing the skills and knowledge I've gained along the way.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative transform transition-all duration-1000 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full border-4 border-slate-800 ${
                      exp.status === "current"
                        ? "bg-green-500"
                        : exp.status === "education"
                        ? "bg-blue-500"
                        : "bg-purple-500"
                    }`}
                  ></div>

                  {/* Timeline badge */}
                  <div className="absolute left-20 -top-2">
                    <Badge
                      variant="secondary"
                      className={`${
                        exp.status === "current"
                          ? "bg-green-500/20 text-green-300 border-green-500/30"
                          : exp.status === "education"
                          ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                          : "bg-purple-500/20 text-purple-300 border-purple-500/30"
                      }`}
                    >
                      {exp.type}
                    </Badge>
                  </div>

                  <Card className="ml-16 bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-purple-400 flex items-center gap-2">
                            {exp.company}
                            {exp.link && (
                              <Link
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 opacity-50 hover:opacity-100 transition-opacity" />
                              </Link>
                            )}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs border-slate-600 text-slate-300 hover:border-purple-500/50 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
