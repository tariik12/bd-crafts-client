import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [commonjs({
    filter(id) {
      if (id.includes('node_modules/react-chat-engine')) {
        return true;
      }
    },
  }),react()],
})
