/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      primary: {
        50: "#e3dbe6",
        100: "#c7b7ce",
        200: "#ab95b6",
        300: "#90739f",
        400: "#755388",
        500: "#5a3471",
        600: "#4b2c5e",
        700: "#3d254b",
        800: "#2f1e39",
        900: "#221728",
        950: "#150e18",
      },
      secondary: {
        50: "#ede1e7",
        100: "#dbc4cf",
        200: "#c9a7b8",
        300: "#b78ba2",
        400: "#a56f8b",
        500: "#925476",
        600: "#784662",
        700: "#5f394e",
        800: "#482c3b",
        900: "#312029",
        950: "#1c1418",
      },
    },
  },
  plugins: [],
};
