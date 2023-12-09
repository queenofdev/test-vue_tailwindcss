/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily :{
        'sans': 'Sans-pro',
        'inter' :'Inter'
      },
      fontSize :{
        large :'32px',
        middle :'16px'
      },
      colors: {
        dark: {
          primary: "#291D32",
          secondary: "#CF75FF",
          strong :'#1A1220',
          light:'#44394D',
          icon: '#D7A6FF',
          middle :'#330033'
        },
        light: {
          primary: "#CF75FF", // pink
          secondary: "#291D32", // grey
          strong: '#F5E3FF',
          light :'#F7F1F5',
          icon :'#F0F0F0'
        },
        outline: {
          light :'#DBDBDB'
        }
      },
    },
  },
  plugins: [],
  
}

