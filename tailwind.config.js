/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#414A61',
        'blue-link': '#0066F6',
        'white-faded': '#F9F9F9',
        'dark-blue': '#001533',
        'white-form': '#EEEEEECC',
        'gray-card': '#CECECE',
        'gray-nav': '#8D8D8D',
        'gray-records': '#292929',
        'border-grey': '#585858',
        'gray-bgIcons': '#6A6A6A',
        'gray-icons': '#DDDDDD',
        'light-blue': '#7485B4',
        'gray-dots': '#6C6C6C',
        'black' : '#000000',
        'white': '#FFFFFF',
        'grey-profile': '#EEEEEE',
        'white-profile': '#F9F9F9',
        'color-1' : '#FED7AA',
        'color-2' : '#C7D2FE',
        'color-3' : '#FEE2E2',
        'color-4' : '#FB7185',
        'color-5' : '#7DD3FC',
        'color-6' : '#F7FEE7',
        'color-7' : '#CCFBF1',
        'color-8' : '#FED7AA',
        'color-9' : '#E9D5FF',
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
    },
  },
  plugins: [],
}