<script setup>
import MainButton from './components/MainButton.vue';

// const nama = 'Ida Laila'

const bodyBlogPost = '<p style="color:red">Ini BlogPost</p>'
const id = "idSatu"
const blogClass = 'text-3xl flex-coll'

</script>

<template>
  <!-- <MainButton></MainButton> -->
  <MainButton/>
  <br>

  <!-- <h1>Ahmad Zaky Arifin</h1> -->
  <!-- <br> -->


  <!-- 03 text interpolation 'Mustache syntax' -->
  <!-- <h1>{{ nama }}</h1> -->
  <div>
    <!-- {{ bodyBlogPost }} -->
  </div>
  <!-- 04 Row Html supaya tag html itu bekerja -->
  <div v-html="bodyBlogPost"></div>

  <!-- 05 v-bind -->
  <!-- <div v-bind:id="idSatu"></div> -->
  <!-- <div :id="id" :class="blogClass"></div> -->
  <div :id :class="blogClass"></div>

</template>

