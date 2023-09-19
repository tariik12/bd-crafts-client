import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [commonjs({
    filter(id) {
      if (id.includes('node_modules/react-chat-engine')) {
        return true;
      }
    },
  }),react()],
=======
  plugins: [react(),],
  
>>>>>>> b7a4033893c57b9c589de436213b72cf5b52db0a
})
