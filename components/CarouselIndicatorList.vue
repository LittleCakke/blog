<template>
    <div
        class="absolute bottom-6 left-[55%] z-[1] flex gap-x-4">
        <label
            v-for="(_, i) in itemList"
            :key="i"
            :for="`slide-${i}`"
            class="h-[10px]
            bg-[#DFDFDF]
            inline-flex
            rounded
            cursor-pointer
            relative
            overflow-hidden
            before:content-['']
            before:w-full
            before:h-full
            before:bg-black
            before:rounded
            before:absolute
            before:left-0
            before:top-0
            before:origin-left
            before:transition-[transform]
            before:duration-[600ms]"
            :class="getDynamicClass(radioValue === i)"
        />
    </div>
</template>

<script setup lang="ts">
    defineProps({
        itemList: {
            type: Object as () => any[],
            required: true
        },

        radioValue: {
            type: Object as () => number,
            required: true
        }
    });

    const getDynamicClass = (isActive: boolean) =>
    {
        if (!isActive)
            return "w-[30px] before:scale-x-0";
        return "w-[50px] before:scale-x-100 before:animate-[process_10s_linear]";
    }
</script>

<style>
    @keyframes process {
        0% {
            width: 0;
            transform: scaleX(0);
        }

        100% {
            width: 100%;
            transform: scaleX(1);
        }
    }
</style>
