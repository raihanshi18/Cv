import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    extend: {
    spacing: {
      '100' : '400px'
    }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
