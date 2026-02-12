<script setup>
import { ref } from 'vue';

    const score = ref(50)
</script>

<template>
    <div>
        <div v-show="score > 50">
            Score Anda {{ score }}
        </div>
        <div v-if="score > 80" >
            <p>Anda mendapatkan nilai A</p>
        </div>
        <div v-else-if=" score > 60">
            <p>Anda mendapatkan nilai B</p>
        </div>
        <div v-else>
            <p>Anda mendapatkan nilai c</p>
        </div>
    </div>
</template>

<style scoped>

</style>