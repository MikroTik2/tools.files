export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = () => {

    };

    nuxtApp.hook('vue:error', () => {

    });
});
