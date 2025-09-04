/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f2ed",
        foreground: "#2c221d",
        primary: {
          DEFAULT: "#b8860b",
          light: "#d4a946",
          dark: "#6e4c0d",
        },
        accent: "#c9a227",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #6b2f8a, #b8860b)",
      },
      boxShadow: {
        elegant: "0 6px 18px rgba(0,0,0,0.15)",
        glow: "0 0 20px rgba(184,134,11,0.4)",
      },
      borderRadius: {
        lg: "12px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
