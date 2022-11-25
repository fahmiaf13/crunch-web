/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors: {
        pome: "#DC4A5B",
        darker: {
          100: "#25273D",
          200: "#1C1E32",
        },
        whiter: {
          100: "#FAFBFB",
          200: "#B8BABC",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
