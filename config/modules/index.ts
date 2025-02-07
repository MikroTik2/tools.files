import type { NuxtModule } from '@nuxt/schema';

export const modules: (string | NuxtModule | [string, Record<string, unknown>])[] = [
    ['@nuxtjs/tailwindcss', { viewer: false }],
    'nuxt-lucide-icons',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '~/modules/home',
    '~/modules/compression-video',
];
