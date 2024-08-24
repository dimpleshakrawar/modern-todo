import type { Config } from 'tailwindcss';

const config: Config = {
     content: [
          './pages/**/*.{js,ts,jsx,tsx,mdx}',
          './components/**/*.{js,ts,jsx,tsx,mdx}',
          './app/**/*.{js,ts,jsx,tsx,mdx}'
     ],
     theme: {
          colors: {
               primaryLightBg: '#ebebeb',
               // primaryDarkBg: '#D4C7B6 '
               primaryDarkBg: '#e5d1b7 ',
               primaryHover: '#896d4d',
               secondaryHover: '#e5d1b7'
          }
     },
     plugins: []
};
export default config;
