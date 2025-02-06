<script setup lang="ts">
// import Toaster from '@/components/ui/toast/Toaster.vue';

useHead({
    title: 'Compress video',
    meta: [
        { name: 'description', content: 'Easily compress videos online without compromising quality. Compress images, videos, and documents in seconds.' },
        { name: 'keywords', content: 'video compression, reduce video size, online video compressor, compress images, compress videos, video format optimization' },
        { name: 'author', content: 'Tools Files' },
        { name: 'robots', content: 'index, follow' },

        { property: 'og:title', content: 'File Compression - Easily Compress Files Online' },
        { property: 'og:description', content: 'Quickly compress videos without losing quality. Supports images, videos, and documents.' },
        // { property: 'og:image', content: 'http://localhost:3000/og-image-compression.jpg' },
        { property: 'og:url', content: 'http://localhost:3000/compression' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'File Compression - Easily Compress Files Online' },
        { name: 'twitter:description', content: 'Quickly compress videos without losing quality. Compress images, videos, and documents in seconds.' },
        { name: 'twitter:image', content: 'http://localhost:3000/twitter-image-compression.jpg' },
    ],
    link: [
        { rel: 'canonical', href: 'http://localhost:3000/compression' },
    ],
});
</script>

<template>
    <Upload />
    <!-- <Toaster /> -->
</template>
