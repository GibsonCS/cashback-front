import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      babel({ 
        presets: [reactCompilerPreset()] 
      }),
      tailwindcss(),
    ],
    define: {
      // Exemplo de como mapear uma variável específica
      'process.env.API_URL': JSON.stringify(env.VITE_API_URL),
    }
  }
})

