/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      lobster: ["Lobster Two", "sans-serif"],
      maven: ["Maven Pro", "sans-serif"],
      pacifico: ["Pacifico", "cursive"],
      monster: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
