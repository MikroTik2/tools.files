<script setup lang="ts">
import {
    PATTERN_BACKGROUND_DIRECTION,
    PATTERN_BACKGROUND_SPEED,
    PATTERN_BACKGROUND_VARIANT,
} from '@/components/ui/pattern-background';
</script>

<template>
    <section id="about" class="relative" aria-labelledby="about">
        <Container>
            <div class="my-16 mt-24">
                <Card class="max-w-full dark:border-zinc-800 dark:bg-zinc-900/50 overflow-hidden">
                    <PatternBackground
                        :animate="true"
                        :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
                        :variant="PATTERN_BACKGROUND_VARIANT.Dot"
                        :speed="PATTERN_BACKGROUND_SPEED.Slow"
                        class="flex min-h-[420px] w-full items-center justify-center"
                    >
                        <CardContent>
                            <div class="text-center">
                                <h3 class="relative z-20 py-4">
                                    <span class="text-4xl">✨</span>
                                    <span class="text-4xl bg-gradient-to-b bg-clip-text from-neutral-200 to-neutral-500 font-bold text-transparent">About Our Service</span>
                                </h3>
                                <p>
                                    Our service provides a convenient and fast way to compress
                                    <ClientOnly>
                                        <FlipWords
                                            :words="['image', 'video', 'audio']"
                                            :duration="2000"
                                        />
                                    </ClientOnly>files without quality loss. <br> Using powerful <span class="text-neutral-100 z-10 relative">FFmpeg-based compression</span> algorithms, we ensure minimal file size <br> while preserving their original resolution and clarity.
                                </p>
                            </div>
                        </CardContent>
                    </PatternBackground>
                </Card>
            </div>
        </Container>
    </section>
</template>
