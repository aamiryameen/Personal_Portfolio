"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Sparkles } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"

const ROLES = [
  "Senior Software Engineer",
  "React Native & Flutter Expert",
  "AI Agents & Automation Builder",
  "Mobile & Web App Developer",
]

const STATS = [
  { value: "7+", label: "Years Experience" },
  { value: "1M+", label: "App Users Reached" },
  { value: "40+", label: "Apps Shipped" },
]

export function HeroSection() {
  const [showContactForm, setShowContactForm] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Typewriter role rotation
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    const speed = isDeleting ? 35 : 75
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1))
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1600)
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % ROLES.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  // Allow any element on the page to open the contact modal via a custom event
  useEffect(() => {
    const open = () => setShowContactForm(true)
    window.addEventListener("open-contact-form", open)
    return () => window.removeEventListener("open-contact-form", open)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Create organic blob shape
    const drawBlob = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.35

      // Main blob gradient
      const gradient = ctx.createRadialGradient(centerX, centerY - 100, 0, centerX, centerY, baseRadius * 1.5)
      gradient.addColorStop(0, "rgba(99, 102, 241, 0.8)")
      gradient.addColorStop(0.3, "rgba(139, 92, 246, 0.6)")
      gradient.addColorStop(0.6, "rgba(59, 130, 246, 0.4)")
      gradient.addColorStop(1, "rgba(30, 27, 75, 0)")

      ctx.beginPath()

      // Organic blob shape with noise
      const points = 100
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2
        const noise1 = Math.sin(angle * 3 + t * 0.5) * 0.15
        const noise2 = Math.sin(angle * 5 + t * 0.3) * 0.1
        const noise3 = Math.cos(angle * 2 + t * 0.4) * 0.12
        const radius = baseRadius * (1 + noise1 + noise2 + noise3)

        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius * 0.9

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()

      // Glowing light spots
      const drawGlow = (x: number, y: number, radius: number, opacity: number) => {
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        glowGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
        glowGradient.addColorStop(0.3, `rgba(200, 180, 255, ${opacity * 0.6})`)
        glowGradient.addColorStop(1, "rgba(139, 92, 246, 0)")

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()
      }

      // Animated glow positions
      const glow1X = centerX + Math.cos(t * 0.3) * 150 + 200
      const glow1Y = centerY + Math.sin(t * 0.4) * 100 - 150
      drawGlow(glow1X, glow1Y, 80, 0.7)

      const glow2X = centerX + Math.sin(t * 0.25) * 100 - 200
      const glow2Y = centerY + Math.cos(t * 0.35) * 80 + 200
      drawGlow(glow2X, glow2Y, 50, 0.5)

      const glow3X = centerX + Math.cos(t * 0.2 + 2) * 180
      const glow3Y = centerY + Math.sin(t * 0.3 + 1) * 120 - 50
      drawGlow(glow3X, glow3Y, 40, 0.4)
    }

    const animate = () => {
      time += 0.01
      drawBlob(time)
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("web")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 pb-20"
      >
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.9 }} />

        {/* Modern grid backdrop */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, #000 40%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-200 shadow-lg shadow-purple-900/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for new opportunities
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-400 mb-3 font-light tracking-[0.2em] uppercase"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-[0.95] tracking-tight"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 45%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 90px rgba(139, 92, 246, 0.35)",
              }}
            >
              Muhammad Aamir
              <br />
              Yameen
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={itemVariants}
              className="h-9 md:h-12 mb-6 flex items-center justify-center"
            >
              <span className="text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide">
                <span className="text-gray-400">{"<"}</span>
                <span className="gradient-text">{displayText}</span>
                <span className="inline-block w-[3px] h-6 md:h-8 mx-1 bg-purple-400 align-middle animate-pulse" />
                <span className="text-gray-400">{"/>"}</span>
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Building scalable, AI-powered mobile and web applications with more than 7 years of experience.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactForm(true)}
                className="shimmer relative px-10 py-4 text-lg font-semibold text-white rounded-full overflow-hidden transition-all"
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
                }}
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> Get in Touch
                </span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-10 py-4 text-lg font-semibold text-white rounded-full border-2 border-white/70 bg-transparent transition-all hover:border-white"
              >
                View Projects
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-6 md:gap-10 px-6 md:px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl shadow-purple-900/10"
            >
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 md:gap-10">
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-[10px] md:text-xs text-gray-400 mt-1 tracking-wider uppercase whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                  {i < STATS.length - 1 && <div className="h-10 w-px bg-white/10" />}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </motion.div>
      </section>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </>
  )
}
