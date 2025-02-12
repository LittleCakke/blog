import { useSystemStore } from "~/stores/system";

export default defineNuxtPlugin(() =>
{
    return {
        provide: {
            systemStore: useSystemStore()
        }
    }
});
