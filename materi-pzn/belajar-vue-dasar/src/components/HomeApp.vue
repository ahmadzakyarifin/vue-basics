<script setup>
import { ref } from 'vue';
import About from './About.vue';
import Blog from './Blog.vue';
import Contact from './Contact.vue'

  const pages = {
    about : About,
    blog : Blog,
    contact : Contact
  }

  const currenPage = ref('about')
</script>

<template>

  <button @click="currenPage = 'about'">About</button>
  <button @click="currenPage = 'blog'">Blog</button>
  <button @click="currenPage = 'contact'">Contact</button>
  <component :is="pages[currenPage]"/>

</template>

<style scoped>

</style>