const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",flowbite.content()],
  theme: {
    extend: {
      colors:{
        primary: '#04AA6D',
        primaryHover: '#15743D',
        secondary: '#0D9488',
        secondaryHover: '#2563CC',
        blueLight: '#2563eb',
        danger: '#e74c3c',
        textBlack: '#111827',
        white: 'white',
        textGray: '#4B5563',
        borderColor: '#94a3b8',
        textDark: '#D3D3D4',
        cardDark: '#1f2937'
      },
      fontFamily: {
        englishFont: ['Inter', 'Arial', 'sans-serif'],
        khmerFont: ['Koh Santepheap', 'serif']
      },
      fontSize:{
        heroText: '55px',
        heroResponsive: '40px',
        Title : '24px',
        Description: '18px',
        Subtitle: '16px',
        Small: '14px',
      },
      container:{
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      }
    },
  },
  plugins: [flowbite.plugin(),require('flowbite/plugin')],
  darkMode: 'class'
};

