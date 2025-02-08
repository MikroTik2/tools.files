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
            <div class="flex flex-col h-full items-center justify-center">
                <ParticleImage
                    image-src="../../..//public/particle.png"
                    :responsive-width="true"
                />
            </div>

            <h1 class="text-center text-3xl font-bold md:text-7xl dark:text-white">
                File Compression Made Simple.
            </h1>
            <p class="py-4 text-center text-base font-extralight md:text-4xl dark:text-neutral-200">
                Quickly reduce file sizes without losing quality.
            </p>

            <div class="flex gap-3 items-center">
                <Button id="upload">
                    <span>Upload files</span>
                </Button>
                <Button id="read" variant="outline">
                    <span>Read More</span>
                </Button>
            </div>
        </Motion>
    </AuroraBackground>
</template>
