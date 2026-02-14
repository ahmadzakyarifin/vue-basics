<script setup>
import { inject } from 'vue';

    const profile = inject('profile')
</script>

<template>
    <div>
        <h1>Profile Address : {{ profile.name }}</h1>

    </div>
</template>

<style scoped>

</style>