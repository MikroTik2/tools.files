export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {

    };

    nuxtApp.hook('vue:error', (error, instance, info) => {

    });
});
