/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Mono", "monospace"],
      },
      colors: {
        background: "#03001c",
        primary: "#A633D6",
        "hackclub-red": "#ec3750",
      },
    },
  },
  plugins: [],
};
