import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151311",
        cream: "#faf6ee",
        sand: "#f0e8d8",
        emerald: {
          DEFAULT: "#0d3b2e",
          light: "#155744",
          dark: "#082720",
        },
        gold: {
          DEFAULT: "#c8a24a",
          light: "#ddc27f",
          dark: "#9d7d34",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at top right, rgba(200,162,74,0.18), transparent 55%), radial-gradient(ellipse at bottom left, rgba(21,87,68,0.35), transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
