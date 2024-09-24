import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'system': 'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'gemunu': ['Gemunu Libre', 'sans-serif', 'system-ui'],
      'dancing': ['Dancing Script', 'sans-serif', 'system-ui'],
    },
    extend: {
      container: {
        center: true,
        padding: '16px',
        screens: {
          xl: '1640px',
        },
      },
      animation: {
        scaleMobile: 'scaleMobile 1.2s ease-in-out infinite',
        scaleDesktop: 'scaleDesktop 1.5s ease-in-out infinite',
        sidebarLeftSmooth: 'sidebarLeftSmooth .3s ease-in-out',
        sidebarRightSmooth: 'sidebarRightSmooth .3s ease-in-out',
        sidebarBgSmooth: 'sidebarBgSmooth .3s ease-in-out',
        modalContentSmooth: 'modalContentSmooth .3s ease-in-out',
      },
      keyframes: {
        scaleMobile: {
          '0%, 100%': { transform: 'scale(1.0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        scaleDesktop: {
          '0%, 100%': { transform: 'scale(1.3)', opacity: '0' },
          '50%': { transform: 'scale(1.5)', opacity: '1' },
        },
        sidebarLeftSmooth: {
          '0%': { transform: 'translate(-100%)' },
          '100%%': { transform: 'translate(0%)' },
        },
        sidebarRightSmooth: {
          '0%': { transform: 'translate(100%)' },
          '100%%': { transform: 'translate(0%)' },
        },
        sidebarBgSmooth: {
          '0%': { opacity: '0' },
          '100%%': { transform: '100' },
        },
        modalContentSmooth: {
          '0%': { transform: "scale(0)", opacity: '0'  },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'topTransparent': "url('/theme/topTransparent.webp')",
        'botTransparent': "url('/theme/botTransparent.webp')",
      },
      backgroundColor: {
        site: 'rgba(var(--site))',
        black: {
          100: '#999999',
          200: '#888888',
          300: '#777777',
          400: '#666666',
          500: '#555555',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
      },
      colors: {
        site: 'rgba(var(--site))',
        black: {
          100: '#999999',
          200: '#888888',
          300: '#777777',
          400: '#666666',
          500: '#555555',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
      },
    },
  },
  plugins: [],
}
export default config
