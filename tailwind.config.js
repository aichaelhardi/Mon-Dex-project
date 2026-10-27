/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./data.js"],
  theme: {
    extend: {
      // Thème NEUTRE de départ.
      // TODO (Partie 1) : remplacez ces valeurs par les couleurs et les polices de votre univers.
      colors: {
        brand: {
          dark: "#fb9518ed",
          light: "#E5E7EB",
        },
        ink: "#14171D",
        muted: "#545B68",
        ground: "#EDEFF3",
        line: "rgb(225, 221, 213)",
        
      },
      fontFamily: {
        display: ["Arial", "sans-serif"],
        body: ["Arial", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
      borderRadius: {
        card: "50px",
      },
    },
  },
  plugins: [],
};
