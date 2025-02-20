import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    open: true,      // Abre automaticamente no navegador
    port: 3001,      // Define a porta para o servidor de desenvolvimento
  
  }


})
