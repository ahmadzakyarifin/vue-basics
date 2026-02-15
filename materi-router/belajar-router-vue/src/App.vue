<script setup>
</script>

<template>
  <nav>
    <!-- jadi kalau kita ubah path url maka kita cukup ubah di index.js karena kita pasang di sini id name route -->
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'contact' }">Contact</router-link>  |

    <!-- sebelum Nested Route  -->
    <!-- <router-link :to="{ name: 'student', params : {id : 1} }">Student</router-link> |
    <router-link :to="{ name: 'student', params : {id : 2} }">Student</router-link> | -->

    <router-link :to="{name : 'student-index'}">Student</router-link>
    <!-- <router-link :to="{ name: 'student-detail', params: { id: 1 } }">Student 1</router-link> -->
    
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  padding: 30px;
  text-align: center; 
} 

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-active {
  color: #42b983;
}
</style>
