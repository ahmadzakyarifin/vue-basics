<script setup>
import { useSlots, ref } from 'vue';

const { title } = defineProps({
  title: String,
});

//  dengan ini jika templatenya kehapus maka tidak akan tanpil pesan default
// jadi kayak bener bener ke hapus
// const slot = useSlots()

const counter = ref(0)

</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <div v-if="slot.header"> -->
    <div v-if="$slot.header">
      <slot name="header" :counter="counter">
        <p>Ini Default Header</p>
      </slot>
    </div>
    <!-- <div v-if="slot.default"> -->
    <div v-if="$slot.default">
      <slot name="default" :counter="counter">
        <p>Ini Default </p>
      </slot>
    </div>
    <!-- <div v-if="slot.footer"> -->
    <!-- ini pakai componene instance -->
    <div v-if="$slot.footer">
      <slot name="footer">
        <p>Ini Default Footer</p>
      </slot>
    </div>
    <button @click="counter++">increment</button>
  </div>
</template>

<style scoped></style>
