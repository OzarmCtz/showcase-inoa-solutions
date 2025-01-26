import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: { sans: ['DM Sans', ...defaultTheme.fontFamily.sans] },
      colors: {
        'custom-green': {
          50: '#f2fdf3',
          100: '#e6fbe7',
          200: '#c1f5c4',
          300: '#9befa0',
          400: '#4fe456',
          500: '#3ed10f', // Couleur principale
          600: '#38bc0e',
          700: '#2f9c0b',
          800: '#257b08',
          900: '#1f6406',
          950: '#103403',
        }
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-sm': '50px 50px',
        'grid-lg': '100px 100px',
      },
    },
  },
  content: ['./components/**/*.{vue,js}', './pages/**/*.{vue,js}', './app.vue'],
};
