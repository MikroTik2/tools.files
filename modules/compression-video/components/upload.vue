<script setup lang="ts">
interface Step {
    text: string; // Display text for the step
    afterText?: string; // Text to show after step completion
    async?: boolean; // If true, waits for external trigger to proceed
    duration?: number; // Duration in ms before proceeding (default: 2000)
    action?: () => void; // Function to execute when step is active
}
// State management
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

// Async loading steps configuration
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

// Event handlers
function handleStateChange(_state: number) {
    // Handle Loading State Change
}

function handleComplete() {
    // Handle Loading Complete
}
/* eslint-disable no-alert */
function handleAsyncLoadingComplete() {
    alert('Async file compression complete, redirecting...');
    uiState.isAfterTextLoading = false;
}

async function startAsyncLoading() {
    // Reset states
    uiState.isAfterTextLoading = true;
    loaderStates.isProcessing = true;
    loaderStates.isCompressing = true;
    loaderStates.isVerifyingData = true;

    function simulateAsyncStep(stateProp: keyof typeof loaderStates, delay: number) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                loaderStates[stateProp] = false;
                resolve();
            }, delay);
        });
    }

    try {
        await simulateAsyncStep('isProcessing', 2000);
        await simulateAsyncStep('isCompressing', 3000);
        await simulateAsyncStep('isVerifyingData', 2500);
    }

    catch (error) {
        uiState.isAfterTextLoading = false;
    }
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

            <FileUpload accept="video/*" :max-size="10" class="rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800">
                <FileUploadGrid />
            </FileUpload>
            <MultiStepLoader
                :steps="asyncLoadingSteps"
                :loading="uiState.isAfterTextLoading"
                @state-change="handleStateChange"
                @complete="handleComplete"
                @close="uiState.closeAsync"
            />
            <InteractiveButton
                class="my-4"
                :disabled="uiState.isAfterTextLoading"
                @click="startAsyncLoading"
            />
        </Container>
    </section>
</template>
