/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'gray-dark': '#414A61',
      'blue-link': '#0066F6',
      'white-faded': '#F9F9F9',
      'dark-blue': '#001533',
      'white-form': '#EEEEEECC',
      'gray-card': '#CECECE',
      'gray-nav': '#8D8D8D',
      'gray-records': '#292929',
      'gray-bgIcons': '#6A6A6A',
      'gray-icons': '#DDDDDD',
      'light-blue': '#7485B4',
      'gray-dots': '#6C6C6C'
    },
    fontFamily: {
      Karla: ['Karla', 'sans-serif']
    },

    extend: {},
  },
  plugins: [],
}