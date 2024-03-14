/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradientS1': "linear-gradient(311deg, rgba(209,39,39,1) 7%, rgba(5,169,170,1) 88%)",
        'gradientS2': "linear-gradient(16deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        'gradientS3': "linear-gradient(311deg, rgba(185,209,39,1) 29%, rgba(5,169,170,1) 93%)",
        'gradientS4': "linear-gradient(311deg, rgba(5,169,170,1) 7%, rgba(176,39,209,1) 88%)",
        'gradientS5': "linear-gradient(-135deg, #0703f7, #bcff04)",
        // Agrega aquí los gradientes adicionales según sea necesario
      },
    },
    fontFamily: {
      Rick: ['Rick']
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}


