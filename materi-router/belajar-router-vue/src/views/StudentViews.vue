<template>
  <div class="student-layout">
    <h1>Halaman Student</h1>
    <div style="border: 2px dashed red; padding: 20px;">
        <!-- Di sini nanti anak-anaknya (Index & Detail) akan tampil-->
        <router-view />
    </div>
  </div>
</template>

<script>
export default {
    name: 'StudentViews'
}
</script>

<style scoped>

</style>


<!-- 
========================================================================
    KODE VERSI LAMA (Sebelum Nested Routes)
    Disimpan untuk referensi belajar.
========================================================================

<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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
                {{ s.name }} (Kelas {{ s.class }})
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
-->
