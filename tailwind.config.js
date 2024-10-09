/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "pt-root": ["PT Root UI", "sans-serif"],
      },
      colors: {
        primary: "#005FF9",
        black: "#333",
        text: "#8D909F",
        grey: "#F4F6F8",
        green: "#27AE60",
        pink: "#EA1A65",
        orange: "#F58020",
      },
    },
  },
  plugins: [],
};
