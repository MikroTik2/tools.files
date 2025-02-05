<script setup lang="ts">
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface IProps {
    title: string;
    href: string;
    description: string;
};

const components: IProps[] = [
    {
        title: 'Alert Dialog',
        href: '/',
        description:
            'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Hover Card',
        href: '/',
        description:
            'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Progress',
        href: '/',
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
        title: 'Scroll-area',
        href: '/',
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Tabs',
        href: '/docs/components/tabs',
        description:
            'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
        title: 'Tooltip',
        href: '/docs/components/tooltip',
        description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
];
</script>

<template>
    <header id="header" class="sticky top-0 z-40 transition-colors duration-500 bg-background/80 backdrop-blur-lg">
        <Container>
            <div class="w-full p-2">
                <div class="grid grid-cols-2 lg:grid-cols-3">
                    <div class="flex items-center max-lg:hidden">
                        <a href="/" title="Navigation home" class="flex">
                            <img class="w-7" src="/assets/icons/logo.png" alt="Logo Icon">
                            <span class="ml-3 self-center font-bold">Tools Files</span>
                        </a>
                    </div>

                    <NavigationMenu class="lg:flex hidden">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
                                        <li class="row-span-3">
                                            <NavigationMenuLink as-child>
                                                <a
                                                    class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <img src="https://www.radix-vue.com/logo.svg" class="h-6 w-6">
                                                    <div class="mb-2 mt-4 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p class="text-sm leading-tight text-muted-foreground">
                                                        Beautifully designed components built with Radix UI and
                                                        Tailwind CSS.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>

                                        <li>
                                            <NavigationMenuLink as-child>
                                                <a
                                                    href="/docs/introduction"
                                                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                    <div class="text-sm font-medium leading-none">Introduction</div>
                                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Re-usable components built using Radix UI and Tailwind CSS.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink as-child>
                                                <a
                                                    href="/docs/installation"
                                                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                    <div class="text-sm font-medium leading-none">Installation</div>
                                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        How to install dependencies and structure your app.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink as-child>
                                                <a
                                                    href="/docs/typography"
                                                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                    <div class="text-sm font-medium leading-none">Typography</div>
                                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Styles for headings, paragraphs, lists...etc
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        <li v-for="component in components" :key="component.title">
                                            <NavigationMenuLink as-child>
                                                <a
                                                    :href="component.href"
                                                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                    <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        {{ component.description }}
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NuxtLink :class="cn(navigationMenuTriggerStyle())" to="/">
                                    Documentation
                                </NuxtLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div class="lg:hidden flex items-center">
                        <Button variant="ghost" size="icon">
                            <LucideMenu class="!size-[18px]" />
                        </Button>
                    </div>

                    <div class="flex items-center justify-end">
                        <Button variant="ghost" size="icon">
                            <LucideGithub class="!size-[18px]" />
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    </header>
</template>
