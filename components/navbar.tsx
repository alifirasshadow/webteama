"use client"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle" // Assuming this path
import { ShieldCheck } from "lucide-react" // Example Icon

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ShieldCheck className="h-6 w-6 text-electric-blue" />
          <span className="font-bold sm:inline-block">CyberGuardians</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4 sm:space-x-6 text-sm font-medium">
          <Link href="/about" className="text-foreground/60 transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link href="/team" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Team
          </Link>
          <Link href="/projects" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Projects
          </Link>
          <Link href="/join" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Join Us
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
