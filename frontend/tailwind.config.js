/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add the file types you are using
    "./public/index.html",         // Add the path to your HTML files if needed
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        md: "10rem"
      },
    }
  },
  plugins: [],
}

