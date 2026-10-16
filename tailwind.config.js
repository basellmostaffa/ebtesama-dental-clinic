/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { fontFamily: { cairo: ['Cairo', 'sans-serif'] }, colors: { teal: { 50: '#effcfb', 100: '#d5f6f3', 600: '#0b7b78', 700: '#086462', 900: '#073f45' } } } },
  plugins: [],
}
