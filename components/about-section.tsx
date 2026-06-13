"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-32 px-4 md:px-8 max-w-7xl mx-auto" ref={ref}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <motion.div variants={containerVariants} className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
            <motion.p variants={itemVariants}>
              I'm a <span className="text-purple-400 font-semibold">Software Engineering Professional</span> with{" "}
              <span className="text-purple-400 font-semibold">more than 7 years</span> of experience in mobile and web application development and integration of AI-powered solutions.
            </motion.p>
            <motion.p variants={itemVariants}>
              Expert in <span className="text-purple-400 font-semibold">React Native</span> and <span className="text-purple-400 font-semibold">Flutter</span> cross-platform development, alongside <span className="text-purple-400 font-semibold">AI agents &amp; automation</span> and Large Language Model integration. Key achievements include developing <span className="text-purple-400 font-semibold">"Hakeem Easy Finance,"</span> which reached over 1M+ users, and <span className="text-purple-400 font-semibold">"Nearpeer,"</span> an app with over 100k users.
            </motion.p>
            <motion.p variants={itemVariants}>
              Seeking a Senior Software Engineer position where my mobile and web application development skills will support your mission of delivering high-performance, scalable solutions. Passionate about clean code, performance optimization, and creating intuitive user experiences.
            </motion.p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() => window.dispatchEvent(new Event("open-contact-form"))}
              className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full cursor-pointer"
            >
              Let's Connect
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 -z-10 mx-auto max-w-md aspect-[3/4] rounded-3xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 blur-3xl" />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden p-[2px] bg-gradient-to-br from-purple-500/60 via-transparent to-indigo-500/60"
          >
            <div className="relative w-full h-full rounded-[22px] overflow-hidden">
              <Image src="/profile.jpg" alt="Muhammad Aamir Yameen" fill className="object-cover" priority />
            </div>
          </motion.div>
          {/* Experience Badge with animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="absolute bottom-8 right-8 bg-purple-600 text-white px-8 py-6 rounded-2xl shadow-2xl"
          >
            <div className="text-5xl font-bold">7+</div>
            <div className="text-sm font-medium mt-1">Years Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
