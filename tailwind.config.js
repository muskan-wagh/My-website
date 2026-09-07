/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        // Linux dark system palette
        bg: "#0e0f11",
        surface: "#151618",
        "surface-2": "#1c1e20",
        border: "#25282b",
        "border-subtle": "#1e2023",
        muted: "#9aa0a6",
        subtle: "#1a1c1e",
        accent: "#2dc97d",
        "accent-dim": "rgba(45,201,125,0.12)",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.2s step-end infinite",
      },
    },
  },
  plugins: [],
};
