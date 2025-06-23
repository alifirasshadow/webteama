"use client"
import { motion } from "framer-motion"
import type React from "react"

import { useEffect, useState } from "react"

interface AnimatedTitleProps {
  text: string
  className?: string
  animationType?: "reveal" | "glitch" | "typing"
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className, animationType = "reveal" }) => {
  const [displayText, setDisplayText] = useState(animationType === "typing" ? "" : text)
  const chars = "!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

  useEffect(() => {
    if (animationType === "typing") {
      let i = 0
      const interval = setInterval(() => {
        setDisplayText(text.substring(0, i + 1))
        i++
        if (i === text.length) clearInterval(interval)
      }, 100)
      return () => clearInterval(interval)
    } else if (animationType === "glitch") {
      let iteration = 0
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((_letter, index) => {
              if (index < iteration / 2) {
                // Reveal gradually
                return text[index]
              }
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join(""),
        )
        if (iteration >= text.length * 2) {
          clearInterval(interval)
          setDisplayText(text)
        }
        iteration += 1
      }, 60)
      return () => clearInterval(interval)
    }
  }, [text, animationType])

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  }

  if (animationType === "glitch" || animationType === "typing") {
    return <span className={className}>{displayText}</span>
  }

  // Default "reveal" animation
  return (
    <motion.span className={className} variants={titleVariants} initial="hidden" animate="visible" aria-label={text}>
      {text.split("").map((char, index) => (
        <motion.span key={char + "-" + index} variants={letterVariants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default AnimatedTitle
