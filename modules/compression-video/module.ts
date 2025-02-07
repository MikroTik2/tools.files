import type { Nuxt } from '@nuxt/schema';
import { defineNuxtModule } from '@nuxt/kit';
import { join, resolve } from 'pathe';

export default defineNuxtModule({
    meta: {
        name: 'compression-module',
        configKey: 'compressionModule',
    },
    setup(options: object, nuxt: Nuxt) {
        nuxt.hook('components:dirs', (dirs) => {
            dirs.push({
                path: join(__dirname, 'components'),
            });
        });

        nuxt.hook('pages:extend', (pages) => {
            pages.push({
                name: 'compression-video',
                path: '/compression-video',
                file: resolve(__dirname, './pages/compression-video.vue'),
            });
        });
    },
});
