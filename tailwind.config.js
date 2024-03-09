/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        MAIN: "#111111",
        PRIMARY: "#232323",
        NEUTRAL: "#343434",
      },
      textColor: {
        MAIN: "#ffffff",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
