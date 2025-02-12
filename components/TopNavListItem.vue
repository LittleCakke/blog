<template>
    <li
        class="h-full flex items-center">
        <nuxt-link
            class="relative
            py-2
            px-6
            hover:bg-gray-100
            duration-200
            rounded
            flex
            items-center
            gap-x-4
            group
            after:content-['']
            after:w-full
            after:absolute
            after:border-2
            after:rounded-full
            after:bg-black
            after:left-0
            hover:after:bottom-0
            hover:after:opacity-100
            after:duration-200
            after:-bottom-4
            after:opacity-0"
            :href="to">
            <icon
                :name="icon"
                class="text-gray-600
                group-hover:text-gray-950
                transition-colors
                duration-200"
            />

            <span
                class="text-gray-600
                group-hover:text-gray-950
                transition-colors
                duration-200">
                <slot />
            </span>
        </nuxt-link>
    </li>
</template>

<script setup lang="ts">
    import Icon from "~/components/Icon.vue";
    import type { IconName } from "~/type";

    defineProps({
        to: {
            type: String,
            required: true
        },

        icon: {
            type: String as () => IconName,
            required: true
        }
    });
</script>
