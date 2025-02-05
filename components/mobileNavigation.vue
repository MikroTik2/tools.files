<script setup lang="ts">
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';

const accordionItems = [
    {
        value: 'item-1',
        title: 'Services',
        content: [
            {
                title: 'File Compression',
                description: 'Reduce the size of images, videos, and documents without losing quality using advanced compression algorithms.',
                href: '/',
            },
            {
                title: 'GIF Formatting',
                description: 'Edit, resize, crop, and optimize GIF animations to make them lighter, smoother, and more efficient for web and social media.',
                href: '/',
            },
            {
                title: 'Video Conversion',
                description: 'Convert videos to different formats, extract audio, or create GIF animations from video clips.',
                href: '/',
            },
        ],
    },
];
</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <slot />
        </SheetTrigger>
        <SheetContent class="flex overflow-y-auto flex-col justify-between" side="left">
            <div>
                <SheetHeader class="text-start">
                    <SheetTrigger as-child>
                        <NuxtLink to="/" class="text-lg font-semibold text-foreground">
                            <img class="w-7" src="../assets/icons/logo.png" alt="Logo Icon">
                        </NuxtLink>
                    </SheetTrigger>
                </SheetHeader>

                <div class="relative flex flex-col h-full overflow-hidden py-6 text-sm">
                    <Accordion type="multiple" class="w-full" collapsible>
                        <AccordionItem
                            v-for="item in accordionItems"
                            :key="item.value"
                            class="border-none"
                            :value="item.value"
                        >
                            <AccordionTrigger
                                class="!w-full !py-2 !text-left !no-underline"
                            >
                                {{ item.title }}
                            </AccordionTrigger>
                            <AccordionContent>
                                <SheetTrigger v-for="(element, i) in item.content" :key="i" as-child>
                                    <NuxtLink
                                        class="mb-1 block w-full gap-2 rounded-md px-3 py-2 transition-all hover:bg-muted"
                                        :to="element.href"
                                    >
                                        <div class="font-semibold">
                                            {{ element.title }}
                                        </div>
                                        <div
                                            class="text-sm text-muted-foreground line-clamp-2"
                                        >
                                            {{ element.description }}
                                        </div>
                                    </NuxtLink>
                                </SheetTrigger>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <SheetTrigger as-child>
                        <NuxtLink
                            to="/"
                            class="flex text-sm font-medium h-[36px] items-center"
                        >
                            Features
                        </NuxtLink>
                    </SheetTrigger>

                    <SheetTrigger as-child>
                        <NuxtLink
                            to="/"
                            class="flex text-sm font-medium h-[36px] items-center"
                        >
                            About
                        </NuxtLink>
                    </SheetTrigger>
                </div>
            </div>
        </SheetContent>
    </Sheet>
</template>
