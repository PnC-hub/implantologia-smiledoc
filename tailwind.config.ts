import type { Config } from 'tailwindcss'

export default <Config>{
  content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1e3a5f',
          primary: '#2563eb',
          accent: '#e40713',
          green: '#44AE00',
          'green-hover': '#3a8f02',
        }
      }
    },
  },
}
