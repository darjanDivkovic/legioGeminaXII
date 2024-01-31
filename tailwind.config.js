/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Julius': ['JuliusSansOne-Regular', 'sans-serif'],
        // Use 'CustomFont' as the font-family name
      },
      boxShadow: {
        'gold': ['0 25px 50px -12px rgba(203,154,104,0.7)']
      }
    },
  },
  plugins: [],
}

