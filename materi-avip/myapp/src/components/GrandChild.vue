<script setup>
import { inject } from 'vue';

// 1. INJECT
// Mengambil data yang disediakan (provide) oleh (Parent/GrandParent)
// Parameter pertama harus sama persis dengan key yang di provide
const theme = inject('themeApp')
const userLogin = inject('userLogin')
const fungsiPesan = inject('kirimPesan')

</script>

<template>
  <div class="grand-child" :class="{'dark-mode': theme === 'dark', 'light-mode': theme === 'light'}">
    <h4>GrandChild Component</h4>
    <p>Data dari Inject:</p>
    <ul>
      <li>Theme: <strong>{{ theme }}</strong></li>
      <li>User: <strong>{{ userLogin }}</strong></li>
    </ul>
    <button @click="fungsiPesan">Test Inject Function</button>
  </div>
</template>

<style scoped>
.grand-child {
  padding: 15px;
  margin-top: 10px;
  border-radius: 8px;
}

.dark-mode {
  background-color: #333;
  color: white;
}

.light-mode {
  background-color: #fff8e1; 
  color: black;
}
</style>

<!-- 
    1. KONSEP DASAR (Anti Ribet Prop Drilling)
       - Masalah: Kalau Parent punya data, mau dikirim ke Cicit (GrandChild).
       - Cara Lama (Props): Parent -> Child -> GrandChild (Ribet, Child cuma jadi kurir).
       - Cara Baru (Provide/Inject): Parent -> GrandChild (Langsung lompati Child).

    2. PROVIDE (Si Penyedia)
       - Dilakukan di Parent / "Leluhur".
       - provide('kunci', nilaiData)
    
    3. INJECT (Si Penerima)
       - Dilakukan di Child / Cicit sedalam apapun.
       - inject('kunci')
    
    4. APA SAJA YANG BISA DIKIRIM?
       - String, Number, Boolean
       - Reactive Object (ref/reactive) -> Biar update real-time
       - Function -> Biar Cicit bisa trigger aksi di Parent
-->
