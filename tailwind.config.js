/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#1DA1F2',
            secondary: '#14171A',
            accent: '#657786',
            neutral: '#AAB8C2',
            'base-100': '#FFFFFF',
            info: '#1DA1F2',
            success: '#17BF63',
            warning: '#FFAD1F',
            error: '#E0245E',
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
],
}