<script setup lang="ts">
import { useToast } from '@/components/ui/toast/use-toast';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import { FileUpload } from '~/components/ui/file-upload';
import { ToastAction } from '~/components/ui/toast';

const { toast } = useToast();

interface Step {
    text: string;
    afterText?: string;
    async?: boolean;
    duration?: number;
    action?: () => void;
}

const baseURL = 'https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm';
const ffmpeg = new FFmpeg();

const fileUploader = ref<InstanceType<typeof FileUpload> | null>(null);
const file = ref<File | null>(null);
const url = ref<string | null>(null);
const originalSize = ref<number>(0);
const compressedSize = ref<number>(0);

const loaderStates = reactive({
    isProcessing: false,
    isCompressing: false,
    isVerifyingData: false,
    isFileCompressing: false,
});

const uiState = reactive({
    isSimpleLoading: false,
    isAfterTextLoading: false,
    closeSimple: () => {
        uiState.isSimpleLoading = false;
    },
    closeAsync: () => {
        uiState.isAfterTextLoading = false;
    },
});

const asyncLoadingSteps = computed<Step[]>(() => [
    {
        text: 'Preparing Algorithm',
        async: loaderStates.isProcessing,
        afterText: 'Algorithm Ready',
    },
    {
        text: 'Starting Compression',
        async: loaderStates.isCompressing,
        afterText: 'Compression Started',
    },
    {
        text: 'Verifying Data Integrity',
        async: loaderStates.isVerifyingData,
        afterText: 'Data Verified',
    },
    {
        text: 'Compressing File',
        async: loaderStates.isFileCompressing,
        afterText: 'File Compressed',
    },
    {
        text: 'Redirecting',
        duration: 1000,
        action: handleAsyncLoadingComplete,
    },
]);

function handleAsyncLoadingComplete() {
    uiState.isAfterTextLoading = false;
    fileUploader.value?.clearFiles();

    toast({
        title: 'Download Ready',
        description: `Your compressed video is ready for download. ${formatBytes(originalSize.value)} → ${formatBytes(compressedSize.value)}`,
        duration: 20000,
        action: h(ToastAction, {
            altText: 'Download',
            as: 'a',
            href: url.value,
            download: `${file.value?.name}`,
        }, {
            default: () => 'Download',
        }),
    });

    file.value = null;
}

function handleFileUpload(event: File[]) {
    if (event.length) {
        file.value = event[0];
        originalSize.value = event[0].size;
    }
}

async function compression() {
    if (!file.value)
        return;

    try {
        uiState.isAfterTextLoading = true;
        loaderStates.isProcessing = true;
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
            workerURL: await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, 'text/javascript'),
        });

        loaderStates.isProcessing = false;
        loaderStates.isCompressing = true;

        await ffmpeg.writeFile(file.value.name, await fetchFile(file.value));

        loaderStates.isCompressing = false;
        loaderStates.isVerifyingData = true;

        await ffmpeg.exec([
            '-i',
            file.value.name,
            '-c:v',
            'libx264',
            '-tag:v',
            'avc1',
            '-movflags',
            'faststart',
            '-crf',
            '30',
            '-preset',
            'superfast',
            '-progress',
            '-',
            '-v',
            '',
            '-y',
            `${file.value.name}.mp4`,
        ]);

        loaderStates.isVerifyingData = false;
        loaderStates.isFileCompressing = true;

        const data = await ffmpeg.readFile(`${file.value.name}.mp4`);
        const blob = new Blob([data], { type: 'video/mp4' });
        url.value = URL.createObjectURL(blob);
        compressedSize.value = blob.size;

        loaderStates.isFileCompressing = false;
        handleAsyncLoadingComplete();
    }
    catch {
        toast({
            variant: 'destructive',
            description: 'An error occurred during compression.',
        });
    }
};

async function startAsyncLoading() {
    if (!file.value) {
        toast({
            variant: 'destructive',
            description: 'Please upload a file to continue',
        });
        return;
    }
    await compression();
}
</script>

<template>
    <section id="upload" class="relative flex flex-col h-[100vh] items-center justify-center">
        <Container>
            <Heading
                title="Compress video"
                description="Reduce video file size with this free and online video compressor. Make videos smaller to send them via e-mail, WhatsApp, other messengers or upload them to YouTube or other video platforms."
            />

            <Separator class="mb-4" />

            <FileUpload
                ref="fileUploader"
                accept="video/*"
                :max-size="100"
                :multiple="false"
                class="rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800"
                @on-change="handleFileUpload"
            >
                <FileUploadGrid />
            </FileUpload>

            <MultiStepLoader
                :steps="asyncLoadingSteps"
                :loading="uiState.isAfterTextLoading"
                @close="uiState.closeAsync"
            />
            <InteractiveButton
                class="my-4"
                :disabled="uiState.isAfterTextLoading"
                @click="startAsyncLoading"
            />
        </Container>

        <Toaster />
    </section>
</template>
