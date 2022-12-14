/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'd-hero': ['3.813rem', { lineHeight: '1.4', fontWeight: '800', letterSpacing: '-0.05' }],
        'd-h2': ['3.063rem', { lineHeight: '1.5' }],
        'd-h3': ['2.438rem', { lineHeight: '1.6' }],
        'd-h4': ['1.938rem', { lineHeight: '1.6' }],
        'd-h5': ['1.563rem', { lineHeight: '1.6' }],
        'd-h6': ['1.25rem', { lineHeight: '1.6', letterSpacing: "0.05" }],
        'd-base': ['1rem', { lineHeight: '1.5' }],
        'd-copy': ['0.833rem', { lineHeight: '2' }],
        'm-hero': ['3rem', { lineHeight: '1.4', fontWeight: '800', letterSpacing: "-0.05", }],
        'm-h2': ['2.5rem', { lineHeight: '1.5' }],
        'm-h3': ['2.063rem', { lineHeight: '1.6' }],
        'm-h4': ['1.75rem', { lineHeight: '1.6' }],
        'm-h5': ['1.483rem', { lineHeight: '1.6' }],
        'm-h6': ['1.188rem', { lineHeight: '1.6', letterSpacing: "0.05" }],
        'm-base': ['1rem', { lineHeight: '1.5' }],
        'm-copy': ['0.889rem', { lineHeight: '2' }],
      },
      colors: {
        'onyx': {
          '50': '#fefefe',
          '100': '#fcfdfe',
          '200': '#f8f9fb',
          '300': '#f3f6f9',
          '400': '#ebeff5',
          '500': '#e2e8f0',
          '600': '#cbd1d8',
          '700': '#aaaeb4',
          '800': '#888b90',
          '900': '#6f7276'
        }, 'neropside': {
          '50': '#f3f4f4',
          '100': '#e7e9ea',
          '200': '#c3c7ca',
          '300': '#9fa5aa',
          '400': '#58626a',
          '500': '#101e2a',
          '600': '#0e1b26',
          '700': '#0c1720',
          '800': '#0a1219',
          '900': '#080f15'
        }, 'scarlet': {
          '50': '#fff5f7',
          '100': '#ffecef',
          '200': '#ffcfd7',
          '300': '#ffb3bf',
          '400': '#ff7990',
          '500': '#FF4060',
          '600': '#e63a56',
          '700': '#bf3048',
          '800': '#99263a',
          '900': '#7d1f2f'
        }, 'lazure': {
          '50': '#f2fbff',
          '100': '#e6f7ff',
          '200': '#bfeaff',
          '300': '#99ddff',
          '400': '#4dc4ff',
          '500': '#00AAFF',
          '600': '#0099e6',
          '700': '#0080bf',
          '800': '#006699',
          '900': '#00537d'
        }, 'bayoux': {
          '50': '#fbfdff',
          '100': '#f7fbff',
          '200': '#ecf6ff',
          '300': '#e0f0ff',
          '400': '#c9e5ff',
          '500': '#B2DAFF',
          '600': '#a0c4e6',
          '700': '#86a4bf',
          '800': '#6b8399',
          '900': '#576b7d'
        }, 'rosian': {
          '50': '#fff6fa',
          '100': '#ffecf4',
          '200': '#ffd0e4',
          '300': '#feb4d3',
          '400': '#fe7bb2',
          '500': '#FD4391',
          '600': '#e43c83',
          '700': '#be326d',
          '800': '#982857',
          '900': '#7c2147'
        }, 'amethyst': {
          '50': '#f7f7ff',
          '100': '#f0efff',
          '200': '#d9d6ff',
          '300': '#c1bdff',
          '400': '#938cff',
          '500': '#655bff',
          '600': '#5b52e6',
          '700': '#4c44bf',
          '800': '#3d3799',
          '900': '#312d7d'
        }, 'jade': {
          '50': '#f2fefa',
          '100': '#e6fcf5',
          '200': '#bff9e6',
          '300': '#99f5d6',
          '400': '#4dedb8',
          '500': '#00E599',
          '600': '#00ce8a',
          '700': '#00ac73',
          '800': '#00895c',
          '900': '#00704b'
        }, 'citrine': {
          '50': '#fffdf5', 
          '100': '#fffbeb', 
          '200': '#fff4cc', 
          '300': '#ffedad', 
          '400': '#ffe070', 
          '500': '#ffd333', 
          '600': '#e6be2e', 
          '700': '#bf9e26', 
          '800': '#997f1f', 
          '900': '#7d6719'
      }
      },
    }
  },
  plugins: [],
}
