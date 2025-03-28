<template>
    <section
        class="w-screen
        h-screen
        flex
        flex-col
        sm:flex-row
        gap-8
        items-center
        justify-center">
        <div
            class="flex flex-col gap-y-4 duration-700"
            :class="isFirst
                ? 'translate-y-2/3 translate-x-0 sm:translate-x-2/3 sm:translate-y-0 opacity-0'
                : 'translate-y-0 sm:translate-x-0 opacity-100'">
            <span
                class="w-full text-blue-400 text-2xl text-start">
                欢迎来到
            </span>

            <span
                class="w-full text-blue-600 text-4xl font-bold italic font-mono">
                Little Cake
            </span>

            <span
                class="w-full text-blue-400 text-2xl text-end">
                的个人网站
            </span>
        </div>

        <i
            class="hidden sm:inline h-[150px] w-[2px] rounded-full bg-gray-200"
        />

        <nuxt-link
            to="/page/home"
            class="w-[150px]
            h-[50px]
            flex
            items-center
            relative
            rounded-md
            bg-blue-500
            duration-700
            group
            overflow-hidden
            z-10"
            :class="isFirst
                ? '-translate-y-2/3 translate-x-0 sm:-translate-x-2/3 sm:translate-y-0 opacity-0'
                : 'translate-y-0 sm:translate-x-0 opacity-100'
            ">
            <span
                class="w-full
                absolute
                left-1/2
                -translate-x-1/3
                group-hover:left-[200%]
                duration-300
                text-white">
                让我们开始吧
            </span>

            <span
                class="w-full
                absolute
                -left-[200%]
                -translate-x-1/4
                group-hover:left-1/2
                duration-300
                text-white
                font-mono
                italic
                font-bold
                text-lg">
                Let's Go!
            </span>
        </nuxt-link>
    </section>
</template>

<script setup lang="ts">
    let isFirst = ref(true);

    onMounted(() =>
    {
        isFirst.value = false;
    });
</script>
