import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'feature-remote-app',
            shared: ['vue'],
            remotes: {
                remoteApp: 'http://localhost:9000/assets/remoteEntry.js'
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 3001,
        host: true
    },
    build: {
        minify: false,
        target: 'esnext'
    }
});
