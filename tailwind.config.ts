import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // Will be black
        foreground: "hsl(var(--foreground))", // Will be a light color for text on black

        primary: {
          // Gold color
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))", // Text color on gold buttons (likely black)
        },
        secondary: {
          // Accent color (e.g., a muted gold or a contrasting dark gray)
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          // For subtle text or backgrounds
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          // Can be another shade of gold or the third complementary color
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // New Color Palette
        "brand-black": "#0A0A0A", // Pure or near-pure black
        "brand-gold": "#D4AF37", // Classic gold
        "brand-gold-light": "#E0C670", // Lighter gold for highlights/hovers
        "brand-gold-dark": "#B8860B", // Darker gold for depth
        "brand-cream": "#F5F5DC", // Creamy white for text or accents
        "brand-grey": "#1F1F1F", // Dark grey for surfaces
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "text-glow": {
          "0%, 100%": { textShadow: "0 0 5px currentColor, 0 0 10px currentColor" },
          "50%": { textShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px var(--brand-gold)" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "subtle-pulse": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "text-glow": "text-glow 2s ease-in-out infinite alternate",
        "matrix-rain": "matrix-rain 15s linear infinite",
        "subtle-pulse": "subtle-pulse 3s ease-in-out infinite",
      },
      boxShadow: {
        "gold-glow": "0 0 5px #D4AF37, 0 0 10px #D4AF37, 0 0 15px #E0C670",
        "card-shadow": "0 4px 15px rgba(212, 175, 55, 0.1)", // Subtle gold shadow for cards
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
