import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F82BA9",
        secondary: "#F82BA9",
        dark: "#160E4B", 
        accent: "#160E4B",
        grayColor:"#757F95"
      },
    },
  },
  plugins: [],
} satisfies Config;
