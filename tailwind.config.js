/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{css}",
  ],
  darkMode: "class", // para controlar dark mode via classe .dark
  theme: {
    extend: {
      colors: {
        testblue: "#123456",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--accent)",
        customBlue: {
          950: "#010f1b",
          900: "#032235",
          850: "#05304d",
          800: "#074064",
          700: "#0a5584",
          600: "#0d6eb4",
          500: "#0f82d1",
          400: "#3a99e6",
          300: "#74b7ff",
          200: "#a7d2ff",
          100: "#d6ecff",
        },
      },
    },
  },
  plugins: [],
};
