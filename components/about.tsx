"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Palette, Zap, Users } from "lucide-react"
import Image from "next/image" // Import Image component
import computerImage from "../public/computer.jpg"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful user experiences",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Me <span className="text-purple-400">🚀</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              An overview of my professional journey and the skills I've gained along the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I’m Pearl Wangui Mwangi, a passionate full-stack developer and UI/UX designer dedicated to building clean, responsive web applications using technologies like React, Node.js, and MySQL. I maintain GAIF’s website and contribute to its blog content. Beyond tech, I’m an advocate for climate action, driven to use innovation for environmental impact. As a mentee in the Microsoft ADC WINS program, I’m continuously growing and applying my skills to real-world, meaningful solutions.


              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source
                projects, and engaging in climate advocacy.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-slate-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    2+
                  </div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 shadow-2xl">
                  <div className="w-full h-full bg-slate-800/20 rounded-2xl flex items-center justify-center overflow-hidden">
                    <Image
                      src={computerImage}
                      alt="Developer working on a laptop"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:scale-105">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
