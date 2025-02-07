<script setup lang="ts">
interface IProps {
    title: string;
    description: string;
};

const props = defineProps<IProps>();
</script>

<template>
    <h2 class="text-4xl font-bold">
        {{ props.title }}
    </h2>
    <p class="my-4 text-base text-muted-foreground">
        {{ props.description }}
    </p>
</template>
