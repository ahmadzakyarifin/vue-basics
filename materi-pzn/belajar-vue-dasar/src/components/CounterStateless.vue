<script setup>
  const {count,name,increment} =  defineProps({
    name : String,
    count :  Number,
    increment : Number,
  })

  const emit = defineEmits(["click"])

  function handleClick() {
    emit("click",increment)
  }
</script>

<template>
  <div>
    <h1>hello</h1>
    <p>{{ name }} : {{ count }}</p>
    <button @click="handleClick">Increment</button>
  </div>
</template>

<style scoped>

</style>