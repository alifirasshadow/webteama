"use client"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-8 border-t border-brand-gold/20 bg-brand-black mt-16" // Example: black background, subtle gold border
    >
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-start">
        <div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Phantom Force - Iraq Cyber. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">مصمم بشغف من قبل فريقنا.</p>
        </div>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {[
            { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
            { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
            { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
            { icon: <Mail className="h-5 w-5" />, href: "mailto:info@phantomforce.iq", label: "Email" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.2, color: "var(--brand-gold)" }} // Changed to brand-gold
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cream/70 hover:text-brand-gold transition-colors" // Ensure text-brand-cream/70 for muted icons
              >
                {item.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
