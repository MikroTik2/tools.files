// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    ssr: true,
    modules: [
        ['@nuxtjs/tailwindcss', { viewer: false }],
        '~/modules/home',
        '~/modules/compression-video',
        '@nuxtjs/color-mode',
        'nuxt-lucide-icons',
        'shadcn-nuxt',
        '@nuxt/eslint',
    ],

    nitro: {
        compressPublicAssets: true,
        minify: true,
    },

    devtools: { enabled: false },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            bodyAttrs: {
                class: 'dark',
            },
        },
    },

    css: [
        '~/assets/styles/main.scss',
        '~/assets/styles/base.scss',
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
        },
    },

    eslint: {
        config: {
            stylistic: true,
        },
    },

    shadcn: {
        prefix: '',
        componentDir: './components/ui',
    },

});
