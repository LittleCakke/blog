<template>
    <nuxt-layout name="base">
        <div
            class="w-full py-8 flex flex-col gap-y-4">
            <div
                class="w-full flex items-center gap-x-8">
                <pinia-svg />

                <span
                    class="text-2xl font-bold clip">
                    Pinia
                </span>

                <h1
                    class="grow text-2xl font-bold">
                    符合直觉的Vue.js状态管理库
                </h1>
            </div>

            <span
                class="text-gray-600">
                类型安全、可扩展性以及模块化设计。甚至让你忘记正在使用的是一个状态库。
            </span>

            <div
                class="w-full flex justify-end gap-x-4">
                <nuxt-link
                    to="https://pinia.vuejs.org"
                    target="_blank"
                    class="bg-[#FFD859] text-black rounded-full px-4 py-2">
                    Pinia官网
                </nuxt-link>

                <nuxt-link
                    to="https://pinia.vuejs.org/zh"
                    target="_blank"
                    class="text-[#FFD859] border border-[#FFD859] rounded-full px-4 py-2">
                    Pinia中文官网
                </nuxt-link>
            </div>
        </div>

        <nuxt-layout name="home-content">
            <template #main>
                <ol
                    class="flex flex-col gap-y-8 w-full">
                    <li
                        class="flex flex-col gap-y-4 w-full">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            0. 说明
                        </h1>

                        <p
                            class="text-gray-800">
                            本文档相关说明均基于Nuxt，点击查看
                            <nuxt-link
                                to="/article/nuxt"
                                class="text-[rgb(0,220,130)] hover:underline">
                                Nuxt文档
                            </nuxt-link>
                        </p>
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            1. 安装Pinia依赖
                        </h1>

                        <code-block
                            code="npm install pinia @pinia/nuxt"
                            code-type="shell"
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            2. 将Pinia整合到Nuxt中
                        </h1>

                        <code-block
                            :code="addModules"
                            code-type="typescript"
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            3. 创建一个状态管理器
                        </h1>

                        <code-block
                            :code="createStore"
                            code-type="typescript"
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            4. 将定义好的状态管理器添加到插件中
                        </h1>

                        <code-block
                            :code="addPlugins"
                            code-type="typescript"
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            5. 在Vue文件中使用
                        </h1>

                        <code-block
                            code="const { $systemStore } = useNuxtApp();"
                            code-type="typescript"
                        />
                    </li>
                </ol>
            </template>

            <template #aside>
                <ol
                    class="sticky top-4 w-full p-4 flex flex-col gap-y-4 border border-gray-200 rounded-md">
                    <li
                        class="text-gray-600 text-sm hover:text-[rgba(255,216,89,.7)] duration-200 cursor-pointer">
                        0. 说明
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-[rgba(255,216,89,.7)] duration-200 cursor-pointer">
                        1. 安装Pinia依赖
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-[rgba(255,216,89,.7)] duration-200 cursor-pointer">
                        2. 将Pinia整合到Nuxt中
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-[rgba(255,216,89,.7)] duration-200 cursor-pointer">
                        3. 创建一个状态管理器
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-[rgba(255,216,89,.7)] duration-200 cursor-pointer">
                        4. 将定义好的状态管理器添加到插件中
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-[rgba(255,216,89,.7)] duration-200 cursor-pointer">
                        5. 在Vue文件中使用
                    </li>
                </ol>
            </template>
        </nuxt-layout>
    </nuxt-layout>
</template>

<script setup lang="ts">
    import PiniaSvg from "~/assets/svg/PiniaSvg.vue";
    import CodeBlock from "~/components/CodeBlock.vue";

    let addModules = ref(`export default defineNuxtConfig({
    // ...
    modules: [
        "@pinia/nuxt"
    ]
});`);

    let createStore = ref(`export const useSystemStore = defineStore("system", {
    state()
    {
        return {
            // ...
        }
    },

    actions: {
        // ...
    },

    // 如安装了pinia-plugin-persistedstate持久化插件，可添加如下属性
    persist: true
});`);

    let addPlugins = ref(`import { useSystemStore } from "~/stores/system";

export default defineNuxtPlugin(() =>
{
    return {
        provide: {
            // 其他状态管理器同理
            systemStore: useSystemStore()
        }
    }
});`);
</script>

<style scoped>
    .clip {
        background: -webkit-linear-gradient(78deg, #F7D336 30%, #8AE99C);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
