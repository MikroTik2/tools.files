<script setup lang="ts">
import type { Component } from 'vue';
import { LucideClock, LucideDatabase, LucideFile, LucideFolder, LucideScissors, LucideSettings } from '#components';
import { ref } from 'vue';

interface ICard {
    title: string;
    description: string;
    icon: Component;
};

const features = ref<ICard[]>([
    {
        icon: LucideFile,
        title: 'Support for Multiple Formats',
        description: 'Compress files of various formats, including images, videos, audio, and documents.',
    },
    {
        icon: LucideScissors,
        title: 'Efficient Compression',
        description: 'Use advanced algorithms to reduce file sizes without significant quality loss.',
    },
    {
        icon: LucideFolder,
        title: 'Batch Processing',
        description: 'Compress multiple files at once, saving time and resources.',
    },
    {
        icon: LucideClock,
        title: 'Fast Execution',
        description: 'High-speed file processing without delays and waiting.',
    },
    {
        icon: LucideDatabase,
        title: 'Space Optimization',
        description: 'Optimize storage by freeing up valuable disk space.',
    },
    {
        icon: LucideSettings,
        title: 'Flexible Settings',
        description: 'Customize compression parameters to balance quality and file size.',
    },
]);
</script>

<template>
    <section id="features" class="relative">
        <Container>
            <div class="flex flex-col items-center justify-center">
                <h2 class="pb-12 text-5xl font-semibold">
                    Features
                </h2>

                <div class="flex flex-row flex-wrap items-center justify-center gap-6">
                    <ClientOnly>
                        <CardSpotlight
                            v-for="element in features"
                            :key="element.title"
                        >
                            <component :is="element.icon" class="mb-2" />

                            <h3 class="relative z-50 mb-4 text-xl font-bold dark:text-white">
                                {{ element.title }}
                            </h3>
                            <p class="relative z-50 mb-4 text-base font-normal text-zinc-500">
                                {{ element.description }}
                            </p>
                        </CardSpotlight>
                    </ClientOnly>
                </div>
            </div>
        </Container>
    </section>
</template>
