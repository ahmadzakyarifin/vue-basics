<script setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div style="border: 1px solid red; padding: 10px; margin-top: 15px;">
    <h3>Component Lain</h3>
    <p>Di sini count juga: {{ counter.count }}</p>
    <button @click="counter.increment()">Tambah dari sini</button>
  </div>
</template>