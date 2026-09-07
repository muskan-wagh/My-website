/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        // Restrained monochrome — Vercel principles, original values
        bg: "#000000",
        surface: "#0a0a0a",
        "surface-hover": "#0e0e0e",
        visual: "#111111",
        border: "#1f1f1f",
        "border-hover": "#2e2e2e",
        "border-subtle": "#161616",
        primary: "#ededed",
        secondary: "#a1a1a1",
        muted: "#888888",
        faint: "#333333",
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
