import type { Config } from "tailwindcss";

const config: Config = {
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
        'dark-red': '#330101',
        'bright-red': '#CC0000',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(200deg, #330101 20%, #CC0000 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
