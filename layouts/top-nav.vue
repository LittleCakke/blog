<template>
    <header
        :class="$systemStore.bodyScrollTop != 0 ? 'shadow-2xl' : ''"
        class="w-screen h-[75px] border-b border-b-gray-200 duration-200">
        <div
            class="w-full h-full max-w-7xl mx-auto hidden lg:flex items-center justify-between">
            <slot />
        </div>

        <div
            class="flex lg:hidden h-full items-center pl-4">
            <icon
                @click="overlayShow = true"
                size="28"
                name="dashboard-square"
                class="text-gray-600 cursor-pointer"
            />
        </div>
    </header>

    <overlay v-model="overlayShow" />
    <sidebar v-model="overlayShow" />
</template>

<script setup lang="ts">
    import Icon from "~/components/Icon.vue";
    import Overlay from "~/components/Overlay.vue";
    import Sidebar from "~/components/Sidebar.vue";

    const { $systemStore } = useNuxtApp();

    let overlayShow = ref(false);
</script>
