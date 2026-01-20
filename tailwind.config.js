/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f1a",
        ember: "#f26b38",
        glow: "#f5c46b",
        fog: "#f4f1ea"
      },
      fontFamily: {
        display: ["\"Bebas Neue\"", "system-ui", "sans-serif"],
        body: ["\"Space Grotesk\"", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(0,0,0,0.6)"
      }
    }
  },
  plugins: []
};
