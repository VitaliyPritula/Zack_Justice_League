/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        while: '#ffffff',
        black: '#000000',
        rey: '#808080',  // Gray color
        accent: {
          50: '##808080',

          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',  // Pink color
          500: '#ec4899',  // Darker pink
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Blue color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',  // Purple color
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
      fontWeight: {
      //font-medium
      light:'300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      //text-m
      xs: '12px',
      s: '14px',
      m: '16px',
      sm: '18px',
      md: '20px',
      l: '24px',
      lg: '32px',
      xlg: '42px',
      xl: '48px',
      '2xl': '64px',
      '3xl': '80px',
      '4xl': '86px',
    },
    },
  },
  plugins: [],
}
