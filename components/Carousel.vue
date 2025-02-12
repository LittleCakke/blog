<template>
    <div
        class="w-full
        h-[400px]
        border-b
        border-b-gray-600
        relative">
        <input
            v-for="(_, index) in itemList"
            :ref="(el: HTMLInputElement) => pushInputList(el)"
            :key="index"
            v-model="radioValue"
            class="hidden"
            type="radio"
            name="select"
            :id="`slide-${index}`"
            :value="index"
        />

        <carousel-indicator-list
            :item-list="itemList"
            :radio-value="radioValue"
        />

        <carousel-item
            v-for="(it, index) in itemList"
            :index="index"
            :item="it"
            :radio-value="radioValue"
        />
    </div>
</template>

<script setup lang="ts">
    import CarouselIndicatorList from "~/components/CarouselIndicatorList.vue";
    import CarouselItem from "./CarouselItem.vue";
    import type { CarouselItem as Item } from "~/type";

    let props = defineProps({
        itemList: {
            type: Object as () => Item[],
            required: true
        }
    });

    let radioValue = defineModel({
        type: Number,
        required: true,
    });

    let { itemList } = toRefs(props);
    let inputList: HTMLInputElement[] = [];
    let timer = ref<NodeJS.Timeout>();

    const pushInputList = (el: HTMLInputElement) =>
    {
        inputList.push(el);
    }

    onMounted(() =>
    {
        timer.value = setInterval(() =>
        {
            let l =inputList.length;
            if (radioValue.value === l - 1)
            {
                inputList[l - 1].checked = false;
                inputList[0].checked = true;
                radioValue.value = 0;
            }
            else
            {
                inputList[radioValue.value].checked = false;
                inputList[radioValue.value + 1].checked = true;
                radioValue.value++;
            }
            inputList = [];
        }, 10 * 1000);
    });

    onBeforeUnmount(() =>
    {
        clearInterval(timer.value);
    });
</script>
