<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button/index';
import { cn } from '@/lib/utils';
</script>

<template>
    <footer id="footer" class="py-6 text-muted-foreground md:px-8 md:py-0">
        <Container>
            <div class="flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row">
                <span class="text-sm">Copyright © 2024 - 2025</span>
                <span class="flex-1" />

                <a href="/" :class="cn(buttonVariants({ variant: 'ghost' }))" rel="noopener noreferrer" target="_blank">
                    <LucideGlobe />
                    <span>Developers</span>
                </a>
                <a href="/" :class="cn(buttonVariants({ variant: 'ghost' }))" rel="noopener noreferrer" target="_blank">
                    <LucideGithub />
                    <span>GitHub</span>
                </a>
            </div>
        </Container>
    </footer>
</template>
