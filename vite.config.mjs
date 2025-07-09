// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    // 1) Compile .mdx → JSX before React sees it
    { 
      ...mdx(), 
      enforce: 'pre' 
    },

    // 2) Handle React (including .mdx for HMR)
    react({
      include: ['**/*.{js,jsx,ts,tsx,mdx}'],
    }),

    // 3) Tailwind and your existing proxy
    tailwindcss(),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
