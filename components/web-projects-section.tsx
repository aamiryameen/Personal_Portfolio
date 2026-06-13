"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

const webProjects = [
  {
    title: "Digbi Health",
    description:
      "Move beyond Point Solutions to Holistic Care informed by Gut Microbiome, CGM, and Genetics. We use genetic, gut microbiome, food, lifestyle, and clinical signals to target the root cause of illness.",
    link: "https://digbihealth.com/",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/project-digbi-health.jpg",
  },
  {
    title: "Staples",
    description:
      "We eliminate the need for direct contact, as our delivery drivers will leave your package at the front door after the driver knocks or rings your doorbell. If a signature is needed, the driver will step 6 feet back and wait for you to sign for your package.",
    link: "https://www.staples.ca/a/content/free-shipping",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/project-staples.jpg",
  },
  {
    title: "QFC",
    description:
      "We are a leading onshore business and financial centre located in Doha, welcoming international and domestic companies to become registered QFC entities. QFC aims to promote Qatar as a major business and commercial hub.",
    link: "https://www.qfc.qa/en",
    tags: ["Next.js", "GraphQL", "AWS"],
    image: "/project-qfc.jpg",
  },
  {
    title: "JoeyJoey",
    description:
      "One-click RSVP to group hangouts, classes and adventures nearby. Have other ideas? Host your own and we can help rally a fun crowd. We recreate that magic, turning your classmates from yoga in to your go-to crew.",
    link: "https://www.joeyjoey.co/",
    tags: ["React", "Firebase", "Stripe"],
    image: "/project-joeyjoey.jpg",
  },
  {
    title: "Aire Health",
    description:
      "AIRE Skin store Allowing Dermatologists to conduct real-time research studies and patient outcome analysis to foster healthcare breakthroughs. AIRE Edu is skincare sampling platform for Residents.",
    link: "https://airehealth.com/",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/project-aire-health.jpg",
  },
  {
    title: "Vet and Tech",
    description:
      "Vet And Tech Is Your Ultimate Source For Educational And Professional Needs In Veterinary Practices. Easily Explore Veterinary Educational Resources, Access CE Courses, Webinars, and Guides.",
    link: "https://www.vetandtech.com/",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/project-vet-tech.jpg",
  },
  {
    title: "Equip-bid",
    description:
      "Equip-Bid Auctions is your full-service online auction company that offers an array of products and services - ranging from business liquidations to antiques and restaurant equipment.",
    link: "https://equipbid.biz/",
    tags: ["React", "Node.js", "MySQL"],
    image: "/project-equip-bid.jpg",
  },
  {
    title: "PicSwagger",
    description:
      "PicSwagger is a custom accordion photo banner that offers a unique way to display your photos while celebrating your loved ones and special memories. 16-24 of your favourite photos offer the perfect backdrop.",
    link: "https://picswagger.com/",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: "/project-picswagger.jpg",
  },
  {
    title: "Telus",
    description:
      "Everything you need is in the My TELUS app. Manage your services anywhere, anytime. Pay your bill, check your usage, change your plan, stay on top of your account and more with the My TELUS app.",
    link: "https://www.telus.com/en",
    tags: ["React", "TypeScript", "AWS"],
    image: "/project-telus.jpg",
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
          className="absolute rounded-full bg-purple-500/20 blur-sm animate-bubble-float"
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

export function WebProjectsSection() {
  return (
    <section id="web" className="relative py-32 px-4 md:px-8 bg-black overflow-hidden">
      <FloatingBubbles />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Web Development"
          title={<>Web <span className="gradient-text">Projects</span></>}
          subtitle="A collection of web applications and websites I've developed throughout my career."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
