/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6c63ff",
        accent: "#ff6584",
      },
      backgroundColor: {
        primary: "#eeedf5",
        primaryLight: "#f8f7fc"
      },
    },
  },
  plugins: [],
};
