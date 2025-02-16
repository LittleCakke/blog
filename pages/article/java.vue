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
    </nuxt-layout>
</template>

<script setup lang="ts">

</script>
