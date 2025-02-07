import type { NuxtAppConfig } from '@nuxt/schema';

const head: NuxtAppConfig['head'] = {
    htmlAttrs: {
        lang: 'en',
    },
    bodyAttrs: {
        class: 'dark',
    },
};

export { head };
