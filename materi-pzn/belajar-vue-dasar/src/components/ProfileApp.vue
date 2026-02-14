<script setup>
import { provide, reactive } from 'vue';
import Profile from './Profile.vue';
import ProfileAddress from './ProfileAddress.vue';

    const profile = reactive({
        name : "",
        email : "zaky@gmail.com"
    })

    provide('profile',profile)

</script>

<template>

    <input type="text" placeholder="Masukan nama Anda ..." v-model="profile.name">
    <Profile/>
    <ProfileAddress/>
</template>

<style scoped>

</style>