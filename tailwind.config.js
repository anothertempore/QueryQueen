/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/renderer/index.html', './packages/renderer/src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [],
};
