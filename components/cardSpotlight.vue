<script setup lang="ts">
import { cn } from '@/lib/utils';
import { computed, onMounted, ref } from 'vue';

interface IProps {
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
    class?: string;
    slotClass?: string;
}

const props = withDefaults(defineProps<IProps>(), {
    gradientSize: 200,
    gradientColor: '#262626',
    gradientOpacity: 0.8,
    class: '',
    slotClass: '',
});

const mouseX = ref(-props.gradientSize * 10);
const mouseY = ref(-props.gradientSize * 10);

function handleMouseMove(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    mouseX.value = e.clientX - rect.left;
    mouseY.value = e.clientY - rect.top;
};

function handleMouseLeave() {
    mouseX.value = -props.gradientSize * 10;
    mouseY.value = -props.gradientSize * 10;
};

const backgroundStyle = computed(() => {
    return `radial-gradient(
               circle at ${mouseX.value}px ${mouseY.value}px,
               ${props.gradientColor} 0%,
               rgba(0, 0, 0, 0) 70%
          )`;
});

onMounted(() => {
    mouseX.value = -props.gradientSize * 10;
    mouseY.value = -props.gradientSize * 10;
});
</script>

<template>
    <Card
        class="group relative flex size-full bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white h-screen max-h-64 max-w-96 flex-col items-start justify-start overflow-hidden rounded-2xl border border-zinc-200 px-6 py-8 shadow-xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50" :class="[$props.class]"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
    >
        <div :class="cn('relative z-10', props.slotClass)">
            <slot />
        </div>

        <div
            class="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            :style="{
                background: backgroundStyle,
                opacity: gradientOpacity,
            }"
        />
    </Card>
</template>
