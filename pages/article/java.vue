<template>
    <nuxt-layout name="base">
        <div
            class="w-full h-[300px] bg-[#04536F] flex">
            <div
                class="w-3/5 flex flex-col justify-center gap-y-8 pl-16">
                <h1
                    class="flex
                    font-bold
                    text-3xl
                    text-white
                    relative
                    after:absolute
                    after:-bottom-4
                    after:w-[30px]
                    after:h-[7px]
                    after:bg-[#F29111]">
                    Java
                </h1>

                <p
                    class="text-white max-w-3/4">
                    Oracle Java 是第一大编程语言和开发平台。它有助于企业降低成本、
                    缩短开发周期、推动创新以及改善应用程序服务。
                    Java现在仍是企业和开发人员的首选开发平台。
                </p>
            </div>

            <div
                class="grow h-full bg-white flex items-center justify-center">
                <nuxt-link
                    class="bg-[#04536F]
                    hover:bg-[#053242]
                    duration-200
                    text-white
                    px-4
                    py-2"
                    to="https://www.java.com/zh-CN/"
                    target="_blank">
                    Java官网
                </nuxt-link>
            </div>
        </div>

        <nuxt-layout name="home-content">
            <template #main>
                <ol
                    class="flex flex-col gap-y-8">
                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            1. 下载JDK
                        </h1>

                        <span
                            class="flex flex-col gap-y-2">
                            <nuxt-link
                                class="text-blue-500 hover:text-blue-300 hover:underline duration-200"
                                to="https://www.oracle.com/cn/java/technologies/downloads/"
                                target="_blank">
                                👉下载地址
                            </nuxt-link>

                            <span
                                class="text-gray-600">
                                点击链接前往官网，选择对应的版本与平台，下载。
                            </span>
                        </span>
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            2. 将Java添加至Path环境变量（以Windows 10为例）
                        </h1>

                        <span
                            class="text-gray-600">
                            新建系统环境变量<span class="line-code-block">JAVA_HOME</span>，
                            值为JDK根目录，在环境变量Path中添加<span class="line-code-block">%JAVA_HOME%/bin</span>
                        </span>
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            3. 测试是否安装成功
                        </h1>

                        <span
                            class="text-gray-600">
                            按下<span class="line-code-block">Win</span>+<span class="line-code-block">R</span>后，
                            输入<span class="line-code-block">cmd</span>，输入如下内容并敲下回车
                        </span>

                        <code-block
                            code="java -version"
                            code-type="sh"
                        />

                        <span
                            class="text-gray-600">
                            如正确输出Java版本信息，则说明安装成功
                        </span>

                        <code-block
                            :code="result"
                            code-type=""
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            4. 创建一个Java文件，并写入如下代码
                        </h1>

                        <code-block
                            :code="main"
                            code-type="java"
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            5. 保存，编译
                        </h1>

                        <code-block
                            code="javac Main.class"
                            code-type="sh"
                        />
                    </li>

                    <li
                        class="flex flex-col gap-y-4">
                        <h1
                            class="text-xl font-semibold text-gray-700 hover:underline">
                            6. 运行
                        </h1>

                        <code-block
                            code="java Main"
                            code-type="sh"
                        />

                        <span
                            class="text-gray-600">
                            结果
                        </span>

                        <code-block
                            code="Hello, World."
                            code-type=""
                        />
                    </li>
                </ol>
            </template>

            <template #aside>
                <ol
                    class="sticky top-4 w-full p-4 flex flex-col gap-y-4 border border-gray-200 rounded-md">
                    <li
                        class="text-gray-600 text-sm hover:text-gray-800 duration-200 cursor-pointer">
                        1. 下载JDK
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-gray-800 duration-200 cursor-pointer">
                        2. 将Java添加至Path环境变量（以Windows 10为例）
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-gray-800 duration-200 cursor-pointer">
                        3. 测试是否安装成功
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-gray-800 duration-200 cursor-pointer">
                        4. 创建一个Java文件，并写入如下代码
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-gray-800 duration-200 cursor-pointer">
                        5. 保存，编译
                    </li>

                    <li
                        class="text-gray-600 text-sm hover:text-gray-800 duration-200 cursor-pointer">
                        6. 运行
                    </li>
                </ol>
            </template>
        </nuxt-layout>
    </nuxt-layout>
</template>

<script setup lang="ts">
    import CodeBlock from "~/components/CodeBlock.vue";

    let main = ref(`public class Main
{
    public static void main(String[] args)
    {
        System.out.println("Hello, World.");
    }
}`);

    let result = ref(`java version "23" 2024-09-17
Java(TM) SE Runtime Environment (build 23+37-2369)
Java HotSpot(TM) 64-Bit Server VM (build 23+37-2369, mixed mode, sharing)`);
</script>
