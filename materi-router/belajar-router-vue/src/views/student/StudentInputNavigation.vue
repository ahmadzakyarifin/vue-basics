<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const inputQuery = ref("")
const props = defineProps({
    students: {
        type: Array,
        required: true
    }
})

function navigateToStudent() {
    if (!inputQuery.value) {
        alert("Mohon masukkan ID atau Nama Siswa!")
        return
    }

    const query = inputQuery.value
    let targetId = null

    // 1. Cek apakah Input adalah Angka (ID)
    if (!isNaN(query)) {
        targetId = parseInt(query)
    } 
    // 2. Kalau bukan angka, berarti Nama (Cari di Data)
    else {
        const foundStudent = props.students.find(s => 
            s.name.toLowerCase() === query.toLowerCase()
        )
        
        if (foundStudent) {
            targetId = foundStudent.id
        } else {
            alert(`Siswa dengan nama "${query}" tidak ditemukan!`)
            return
        }
    }

    // 3. Eksekusi
    router.push({ 
        name: 'student-detail', 
        params: { id: targetId } 
    })
}
</script>

<template>
    <div class="navigation-box">
        <h3>Menu Cepat (Quick Jump)</h3>
        <p>Masukkan <b>ID</b> atau <b>Nama</b> siswa untuk langsung melihat detailnya.</p>
        
        <div class="input-group">
            <input 
                type="text" 
                v-model="inputQuery" 
                placeholder="Cari ID atau Nama (ex: zaky)"
                @keyup.enter="navigateToStudent"
            >
            <button @click="navigateToStudent">Pergi ke Detail</button>
        </div>
    </div>
</template>

<style scoped>
.navigation-box {
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 8px;
}
.input-group {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}
button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
}
button:hover {
    background-color: #45a049;
}
input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>
