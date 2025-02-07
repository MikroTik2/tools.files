import { css, eslint, head, modules, nitro, shadcn, vite } from './config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules,
    nitro,
    css,
    vite,
    shadcn,
    eslint,
    app: { head },
    devtools: { enabled: false },
    compatibilityDate: '2025-02-07',
});
