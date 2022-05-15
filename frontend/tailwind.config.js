module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "none" },
          "7%": { transform: "translate(2px, 5px)", opacity: 0.75 },
          "30%": { transform: "translate(0, 0)", opacity: 1 },
          "70%": { transform: "translate(0, 0)", opacity: 1 },
          "100%": { transform: "none", opacity: 0.5 },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
      backgroundImage: {
        "main-image":
          "url('https://d2jf5yk8vvx0ti.cloudfront.net/images/pexels-tara-winstead-8386440.jpg')",
        "events-image":
          "url('https://d2jf5yk8vvx0ti.cloudfront.net/images/pexels-wendy-wei-1555900.jpg')",
      },
    },
  },
  plugins: [],
};
