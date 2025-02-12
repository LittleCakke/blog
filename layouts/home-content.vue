<template>
    <div
        class="mt-4 flex gap-x-4">
        <div
            class="basis-7/10 w-full relative">
            <slot name="main" />
        </div>

        <div
            class="basis-3/10 w-full flex flex-col gap-y-4">
            <slot name="aside" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
