// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import prismjs from "vite-plugin-prismjs";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    pages: true,

    // routeRules: {
    //     "/": {
    //         redirect: "/home"
    //     }
    // },

    vite: {
        plugins: [
            tailwindcss(),
            prismjs({
                languages: "all",

                plugins: [
                    "toolbar",
                    "line-numbers"
                ],
                theme: "atom-dark",
                css: true
            })
        ]
    },

    modules: [
        "@pinia/nuxt",
        "@ant-design-vue/nuxt"
    ],

    css: [
        "~/assets/css/main.css"
    ],

    //nitro: {
    //    devProxy: {
    //        "/api": {
    //            target: "",
    //            changeOrigin: true,
    //        }
    //    }
    //},

    devServer: {
        port: 13579
    }
});
