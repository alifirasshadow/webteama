"use client"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} CyberGuardians. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-electric-blue transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-electric-blue transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-electric-blue transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
