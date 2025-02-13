<template>
    <div
        class="w-full">
        <carousel
            v-model="radioValue"
            :item-list="items"
        />

        <nuxt-layout
            name="home-content">
            <template #main>

                <p
                    id="frontend"
                    class="w-full flex items-center gap-x-4">
                    <span
                        class="px-6 py-2 rounded-md text-gray-600 bg-gray-200">
                        前端
                    </span>

                    <span
                        class="text-gray-600 text-xl origin-left scale-x-70 animate-pulse">
                        &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
                    </span>
                </p>
                <article-list>
                    <article-list-item
                        to="/article/nuxt"
                        subject-color="text-[rgb(0,220,130)]"
                        content="Nuxt是一个开源框架，它使Web开发直观而强大。自信地创建高性能、生产级的全栈Web应用程序和网站。">
                        <template #image>
                            <nuxt-svg />
                        </template>

                        <template #title>
                            <h1
                                class="text-gray-800 font-bold text-2xl">
                                直观的
                                <span
                                    class="text-[rgb(0,220,130)]">
                                    Vue框架
                                </span>
                            </h1>
                        </template>
                    </article-list-item>

                    <article-list-item
                        to="/article/tailwindcss"
                        title="只需HTML即可快速构建现代网站"
                        subject-color="text-sky-500">
                        <template #image>
                            <tailwindcss-svg />
                        </template>

                        <template #content>
                            <span
                                class="line-clamp-2">
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
                        </template>
                    </article-list-item>

                    <article-list-item
                        to="/article/axios"
                        subject-color="text-[rgb(90,41,228)]"
                        title="Axios是一个基于Promise的网络请求库，可以用于浏览器和node.js"
                        content="Axios使用简单，包尺寸小且提供了易于扩展的接口">
                        <template #image>
                            <img
                                src="~/assets/images/axios-logo.png"
                                class="w-full object-contain"
                                alt="axios"
                            />
                        </template>
                    </article-list-item>

                    <article-list-item
                        subject-color="text-[rgb(247,211,54)]"
                        to="/article/pinia"
                        content="类型安全、可扩展性以及模块化设计。甚至让你忘记正在使用的是一个状态库。">
                        <template #image>
                            <div
                                class="w-full flex items-center">
                                <div
                                    class="basis-1/5 aspect-square">
                                    <pinia-svg class="object-contain" />
                                </div>

                                <span
                                    class="grow clip text-2xl font-bold pl-4">
                                    Pinia
                                </span>
                            </div>
                        </template>

                        <template #title>
                            <span
                                class="clip">
                                Pinia
                            </span>
                            <span>
                                符合直觉的Vue.js状态管理库
                            </span>
                        </template>
                    </article-list-item>
                </article-list>

                <p
                    id="backend"
                    class="w-full flex items-center gap-x-4">
                    <span
                        class="px-6 py-2 rounded-md text-gray-600 bg-gray-200">
                        后端
                    </span>

                    <span
                        class="text-gray-600 text-xl origin-left scale-x-70 animate-pulse">
                        &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
                    </span>
                </p>
                <article-list>
                    <article-list-item
                        to="/article/java"
                        title="Java"
                        content="Oracle Java 是第一大变成语言和开发平台。它有助于企业降低成本、缩短开发周期、推动创新以及改善应用程序服务。Java现在仍是企业和开发人员的首选开发平台。"
                        subject-color="text-[#E66E00]">
                        <template #image>
                            <img
                                :src="JavaLogo"
                                alt="java-logo"
                                class="w-full object-contain"
                            />
                        </template>
                    </article-list-item>

                    <article-list-item
                        subject-color="text-[#6C3FD1]"
                        title="简洁、跨平台、有趣"
                        to="/article/kotlin">
                        <template #image>
                            <div
                                class="size-full bg-black flex justify-center items-center">
                                <kotlin-svg />
                            </div>
                        </template>

                        <template #content>
                            Kotlin是一门现代但已成熟的编程语言，旨在让开发人员更幸福快乐。它简洁、安全、可与Java及其他语言互操作，并提供了多种方式在多个平台间复用代码，以实现高效编程。
                        </template>
                    </article-list-item>

                    <article-list-item
                        to="/article/maven"
                        title="欢迎使用 Apache Maven"
                        content="Apache Maven 是一个软件项目管理和理解工具。基于项目对象模型(POM)的概念，Maven可以从一条中心信息管理项目的构建、报告和文档。">
                        <template #image>
                            <img
                                :src="MavenLogo"
                                alt="maven-logo"
                                class="w-full object-contain"
                            />
                        </template>
                    </article-list-item>
                </article-list>
            </template>

            <template #aside>
                <calendar />

                <ul
                    class="sticky top-4 w-full p-4 border border-gray-200 rounded-md">
                    <li
                        class="w-full py-2">
                        <a
                            href="#frontend"
                            class="text-gray-600">
                            前端
                        </a>

                        <ul
                            class="w-full pl-8">
                            <li
                                v-for="i in ['Nuxt', 'Tailwindcss', 'Axios', 'Pinia']"
                                :key="i"
                                class="w-full py-2 text-gray-400">
                                {{ i }}
                            </li>
                        </ul>
                    </li>
                    <li
                        class="w-full py-2">
                        <a
                            href="#backend"
                            class="text-gray-600">
                            后端
                        </a>

                        <ul
                            class="w-full pl-8">
                            <li
                                v-for="i in ['Java', 'Kotlin', 'Maven']"
                                :key="i"
                                class="w-full py-2 text-gray-400">
                                {{ i }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </template>
        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
    import ArticleList from "~/components/ArticleList.vue";
    import ArticleListItem from "~/components/ArticleListItem.vue";
    import Calendar from "~/components/Calendar.vue";
    import Carousel from "~/components/Carousel.vue";
    import JavaLogo from "~/assets/images/java-logo.png";
    import KotlinSvg from "assets/svg/KotlinSvg.vue";
    import LolisCry from "~/assets/images/大哭.png";
    import LolisHappy from "~/assets/images/快乐到模糊.png";
    import LolisLike from "~/assets/images/点赞.png";
    import LolisLoveYou from "~/assets/images/爱你.png";
    import LolisProud from "~/assets/images/神气.png";
    import { LoremIpsum } from "lorem-ipsum";
    import MavenLogo from "~/assets/images/maven-logo.png";
    import NuxtSvg from "assets/svg/NuxtSvg.vue";
    import PiniaSvg from "assets/svg/PiniaSvg.vue";
    import TailwindcssSvg from "assets/svg/TailwindcssSvg.vue";
    import type { CarouselItem } from "~/type";

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 6,
            min: 2,
        },

        wordsPerSentence: {
            max: 12,
            min: 4
        }
    });

    let radioValue = ref(0);

    let items = ref<CarouselItem[]>([
        {
            title: "点赞",
            content: lorem.generateParagraphs(1),
            img: LolisLike
        },

        {
            title: "爱你",
            content: lorem.generateParagraphs(1),
            img: LolisLoveYou
        },

        {
            title: "神气",
            content: lorem.generateParagraphs(1),
            img: LolisProud
        },

        {
            title: "大哭",
            content: lorem.generateParagraphs(1),
            img: LolisCry
        },

        {
            title: "快乐到模糊",
            content: lorem.generateParagraphs(1),
            img: LolisHappy
        }
    ]);

    onMounted(() =>
    {
    });
</script>

<style scoped>
    .clip {
        background: -webkit-linear-gradient(78deg, #F7D336 30%, #8AE99C);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
