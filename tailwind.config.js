/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora"],
        roboto: ["Roboto"],
      },
      colors: {
        "custom-blue": "#16454E",
        "hover-blue": "#1F5A65",
        "background-pink": "#eebac7",
        "custom-gray": "#676767",
        "background-gray": "#F2F1F0",
        cookie: "#0B2C33",
      },
    },
  },
  plugins: [],
};
