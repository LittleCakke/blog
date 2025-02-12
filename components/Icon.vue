<template>
    <component
        :is="icons[name]"
        :size="size"
        :color="color"
        :strock-width="strokeWidth"
    />
</template>

<script setup lang="ts">
    import BubbleChat from "~/components/icon/BubbleChat.vue";
    import Copy from "~/components/icon/Copy.vue";
    import DashboardSquare from "~/components/icon/DashboardSquare.vue";
    import Github from "~/components/icon/Github.vue";
    import Home from "~/components/icon/Home.vue";
    import Info from "~/components/icon/Info.vue";
    import type { IconName } from "~/type";

    const icons = {
        "bubble-chat": BubbleChat,
        "copy": Copy,
        "dashboard-square": DashboardSquare,
        "github": Github,
        "home": Home,
        "info": Info
    }

    defineProps({
        name: {
            type: String as () => IconName,
            required: true
        },

        size: {
            type: String,
            default: "24"
        },

        color: {
            type: String,
            default: "#000000"
        },

        strokeWidth: {
            type: String,
            default: "1.5"
        }
    });
</script>
