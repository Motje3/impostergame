/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        background: "#0f0f23",
        surface: "#1a1a2e",
        card: "#252540",
        accent: "#f472b6",
        success: "#22c55e",
        danger: "#ef4444",
      },
    },
  },
  plugins: [],
};
