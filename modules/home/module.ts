import type { Nuxt } from '@nuxt/schema';
import { defineNuxtModule } from '@nuxt/kit';
import { join, resolve } from 'pathe';

export default defineNuxtModule({
    meta: {
        name: 'home-module',
        configKey: 'homeModule',
    },
    setup(options: object, nuxt: Nuxt) {
        nuxt.hook('components:dirs', (dirs) => {
            dirs.push({
                path: join(__dirname, 'components'),
            });
        });

        nuxt.hook('pages:extend', (pages) => {
            pages.push({
                name: 'home',
                path: '/',
                file: resolve(__dirname, './pages/home.vue'),
            });
        });
    },
});
