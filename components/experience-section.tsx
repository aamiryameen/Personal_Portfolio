"use client"

import { Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Senior Software Engineer (React Native/Flutter)",
    company: "CityLogix",
    location: "Montreal, Quebec, Canada • Remote",
    period: "04/2025 - Present",
    description: [
      "Implemented clean architecture and reusable component libraries, improving code reusability and reducing development time",
      "Optimized app performance through lazy loading, efficient caching strategies, and memory management, reducing initial load times by 30%",
      "Improved app stability by fixing critical bugs and performance bottlenecks, reducing crash rates and improving app store ratings",
      "Deployed apps to Google Play Store and Apple App Store, handling release management and post-launch monitoring",
      "Led a team of 3 junior developers, conducting code reviews and training sessions, improving project delivery timelines by 15%",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Walee Technology",
    location: "Lahore, Pakistan",
    period: "04/2024 - 04/2025",
    description: [
      "Amplified engagement by 30% through developing high-performance apps using React Native and TypeScript",
      "Integrated Firebase Authentication, Cloud Messaging, Firestore, and Analytics, driving 20% higher user engagement",
      "Ensured high code quality by writing unit and integration tests, improving long-term maintainability",
    ],
  },
  {
    title: "React Native Developer",
    company: "Softpers",
    location: "Lahore, Pakistan",
    period: "04/2023 - 03/2024",
    description: [
      "Build and maintained mobile applications for healthcare and e-commerce clients, achieving a 98% crash-free session rate",
      "Managed end-to-end deployment to App Store and Google Play, ensuring full compliance with platform guidelines",
      "Reduced app development time by 30% by creating reusable component libraries for 5 projects",
    ],
  },
  {
    title: "React Native Developer",
    company: "Webevis Technologies",
    location: "Lahore, Pakistan",
    period: "04/2020 - 03/2023",
    description: [
      "Designed, developed, and supported cross-platform mobile apps for fintech, edtech, and e-commerce startups",
      "Integrated third-party SDKs, RESTful APIs, and in-app messaging to enhance functionality",
      "Actively participated in Agile ceremonies, including sprint planning and retrospectives, and conducted peer code reviews",
    ],
  },
]

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    setCanvasSize()

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      color: string
    }> = []

    // Create particles with more visibility
    const particleCount = 120
    const colors = [
      "rgba(168, 85, 247, {opacity})", // purple
      "rgba(99, 102, 241, {opacity})", // indigo
      "rgba(139, 92, 246, {opacity})", // violet
    ]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 4 + 2,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with glow effect
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace("{opacity}", particle.opacity.toString())
        ctx.fill()

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 1.5, 0, Math.PI * 2)
        ctx.strokeStyle = particle.color.replace("{opacity}", (particle.opacity * 0.3).toString())
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw connections between close particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.25 * (1 - distance / 150)})`
            ctx.lineWidth = 1.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      setCanvasSize()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="experience" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden" ref={sectionRef}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-100"
        style={{ mixBlendMode: "screen" }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-[0.18em] uppercase text-purple-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
        </motion.div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden border-l-2 border-l-purple-500/40"
            >
              <div className="absolute -left-px top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-transparent opacity-60" />
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    className="text-2xl font-bold mb-2 text-white"
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="flex items-center gap-2 text-purple-400 mb-2"
                  >
                    <Briefcase className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    className="text-sm text-gray-400"
                  >
                    {exp.location}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </motion.div>
              </div>
              <ul className="space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + i * 0.1 }}
                    className="flex gap-2"
                  >
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
