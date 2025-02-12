<template>
    <li
        class="w-full h-[200px]">
        <nuxt-link
            :href="to"
            class="size-full flex gap-x-8 p-4">
            <div
                class="h-full aspect-square bg-transparent flex items-center justify-center p-2">
                <slot name="image" />
            </div>

            <div
                class="grow h-full flex flex-col gap-y-4">
                <h1
                    v-if="title"
                    class="text-gray-800 font-bold text-2xl">
                    {{ title }}
                </h1>

                <h1
                    v-else
                    class="text-gray-800 font-bold text-2xl">
                    <slot name="title" />
                </h1>

                <span
                    v-if="content"
                    class="line-clamp-2">
                    {{ content }}
                </span>

                <span
                    v-else
                    class="line-clamp-2">
                    <slot name="content" />
                </span>

                <p
                    class="w-full flex justify-end">
                    <span
                        :class="subjectColor"
                        class="hover:underline
                        duration-100
                        cursor-pointer">
                        详情
                    </span>
                </p>
            </div>
        </nuxt-link>
    </li>
</template>

<script setup lang="ts">
    defineProps({
        to: {
            type: String,
            required: true
        },

        title: {
            type: String
        },

        content: {
            type: String
        },

        subjectColor: {
            type: String
        }
    });
</script>
