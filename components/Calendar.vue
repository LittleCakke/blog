<template>
    <div
        class="w-full
        h-[300px]
        bg-white
        rounded-md
        border
        border-gray-200
        hover:border-transparent
        hover:shadow-xl
        duration-200
        overflow-hidden">
        <!-- 日期头 -->
        <ul
            class="px-2 grid grid-cols-7 h-[50px] bg-gray-200">
            <li
                class="h-[50px] flex items-center justify-center text-gray-600 font-semibold">
                一
            </li>
            <li
                class="h-[50px] flex items-center justify-center text-gray-600 font-semibold">
                二
            </li>
            <li
                class="h-[50px] flex items-center justify-center text-gray-600 font-semibold">
                三
            </li>
            <li
                class="h-[50px] flex items-center justify-center text-gray-600 font-semibold">
                四
            </li>
            <li
                class="h-[50px] flex items-center justify-center text-gray-600 font-semibold">
                五
            </li>
            <li
                class="h-[50px] flex items-center justify-center text-red-500 font-semibold">
                六
            </li>
            <li
                class="h-[50px] flex items-center justify-center text-red-500 font-semibold">
                日
            </li>
        </ul>

        <!-- 具体日期数据 -->
        <ul
            :class="`grid-rows-${calendar.length <= 35 ? 5 : 6}`"
            class="px-2
            pb-2
            w-full
            h-[calc(100%-50px)]
            grid
            grid-cols-7
            gap-1">
            <li
                v-for="(d, i) in calendar"
                :key="i"
                class="rounded
                flex
                items-center
                justify-center">
                <span
                    :class="isToday(d.isToday === true)"
                    class="h-full
                    aspect-square
                    text-[14px]
                    rounded-full
                    flex
                    items-center
                    justify-center">
                    {{ d.date }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import type { CalendarDate } from "~/type";

    let calendar = ref<CalendarDate[]>([]);

    const isToday = (today: boolean) =>
    {
        if (today)
            return "text-white bg-blue-500 font-semibold";
        return "text-gray-600 font-normal";
    }

    onMounted(() =>
    {
        calendar.value = dateUtils.generateCalendar();
    });
</script>
