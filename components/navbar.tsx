"use client"
import Link from "next/link"
import type React from "react"

import { motion } from "framer-motion"
import { ShieldHalf, Users, Home, Menu, X } from "lucide-react" // Removed Briefcase, MessageSquare
import { useState, useEffect } from "react"

const Logo = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="flex items-center space-x-2 rtl:space-x-reverse"
  >
    <ShieldHalf className="h-8 w-8 text-brand-gold animate-pulse" />
    <span className="text-xl font-bold tracking-wider text-brand-cream">Iraq Cyber</span> {/* Updated Site Name */}
  </motion.div>
)

// Updated navItems
const navItems = [
  { name: "الرئيسية", href: "#hero", icon: <Home size={18} /> },
  { name: "من نحن", href: "#about", icon: <Users size={18} /> },
  { name: "فريقنا", href: "#team", icon: <Users size={18} /> },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const NavLink = ({
    href,
    children,
    icon,
    delay,
  }: { href: string; children: React.ReactNode; icon: React.ReactNode; delay: number }) => (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 + delay }}
    >
      <Link
        href={href}
        onClick={() => setIsOpen(false)} // Close menu on link click for mobile
        className="group relative flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-sm font-medium text-brand-cream/80 hover:text-brand-gold transition-colors duration-300"
      >
        {icon}
        <span>{children}</span>
        <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-brand-gold transition-transform duration-300 group-hover:scale-x-100"></span>
      </Link>
    </motion.li>
  )

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 
                  ${isScrolled || isOpen ? "bg-brand-black/80 backdrop-blur-md shadow-gold-glow/20" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#hero" onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
          {navItems.map((item, index) => (
            <NavLink key={item.name} href={item.href} icon={item.icon} delay={index * 0.1}>
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-brand-cream hover:text-brand-gold focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-md shadow-lg pb-4"
        >
          <ul className="flex flex-col items-center space-y-3 pt-3">
            {navItems.map((item, index) => (
              <NavLink key={item.name} href={item.href} icon={item.icon} delay={index * 0.05}>
                {item.name}
              </NavLink>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
