/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('~/public/img/hero.JPG')",
        ketupat: "url('~/public/img/ketupat.svg')",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(-360deg)",
          },
        },
        ketupatLeft: {
          "0%,100%": {
            transform: "rotate(-2deg)",
          },
          "50%": {
            transform: "rotate(2deg)",
          },
        },
        ketupatRight: {
          "0%,100%": {
            transform: "rotate(2deg)",
          },
          "50%": {
            transform: "rotate(-2deg)",
          },
        },
      },
      animation: {
        'ketupat-left': "ketupatLeft 1s ease-in-out infinite",
        'ketupat-right': "ketupatRight 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
