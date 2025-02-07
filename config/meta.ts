import type { NuxtAppConfig } from '@nuxt/schema';

const head: NuxtAppConfig['head'] = {
    htmlAttrs: {
        lang: 'en',
    },
    bodyAttrs: {
        class: 'dark',
    },

    meta: [
        {
            name: 'robots',
            content: 'index',
        },
        {
            name: 'theme-color',
            content: '#ffffff',
        },
    ],

    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicons/logo_64x64.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '48x48',
            href: '/favicons/logo_48x48.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '72x72',
            href: '/favicons/logo_72x72.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '96x96',
            href: '/favicons/logo_96x96.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '144x144',
            href: '/favicons/logo_144x144.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '192x192',
            href: '/favicons/logo_192x192.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '256x256',
            href: '/favicons/logo_256x256.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '384x384',
            href: '/favicons/logo_384x384.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '512x512',
            href: '/favicons/logo_512x512.png',
        },
    ],

};

export { head };
