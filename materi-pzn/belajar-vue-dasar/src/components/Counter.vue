<script setup>
import { nextTick, ref } from 'vue';

const props = defineProps(["name","initialCount"])

const emit = defineEmits(["click"])

let count = 0;

function increment() {
  count++;
  
  // Mengirim event ke parent
  emit("click", count)
  
  document.getElementById("count").innerText = `Counter : ${count}`;
}

// ==================== ref ==================

let count2 = ref(0)

function increment2() {
  count2.value++;
}

// ini jarang di pakai , kebanyakan langsung pakai reactive
let count3 = ref({
  nama : "zaky",
  count : 0
})

function increment3(){
  count3.value = {
    nama : count3.value.nama,
    count : count3.value.count + 1
  }
}

// ada yang namanya nextTick
let count4 = ref(0)

async function increment4() {
  count4.value++;
  await nextTick()
  count4.value++;
  //  ini akan menjalankan satu persatu 
  //  karena ini jalan milisecond
}

let count5 = ref({
  count :  Number(props.initialCount),
  name : ""
})

async function increment5() {
  count5.value = {
    count : count5.value.count + 1,
    name : count5.value.name
  }
}

</script>

<template>
  <div>
    <div>
      <h1 id="count">Counter : {{ count }}</h1>
      <button v-on:click="increment">Increment</button>
    </div>
    <div>
      <h1>Counter :{{ count2 }}</h1>
      <button v-on:click="increment2">Increment</button>
    </div>
    <div>
      <h1>Counter : {{ count3.nama }} {{ count3.count }}</h1>
      <button v-on:click="increment3">Increment</button>
    </div>
    <div>
      <h1>Counter :{{ count4 }}</h1>
      <button v-on:click="increment4">Increment</button>
    </div>
    <div>
      <h1>{{ props.name }} : {{ count5.count }}</h1>
      <button v-on:click="increment5">Increment</button>
    </div>
  </div>
</template>

<style scoped></style>
