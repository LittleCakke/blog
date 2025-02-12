<template>
    <div
        class="relative group">
        <img
            :src="Avatar"
            alt="avatar"
            class="size-10
            relative
            border
            border-gray-400
            rounded-full
            origin-top-right
            group-hover:scale-[2]
            group-hover:animate-[verticalGroove_1s_linear_infinite]
            duration-200
            z-[999]"
        />

        <div
            class="z-[998] absolute top-10 -right-[200%] border opacity-0 group-hover:opacity-100 transition-[opacity_height] overflow-hidden group-hover:h-auto border-gray-200 rounded bg-white w-[600%] h-0 shadow-lg">
            <div
                class="w-full p-4 mt-8 flex flex-col">
                <span
                    class="w-full pb-2 text-center text-lg font-bold text-gray-600 border-b border-gray-200">
                    Little Cake
                </span>

                <ul>
                    <li>
                        <nuxt-link
                            href="https://github.com/littlecakke"
                            target="_blank"
                            class="flex
                            items-center
                            gap-x-4
                            p-2
                            rounded-md
                            cursor-pointer
                            hover:bg-[#1F2328]
                            duration-200
                            group/item">
                            <icon
                                class="text-[#1F2328]
                                group-hover/item:text-white
                                duration-200"
                                name="github"
                            />

                            <span
                                class="text-[#1F2328]
                                group-hover/item:text-white
                                duration-200">
                                Github
                            </span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Avatar from "~/assets/images/avatar.jpg";
    import Icon from "~/components/Icon.vue";
</script>

<style>
    @keyframes verticalGroove {
        0%, 100% {
            transform: translateY(5px);
        }

        50% {
            transform: translateY(-5px);
        }
    }
</style>
