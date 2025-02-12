<template>
    <nuxt-layout
        name="base">
        <div
            class="w-full py-8 flex flex-col gap-y-4">
            <div
                class="w-full flex items-center gap-x-8">
                <tailwindcss-svg class="max-w-[200px]" />
                <h1
                    class="grow text-2xl font-bold">
                    只需HTML即可快速构建现代网站
                </h1>
            </div>

            <span>
                一个工具优先的CSS框架，包含
                <span
                    class="font-mono text-sky-500">
                    flex
                </span>，
                <span
                    class="font-mono text-sky-500">
                    pt-4
                </span>，
                <span
                    class="font-mono text-sky-500">
                    text-center
                </span>和
                <span
                    class="font-mono text-sky-500">
                    rotate-90
                </span>等类，
                可以直接在你的标记中构建任何设计。
            </span>

            <div
                class="w-full flex justify-end gap-x-4">
                <nuxt-link
                    class="py-2 px-4 bg-black text-white rounded-full"
                    to="https://tailwindcss.com"
                    target="_blank">
                    TailwindCSS官网
                </nuxt-link>

                <nuxt-link
                    class="py-2 px-4 border border-black text-black rounded-full"
                    to="https://www.tailwindcss.cn"
                    target="_blank">
                    TailwindCSS中文官网
                </nuxt-link>
            </div>
        </div>

        <nuxt-layout
            name="home-content">
            <template #main>
                <ol
                    class="flex flex-col gap-y-8">
                    <li
                        class="flex flex-col gap-y-4">
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
                            1. 安装TailwindCSS依赖
                        </h1>

                        <code-block
                            :code="installDep"
                            code-type="shell"
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            2. 将TailwindCSS整合到Nuxt中
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
                            3. 创建
                            <span class="line-code-block">/assets/css/main.css</span>
                            并写入如下代码
                        </h1>

                        <code-block
                            :code="mainCSS"
                            code-type="css"
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            4.
                            <span class="line-code-block">app.vue</span>
                            引入
                            <span class="line-code-block">main.css</span>。大功告成！
                        </h1>

                        <code-block
                            :code="importCSS"
                            code-type="typescript"
                        />
                    </li>
                </ol>
            </template>

            <template #aside>
                <ol
                    class="sticky top-4 w-full p-4 flex flex-col gap-y-4 border border-gray-200 rounded-md">
                    <li
                        class="text-gray-500 text-sm hover:text-gray-800 duration-200 cursor-pointer">
                        0. 说明
                    </li>

                    <li
                        class="text-gray-500 text-sm hover:text-gray-800 duration-200 cursor-pointer">
                        1. 安装TailwindCSS依赖
                    </li>

                    <li
                        class="text-gray-500 text-sm hover:text-gray-800 duration-200 cursor-pointer">
                        2. 将TailwindCSS整合到Nuxt中
                    </li>

                    <li
                        class="text-gray-500 text-sm hover:text-gray-800 duration-200 cursor-pointer">
                        3. 创建/assets/css/main.css并写入代码
                    </li>

                    <li
                        class="text-gray-500 text-sm hover:text-gray-800 duration-200 cursor-pointer">
                        4. app.vue引入main.css。大功告成！
                    </li>
                </ol>
            </template>
        </nuxt-layout>
    </nuxt-layout>
</template>

<script setup lang="ts">
    import CodeBlock from "~/components/CodeBlock.vue";
    import TailwindcssSvg from "~/assets/svg/TailwindcssSvg.vue";

    let installDep = ref(`npm install tailwindcss @tailwindcss/vite -D`);

    let addModules = ref(`import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    // ...
    vite: {
        plugins: [
            // ...
            tailwindcss()
        ]
    }
});`);

    let mainCSS = ref(`@import "tailwindcss";`);

    let importCSS = ref(`import "~/assets/css/main.css";`);
</script>