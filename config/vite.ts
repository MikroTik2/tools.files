import type { ViteConfig } from 'nuxt/schema';

export const vite: ViteConfig = {
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
};
