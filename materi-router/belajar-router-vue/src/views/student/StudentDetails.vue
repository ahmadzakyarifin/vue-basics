<template>
    <div>
        <h1>Details Siswa</h1>
        <p>ID: {{ $route.params.id }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>