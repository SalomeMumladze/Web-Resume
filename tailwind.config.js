/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          DEFAULT: "1472px",
        },
      },
      colors: {
        lightGray: "#FCFCFC",
        lightBlue: "#EAEFF6",
        brightBlue: "#3F8AE2",
        pastelBlue: "#C6DDF7",
        lightPastelBlue: "#EFF6FD",
        grayishBlue: "#8F96A3",
        dark: "#29303D",
        mediumBlue: "#2178DE",
      },
      fontFamily: {
        SfProBlackItalic: ["SfProBlackItalic"],
        SfProRegular: ["SfProRegular"],
      },
    },
  },
  plugins: [],
};
