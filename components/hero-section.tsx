"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const headlineText = "Securing Tomorrow, Today"
const taglineText =
  "Guardians of the Digital Frontier. We are a passionate team of students dedicated to exploring and advancing the field of cybersecurity."

// Animation variants for text
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.04, // Stagger for letters
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
}

export default function HeroSection() {
  return (
    <motion.section
      className="relative flex min-h-[calc(100vh-theme(spacing.14))] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 animate-background-pan py-12 md:py-24" // Added subtle gradient animation
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Subtle background elements - placeholder for more complex patterns */}
      <div className="absolute inset-0 z-0 opacity-5">
        {/* Example: SVG pattern or image */}
        {/* <img src="/circuit-pattern.svg" alt="Circuit pattern" className="w-full h-full object-cover" /> */}
      </div>

      <div className="container z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-vibrant-green to-deep-purple"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {headlineText.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: headlineText.length * 0.04 + 0.5, duration: 0.6, ease: "easeOut" }} // Delay after headline
        >
          {taglineText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: headlineText.length * 0.04 + 1.0, duration: 0.5, ease: "easeOut" }} // Delay after tagline
        >
          <Button
            size="lg"
            className="mt-10 group bg-electric-blue hover:bg-vibrant-green text-background font-semibold shadow-lg shadow-electric-blue/30 hover:shadow-vibrant-green/40 transition-all duration-300 ease-out transform hover:scale-105"
            asChild
          >
            <motion.a // Use motion.a for Framer Motion on links if needed, or wrap Button
              href="#projects" // Link to projects section (placeholder)
              whileHover={{
                boxShadow: "0 0 25px var(--electric-blue)",
                // For more complex hover, you can use variants
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </Button>
        </motion.div>
      </div>
      {/* Placeholder for more complex background animations like particles */}
      {/* <div className="absolute inset-0 z-0"> ... particles ... </div> */}
    </motion.section>
  )
}
