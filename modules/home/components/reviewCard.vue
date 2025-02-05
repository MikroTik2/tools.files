<script lang="ts" setup>
interface Props {
    img: string;
    name: string;
    username: string;
    body: string;
}

defineProps<Props>();
</script>

<template>
    <figure
        class="relative w-64 h-44 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
    >
        <div class="flex flex-row items-center gap-2">
            <!-- <NuxtImg
                :src="img"
                class="rounded-full"
                width="32"
                height="32"
                alt=""
            /> -->
            <div class="flex flex-col">
                <span class="text-sm font-medium dark:text-white">
                    {{ name }}
                </span>
                <p class="text-xs font-medium dark:text-white/40">
                    {{ username }}
                </p>
            </div>
        </div>
        <blockquote class="mt-2 text-sm">
            {{ body }}
        </blockquote>
    </figure>
</template>
