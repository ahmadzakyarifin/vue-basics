<script setup>
import { ref } from 'vue';
import Counter from './Counter.vue';
import CounterStateless from './CounterStateless.vue';

const counter = ref(0)

// function increment() {
//   counter.value++
// }

function increment(value){
  counter.value += value
}

</script>

<template>
  <div>
  <div>
    <h1>Haii</h1>
    <Counter name="zaky" initial-count="10" />
  </div>
  <div>
    <!-- Code Sebelumnya -->
    <!-- <CounterStateless name="zaky" :count="counter" />
    <button @click="counter++">tambah</button> -->

    <!-- Code Baru dengan defineEmits -->
     <CounterStateless name="zaky" :count="counter" @click="increment" :increment="2" />
  </div>
  </div>
</template>

<style scoped>

</style>