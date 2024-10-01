/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "yellow-orange":"var(--yellow-orange)",
        "dark-green":"var(--dark-green)",
        "light-cyan-background": "var(--light-cyan-background)",
        "light-white":"var(--light-white)",
        "green-card":"var(--green-card)",
        "light-right-background": "var(--light-right-background)",
        "dark-right-background": "var(--dark-right-background)",
			  },
        fontFamily: {
          afacad: ['Afacad-Flux','sans-serif'],
          },
    },
    },
  plugins: [],
}

