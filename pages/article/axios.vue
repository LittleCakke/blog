<template>
    <nuxt-layout
        name="base">
        <div
            class="w-full flex items-start gap-x-8 py-8">
            <img
                class="max-w-[200px]"
                :src="AxiosLogo"
                alt="axios-logo"
            />

            <div
                class="grow flex flex-col gap-y-4">
                <h1
                    class="text-2xl font-bold">
                    Axios是一个基于Promise的网络请求库，可以用于浏览器和Node.js
                </h1>

                <span
                    class="text-gray-600">
                    Axios 使用简单，包尺寸小且提供了已于扩展的接口
                </span>
            </div>
        </div>

        <div
            class="w-full flex justify-end gap-x-4">
            <nuxt-link
                class="bg-[rgb(90,41,228)] text-white rounded-md px-10 py-3 text-[1.2rem] hover:shadow-[0_1rem_3rem_#5B29E45D] duration-200"
                target="_blank"
                to="https://axios-http.com">
                Axios官网
            </nuxt-link>

            <nuxt-link
                class="px-10 py-3 rounded-md border border-[rgb(90,41,228)] text-[rgb(90,41,228)] hover:shadow-[0_1rem_3rem_rgba(0,0,0,.1)] duration-200"
                target="_blank"
                to="https://www.axios-http.cn">
                Axios中文官网
            </nuxt-link>
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
                            1. 安装Axios
                        </h1>

                        <code-block
                            code="npm install axios"
                            code-type="sh"
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            2. 创建<span class="line-code-block">utils/req.ts</span>
                        </h1>

                        <code-block
                            :code="createReq"
                            code-type="typescript"
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            3. 定义<span class="line-code-block">plugins/user.ts</span>插件
                        </h1>

                        <code-block
                            :code="defineApiPlugin"
                            code-type="typescript"
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            4. 在Vue文件中使用
                        </h1>

                        <code-block
                            :code="useInNuxt"
                            code-type="typescript"
                        />
                    </li>
                </ol>
            </template>

            <template #aside>
                <ol
                    class="sticky top-4 w-full p-4 flex flex-col gap-y-4 border border-gray-200 rounded-md">
                    <li
                        class="text-gray-500 text-sm hover:text-[rgba(90,41,228,.7)] duration-200 cursor-pointer">
                        0. 说明
                    </li>

                    <li
                        class="text-gray-500 text-sm hover:text-[rgba(90,41,228,.7)] duration-200 cursor-pointer">
                        1. 安装Axios
                    </li>

                    <li
                        class="text-gray-500 text-sm hover:text-[rgba(90,41,228,.7)] duration-200 cursor-pointer">
                        2. 创建<span class="line-code-block">utils/req.ts</span>
                    </li>

                    <li
                        class="text-gray-500 text-sm hover:text-[rgba(90,41,228,.7)] duration-200 cursor-pointer">
                        3. 定义<span class="line-code-block">plugins/user.ts</span>插件
                    </li>

                    <li
                        class="text-gray-500 text-sm hover:text-[rgba(90,41,228,.7)] duration-200 cursor-pointer">
                        4. 在Vue文件中使用
                    </li>
                </ol>
            </template>
        </nuxt-layout>
    </nuxt-layout>
</template>

<script setup lang="ts">
    import AxiosLogo from "~/assets/images/axios-logo.png";
    import CodeBlock from "~/components/CodeBlock.vue";

    let createReq = ref(`import axios from "axios";

const req = axios.create({
    baseURL: "...",
    timeout: 5000,
    // 其他配置...
});

req.intercepters.request.use(
    config =>
    {
        // ...
        return config;
    },
    error => Promise.reject(error)
);

req.intercepters.response.use(
    res => res.data,
    error => Promise.reject(error)
);

export default req;`);

    let defineApiPlugin = ref(`import req from "~/utils/req";

const userApi = {
    login: (user) => req({
        url: "/user/login",
        method: "POST",
        data: user
    })
}

export default defineNuxtPlugin({
    return {
        provide: { userApi }
    }
});`);

    let useInNuxt = ref(`const { $userApi } = useNuxtApp();

onMounted(async () =>
{
    let result = await $userApi.login({
        username: "...",
        password: "..."
    });
    console.log(result);
});`);
</script>