// tailwind.config.js
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "border-primary": "#e5e7eb", // Replace with your desired border color
        "background-primary": "#f9fafb", // Replace with your desired background color
        "background-alternative": "#ffffff", // Replace with your desired alternative background color
        "text-primary": "#111827", // Replace with your desired primary text color
        "text-alternative": "#6b7280", // Replace with your desired alternative text color
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        gloock: ["Gloock", "serif"],
      },
    },
  },
  plugins: [],
};

// // tailwind.config.js
// module.exports = {
//   content: [
//     './components/**/*.{vue,js}',
//     './layouts/**/*.vue',
//     './pages/**/*.vue',
//     './app.vue',
//     './plugins/**/*.{js,ts}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('daisyui')],
// };
