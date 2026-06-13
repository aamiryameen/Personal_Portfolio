"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/section-heading"

const skillsCategories = [
  {
    title: "Backend Technologies",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "TypeScript",
      "Fastify.js",
      "GraphQL",
      "REST",
      "Webhooks",
      "Bull Queues",
      "Socket.io",
      "Event-Driven Architecture",
      "gRPC",
      "SOAP APIs",
    ],
  },
  {
    title: "Real-Time & Messaging",
    skills: [
      "WebSockets",
      "Firebase Realtime Database",
      "Redis Pub/Sub",
      "GraphQL Subscriptions",
      "MQTT",
      "Kafka",
      "RabbitMQ",
      "ActiveMQ",
      "SignalR (.NET)",
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Redux",
      "RTK (Redux Toolkit)",
      "React Query",
      "Zustand",
      "MobX",
      "Preact",
      "TypeScript",
      "PWA (Progressive Web Apps)",
      "SSR (Server-Side Rendering)",
      "ISR (Incremental Static Regeneration)",
      "SSG (Static Site Generation)",
    ],
  },
  {
    title: "Mobile Technologies",
    skills: [
      "React Native",
      "Flutter",
      "Dart",
      "Expo",
      "Redux",
      "React Navigation",
      "Android",
      "iOS",
      "Swift",
      "Kotlin",
      "Java",
      "Native Modules",
      "App Store",
      "Google Play",
      "Formik",
      "Yup",
    ],
  },
  {
    title: "AI, Agents & Automation",
    skills: [
      "LLM Integration",
      "OpenAI / GPT",
      "Anthropic Claude",
      "RAG (Retrieval-Augmented Generation)",
      "AI Agents",
      "LangChain",
      "Vector Databases (Pinecone)",
      "Prompt Engineering",
      "Workflow Automation",
      "n8n / Make / Zapier",
      "Voice & Chat Agents",
      "AI Personalization",
    ],
  },
  {
    title: "UI Libraries & Styling",
    skills: ["Material UI", "Tailwind CSS", "Supertest", "Cypress"],
  },
  {
    title: "Testing & Quality Assurance",
    skills: ["Jest", "Supertest", "React Testing Library", "Cypress"],
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
    { size: 35, top: "45%", left: "45%", delay: 2, duration: 19 },
    { size: 20, top: "55%", left: "55%", delay: 0, duration: 12 },
    { size: 45, top: "80%", left: "40%", delay: 3, duration: 17 },
    { size: 30, top: "95%", left: "60%", delay: 1, duration: 15 },
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

export function TechnicalSkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="relative py-32 px-4 md:px-8 bg-black overflow-hidden" ref={ref}>
      <FloatingBubbles />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What I Work With"
          title={<>Technical <span className="gradient-text">Skills</span></>}
          subtitle="A comprehensive toolkit spanning mobile, web, backend, and AI — refined over 7+ years of building production software."
          inView={inView}
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillsCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 h-full"
              >
                <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500" />
                  {category.title}
                </h3>
                <motion.ul
                  className="space-y-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 text-sm flex items-start gap-2 cursor-pointer"
                    >
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
