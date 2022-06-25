module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        white: '#fff',
        'danger': {
          '50': '#F9D7D8',
          '100': '#F6C5C8',
          '200': '#F0A2A6',
          '300': '#EB7F84',
          '400': '#E55B62',
          '500': '#E03840'
        },
        'primary': {
          '50': '#4487FE',
          '100': '#307AFD',
          '200': '#0760FD',
          '300': '#0250DA',
          '400': '#0141B2',
          '500': '#013289',
          '600': '#011E51',
          '700': '#00091A',
          '800': '#000000',
          '900': '#000000'
        },
        'secondary': {
          'default': '#f6f9ff',
        },
      },
      screens: {
        '2xl': '1320px',
      },
    },
    
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
}