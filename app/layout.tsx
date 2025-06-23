import type React from "react"
import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google" // Fira Code for monospace
import "./globals.css"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Global3DBackground from "@/components/global-3d-background"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Phantom Force - Iraq Cyber",
  description: "فريق طلابي عراقي متخصص في الأمن السيبراني، يقود الابتكار والدفاع الرقمي.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <Global3DBackground />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
