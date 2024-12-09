/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#007bff',
          secondary: '#6c757d',
          accent: '#f8f9fa',
        },
        fontFamily: {
          sans: ['Arial', 'sans-serif'],
        },
        boxShadow: {
          custom: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: [],
  }
  