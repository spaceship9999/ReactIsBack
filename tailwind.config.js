/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat", 'sans-serif'],
        "rubik": ["Rubik", 'sans-serif'],
      },
      container: {
        center: true,
      },
      colors: {
        "grey": "#3d3d3d",
        "light-grey": "#ECECEE",
        "dark-blue": "#0f1c54",
        "light-green": "#148ba0",
        "light-blue": "#4898d7",
        "lighter-blue": "#0896d6",
      }
    },
  },
  plugins: [],
}
