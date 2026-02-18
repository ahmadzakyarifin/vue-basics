<script setup>
import { useCounterStore } from '../stores/counter'
import TombolLain from '../components/TombolLain.vue'
import { ref } from 'vue'

// ====== 1. MENGGUNAKAN STORE (PINIA) ======
// Cara standar: Gunakan store yang sudah didefine
const counter = useCounterStore()

// ====== 2. STATE LOKAL (BUKAN PINIA) ======
// Variabel ini hanya hidup di komponen ini. Tidak dibagi ke komponen lain.
const countBiasa = ref(0)

function tambahBiasa() {
    countBiasa.value++
}

// ====== 3. MENGUBAH PINIA DARI LUAR STORE ======
// Ini function DI LUAR store (di komponen), tapi BISA mengubah store.
// Sah-sah saja, tapi tidak disarankan untuk logic yang kompleks.
function ubahPiniaDariSini() {
    counter.count++
}

</script>

<template>
  <div>
    <h1>Belajar Pinia</h1>
    <p>Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>
    <button @click="counter.increment()">Tambah</button>
  </div>
  <div>
    <TombolLain />
  </div>
  <div>
    <p>Count Biasa (Ref Lokal): {{ countBiasa }}</p>
    <button @click="tambahBiasa">Tambah Biasa</button>
  </div>
  <hr>
  <div>
    <h3>Eksperimen Ubah Pinia dari Luar</h3>
    <!-- 1. Langsung ubah di template (BISA dilakukan, tapi tidak disarankan untuk logic rumit) -->
    <p>Ubah counter.count langsung: <button @click="counter.count++">Tambah Paksa (+)</button></p>
    
    <!-- 2. Function di komponen ini mengubah Pinia (BISA juga) -->
    <p>Ubah pakai function lokal: <button @click="ubahPiniaDariSini">Tambah via Function Lokal</button></p>
  </div>
  
</template>

<!-- 

======= PENJELASAN =======

A. APA ITU STATE & PINIA?
   - State: Data yang berubah-ubah (Counter, User Login, Keranjang).
   - Pinia: "Gudang Pusat" state di frontend. Solusi biar gak ribet kirim data (Prop Drilling).
   
B. KENAPA PINIA vs PROPS/EMIT?
   - Props/Emit: Cocok untuk komunikasi Parent-Child langsung.
   - Pinia: Cocok untuk data global yang dipakai banyak komponen berjauhan.

C. PINIA vs VUEX
   - Pinia lebih ringan, modern, support TypeScript, dan tanpa "Mutation" (langsung action).

D. KASUS NAVIGASI & REFRESH
   - Navigasi (Pindah Halaman): State Pinia BERTAHAN. State Local (Ref) HILANG/RESET.
   - Refresh Browser: SEMUA HILANG (karena disimpan di RAM). Butuh plugin `persistedstate` atau LocalStorage kalau mau awet.

E. RELASI PINIA - BACKEND - LOCALSTORAGE
   - Backend: Sumber kebenaran data (Database).
   - Pinia: Cache di sisi client (RAM) biar aplikasi cepat & reaktif.
   - LocalStorage: Penyimpanan browser (String) buat jaga data pas refresh (misal Token).

F. ISTILAH PENTING LAIN
   1. Actions: Function di dalam store untuk mengubah state (mirip `methods` di Vue).
      Contoh: `counter.increment()`
   2. Getters: Data turunan yang otomatis update (mirip `computed` di Vue).
      Contoh: `doubleCount` (Kalau count=2, double=4. Kalau count=3, double=6).


BAYANGKAN RESTORAN 🍔
---------------------
1. BACKEND = GUDANG PUSAT (Di Kota Lain)
   - Kapasitas: Tak Terbatas (Database Besar).
   - Masalah: JAUH. Kalau koki butuh garam, harus nunggu kurir ambil dari gudang (Loading...).
   - Sifat: Aman & Abadi (Persistent).
   
2. PINIA = MEJA DAPUR KOKI / ETALASE (RAM)
   - Kapasitas: Terbatas (RAM Laptop/HP user).
   - Kelebihan: SANGAT CEPAT & SIAP SAJI. Koki (Komponen Vue) tinggal ambil garam di depannya tanpa nunggu.
   - Sifat: Sementara (Kalau Restoran tutup/Refresh, meja dibersihkan -> Hilang).

3. LOCALSTORAGE = KULKAS KECIL DI DAPUR (Browser Storage)
   - Fungsi: Buat nyimpen bahan sisa biar besok pagi gak hilang (misal: Token Login).
   - Sifat: Tahan Lama tapi "Beku". Harus dikeluarin dulu (parsing), baru taruh di Meja (Pinia) buat dimasak.

---------------------------------------------------


Q: "Kenapa perlu Pinia kalau sudah ada Backend?"
A: "Demi UX (User Experience) yang instan, Pak.
    Bayangkan User buka Hal. Produk -> Pindah Hal. Promo -> Balik Hal. Produk.
    - Tanpa Pinia: Loading lagi (Minta ke Gudang lagi). User capek nunggu.
    - Pakai Pinia: Instan! (Datanya masih ada di Meja Dapur/Cache). 
    Jadi Pinia itu seperti Client-Side Cache."

Q: "Kenapa perlu Pinia kalau sudah ada LocalStorage?"
A: "Masalah REAKTIVITAS.
    LocalStorage itu cuma teks mati. Kalau isinya berubah, komponen lain GAK TAU.
    Sedangkan Pinia itu HIDUP (Reaktif). Kalau satu komponen ubah data, 
    semua komponen lain (Header, Sidebar) langsung berubah detik itu juga."

Q: "Kapan wajib pakai Pinia?"
A: "Saat data yang sama dipakai di BANYAK tempat sekaligus.
    Contoh: User Login & Keranjang Belanja.
    - Nama User muncul di: Header, Halaman Profile, Komentar, Checkout.
    - Kalau Login berhasil, semua bagian itu harus berubah barengan. Pinia solusinya."

-->