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
        'color-1' : '#003F5C',
        'color-2' : '#374C80',
        'color-3' : '#7A5195',
        'color-4' : '#BC5090',
        'color-5' : '#EF5675',
        'color-6' : '#FF764A',
        'color-7' : '#FFA600',
        'color-8' : '#2DD4BF',
        'color-9' : '#E9D5FF',
        'red' :'#DF2E38'
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
    },
  },
  plugins: [],
}