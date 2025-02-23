/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        footerDeepGreen: "#091a16",
        appmainview: "#f9fafb",
        applisttitlebrown: "#aa671d",
        appdeepblue: "#003748",
        homeTitleGreen: "#00942a",
        cardDeepblue: "#H0F1539",
        cardOrange: "#E3652B",
        learnMoreCardOrange: "#FF7E33",
        homeDescription: "#121212",
        homeCoffeButton: "#53383f",
        homeHeader: "#E3652b",
        homeSubHeader: "#802400",
        appyellow: {
          50: "#fffff2",
          100: "#ffffe6",
          200: "#ffffc0",
          300: "#fffe9b",
          400: "#fffe4f",
          500: "#fffd04",
          600: "#e6e404",
          700: "#bfbe03",
          800: "#999802",
          900: "#7d7c02",
        },
        appblack: {
          50: "#f4f4f4",
          100: "#e9e9e9",
          200: "#c8c8c7",
          300: "#a7a6a5",
          400: "#656462",
          500: "#23211e",
          600: "#201e1b",
          700: "#1a1917",
          800: "#151412",
          900: "#11100f",
        },
        appgrey: {
          50: "#fbfbfb",
          100: "#f7f7f8",
          200: "#ececec",
          300: "#e0e0e1",
          400: "#c9c9cb",
          500: "#b2b2b4",
          600: "#a0a0a2",
          700: "#868687",
          800: "#6b6b6c",
          900: "#575758",
        },
        appgreen: {
          50: "#f5f7f4",
          100: "#ebeee9",
          200: "#cdd5c8",
          300: "#aebca7",
          400: "#728965",
          500: "#355723",
          600: "#304e20",
          700: "#28411a",
          800: "#203415",
          900: "#1a2b11",
        },
        applightgreen: {
          50: "#f7faf6",
          100: "#eff5ec",
          200: "#d8e6d0",
          300: "#c0d7b4",
          400: "#91ba7c",
          500: "#629c44",
          600: "#588c3d",
          700: "#4a7533",
          800: "#3b5e29",
          900: "#304c21",
        },
        appbrown: {
          50: "#f6f5f5",
          100: "#eeebec",
          200: "#d4cdcf",
          300: "#baafb2",
          400: "#877479",
          500: "#53383f",
          600: "#4b3239",
          700: "#3e2a2f",
          800: "#322226",
          900: "#291b1f",
        },
        apporange: {
          50: "#fff8f3",
          100: "#feddc7",
          200: "#fcc39b",
          300: "#fba86f",
          400: "#fa8e42",
          500: "#f97316",
          600: "#d46213",
          700: "#ae510f",
          800: "#893f0c",
          900: "#642e09",
        },
      },
    },
  },
  plugins: [],
};
