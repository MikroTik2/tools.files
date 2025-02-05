<script setup lang="ts">
import type { Component } from 'vue';
import { LucideActivity, LucideCode, LucideWind } from '#components';
import { buttonVariants } from '@/components/ui/button/index';
import { cn } from '@/lib/utils';
import { ref } from 'vue';

interface ICard {
    title: string;
    description: string;
    icon: Component;
};

const features = ref<ICard[]>([
    {
        icon: LucideCode,
        title: 'File Compression',
        description: 'Reduce the size of images, videos, and documents without losing quality using advanced compression algorithms.',
    },
    {
        icon: LucideWind,
        title: 'GIF Formatting',
        description: 'Edit, resize, crop, and optimize GIF animations to make them lighter, smoother, and more efficient for web and social media.',
    },
    {
        icon: LucideActivity,
        title: 'Video Conversion',
        description: 'Convert videos to different formats, extract audio, or create GIF animations from video clips.',
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

                    <NuxtLink class="z-50 cursor-pointer" :class="cn(buttonVariants())">
                        Get Started
                    </NuxtLink>
                </CardSpotlight>
            </div>
        </Container>
    </section>
</template>
