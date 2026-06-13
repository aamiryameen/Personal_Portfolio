"use client"

import { ExternalLink, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/section-heading"

const aiProjects = [
  {
    title: "Stammer.ai",
    description:
      "A white-label platform for AI services featuring an AI-powered lead generation and appointment scheduling agent. Built a custom AI agent capable of generating leads and booking appointments in under 60 seconds, tailored with a unique personality, tone, and business-specific goals.",
    link: "https://www.upwork.com/freelancers/~0173483cdb0448ea5d?p=2048723292674080768",
    tags: ["AI Agents", "Lead Gen", "LLM", "Automation"],
  },
  {
    title: "PdfGPT",
    description:
      "An AI-powered PDF chatbot that lets users seamlessly converse with uploaded PDFs — extracting, summarizing, and intelligently discussing their content using retrieval-augmented generation over document embeddings.",
    link: "https://www.pdfgpt.io/en",
    tags: ["RAG", "LLM", "Document AI", "Vector DB"],
  },
  {
    title: "Château Latournelle",
    description:
      "An AI-powered event booking website that allows prospects to book, modify, and cancel reservations entirely on their own — no phone call required — driven by a conversational booking agent.",
    link: "https://chateaulatournelle.com/",
    tags: ["AI Agent", "Booking", "Automation", "NLP"],
  },
  {
    title: "AI-Driven E-Learning Platform",
    description:
      "Built a scalable backend with AI-powered personalization: AI-based course recommendations tailored to user behavior and skill level, plus bookmarking, progress tracking, and automated certification generation for a cohesive, intelligent learning journey.",
    link: "https://www.upwork.com/freelancers/~0173483cdb0448ea5d?p=2048735542447702016",
    tags: ["AI Personalization", "Recommendations", "Backend", "LLM"],
  },
  {
    title: "AI Cover Letter & Caption Gen",
    description:
      "A suite of generative-AI tools that produce tailored cover letters and occasion-based social captions on demand, using prompt-engineered LLM pipelines to adapt tone and context to each user.",
    link: "https://ai-cover-letter-generator.netlify.app/",
    tags: ["Generative AI", "LLM", "Prompt Engineering"],
  },
]

function FloatingBubbles() {
  const bubbles = [
    { size: 80, top: "5%", left: "5%", delay: 0, duration: 20 },
    { size: 40, top: "10%", left: "15%", delay: 2, duration: 15 },
    { size: 60, top: "3%", left: "30%", delay: 1, duration: 18 },
    { size: 30, top: "8%", left: "50%", delay: 3, duration: 12 },
    { size: 50, top: "2%", left: "70%", delay: 0.5, duration: 16 },
    { size: 70, top: "6%", left: "85%", delay: 2.5, duration: 22 },
    { size: 25, top: "15%", left: "92%", delay: 1.5, duration: 14 },
    { size: 45, top: "25%", left: "3%", delay: 4, duration: 19 },
    { size: 35, top: "40%", left: "8%", delay: 0, duration: 17 },
    { size: 55, top: "60%", left: "2%", delay: 3, duration: 21 },
    { size: 20, top: "75%", left: "10%", delay: 1, duration: 13 },
    { size: 65, top: "85%", left: "5%", delay: 2, duration: 20 },
    { size: 30, top: "50%", left: "95%", delay: 0.5, duration: 15 },
    { size: 50, top: "70%", left: "90%", delay: 3.5, duration: 18 },
    { size: 40, top: "90%", left: "85%", delay: 1.5, duration: 16 },
    { size: 25, top: "30%", left: "97%", delay: 4, duration: 14 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-purple-500/20 blur-sm animate-float"
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export function AIProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="ai" className="relative py-32 px-4 md:px-8 bg-black overflow-hidden" ref={ref}>
      <FloatingBubbles />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="AI, Agents & Automation"
          title={<>AI <span className="gradient-text">Projects</span></>}
          subtitle="Intelligent agents, generative-AI tools, and automation platforms I've built — from autonomous lead-gen agents to RAG-powered chatbots and AI-driven personalization."
          inView={inView}
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {aiProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-600/50 transition-all duration-300 flex flex-col h-full p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs cursor-pointer"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
