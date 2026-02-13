<script setup>
  const {count,name} =  defineProps(["name","count"])
</script>

<template>
  <div>
    <h1>hello</h1>
    <p>{{ name }} : {{ count }}</p>
  </div>
</template>

<style scoped>

</style>