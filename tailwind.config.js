/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        "gray-50": "#FAFAFA",
        "gray-100": "#F5F5F5",
        "gray-200": "#EEEEEE",
        "gray-300": "#E0E0E0",
        "gray-400": "#BDBDBD",
        "gray-500": "#9E9E9E",
        "gray-600": "#757575",
        "gray-700": "#616161",
        "gray-800": "#424242",
        "gray-900": "#212121",
        "gray-950": "#121212",
        "green-50": "#F0FDF4",
        "green-100": "#DCFCE7",
        "green-200": "#BBF7D0",
        "green-300": "#75FFBF",
        "green-500": "#22C55E",
        "purple-50": "#FAF5FF",
        "purple-100": "#F3E8FF",
        "purple-200": "#E9D5FF",
        "purple-300": "#D8B4FE",
        "purple-400": "#CB97FF",
        "purple-500": "#BA75FF",
        "purple-600": "#A855F7",
        "purple-700": "#9333EA",
        red: "#FF6161"
      },
      fontSize: {
        lt: ["34px", { lineHeight: "41px" }],
        t1: ["28px", { lineHeight: "34px" }],
        t2: ["22px", { lineHeight: "28px" }],
        t3: ["20px", { lineHeight: "25px" }],
        hl: ["17px", { lineHeight: "22px" }],
        shl: ["15px", { lineHeight: "20px" }],
        b1: ["17px", { lineHeight: "22px" }],
        fn: ["13px", { lineHeight: "18px" }],
        c1: ["12px", { lineHeight: "16px" }]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
