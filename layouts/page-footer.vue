<template>
    <footer
        class="w-screen bg-transparent mt-4">
        <div
            class="w-screen max-w-7xl mx-auto py-4 px-16 rounded-t-lg bg-gray-50 flex justify-between">
            <div
                class="flex flex-col gap-y-4">
                <div
                    class="flex gap-x-4 items-center">
                    <img
                        class="size-[50px] rounded-full border border-gray-200"
                        :src="Avatar"
                        alt="avatar"
                    />

                    <span
                        class="font-mono font-extrabold text-2xl italic text-gray-800">
                                Little Cake
                            </span>
                </div>

                <p
                    class="flex gap-x-2">
                            <span
                                class="text-gray-600 text-lg font-semibold">
                                欢迎来到
                            </span>

                    <span
                        class="font-mono text-gray-800 text-xl font-bold italic">
                                Little Cake
                            </span>

                    <span
                        class="text-gray-600 text-lg font-semibold">
                                的个人网站
                            </span>
                </p>
            </div>

            <div
                class="flex gap-x-32">
                <ul
                    class="flex flex-col gap-y-2 items-end">
                    <li
                        class="text-gray-800 font-semibold">
                        快捷导航
                    </li>

                    <li>
                        <nuxt-link
                            class="text-gray-400 hover:text-gray-600 duration-200"
                            to="/">
                            首页
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link
                            class="text-gray-400 hover:text-gray-600 duration-200"
                            to="/article/nuxt">
                            Nuxt
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link
                            class="text-gray-400 hover:text-gray-600 duration-200"
                            to="/article/axios">
                            Axios
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link
                            class="text-gray-400 hover:text-gray-600 duration-200"
                            to="/article/kotlin">
                            Kotlin
                        </nuxt-link>
                    </li>
                </ul>

                <ul
                    class="flex flex-col gap-y-2 items-end">
                    <li
                        class="text-gray-800 font-semibold">
                        支持
                    </li>

                    <li>
                        <nuxt-link
                            class="text-gray-400 hover:text-gray-600 duration-200"
                            to="/contact-me">
                            联系我
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link
                            class="text-gray-400 hover:text-gray-600 duration-200"
                            to="/about">
                            关于
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import Avatar from "~/assets/images/avatar.jpg";
</script>