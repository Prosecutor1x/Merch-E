/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin'), require('@tailwindcss/forms')],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html","node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",],
};
