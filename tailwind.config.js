const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lekton': ['lekton', 'sans-serif'],
        'roboto': ['roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
