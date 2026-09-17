/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DC2626',
          redLight: '#EF4444',
          redDark: '#B91C1C',
          blue: '#0050AE',
          blueLight: '#1E5EFF',
          cyan: '#00C6FF',
          navy: '#002D62',
          darkNavy: '#0B1F3A',
          obsidian: '#081522',
        },
        mandiri: {
          blue: '#0050AE',
          darkBlue: '#002D62',
          lightBlue: '#E8F2FD',
          gold: '#FFB800',
          darkGold: '#D97706',
          slate: '#F8FAFC',
        },
        mnk: {
          primary: '#0B1F3A',
          secondary: '#1E5EFF',
          accent: '#00C6FF',
          red: '#DC2626',
          bg: '#F8FAFC',
          dark: '#081522',
          surface: '#0F2744',
          card: '#0D223B',
          border: 'rgba(30, 94, 255, 0.2)',
          'border-bright': 'rgba(0, 198, 255, 0.4)',
          glow: 'rgba(0, 198, 255, 0.15)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
        tech: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'brand-glow': '0 0 25px rgba(220, 38, 38, 0.2), 0 0 35px rgba(0, 80, 174, 0.25)',
        'red-glow': '0 0 20px rgba(220, 38, 38, 0.35)',
        'blue-glow': '0 0 20px rgba(0, 80, 174, 0.35)',
        'glow-sm': '0 0 15px rgba(0, 198, 255, 0.25)',
        'glow-md': '0 0 30px rgba(30, 94, 255, 0.35)',
        'glow-lg': '0 0 50px rgba(0, 198, 255, 0.25)',
        'card-elevated': '0 20px 40px -15px rgba(2, 6, 23, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
