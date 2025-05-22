/** @type {import('tailwindcss').Config} */
//module.exports = {
  //content: ["./index.html"],
  //theme: {
    //extend: {
      //transitionTimingFunction: {
       // jump: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
     // },
   // },
  //},
  //plugins: [],
  // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out', // Adds a fade-in animation
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
      transitionTimingFunction: {
        jump: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",,
    },

  },
  plugins: [],
}
