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
                    @click="copyToClipboard"
                    :name="isCopied ? 'check' : 'copy'"
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

    let props = defineProps({
        codeType: {
            type: String as () => CodeType,
            required: true
        },

        code: {
            type: String,
            required: true
        }
    });

    let { code } = toRefs(props);
    let isCopied = ref(false);

    nextTick(() =>
    {
        Prism.highlightAll();
    });

    const copyToClipboard = () =>
    {
        if (!isCopied.value)
        {
            navigator.clipboard.writeText(`${code.value}`);

            message.success("已复制到剪贴板");

            isCopied.value = true;

            setTimeout(() =>
            {
                isCopied.value = false;
            }, 5000);
        }
    }
</script>
