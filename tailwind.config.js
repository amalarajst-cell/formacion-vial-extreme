/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#FFCC00', // Now Yellow as per request
        'brand-navy': '#001C30', // Dark Blue
        'brand-grey': '#E0E0E0',
        'brand-dark-grey': '#1F2937',
        'brand-yellow': '#FFCC00',
      },
      fontFamily: {
        'brand-heading': ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        'brand-body': ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        'none': '0px', // Enforce sharp edges
        DEFAULT: '0px',
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #000000', // Hard shadow for buttons
      }
    },
  },
  plugins: [],
}
