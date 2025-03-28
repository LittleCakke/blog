<template>
    <section
        class="w-screen h-screen z-10">
        <nuxt-layout
            name="top-nav">
            <top-nav-list>
                <top-nav-list-item
                    icon="home"
                    to="/page/home">
                    首页
                </top-nav-list-item>

                <top-nav-list-item
                    icon="bubble-chat"
                    to="/page/contact-me">
                    联系我
                </top-nav-list-item>

                <top-nav-list-item
                    icon="info"
                    to="/page/about">
                    关于
                </top-nav-list-item>
            </top-nav-list>

            <top-nav-avatar />
        </nuxt-layout>

        <main
            ref="mainSection"
            class="w-screen h-[calc(100vh-75px)] overflow-auto">
            <div
                class="w-screen max-w-7xl mx-auto px-8">
                <slot />
            </div>

            <nuxt-layout name="page-footer" />
        </main>
    </section>
</template>

<script setup lang="ts">
    import TopNavAvatar from "~/components/TopNavAvatar.vue"
    import TopNavList from "~/components/TopNavList.vue";
    import TopNavListItem from "~/components/TopNavListItem.vue";

    const { $systemStore } = useNuxtApp();

    let mainSection = ref<HTMLElement>();

    onMounted(() =>
    {
        mainSection.value?.addEventListener("scroll", (e: any) =>
        {
            let t = e.target;
            $systemStore.bodyScrollTop = Number(t.scrollTop);
        });
    });
</script>
