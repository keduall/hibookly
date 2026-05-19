import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const productionServer = {
  host: true,
  port: 7002,
  allowedHosts: ['hibookly.com', 'www.hibookly.com'],
};

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    ...(isProduction
      ? {
          server: productionServer,
          preview: productionServer,
        }
      : {}),
  };
});
