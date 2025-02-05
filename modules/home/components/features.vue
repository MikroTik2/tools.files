<script setup lang="ts">
import type { Component } from 'vue';
import { LucideActivity, LucideCode, LucideMoon, LucideSliders, LucideWind, LucideZap } from '#components';
import { ref } from 'vue';

interface ICard {
    title: string;
    description: string;
    icon: Component;
};

const features = ref<ICard[]>([
    {
        icon: LucideCode,
        title: 'Vue and Nuxt Native',
        description: 'Build apps that integrate seamlessly with Vue.js and Nuxt.js, leveraging their full potential for a modern development experience.',
    },
    {
        icon: LucideSliders,
        title: 'Customizable Components',
        description: 'Every component is designed to be flexible and adaptable to your design system, allowing complete customization with ease.',
    },
    {
        icon: LucideWind,
        title: 'Tailwind CSS Support',
        description: 'Utility-first styling made easy with built-in Tailwind CSS support, speeding up your development process.',
    },
    {
        icon: LucideMoon,
        title: 'Dark Mode Ready',
        description: 'Enable beautiful dark mode designs effortlessly, with fully adaptive components that respond to user preferences.',
    },
    {
        icon: LucideZap,
        title: 'Performant and Lightweight',
        description: 'Optimized for speed, Inspira UI’s components ensure fast loading times and a smooth user experience across all devices.',
    },
    {
        icon: LucideActivity,
        title: 'Built-in Motion and Animations',
        description: 'Add life to your UI with smooth transitions powered by motion-v, no need for external animation libraries.',
    },
]);
</script>

<template>
    <section id="features" class="relative" aria-labelledby="features">
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
