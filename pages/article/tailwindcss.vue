<template>
    <nuxt-layout
        name="base">
        <div
            class="w-full py-8 flex flex-col gap-y-4">
            <div
                class="w-full flex items-center gap-x-8">
                <tailwindcss-svg class="max-w-[200px]" />
                <h1
                    class="grow text-2xl font-bold">
                    只需HTML即可快速构建现代网站
                </h1>
            </div>

            <span>
                一个工具优先的CSS框架，包含
                <span
                    class="font-mono text-sky-500">
                    flex
                </span>，
                <span
                    class="font-mono text-sky-500">
                    pt-4
                </span>，
                <span
                    class="font-mono text-sky-500">
                    text-center
                </span>和
                <span
                    class="font-mono text-sky-500">
                    rotate-90
                </span>等类，
                可以直接在你的标记中构建任何设计。
            </span>

            <div
                class="w-full flex justify-end gap-x-4">
                <nuxt-link
                    class="py-2 px-4 bg-black text-white rounded-full"
                    to="https://tailwindcss.com">
                    TailwindCSS官网
                </nuxt-link>

                <nuxt-link
                    class="py-2 px-4 border border-black text-black rounded-full"
                    to="https://www.tailwindcss.cn">
                    TailwindCSS中文官网
                </nuxt-link>
            </div>
        </div>
    </nuxt-layout>
</template>

<script setup lang="ts">
    import TailwindcssSvg from "~/assets/svg/TailwindcssSvg.vue";
</script>