import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#978FDF",
          200: "#7A70C5",
          300: "#6559B2",
          400: "#53479B",
        },
        secondary: {
          100: "#5FD9B7",
          200: "#48C8A3",
          300: "#23AC81",
          400: "#0B8D63",
        },
        contessa: {
          100: "#E09C90",
          200: "#C27A6F",
          300: "#AC6157",
          400: "#924C44",
        },
        pearl: {
          100: "#FFFAE9",
          200: "#F9EFCB",
          300: "#D9CB9F",
          400: "#BAA874",
        },
      },
      minWidth: {
        xs: "320px",
      },
      padding: {
        default: "var(--inner-padding)",
      },
      spacing: {
        grid: "var(--inner-padding)",
      },
      screens: {
        xs: "320px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
