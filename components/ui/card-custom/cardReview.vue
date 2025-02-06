<script lang="ts" setup>
interface Props {
    img?: string;
    name?: string;
    username?: string;
    body?: string;
}

const props = defineProps<Props>();
</script>

<template>
    <div
        class="relative w-64 h-44 cursor-pointer overflow-hidden rounded-xl border border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
    >
        <div class="flex flex-row h-full items-center gap-2">
            <div class="flex relative h-auto flex-col">
                <img loading="lazy" class="w-[300px] object-cover h-[240px]" :src="props.img" alt="gif">
            </div>
        </div>
    </div>
</template>
