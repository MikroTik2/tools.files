<script lang="ts" setup>
import { cn } from '@/lib/utils';

interface IProps {
    class?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
}

const props = withDefaults(
    defineProps<IProps>(),
    {
        pauseOnHover: false,
        vertical: false,
        repeat: 4,
    },
);
</script>

<template>
    <div
        :class="
            cn(
                'group marquee flex overflow-hidden p-3 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
                vertical ? 'flex-col' : 'flex-row',
                props.class,
            )
        "
    >
        <div
            v-for="index in repeat"
            :key="index"
            :class="
                cn(
                    'flex shrink-0 justify-around [gap:var(--gap)]',
                    vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
                    pauseOnHover ? 'group-hover:[animation-play-state:paused]' : '',
                )
            "
            :style="{
                animationDirection: reverse ? 'reverse' : 'normal',
            }"
        >
            <slot />
        </div>
    </div>
</template>
