/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#131417",
        shadow: "#212226",
        border: "#2b2c31",
        primary: "#47CF73",
        accent: "#FFDD40",
      },
    },
  },
  plugins: [],
};
