import preline from "preline/plugin"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [preline],
}

