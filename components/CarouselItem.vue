<template>
    <div
        class="flex
        items-center
        w-full
        h-[350px]
        pl-[30px]
        absolute
        overflow-hidden">
        <div
            class="size-[260px]
            rounded-[20px]
            overflow-hidden
            shrink-0
            shadow-xl">
            <img
                class="size-full
                object-contain
                duration-[600ms]"
                :class="radioValue === index ? 'opacity-100' : 'opacity-0'"
                alt=""
                :src="item.img"
            />
        </div>

        <div
            class="flex
            flex-col
            justify-center
            h-full
            w-full
            p-[0_30px_0_35px]
            relative
            duration-[600ms]"
            :class="radioValue === index ? 'opacity-100 left-0' : 'opacity-0 left-[50px]'">
            <span
                class="text-[30px] font-[700] mb-5">
                {{ item.title }}
            </span>

            <span
                class="text-[17px]
                text-[#555]
                text-justify
                mb-[25px]">
                {{ item.content }}
            </span>

            <div
                class="flex w-full justify-end">
                <nuxt-link
                    href="#"
                    class="py-4
                    px-5
                    bg-black
                    text-white
                    rounded-[50px]
                    font-semibold">
                    查看详情
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { CarouselItem } from "~/type";

    defineProps({
        item: {
            type: Object as () => CarouselItem,
            required: true
        },

        index: {
            type: Number,
            required: true
        },

        radioValue: {
            type: Number,
            required: true
        }
    });
</script>
