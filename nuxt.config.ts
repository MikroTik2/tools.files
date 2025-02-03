// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: [
        ['@nuxtjs/tailwindcss', { viewer: false }],
        '@nuxtjs/color-mode',
        'shadcn-nuxt',
        '@nuxt/eslint',
    ],
    devtools: { enabled: false },

    app: {
        head: {
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
