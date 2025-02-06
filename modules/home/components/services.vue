<script setup lang="ts">
import type { Component } from 'vue';
import { LucideFileArchive, LucideFileImage, LucideFilePen, LucideFileVideo } from '#components';
import { buttonVariants } from '@/components/ui/button/index';
import { cn } from '@/lib/utils';
import { ref } from 'vue';

interface ICard {
    title: string;
    description: string;
    link: string;
    disabled: boolean;
    icon: Component;
};

const features = ref<ICard[]>([
    {
        icon: LucideFileVideo,
        title: 'Compress video',
        link: '/compression-video',
        disabled: false,
        description: 'Reduce the size of videos, and documents without losing quality using advanced compression algorithms.',
    },
    {
        icon: LucideFilePen,
        title: 'Compress PDF',
        link: '/',
        disabled: true,
        description: 'Use this online PDF compressor to reduce the file size of your PDF documents. Make PDFs smaller to send them via e-mail or upload.',
    },
    {
        icon: LucideFileImage,
        title: 'Compress PNG',
        link: '/',
        disabled: true,
        description: 'Reduce image file size by using PNG compression - online & for free. Make images smaller by converting to PNG.',
    },
    {
        icon: LucideFileImage,
        title: 'Compress JPG',
        link: '/',
        disabled: true,
        description: 'This image resizer uses JPG compression to make image files smaller. Convert to JPG and profit from this JPG compression online.',
    },
    {
        icon: LucideFileImage,
        title: 'Compress images',
        link: '/',
        disabled: true,
        description: 'Reduce the file size of your images with online image compression. Compress image files quickly without software installation.',
    },
    {
        icon: LucideFileArchive,
        title: 'Create ZIP file',
        link: '/',
        disabled: true,
        description: 'With this online ZIP converter you can compress your files and create a ZIP archive. Reduce file size and save bandwidth.',
    },
]);
</script>

<template>
    <section id="services" class="relative">
        <Container>
            <div class="flex flex-col items-center justify-center">
                <h2 class="pb-12 text-5xl font-semibold">
                    Services
                </h2>
            </div>

            <div class="flex flex-row flex-wrap items-center justify-center gap-6">
                <CardSpotlight
                    v-for="element in features"
                    :key="element.title"
                    class="!max-h-[inherit] sm:!max-h-64 sm:!h-screen h-[inherit]"
                >
                    <component :is="element.icon" class="mb-2" />

                    <h3 class="relative z-50 mb-4 text-xl font-bold dark:text-white">
                        {{ element.title }}
                    </h3>
                    <p class="relative z-50 mb-4 text-base font-normal text-zinc-500">
                        {{ element.description }}
                    </p>

                    <NuxtLink :to="element.link" class="z-50 cursor-pointer" :class="cn(buttonVariants(), { 'pointer-events-none opacity-50': element.disabled })">
                        {{ element.disabled ? 'Coming' : 'Get Started' }}
                    </NuxtLink>
                </CardSpotlight>
            </div>
        </Container>
    </section>
</template>
