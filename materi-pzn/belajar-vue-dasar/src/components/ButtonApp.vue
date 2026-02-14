<script setup>
import Container from './Container.vue';
import MyButton from './MyButton.vue';

function clickHandler(){
  alert("Berhasil di click")
}

</script>

<template>
  <!-- <MyButton style="background-color: gray; border-radius: 8px;" @click="clickHandler"></MyButton> -->
  <!--  jadi kalau cuma 1 elemet di MyButton tidak perlu props dan emits-->

  <Container title="INI APK SAYA ">
    <template #header="attributes">
      <h1>Navbar {{ attributes.counter }}</h1>
    </template>
    <template v-slot:default="attributes">
      <MyButton  style="background-color: gray; border-radius: 8px;" @click="clickHandler" :name="attributes.counter"/>
    </template>
    <template v-slot:footer>
      <p>Ini footer</p>
    </template>
  </Container>
</template>

<style scoped>

</style>