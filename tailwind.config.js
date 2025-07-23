/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['DM Serif Display', 'serif'],
        'body': ['Lora', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'navy': '#0a192f',
        'blush': '#fcd5ce',
        'bone': '#fefcf9',
        'gold': '#fbbf24',
        'navy-light': '#112240',
        'navy-lighter': '#1a2332',
        'blush-light': '#fde8e1',
        'blush-dark': '#f9c5b8',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'envelope': 'envelope 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        envelope: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(2deg) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}