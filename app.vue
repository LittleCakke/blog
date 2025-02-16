<template>
    <nuxt-page />
</template>

<script setup lang="ts">
    useHead({
        htmlAttrs: {
            lang: "zh"
        }
    });

    useSeoMeta({
        title: "Little Cake 的个人博客",
        ogLocale: "zh_CN"
    });
</script>
