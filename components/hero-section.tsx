"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Zap } from "lucide-react"
import { useState, useEffect } from "react"

const headlineText = "Phantom Force: حماية الفضاء السيبراني العراقي - قوة طلابية لمواجهة تحديات الغد."
const taglineText = "11 طالبًا من الأمن السيبراني يقودون الابتكار والدفاع الرقمي في Iraq Cyber."

// Decrypting/Scanning effect for team name
const teamName = "Phantom Force"
const chars = "!<>-_\\/[]{}—=+*^?#________" // Characters for scrambling

const DecryptingText = ({ text, finalColorClass }: { text: string; finalColorClass: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [isDecrypting, setIsDecrypting] = useState(true)

  useEffect(() => {
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
          setDisplayText(text) // Ensure final text is set
        }
        iteration += 1 / 3 // Slower decryption
      }, 50) // Speed of character change
    }
    return () => clearInterval(interval)
  }, [text, isDecrypting])

  // Trigger decryption on mount or when text changes
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
    transition: { staggerChildren: 0.05, delayChildren: i * 0.1 }, // Stagger words
  }),
}

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.8,
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
          className="mb-8 flex flex-col items-center"
        >
          <div className="text-5xl md:text-7xl font-bold">
            <DecryptingText text="Phantom" finalColorClass="text-brand-gold" />
            <span className="mx-1 md:mx-2"></span> {/* Spacer */}
            <DecryptingText text="Force" finalColorClass="text-brand-cream" />
          </div>
          <motion.p
            className="text-xl md:text-2xl text-brand-gold-light font-semibold mt-2 tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: teamName.length * 0.05 * 2 + 0.5, duration: 0.5 }} // Delay after decryption
          >
            Iraq Cyber
          </motion.p>
        </motion.div>

        <motion.h1
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight text-brand-cream"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          custom={1} // Delay factor for staggering
        >
          {headlineText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-2 rtl:ml-2" // Add margin for spacing between words
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }} // Adjusted delay
        >
          {taglineText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.7, ease: "easeOut" }} // Adjusted delay
          className="mt-12"
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
              اكتشف مهمتنا
              <Zap className="ms-2 rtl:mr-2 h-5 w-5 transition-transform duration-300 group-hover:animate-pulse text-brand-black" />
            </motion.a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }} // Adjusted delay
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
