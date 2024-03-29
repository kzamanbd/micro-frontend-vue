import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'remoteApp',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './RemoteButton': './src/components/RemoteButton.vue'
            },
            shared: ['vue']
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    preview: {
        host: 'localhost',
        port: 9000,
        strictPort: true
    },
    server: {
        port: 9000,
        host: true
    },
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
});
