/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        'w-big': '380px',
      },
      height: {
        'h-big': '380px',
      },
      colors: {
        'black-opacity': '#000000d0',
      },
    },
  },
  plugins: [],
};
