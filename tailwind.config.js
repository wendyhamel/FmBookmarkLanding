/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', 'sans-serif'],
      },
      colors: {
        'blue': 'hsl(231, 69%, 60%)',
        'red': 'hsl(0, 94%, 66%)',
        'gray-blue': 'hsl(229, 8%, 60%)',
        'dark-blue': 'hsl(229, 31%, 21%)',
      },
    },
  },
  plugins: [],
}

