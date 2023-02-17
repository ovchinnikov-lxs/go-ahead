import { defineConfig } from 'cypress';

export default defineConfig({
    viewportWidth: 1200,
    viewportHeight: 900,
    video: false,

    component: {
        devServer: {
            framework: 'vue',
            bundler: 'vite',
        },
    },

    e2e: {
        baseUrl: 'http://localhost:3002',
    },
});
