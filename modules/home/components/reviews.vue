<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Reviews data
const reviews = [
    {
        name: 'Jack',
        username: '@jack',
        body: 'I\'ve never seen anything like this before. It\'s amazing. I love it.',
        img: '../../..//public/gif1.gif',
    },
    {
        name: 'Jill',
        username: '@jill',
        body: 'I don\'t know what to say. I\'m speechless. This is amazing.',
        img: '../../..//public/gif2.gif',
    },
    {
        name: 'John',
        username: '@john',
        body: 'I\'m at a loss for words. This is amazing. I love it.',
        img: '../../..//public/gif3.gif',
    },
    {
        name: 'Jane',
        username: '@jane',
        body: 'I\'m at a loss for words. This is amazing. I love it.',
        img: '../../..//public/gif4.gif',
    },
    {
        name: 'Jenny',
        username: '@jenny',
        body: 'I\'m at a loss for words. This is amazing. I love it.',
        img: '../../..//public/gif5.gif',
    },
    {
        name: 'James',
        username: '@james',
        body: 'I\'m at a loss for words. This is amazing. I love it.',
        img: '../../..//public/gif3.gif',
    },

];

// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2));
const secondRow = ref(reviews.slice(reviews.length / 2));
</script>

<template>
    <section id="features" class="relative py-12" aria-labelledby="features">
        <Container>
            <div
                class="relative h-[430px] w-full overflow-hidden rounded-xl border bg-white shadow-lg dark:bg-background"
            >
                <div class="absolute left-1/2 top-8 z-20 mt-4 -translate-x-1/2 rounded-3xl border bg-white/30 p-3 backdrop-blur-md">
                    <img class="w-[70px] h-[70px]" src="../../../assets/icons/logo.png" alt="logo">
                </div>

                <div class="absolute inset-0 z-10 mt-20 flex flex-col items-center justify-center px-4 text-center">
                    <h3 class="mb-2 text-4xl font-bold sm:text-5xl">
                        What are you waiting for?
                    </h3>
                    <p class="m-4 text-base sm:text-lg">
                        Get started and start building awesome UI
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
                            v-for="review in firstRow"
                            :key="review.username"
                            :img="review.img"
                            :name="review.name"
                            :username="review.username"
                            :body="review.body"
                        />
                    </Marquee>

                    <!-- Second Marquee (reverse) -->
                    <Marquee
                        reverse
                        pause-on-hover
                        class="[--duration:20s]"
                        style="transform: translateY(-11.5rem) rotate(-16deg);"
                    >
                        <CardReview
                            v-for="review in secondRow"
                            :key="review.username"
                            :img="review.img"
                            :name="review.name"
                            :username="review.username"
                            :body="review.body"
                        />
                    </Marquee>

                    <!-- First Marquee -->
                    <Marquee
                        pause-on-hover
                        class="[--duration:20s]"
                        style="transform: translateY(-11.5rem) rotate(-16deg);"
                    >
                        <CardReview
                            v-for="review in firstRow"
                            :key="review.username"
                            :img="review.img"
                            :name="review.name"
                            :username="review.username"
                            :body="review.body"
                        />
                    </Marquee>

                    <!-- Second Marquee (reverse) -->
                    <Marquee
                        reverse
                        pause-on-hover
                        class="[--duration:20s]"
                        style="transform: translateY(-11.5rem) rotate(-16deg);"
                    >
                        <CardReview
                            v-for="review in secondRow"
                            :key="review.username"
                            :img="review.img"
                            :name="review.name"
                            :username="review.username"
                            :body="review.body"
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
