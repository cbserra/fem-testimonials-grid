// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        'moderate-violet': 'hsl(263, 55%, 52%)',
        'light-violet': 'hsla(264, 82%, 70%, 1)',
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'very-dark-blackish-blue': 'hsl(219, 29%, 14%)',
        'white': 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(0, 0%, 81%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },

      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      },

      backgroundImage: {
        'quotes': 'url("./src/assets/bg-pattern-quotation.svg")',
      },

      fontSize: {
        'xs': ['11px',{
          lineHeight: '11px',
        }],
        'sm': ['13px',{
          lineHeight: '13px',
        }],
        'md': ['13px',{
          lineHeight: '18px',
        }],
        'lg': ['20px',{
          lineHeight: '24px',
        }],
      },
    },
  },
  plugins: [],
}
