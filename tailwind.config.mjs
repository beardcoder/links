import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Jost Variable"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#B76F2B",
          50: "#ECCCAE",
          100: "#E8C19D",
          200: "#E0AD7C",
          300: "#D8985B",
          400: "#D1833A",
          500: "#B76F2B",
          600: "#8A5320",
          700: "#5C3816",
          800: "#2F1C0B",
          900: "#010100",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
