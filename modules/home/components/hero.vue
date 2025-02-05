<script setup lang="ts">
import { Motion } from 'motion-v';
</script>

<template>
    <AuroraBackground tag="section">
        <Motion
            as="div"
            class="relative flex flex-col text-white items-center justify-center gap-4 px-4"
            :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }"
            :in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
            :transition="{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }"
        >
            <NuxtLink to="/" class="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium hover:cursor-pointer">
                <LucideRocket class="!h-[16px] !w-[16px]" />

                <Separator orientation="vertical" class="shrink-0 bg-border w-px mx-2 h-4 dark:bg-gray-600" />

                <span class="underline-offset-4 hover:underline">Get Started</span>
                <LucideArrowRight class="!h-[16px] !w-[16px] ml-1" />
            </NuxtLink>

            <h1 class="text-center text-3xl font-bold md:text-7xl dark:text-white">
                File Compression Made Simple.
            </h1>
            <p class="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
                Quickly reduce file sizes without losing quality.
            </p>

            <div class="flex gap-3 items-center">
                <Button>
                    <span>Upload files</span>
                </Button>
                <Button variant="outline">
                    <span>Read More</span>
                </Button>
            </div>
        </Motion>
    </AuroraBackground>
</template>
