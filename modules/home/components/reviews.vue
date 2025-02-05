<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Reviews data
const reviews = [
    {
        img: '../../..//public/gif1.gif',
    },
    {
        img: '../../..//public/gif2.gif',
    },
    {
        img: '../../..//public/gif3.gif',
    },
    {
        img: '../../..//public/gif4.gif',
    },
    {
        img: '../../..//public/gif5.gif',
    },
    {
        img: '../../..//public/gif3.gif',
    },
    {
        img: '../../..//public/gif6.gif',
    },
    {
        img: '../../..//public/gif7.gif',
    },
    {
        img: '../../..//public/gif8.gif',
    },
    {
        img: '../../..//public/gif9.gif',
    },
];

// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2));
const secondRow = ref(reviews.slice(reviews.length / 2));
</script>

<template>
    <section id="reviews" class="relative py-12">
        <Container>
            <div
                class="relative h-[430px] w-full overflow-hidden rounded-xl border bg-white shadow-lg dark:bg-background"
            >
                <div class="absolute left-1/2 top-8 z-20 mt-4 -translate-x-1/2 rounded-3xl border bg-white/30 p-3 backdrop-blur-md">
                    <img width="70" height="70" class="object-contain" src="../../../assets/icons/logo.png" alt="logo">
                </div>

                <div class="absolute inset-0 z-10 mt-20 flex flex-col items-center justify-center px-4 text-center">
                    <h3 class="mb-2 text-4xl font-bold sm:text-5xl">
                        Convert your video to GIF!
                    </h3>
                    <p class="m-4 text-base sm:text-lg">
                        Upload your video and get a high-quality GIF in seconds.
                    </p>
                    <a :class="cn(buttonVariants())" href="/">
                        Get Started
                    </a>
                </div>

                <div class="absolute inset-0 overflow-hidden">
                    <!-- First Marquee -->
                    <Marquee
                        pause-on-hover
                        class="[--duration:20s]"
                        style="transform: translateY(-11.5rem) rotate(-16deg);"
                    >
                        <CardReview
                            v-for="(review, i) in firstRow"
                            :key="i"
                            :img="review.img"
                        />
                    </Marquee>

                    <!-- Second Marquee (reverse) -->
                    <Marquee
                        reverse
                        pause-on-hover
                        class="[--duration:50s]"
                        style="transform: translateY(1rem) rotate(-16deg);"
                    >
                        <CardReview
                            v-for="(review, i) in secondRow"
                            :key="i"
                            :img="review.img"
                        />
                    </Marquee>

                    <!-- First Marquee -->
                    <Marquee
                        pause-on-hover
                        class="[--duration:50s]"
                        style="transform: translateY(13.5rem) rotate(-16deg);"
                    >
                        <CardReview
                            v-for="(review, i) in firstRow"
                            :key="i"
                            :img="review.img"
                        />
                    </Marquee>

                    <!-- Second Marquee (reverse) -->
                    <Marquee
                        reverse
                        pause-on-hover
                        class="[--duration:20s]"
                        style="transform: translateY(26rem) rotate(-16deg);"
                    >
                        <CardReview
                            v-for="(review, i) in secondRow"
                            :key="i"
                            :img="review.img"
                        />
                    </Marquee>

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-background" />
                </div>

                <!-- Left Gradient -->
                <div
                    class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
                />

                <!-- Right Gradient -->
                <div
                    class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
                />
            </div>
        </Container>
    </section>
</template>
