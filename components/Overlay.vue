<template>
    <div
        ref="overlayRef"
        @click="show = false"
        :style="{ opacity }"
        class="hidden fixed top-0 left-0 z-[9999] bg-black/30 w-screen h-screen">
    </div>
</template>

<script setup lang="ts">
    let overlayRef = ref<HTMLDivElement>();
    let opacity = ref(0);
    let timer = ref<NodeJS.Timeout>();

    let show = defineModel({
        type: Boolean,
        required: true,
        default: false
    });

    watch(() => show.value, (v) =>
    {
        if (!v)
        {
            timer.value = setInterval(() =>
            {
                if (opacity.value <= 0)
                {
                    opacity.value = 0;
                    clearInterval(timer.value);
                    overlayRef.value?.classList.add("hidden");
                    return;
                }
                opacity.value -= 0.01;
            }, 1);
        }
        else
        {
            overlayRef.value?.classList.remove("hidden");
            timer.value = setInterval(() =>
            {
                if (opacity.value >= 1)
                {
                    opacity.value = 1;
                    clearInterval(timer.value);
                    return;
                }
                opacity.value += 0.01;
            }, 1);
        }
    });
</script>
