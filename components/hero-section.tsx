"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Zap } from "lucide-react"
import { useState, useEffect } from "react"

// Updated texts
const siteName = "Iraq Cyber"
const teamDisplayName = "PhantomForce"
// Translated Headline
const headlineText = "Securing Iraq's Cyberspace - A Student Force Meeting Tomorrow's Challenges."
const taglineText = "11 cybersecurity students leading innovation and digital defense." // Translated tagline

// Decrypting/Scanning effect for team name
const chars = "!<>-_\\/[]{}—=+*^?#________"

const DecryptingText = ({
  text,
  finalColorClass,
  delay = 0,
}: { text: string; finalColorClass: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [isDecrypting, setIsDecrypting] = useState(true)

  useEffect(() => {
    const startDecryption = () => {
      let interval: NodeJS.Timeout
      if (isDecrypting) {
        let iteration = 0
        interval = setInterval(() => {
          setDisplayText(
            text
              .split("")
              .map((_letter, index) => {
                if (index < iteration) {
                  return text[index]
                }
                return chars[Math.floor(Math.random() * chars.length)]
              })
              .join(""),
          )

          if (iteration >= text.length) {
            clearInterval(interval)
            setIsDecrypting(false)
            setDisplayText(text)
          }
          iteration += 1 / 2
        }, 40)
      }
      return () => clearInterval(interval)
    }

    const timer = setTimeout(startDecryption, delay)
    return () => clearTimeout(timer)
  }, [text, isDecrypting, delay])

  useEffect(() => {
    setIsDecrypting(true)
  }, [text])

  return (
    <span
      className={`inline-block font-mono tracking-tighter ${isDecrypting ? "text-brand-gold-light" : finalColorClass}`}
    >
      {displayText}
    </span>
  )
}

// SplitText animation variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: i * 0.1 + 1.2 }, // Adjusted delay
  }),
}

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(10px)",
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 90,
      duration: 0.9,
    },
  },
}

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center overflow-hidden py-12 md:py-24 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container z-10 flex flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 120 }}
          className="mb-6"
        >
          <h2 className="text-5xl md:text-7xl font-bold">
            <DecryptingText text={teamDisplayName} finalColorClass="text-brand-gold" delay={200} />
          </h2>
          <motion.p
            className="text-xl md:text-2xl text-brand-gold-light font-semibold mt-1 tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: teamDisplayName.length * 0.04 * 2 + 0.6, duration: 0.5 }}
          >
            {siteName}
          </motion.p>
        </motion.div>

        <motion.h1
          className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-relaxed text-brand-cream"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <span className="text-brand-gold-light">{teamDisplayName}:</span>{" "}
          {headlineText.split(" ").map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-1.5 rtl:ml-1.5">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-md text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
        >
          {taglineText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.7, ease: "easeOut" }}
          className="mt-10"
        >
          <Button
            size="lg"
            variant="default"
            className="group px-8 py-4 text-lg font-semibold rounded-lg bg-brand-gold text-brand-black hover:bg-brand-gold-light shadow-gold-glow hover:shadow-gold-glow/70 transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-gold/50"
            asChild
          >
            <motion.a
              href="#about"
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              Discover Our Mission
              <Zap className="ms-2 rtl:mr-2 h-5 w-5 transition-transform duration-300 group-hover:animate-pulse text-brand-black" />
            </motion.a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.5 }}
          className="absolute bottom-10"
        >
          <a href="#about" aria-label="Scroll down">
            <ChevronDown className="h-10 w-10 text-brand-gold/70 animate-bounce hover:text-brand-gold" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
