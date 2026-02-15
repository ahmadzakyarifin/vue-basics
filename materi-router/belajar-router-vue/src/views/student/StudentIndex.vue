<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import StudentInputNavigation from './StudentInputNavigation.vue';

// Data Dummy
const student = ref([
    { id: 1, name: "zaky", class: "12 IIK 1" },
    { id: 2, name: "daffa", class: "12 MIPA 1" },
    { id: 3, name: "bayu", class: "12 IPS 1" }
])

const route = useRoute()
const router = useRouter()

// Ambil query param dari URL

const search = computed({
    // Getter: Mengambil nilai dari URL
    get() {
        return route.query.search || ""
    },

    // Setter: Mengubah nilai dan update URL
    set(value) {
        router.push({
            // ...route.query: Menyalin semua query yang sudah ada
            //  dengan di salin maka query sebelumnya tetep adan dan nanati di tambah dengan query baru
            // search: value || undefined: Mengupdate query search
            query: { ...route.query, search: value || undefined }
        })
    }
})

const sortOrder = computed({
    get() {
        return route.query.sort || "asc"
    },
    set(value) {
        router.push({
            query: { ...route.query, sort: value }
        })
    }
})

// Filter & Sort Logic
const filteredStudents = computed(() => {
    let result = student.value

    // 1. Filter Search
    if (search.value) {
        const keyword = search.value.toLowerCase()
        result = result.filter(s => s.name.toLowerCase().includes(keyword))
    }

    // 2. Sort
    result.sort((a, b) => {
        if (sortOrder.value === "asc") {
            // localeCompare() digunakan untuk membandingkan string
            return a.name.localeCompare(b.name)
        } else {
            return b.name.localeCompare(a.name)
        }
    })
    
    return result
})

</script>

<template>
    <div class="student-page">
        <h1>Daftar Siswa</h1>

        <StudentInputNavigation :students="student" />
        <br>
        
        <div class="controls">
            <input 
                type="text" 
                placeholder="Cari nama..." 
                v-model="search"
            >
            <select v-model="sortOrder">
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
        </div>
        
        <hr>
        
        <ul>
            <li v-for="s in filteredStudents" :key="s.id">
                <!-- Ini Navigasi -->
                <!-- Gunakan router-link biar bisa diklik -->
                <router-link :to="{ name: 'student-detail', params: { id: s.id } }">
                    {{ s.name }} (Kelas {{ s.class }})
                </router-link>
            </li>
        </ul>
        
        <p v-if="filteredStudents.length === 0">Data tidak ditemukan</p>
    </div>
</template>

<style scoped>
.student-page { padding: 20px; }
.controls { margin-bottom: 20px; display: flex; gap: 10px; }
input, select { padding: 8px; }
</style>


<!-- 
    =======================================================
    RINGKASAN PERBEDAAN NAVIGASI (Flat vs Nested)
    =======================================================

    1. Versi Sebelumnya (Nested Route tapi Navigasi Flat)
  
    - Kondisi: Router sudah disetting nested (List & Detail dipisah), 
      TAPI link `<router-link to="/student/1">` masih ditaruh di `App.vue` (Menu Utama).
    - Masalah:
        * Menu Utama jadi "semrawut" karena dijejali link detail siswa.
        * Link "Student 1" muncul terus meskipun user sedang buka Halaman Home atau About.
        * Ini TIDAK logis secara UX (User Experience).

    2. Versi Sekarang (Nested Route + Nested Navigation)
  
    - Kondisi: Link `<router-link to="/student/1">` dipindahkan ke dalam `StudentIndex.vue` (File ini).
    - Hasil:
        * Menu Utama (`App.vue`) bersih, cuma navigasi level atas (Home, About, Student).
        * Link Detail Siswa baru muncul SETELAH user masuk ke halaman Student.
        * Ini adalah flow standar aplikasi profesional.

    ANALOGI TOKO:
    - Versi Lama: Daftar barang dan tombol "Beli Barang A" dipajang di Pintu Depan Toko (App.vue).
    - Versi Baru: Di Pintu Depan cuma ada tulisan "Masuk ke Rak Barang". 
      Pas masuk (StudentIndex), baru kelihatan barangnya dan tombol "Beli" (Detail).
-->
