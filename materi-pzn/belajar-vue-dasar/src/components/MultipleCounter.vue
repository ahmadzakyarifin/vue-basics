<script setup>
import { ref } from 'vue';
import Counter from './Counter.vue';
import CounterStateless from './CounterStateless.vue';

const counter = ref(0)

</script>

<template>
  <div>
  <div>
    <h1>Haii</h1>
    <Counter name="zaky" initial-count="10" />
  </div>
  <div>
    <CounterStateless name="zaky" :count="counter" />
    <button @click="counter++">tambah</button>
  </div>
  </div>
</template>

<style scoped>

</style>