import type { NuxtConfig } from '@nuxt/schema';

const routeRules: NuxtConfig['routeRules'] = {
    '/(.*)': {
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp',
        },
    },
    '/compression-video': {
        ssr: false,
    },
};

export { routeRules };
