module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fff9f5",
          51: "#fff9f6",
          52: "#f9fdff",
          300: "#dbdbdb",
          400: "#c4c4c4",
          401: "#c0c0c0",
          600: "#6e6e6e",
          604: "#787878",
          700: "#626262",
          900: "#191919",
          "900_cc": "#191919cc",
        },
        deep_orange: {
          50: "#fbeee6",
          300: "#ff9e65",
          400: "#ff8b46",
          900: "#883301",
        },
        red: { 100: "#ffe0ce", 101: "#ecd6c8" },
        bluegray: {
          100: "#d6d6d6",
          101: "#d9d9d9",
          102: "#cfcfcf",
          600: "#406f85",
          "300_33": "#91aebb33",
        },
        orange: { A700: "#fd650b" },
        yellow: { 50: "#fff7f0" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { manrope: "Manrope", markoone: "Marko One" },
      boxShadow: { bs: "0px 30px  30px 0px #91aebb33" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
