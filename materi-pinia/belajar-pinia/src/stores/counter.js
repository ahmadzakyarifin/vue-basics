import { defineStore } from "pinia";
import { ref, computed } from "vue";

//  ini pakai option store atau vue 2
// export const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0
//     }),
//     getters: {
//         doubleCount: (state) => state.count * 2
//     },
//     actions: {
//         increment() {
//             this.count++
//         }
//     }
// })

// kalau ini pakai setup store atau vue 3
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }
    return { count, doubleCount, increment }
})


