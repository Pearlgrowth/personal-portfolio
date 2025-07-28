"use client"

import { useState, useEffect, useRef } from "react"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "MongoDB", level: 82 },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Tools & Cloud",
      icon: "☁️",
      skills: [
        { name: "Git/GitHub", level: 93 },
        { name: "Docker", level: 78 },
        { name: "SQL", level: 85 }, // Added SQL
        { name: "Vercel", level: 90 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Mobile & Design",
      icon: "📱",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 88 },
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              setTimeout(() => {
                setAnimatedValues((prev) => ({
                  ...prev,
                  [skill.name]: skill.level,
                }))
              }, Math.random() * 1000)
            })
          })
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
    <section ref={sectionRef} id="skills" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Skills & Technologies <span className="text-purple-400">💻</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-slate-400 text-sm">{skill.level}%</span>
                        </div>
                        <Progress
                          value={animatedValues[skill.name] || 0}
                          className="h-2 bg-slate-700"
                          style={{
                            background: `linear-gradient(to right, transparent 0%, transparent ${
                              animatedValues[skill.name] || 0
                            }%, #334155 ${animatedValues[skill.name] || 0}%, #334155 100%)`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
