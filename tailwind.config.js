/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        green: "#239852",
        text: "#6C6C6C",
        white: "#FFFFFF",
        background: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
