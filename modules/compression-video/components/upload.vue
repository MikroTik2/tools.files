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
        </Container>
    </section>
</template>
