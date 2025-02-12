<template>
    <nuxt-layout
        name="base">
        <div
            class="py-8 flex flex-col gap-y-4">
            <div
                class="flex gap-x-8">
                <div
                    class="size-20 flex items-center justify-center">
                    <nuxt-svg />
                </div>

                <div
                    class="flex flex-col gap-y-4">
                    <h1
                        class="text-2xl font-bold">
                        直观的
                        <span
                            class="text-[rgb(0,220,130)]">
                            Vue框架
                        </span>
                    </h1>

                    <span
                        class="text-gray-600">
                        Nuxt是一个开源框架，它使Web开发直观而强大。自信地创建高性能、生产级的全栈Web应用程序和网站。
                    </span>
                </div>
            </div>

            <div
                class="w-full flex justify-end gap-x-4">
                <nuxt-link
                    class="px-4 py-2 text-gray-900 rounded-md bg-[rgb(0,220,130)] hover:bg-[rgb(0,193,106)] duration-200"
                    to="https://nuxt.com"
                    target="_blank">
                    Nuxt官网
                </nuxt-link>

                <nuxt-link
                    class="px-4 py-2 text-[rgb(0,220,130)] rounded-md border border-[rgb(0,220,130)] hover:text-[rgb(0,193,106)] hover:border-[rgb(0,193,106)] duration-200"
                    to="https://nuxt.com.cn"
                    target="_blank">
                    Nuxt中文官网
                </nuxt-link>
            </div>
        </div>

        <nuxt-layout
            name="home-content">
            <template #main>
                <ol class="flex flex-col gap-y-8">
                    <li
                        class="flex flex-col">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            1. 利用命令行初始化一个Nuxt项目
                        </h1>
                        <code-block
                            code-type="shell"
                            :code="initProject"
                        />
                    </li>

                    <li
                        class="flex flex-col">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            2. 设置启动端口
                        </h1>
                        <code-block
                            code-type="typescript"
                            :code="portConfig"
                        />
                    </li>

                    <li
                        class="flex flex-col">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            3. 配置代理
                        </h1>
                        <code-block
                            :code="proxyConfig"
                            code-type="typescript"
                        />
                    </li>

                    <li
                        class="flex flex-col">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                           4. 开启页面路由
                        </h1>
                        <code-block
                            :code="openPage"
                            code-type="typescript"
                        />
                    </li>
                </ol>
            </template>

            <template #aside>
                <ol
                    class="sticky top-4 w-full p-4 flex flex-col gap-y-4 border border-gray-200 rounded-md">
                    <li
                        class="text-gray-600 text-sm hover:text-[rgba(0,220,130,.7)] duration-200 cursor-pointer">
                        1. 利用命令行初始化一个Nuxt项目
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-[rgba(0,220,130,.7)] duration-200 cursor-pointer">
                        2. 设置启动端口
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-[rgba(0,220,130,.7)] duration-200 cursor-pointer">
                        3. 配置代理
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-[rgba(0,220,130,.7)] duration-200 cursor-pointer">
                        4. 开启页面路由
                    </li>
                </ol>
            </template>
        </nuxt-layout>
    </nuxt-layout>
</template>

<script setup lang="ts">
    import NuxtSvg from "~/assets/svg/NuxtSvg.vue";
    import CodeBlock from "~/components/CodeBlock.vue";

    let initProject = ref("npm init vite@latest");

    let portConfig = ref(`export default defineNuxtConfig({
    // ...
    devServer: {
        port: 12345
    }
});`);

    let proxyConfig = ref(`export default defineNuxtConfig({
    // ...
    nitro: {
        devProxy: {
            "/api": {
                target: "http(s)://{targetHost}:{targetPort}",
                changeOrigin: true
            }
        }
    }
});`);

    let openPage = ref(`export default defineNuxtConfig({
    // ...
    pages: true
});`);
</script>
