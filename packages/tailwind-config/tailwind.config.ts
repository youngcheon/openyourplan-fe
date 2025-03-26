import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...colors,
        black: '#111111',
        'black-1': 'rgba(17, 17, 17, 0.01)',
        'black-10': 'rgba(17, 17, 17, 0.1)',
        'black-50': 'rgba(17, 17, 17, 0.5)',
        'black-80': 'rgba(17, 17, 17, 0.8)',
        white: '#ffffff',
      },

      borderRadius: {
        base: '12px',
      },
      fontSize: {
        sm: '15px',
        base: '16px',
        lg: '20px',
        xl: '28px',
      },
      screens: {
        phone: '375px',
        tablet: '768px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
