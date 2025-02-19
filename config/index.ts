const css: string[] = ['~/assets/styles/main.scss', '~/assets/styles/base.scss'];
const nitro = {
    compressPublicAssets: true,
    minify: true,
};

export { eslint } from './eslint';
export { head } from './meta';
export { modules } from './modules';
export { routeRules } from './route';
export { shadcn } from './shadcn';
export { vite } from './vite';
export { css, nitro };
