<script setup>
import { computed, reactive, ref } from 'vue';

    const person = reactive({
        firstName : '',
        LastName : ''
    })

    function SayHello(){
        person.firstName =  document.getElementById("firstname").value
        person.LastName = document.getElementById("lastname").value
    }

    // jadi nanti di template itu lebih ringkas
    // function fullName(){
    //     console.log(" ini function fullname ")
    //     return `Hai ${person.firstName} ${person.LastName}`
    // }
    // ganti dengan ini 
    const fullName = computed((oldName) => {
        // oldName atau oldValue itu unutk mengambil nilai sebelumnya
        console.log(`ini computd. ${oldName}`)
        return `Hai ${person.firstName} ${person.LastName}`
    })

    //  kalau kita jalankan counter nama seharusnya ini saja yang di render.
    //  tapi kenyataannya functtion fullName juga di render . maka ini kan memperlambat kinerja 
    // padahal tidak ada yang berubah dari fullName. 
    // san untuk mentasi ini pakai computed
    const counter = ref(0)

    function increment(){
        counter.value++
    }

    function changeFirstName(event){
        // person.firstName =document.getElementById("firstName").value
        person.firstName = event.target.value
    }

    function changeLastName(event){
        // person.LastName = document.getElementById("lastname").value
        person.LastName = event.target.value

    }
</script>

<template>
    <div>
        <div>
            <form action=""  style="display: flex; flex-direction: column; width: 400px; gap: 10px;">
                <button v-on:click="increment" >{{ counter }}</button>
                <input type="text" placeholder="Nama depan Anda" id="firstname" @input="changeFirstName">
                <input type="text" placeholder="Nama belakang Anda" id="lastname" @input="changeLastName">
                <button v-on:click.prevent="SayHello">Submit</button>
            </form>
        </div>
        <div style="margin-top: 10px;">
            <!-- <p>Hai {{ person.firstName }} {{ person.LastName }}</p> -->
            <!-- {{ fullName() }} -->
            {{ fullName }}
        </div>
    </div>
</template>

<style scoped>

</style>