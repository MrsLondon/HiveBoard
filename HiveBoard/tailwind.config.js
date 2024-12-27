/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Make sure this is in your content array
    "./src/**/*.{js,ts,jsx,tsx}",  // Scan all your React files for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

