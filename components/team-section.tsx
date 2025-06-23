"use client"

import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedTitle from "./animated-title"
import { ShieldCheck, Code, Brain, Users, Zap, Target, Bot, Lock, Search, Activity } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  avatarUrl: string
  // bio?: string; // Bio removed
  icon?: React.ElementType
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "علي فراس",
    role: "Ethical Hacking Specialist", // Translated role
    avatarUrl: "/avatars/team/ali-firas.svg",
    icon: Code,
  },
  {
    id: 2,
    name: "عباس فراس",
    role: "Information Security Expert", // Translated role
    avatarUrl: "/avatars/team/abbas-firas.svg",
    icon: ShieldCheck,
  },
  {
    id: 3,
    name: "حيدر فراس",
    role: "Data Analyst & AI Specialist", // Translated role
    avatarUrl: "/avatars/team/haider-firas.svg",
    icon: Brain,
  },
  {
    id: 4,
    name: "علي خالد",
    role: "Network & Cloud Security Engineer", // Translated role
    avatarUrl: "/avatars/team/ali-khaled.svg",
    icon: Users,
  },
  {
    id: 5,
    name: "حوراء عامر",
    role: "UI/UX Designer", // Translated role
    avatarUrl: "/avatars/team/hawraa-amer.svg",
    icon: Zap,
  },
  {
    id: 6,
    name: "صفا عادل",
    role: "Full-Stack Developer", // Translated role
    avatarUrl: "/avatars/team/safa-adel.svg",
    icon: Target,
  },
  {
    id: 7,
    name: "امير راسم",
    role: "Cryptography & Cyber Security Researcher", // Translated role
    avatarUrl: "/avatars/team/ameer-rasim.svg",
    icon: Lock,
  },
  {
    id: 8,
    name: "هاشم سليم",
    role: "Cyber Security Consultant", // Translated role
    avatarUrl: "/avatars/team/hashim-salim.svg",
    icon: Bot,
  },
  {
    id: 9,
    name: "زيد بشار",
    role: "Secure Mobile App Developer", // Translated role
    avatarUrl: "/avatars/team/zaid-bashar.svg",
    icon: Code,
  },
  {
    id: 10,
    name: "فاطمة حازم",
    role: "Threat Intelligence Analyst", // Translated role
    avatarUrl: "/avatars/team/fatima-hazim.svg",
    icon: Search,
  },
  {
    id: 11,
    name: "عباس عقيل",
    role: "Digital Incident Response Specialist", // Translated role
    avatarUrl: "/avatars/team/abbas-aqeel.svg",
    icon: Activity,
  },
]

const cardVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 70 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const MemberIcon = member.icon || ShieldCheck

  return (
    <motion.div
      key={member.id}
      className="relative group w-full max-w-md mx-auto p-6 md:p-8 rounded-xl border border-brand-gold/30 overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-2 border-brand-gold group-hover:border-brand-gold-light transition-colors duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--brand-gold-light)" }}
        >
          <Image
            src={member.avatarUrl || "/placeholder.svg"}
            alt={`${member.name}'s avatar`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            priority={index < 3}
          />
        </motion.div>
        <motion.h3
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-brand-gold mb-2 group-hover:text-brand-gold-light transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
        >
          {member.name}
        </motion.h3>
        <motion.div
          className="flex items-center text-sm md:text-base text-brand-cream/80 mb-1 font-mono group-hover:text-brand-cream transition-colors duration-300" // Reduced bottom margin as bio is removed
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
        >
          <MemberIcon
            size={18}
            className="mr-2 rtl:ml-2 text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300"
          />
          {member.role}
        </motion.div>
        {/* Bio section removed */}
      </div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-gold/10 rounded-full blur-2xl animate-pulse group-hover:animate-none group-hover:scale-150 transition-transform duration-500"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-gold-light/5 rounded-full blur-2xl animate-pulse animation-delay-2000 group-hover:animate-none group-hover:scale-150 transition-transform duration-500"></div>
      </motion.div>
    </motion.div>
  )
}

export default function TeamSection() {
  return (
    <section id="team" className="min-h-screen py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <AnimatedTitle
          text="Our Team" // Translated title
          animationType="glitch"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-20 inline-block text-brand-gold-light tracking-wider"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
