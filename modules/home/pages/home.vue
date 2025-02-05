<script setup lang="ts">
useHead({
    title: 'Tools Files',
    meta: [
        { name: 'description', content: 'Quickly compress and format files without losing quality. Reduce file sizes easily with our online tool.' },
        { name: 'keywords', content: 'file compression, file formatting, reduce file size, online file compressor, compress images, compress videos' },
        { name: 'author', content: 'Tools Files' },
        { name: 'robots', content: 'index, follow' },

        { property: 'og:title', content: 'Tools Files - File Compression Made Simple' },
        { property: 'og:description', content: 'Quickly compress and format files without losing quality. Reduce file sizes easily with our online tool.' },
        // { property: 'og:image', content: 'http://localhost:3000/og-image.jpg' },
        { property: 'og:url', content: 'http://localhost:3000' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tools Files' },
        { name: 'twitter:description', content: 'Quickly compress and format files without losing quality. Reduce file sizes easily with our online tool.' },
        { name: 'twitter:image', content: 'http://localhost:3000/twitter-image.jpg' },
    ],
});
</script>

<template>
    <Hero />
    <Services />
    <About />
    <Features />
    <Reviews />
</template>
