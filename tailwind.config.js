/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },

    colors: {
      gray: {
        100: "#121214",
        200: "#202024",
        300: "#8D8D99",
        400: "#C4C4CC",
        500: "#E1E1E6",
      },

      white: {
        100: "#ffffff",
      },

      green: {
        principal: "#00875F",
        light: "#00B37E",
      },
    },
  },
  plugins: [],
};
