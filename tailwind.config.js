import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./resources/**/*.{js,jsx,ts,tsx,blade.php}'],
  theme: {
    extend: {
      colors: {
        grey: {
          100: '#cfd8dc',
          300: '#90a4ae',
          400: '#78909c',
          500: '#607d8b',
          600: '#546e7a',
          800: '#455a64',
          900: '#37474f'
        },
        orange: {
          100: '#ffe0b2',
          300: '#ffcc80',
          400: '#ffa726',
          500: '#f57c00',
          600: '#f4511e',
          800: '#d84315',
          900: '#ff5722'
        }

      },
      fontFamily: {
        sans: ['"Cerebri Sans"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
    // ...
  ]
};
