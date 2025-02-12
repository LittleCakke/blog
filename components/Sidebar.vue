<template>
    <aside
        :class="show ? 'w-[60vw]' : 'w-0'"
        class="fixed
        top-0
        left-0
        z-[10000]
        bg-white
        max-w-[300px]
        h-screen
        overflow-hidden
        duration-300">
        <main
            class="w-full h-full p-4">
            <header>
                <div
                    class="flex items-center gap-x-4">
                    <img
                        class="size-[60px] rounded-full border border-gray-200"
                        :src="Avatar"
                        alt="avatar"
                    />

                    <span
                        class="text-xl font-bold text-gray-600">
                        Little Cake
                    </span>
                </div>
            </header>
        </main>
    </aside>
</template>

<script setup lang="ts">
    import Avatar from "~/assets/images/avatar.jpg";

    let show = defineModel({
        type: Boolean,
        required: true,
        default: false
    });
</script>
