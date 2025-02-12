<template>
    <div
        class="relative group">
        <div
            class="absolute top-4 right-2 h-0 z-[1000] group-hover:h-10 overflow-hidden duration-75">
            <div
                class="size-full bg-black/5 flex items-center gap-x-2">
                <span
                    class="text-gray-200 font-mono">
                    {{ codeType }}
                </span>

                <icon
                    name="copy"
                    class="text-gray-200 cursor-pointer"
                />
            </div>
        </div>
        <pre><code :class="`language-${codeType} line-numbers`">{{ code }}</code></pre>
    </div>
</template>

<script setup lang="ts">
    import Icon from "~/components/Icon.vue";
    import Prism from "prismjs";
    import type { CodeType } from "~/type";

    defineProps({
        codeType: {
            type: String as () => CodeType,
            required: true
        },

        code: {
            type: String,
            required: true
        }
    });

    nextTick(() =>
    {
        Prism.highlightAll();
    });
</script>
