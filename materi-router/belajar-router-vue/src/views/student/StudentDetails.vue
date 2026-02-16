<template>
    <div>
        <h1>Details Siswa</h1>
        <!-- 
            cara lama :
            <p>ID: {{ $route.params.id }}</p> 
        -->

        <!-- cara baru (Pakai Props): -->
        <p>ID: {{ id }}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        id: String
    })
</script>

// CARA LAMA (Ketergantungan dengan Vue Router):
// import { useRoute } from 'vue-router'; 
// const route = useRoute();
// console.log(route.params.id);

// CARA BARU (Pakai Props - Lebih Bersih & Reusable):
// Pastikan di router/index.js sudah set `props: true`