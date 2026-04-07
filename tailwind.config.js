/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9df304", // Vert vif
        secondary: "#bdda81", // Vert clair
        dark: "#060904", // Vert foncé très sombre (background)
        darker: "#3f5120", // Vert foncé
        light: "#f2f2f2", // Gris clair
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
