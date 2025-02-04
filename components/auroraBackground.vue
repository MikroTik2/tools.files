<script setup lang="ts">
import { cn } from '@/lib/utils';

interface IAuroraBackgroundProps {
    radialGradient?: boolean;
    class?: string;
    tag?: 'div' | 'section';
};

const props = withDefaults(defineProps<IAuroraBackgroundProps>(), {
    radialGradient: true,
});
</script>

<template>
    <component
        :is="props.tag"
        v-bind="props"
        id="hero"
        aria-labelledby="hero-heading"
        :class="cn('relative flex flex-col h-[100vh] items-center justify-center text-slate-950 transition-bg', props.class)"
    >
        <div class="absolute inset-0 overflow-hidden">
            <div
                :class="cn(
                    'filter blur-[10px] invert dark:invert-0 pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform;',
                    '[--white-gradient:repeating-linear-gradient(100deg,#fff_0%,#fff_7%,#00000000_10%,#00000000_12%,#fff_16%)]',
                    '[--dark-gradient:repeating-linear-gradient(100deg,#000_0%,#000_7%,#00000000_10%,#00000000_12%,#000_16%)]',
                    '[--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)]',
                    '[background-image:var(--white-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%]',
                    'aurora-background-gradient-after',
                    'aurora-gradient-animation',
                    props.radialGradient
                        && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,#00000000_70%)]`,
                )"
            />
        </div>

        <slot />
    </component>
</template>
