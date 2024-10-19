// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to all your template files
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blue-gradient": "linear-gradient(to left, #3b82f6, #60a5fa)",
      },
      animation: {
        "move-bg": "move-bg 15s linear infinite", // Changed from 20s to 15s
      },
      keyframes: {
        "move-bg": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
      },
    },
  },
  plugins: [],
};
