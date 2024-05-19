/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'prompt': ['Prompt', 'sans-serif'],
      },
      maxHeight: {
        '750': '750px',
        '1000': '1500px',
        '300': '300px',
      },
    },
  },
  plugins: [],
}
