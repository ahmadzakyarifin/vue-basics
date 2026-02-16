<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

// =====================================================================
// 1. APA ITU useRouter & useRoute?
// =====================================================================

// useRouter() -> "KENDARAAN" (Action)
// Dipakai kalau kita mau PINDAH tempat.
// Contoh: router.push(), router.replace(), router.go()
const router = useRouter()

// useRoute() -> "INFORMASI LOKASI" (Data)
// Dipakai kalau kita mau tau "Sekarang lagi di mana?" atau "Bawa barang apa?"
// Contoh: route.path (alamat), route.params.id (barang bawaan)
const route = useRoute()


// =====================================================================
// 2. PROGRAMMATIC NAVIGATION (Pindah Halaman Pakai Kode/Function)
// =====================================================================
// Kadang kita butuh pindah halaman bukan karena klik link,
// tapi karena proses logic selesai (misal: Login sukses -> Pindah ke Home).

function goHome() {
  // Mirip <router-link to="/">
  router.push({ name: 'home' }) 
}

function goAbout() {
  router.push('/about') // Bisa string path langsung
}

function goStudent(id) {
  // Pindah sambil bawa parameter
  router.push({ 
    name: 'student-detail', 
    params: { id: id } 
  })
}

function goBack() {
  // Mundur 1 langkah (Undo)
  router.go(-1)
}


// =====================================================================
// 3. SEJARAH: MANUAL ROUTING (Dynamic Component :is)
// =====================================================================
// Sebelum ada Vue Router, orang bikin pindah-pindah halaman itu MANUAL.
// Konsepnya: "Ganti Komponen Isi Dompet".
// 
// <component :is="halamanSekarang" />
// 
// Kalau halamanSekarang = 'Home', muncul Home.
// Kalau halamanSekarang = 'About', muncul About.
//
// Tapi cara ini RIBET kalau aplikasinya besar, makanya lahirlah Vue Router.
// misal kayak ini : 
//    <div>
//     <h1>Router Manual Vue 3</h1>

//     <!-- Tombol Navigasi -->
//     <button @click="currentView = 'Home'">Home</button>
//     <button @click="currentView = 'About'">About</button>

//     <hr />

//     <!-- Dynamic Component -->
//     <component :is="views[currentView]" />
//   </div>
// </template>

// <script setup>
// import { ref } from 'vue'
// import Home from './Home.vue'
// import About from './About.vue'

// const currentView = ref('Home')

// const views = {
//   Home,
//   About
// }

</script>

<template>
  <nav>
    <h2>Declarative Navigation (Router Link)</h2>
    <!-- Navigasi Deklaratif: Kita cuma tempel link, urusan pindah diurus Vue -->
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'contact' }">Contact</router-link> |
    <router-link :to="{ name: 'student-index' }">Student Index</router-link> |
    <router-link :to="{ name: 'dashboard-home' }">Dashboard</router-link> |
    
    <!-- DEMO REDIRECT: Ini ceritanya link jadul yang masih tersisa -->
    <router-link to="/member" style="color: red;">Link Lama (Member)</router-link>
  </nav>


  <!-- <div style="border: 1px dashed red; padding: 20px; margin: 20px;">
    <h2>Programmatic Navigation (Router Push)</h2>
    <p>Navigasi pakai Function Javascript (biasanya buat Logic)</p>
    
    <button @click="goHome">Go Home</button>
    <button @click="goAbout">Go About</button>
    <button @click="goStudent(1)">Lihat Student 1</button>
    <button @click="goBack">Back (Undo)</button> 
  </div>

  <div style="background-color: #f0f0f0; padding: 20px;">
    <h2>Informasi Route Saat Ini (useRoute)</h2>
    <p>Path: {{ route.path }}</p>
    <p>Full Path: {{ route.fullPath }}</p>
    <p>Params: {{ route.params }}</p>
  </div> -->

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

button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
</style>
