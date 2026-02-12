<script setup>
import { ref, computed } from 'vue';

    const yellow = ref(false)
    const bold = ref(false)

    function toggleYellow(){
        console.log("ini toggle yellow")
        yellow.value = !yellow.value
    }

    function toggleBold(){
        console.log("ini toggle bold")
        bold.value = !bold.value
    }

    const style1 = computed(() => {
        return {
            color: yellow.value ? "yellow" : "white"
        }
    })

    const style2 = computed(() => {
        return {
            textTransform: bold.value ? "uppercase" : "none",
            fontWeight: bold.value ? "bold" : "normal"
        }
    })
</script>

<template> 
    <div>
        <h1 :class="{'yellow ': yellow, 'bold' : bold}">Style</h1>
        <h1 :style="style1">Style</h1>
        <h1 :style="[style1,style2]">Style</h1>
        <button v-on:click="toggleYellow">Yellow</button>
        <button v-on:click="toggleBold">Bold</button>
    </div>
</template>

<style scoped>
.yellow{
    color: yellow;
}
.bold{
    text-transform: uppercase;
    font-weight: bold;
}
</style>