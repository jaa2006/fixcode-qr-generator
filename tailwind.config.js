/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        secondary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'neumorphic-light': '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff',
        'neumorphic-dark': '20px 20px 60px #1a1a1a, -20px -20px 60px #2d2d2d',
        'neumorphic-inset-light': 'inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff',
        'neumorphic-inset-dark': 'inset 5px 5px 10px #1a1a1a, inset -5px -5px 10px #2d2d2d',
      }
    },
  },
  plugins: [],
};