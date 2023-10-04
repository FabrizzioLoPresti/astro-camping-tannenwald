/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customColor: {
          100: "#eabf4e",
          200: "#d48642",
          300: "#9d5332",
          400: "#703022",
          500: "#4c1917",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
