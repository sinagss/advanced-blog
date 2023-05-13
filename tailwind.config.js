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
        primaryLight: "#f8f7fc",
        secondary: "#6c63ff",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      fontFamily: {
        cursive: ["Homemade Apple", "Apple Chancery"],
      },
    },
  },
  plugins: [],
};
