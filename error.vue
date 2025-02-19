<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
    error: Object as () => NuxtError,
});
</script>

<template>
    <div class="relative flex flex-col h-[100vh] items-center justify-center">
        <div class="flex h-full items-center justify-center">
            <h3 class="scroll-m-20 border-r px-4 py-3 text-2xl font-semibold">
                {{ props.error?.statusCode }}
            </h3>
            <p class="scroll-m-20 px-4">
                {{ props.error?.statusCode === 500 ? 'Internal Server Error. Please try again later.' : 'This page could not be found.' }}
            </p>
        </div>
    </div>
</template>
