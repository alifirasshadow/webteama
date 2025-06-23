"use client"

import React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import AnimatedTitle from "./animated-title"

interface TeamMember {
  id: number
  name: string
  role: string
  avatarUrl: string
  bio?: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "علي فراس",
    role: "مطور Full-Stack",
    avatarUrl: "/avatars/team/ali-firas.svg",
    bio: "يبني حلولاً رقمية متكاملة بشغف.",
  },
  {
    id: 2,
    name: "عباس فراس",
    role: "خبير أمن معلومات",
    avatarUrl: "/avatars/team/abbas-firas.svg",
    bio: "يدافع عن البيانات ويحصن الأنظمة ضد الهجمات.",
  },
  {
    id: 3,
    name: "حيدر فراس",
    role: "محلل بيانات وذكاء اصطناعي",
    avatarUrl: "/avatars/team/haider-firas.svg",
    bio: "يستخرج الرؤى من البيانات لبناء مستقبل أذكى.",
  },
  {
    id: 4,
    name: "علي خالد",
    role: "مهندس شبكات وأمن سحابي",
    avatarUrl: "/avatars/team/ali-khaled.svg",
    bio: "يصمم بنى تحتية قوية وآمنة في عالم متصل.",
  },
  {
    id: 5,
    name: "حوراء عامر",
    role: "مصممة واجهات وتجربة مستخدم (UI/UX)",
    avatarUrl: "/avatars/team/hawraa-amer.svg",
    bio: "تبتكر تجارب مستخدم جذابة وسهلة الاستخدام.",
  },
  {
    id: 6,
    name: "صفا عادل",
    role: "متخصصة في اختبار الاختراق الأخلاقي",
    avatarUrl: "/avatars/team/safa-adel.svg",
    bio: "تكشف الثغرات قبل أن يستغلها المهاجمون.",
  },
  {
    id: 7,
    name: "امير راسم",
    role: "باحث في التشفير والأمن السيبراني",
    avatarUrl: "/avatars/team/ameer-rasim.svg",
    bio: "يطور تقنيات تشفير متقدمة لحماية الخصوصية.",
  },
  {
    id: 8,
    name: "هاشم سليم",
    role: "مستشار أمن سيبراني",
    avatarUrl: "/avatars/team/hashim-salim.svg",
    bio: "يقدم استشارات استراتيجية لتعزيز الأمن الرقمي.",
  },
  {
    id: 9,
    name: "زيد بشار",
    role: "مطور تطبيقات موبايل آمنة",
    avatarUrl: "/avatars/team/zaid-bashar.svg",
    bio: "يبني تطبيقات جوال قوية مع التركيز على الأمان.",
  },
  {
    id: 10,
    name: "فاطمة حازم",
    role: "محللة استخبارات التهديدات",
    avatarUrl: "/avatars/team/fatima-hazim.svg",
    bio: "تتنبأ بالهجمات وتحللها لحماية المؤسسات.",
  },
  {
    id: 11,
    name: "عباس عقيل",
    role: "متخصص في الاستجابة للحوادث الرقمية",
    avatarUrl: "/avatars/team/abbas-aqeel.svg",
    bio: "يتعامل مع الحوادث الأمنية بكفاءة وسرعة.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1, // Faster stagger
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Smooth cubic bezier for pop effect
    },
  }),
}

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]) // Increased tilt
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      key={member.id}
      className="glassmorphic rounded-xl p-6 md:p-8 flex flex-col items-center shadow-card-shadow border border-brand-gold/40 w-full max-w-sm mx-auto" // Increased padding, max-width for larger cards
      style={{
        transformStyle: "preserve-3d", // Needed for 3D tilt
        rotateX,
        rotateY,
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        boxShadow: "0 0 30px rgba(212, 175, 55, 0.5), 0 0 50px rgba(224, 198, 112, 0.3)", // More prominent gold glow
        borderColor: "var(--brand-gold-light)",
      }}
    >
      <motion.div
        className="relative w-36 h-36 md:w-44 md:h-44 mb-6 rounded-full overflow-hidden border-2 border-brand-gold shadow-gold-glow/60" // Larger avatar
        style={{ transform: "translateZ(30px)" }} // Bring avatar forward
        whileHover={{ scale: 1.05, borderColor: "var(--brand-gold-light)" }}
      >
        <Image
          src={member.avatarUrl || "/placeholder.svg"}
          alt={`صورة ${member.name}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out"
          priority={index < 3} // Prioritize loading for first few cards
        />
      </motion.div>
      <motion.h3
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-brand-gold mb-2" // Larger name
        style={{ transform: "translateZ(20px)" }}
      >
        {member.name}
      </motion.h3>
      <motion.p
        className="text-sm md:text-base text-brand-cream/80 mb-4 font-mono text-center" // Centered role
        style={{ transform: "translateZ(10px)" }}
      >
        {member.role}
      </motion.p>
      {member.bio && (
        <motion.p
          className="text-xs md:text-sm text-brand-cream/70 text-center leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {member.bio}
        </motion.p>
      )}
    </motion.div>
  )
}

export default function TeamSection() {
  return (
    <section id="team" className="min-h-screen py-20 md:py-28 bg-brand-grey">
      <div className="container mx-auto px-4 text-center">
        <AnimatedTitle
          text="فــريــقــنــا" // Added spaces for letter spacing effect with some fonts
          animationType="glitch"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-20 inline-block text-brand-gold-light tracking-wider" // Wider tracking
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
