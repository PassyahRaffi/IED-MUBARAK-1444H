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
        hero: "url('~/public/img/family.JPG')",
        ketupat: "url('~/public/img/ketupat.svg')",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(-360deg)",
          },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          // '10%': { transform: 'translateY(10px), rotate(0deg)' },
          "20%": { transform: "translateX(10px)" },
          // '30%': { transform: 'rotate(14deg)' },
          // '40%': { transform: 'rotate(-4deg)' },
          // '50%': { transform: 'rotate(10.0deg)' },
          // '60%': { transform: 'rotate(0.0deg)' },
          // '100%': { transform: 'rotate(0.0deg)' },
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
        "spin-slow": "spin 5s linear infinite",
        "ping-slow": "ping 5s cubic-bezier(1, 1, 0.2, 1) infinite",
        "waving-hand": "wave 2s linear infinite",
        'ketupat-left': "ketupatLeft 1s ease-in-out infinite",
        'ketupat-right': "ketupatRight 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
