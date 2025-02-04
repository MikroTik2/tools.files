<script setup lang="ts">
import { Motion } from 'motion-v';
// import AuroraBackground from '@/components/ui/AuroraBackground.vue';
</script>

<template>
    <AuroraBackground>
        <Motion
            as="div"
            :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }"
            :in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
            :transition="{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }"
            class="relative flex flex-col items-center justify-center gap-4 px-4"
        >
            <div class="text-center text-3xl font-bold dark:text-white md:text-7xl">
                АНАТОЛИЙ ЧУБАЙС ПРЕДСТАВЛЯЕТ
            </div>
            <div class="py-4 text-base font-extralight dark:text-neutral-200 md:text-4xl">
                гифки и файлы.
            </div>
            <button
                class="w-fit rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
            >
                пупупу
            </button>
        </Motion>
    </AuroraBackground>
</template>
