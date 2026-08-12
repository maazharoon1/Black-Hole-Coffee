import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#07060a",
        charcoal: {
          DEFAULT: "#0c0a0d",
          2: "#131013",
        },
        espresso: {
          DEFAULT: "#2a1a12",
          2: "#3d2519",
        },
        cream: {
          DEFAULT: "#f2e9d8",
          dim: "#c7bca7",
          faint: "#8a8072",
        },
        copper: {
          DEFAULT: "#c17a41",
          bright: "#e2984f",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
