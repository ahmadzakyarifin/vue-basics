<script setup>
import { reactive } from 'vue';


const contact = reactive({
    name : "",
    email : "",
    age : "",
    type : "Regular",
    complain : false,
    message : ""
})
</script>

<template>
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <h1>Contact Us</h1>
        <div>
            <label for="name">Name : </label>
            <input type="text" v-model.trim="contact.name">
        </div>
        <div>
            <label for="email">Email : </label>
            <input type="text" v-model.trim="contact.email">
        </div>
        <div>
            <label for="age">Age : </label>
            <input type="number" v-model.number="contact.age">
        </div>
        <div>
            <label for="type">Type : </label>
            <select name="type" id="type" v-model="contact.type">
                <option value="reguler">Reguler</option>
                <option value="vip">VIP</option>
            </select>
        </div>
        <div>
            <label for="complain">Complain : </label>
            <input type="checkbox" id="complain" v-model="contact.complain">
        </div>
        <div>
            <label for="message">Message : </label>
            <textarea name="message" id="message" cols="30" rows="10" v-model="contact.message"></textarea>
        </div>
        <h1>Hasil : </h1>
        <p>Name : {{ contact.name }}</p>
        <p>Email : {{ contact.email }}</p>
        <p>Age : {{ contact.age }}</p>
        <p>Type : {{ contact.type }}</p>
        <p>Complain : {{ contact.complain }}</p>
        <p>Message : {{ contact.message }}</p>
    </div>
</template>

<style scoped>

</style>