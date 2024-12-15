import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite conexiones externas (0.0.0.0)
    port: 5173, // Opcional: Forzar el puerto (por defecto es 5173)
  },
})
