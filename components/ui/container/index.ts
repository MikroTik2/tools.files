import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as Container } from '@/components/ui/container/container.vue';

export const containerVariants = cva('mx-auto 2xl:w-4/5 w-11/12', {
    variants: {
        size: {
            default: 'max-w-[1200px]',
            md: 'max-w-[1460px]',
        },
    },

    defaultVariants: {
        size: 'default',
    },
});

export type ContainerVariants = VariantProps<typeof containerVariants>;
