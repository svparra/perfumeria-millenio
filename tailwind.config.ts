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
          DEFAULT: "#0a7d3a",
          light: "#12a04c",
          dark: "#063f1e",
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
          "radial-gradient(ellipse at top right, rgba(200,162,74,0.2), transparent 55%), radial-gradient(ellipse at bottom left, rgba(10,125,58,0.45), transparent 50%)",
      },
      keyframes: {
        "pop-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
