import type { Config } from 'tailwindcss';

export default {
      content: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
            container: {
                  center: true,
                  padding: '20px',
                  screens: {
                        '2xl': '1300px',
                  },
            },
            extend: {
                  colors: {
                        primary: '#F82BA9',
                        secondary: '#F82BA9',
                        dark: '#160E4B',
                        accent: '#160E4B',
                        grayColor: '#757F95',
                  },
            },
      },
      plugins: [],
} satisfies Config;
