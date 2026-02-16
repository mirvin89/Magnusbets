/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'premium-dark': '#0a0e27',
        'premium-navy': '#1a1f3a',
        'premium-slate': '#2d3748',
<<<<<<< Updated upstream
        'accent-gold': '#d4af37',
        'accent-amber': '#fbbf24',
        'primary': '#FF9500',
=======
        'accent-gold': '#FF9500',
        'accent-amber': '#f97316',
>>>>>>> Stashed changes
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 149, 0, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 149, 0, 0.5)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'premium-sm': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'premium-md': '0 10px 40px rgba(0, 0, 0, 0.4)',
        'premium-lg': '0 20px 60px rgba(0, 0, 0, 0.5)',
        'glow-amber': '0 0 20px rgba(249, 115, 22, 0.2)',
      },
      transitionProperty: {
        'glow': 'box-shadow, background-color',
      },
    },
  },
}