/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "ThemeColor": 'var(--text-color)',
        "tcc" : "#544332"
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
