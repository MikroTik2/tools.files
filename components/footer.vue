<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button/index';
import { cn } from '@/lib/utils';

interface Developer {
    name: string;
    username: string;
    bio: string;
    website?: string;
    linkedin?: string;
    github?: string;
}

const developers = ref<Developer[]>([
    {
        name: 'Artur',
        username: 'MikroTik2',
        bio: 'Вітаю ( ͝° ͜ʖ͡°)',
        website: 'https://artur-dotsent.vercel.app',
        linkedin: 'https://www.linkedin.com/in/artur-dotsent-0a3a722a1/',
        github: 'https://github.com/MikroTik2',
    },
    {
        name: 'Vlad Didyk',
        username: 'vladislav2251',
        bio: 'Front-end Web Developer | Vue | Svelte | NodeJS | TypeScript | JavaScript',
        website: 'https://vladdidyk.vercel.app',
        linkedin: 'https://www.linkedin.com/in/vlad-didyk-2842a8269/',
        github: 'https://github.com/vladislav2251',
    },
]);
</script>

<template>
    <footer id="footer" class="py-6 text-muted-foreground md:px-8 md:py-0">
        <Container>
            <div class="flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row">
                <span class="text-sm">Copyright © 2024 - 2025</span>
                <span class="flex-1" />

                <Dialog>
                    <DialogTrigger as-child>
                        <Button variant="ghost">
                            <LucideGlobe />
                            <span>Developers</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent class="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Developers</DialogTitle>
                            <DialogDescription>
                                These are the developers who worked on this project
                            </DialogDescription>
                        </DialogHeader>
                        <div class="space-y-4">
                            <Card v-for="(dev, index) in developers" :key="index" class="p-4">
                                <h3 class="text-lg font-semibold">
                                    {{ dev.name }} (@{{ dev.username }})
                                </h3>
                                <p class="text-sm text-gray-600">
                                    {{ dev.bio }}
                                </p>

                                <Separator class="my-2" />

                                <div class="mt-2 flex gap-4">
                                    <a v-if="dev.website" :href="dev.website" target="_blank" rel="noopener noreferrer" :class="cn(buttonVariants({ size: 'icon', variant: 'outline' }))">
                                        <span class="hidden">website</span>
                                        <LucideGlobe />
                                    </a>
                                    <a v-if="dev.linkedin" :href="dev.linkedin" target="_blank" rel="noopener noreferrer" :class="cn(buttonVariants({ size: 'icon', variant: 'outline' }))">
                                        <span class="hidden">LinkedIn</span>
                                        <LucideLinkedin />
                                    </a>
                                    <a v-if="dev.linkedin" :href="dev.github" target="_blank" rel="noopener noreferrer" :class="cn(buttonVariants({ size: 'icon', variant: 'outline' }))">
                                        <span class="hidden">GitHub</span>
                                        <LucideGithub />
                                    </a>
                                </div>
                            </Card>
                        </div>
                    </DialogContent>
                </Dialog>

                <a href="https://github.com/MikroTik2/tools.files" :class="cn(buttonVariants({ variant: 'ghost' }))" rel="noopener noreferrer" target="_blank">
                    <LucideGithub />
                    <span>GitHub</span>
                </a>
            </div>
        </Container>
    </footer>
</template>
