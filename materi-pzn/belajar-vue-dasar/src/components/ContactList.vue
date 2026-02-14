<script setup>
import { computed } from 'vue';

// ==================================================================
// CARA 1: Pakai defineModel satu-satu (biar bisa validasi di tiap field)
// ==================================================================
/*
const name = defineModel("name", {
    type: String,
    get(value) {
        // Contoh manipulasi: dibikin huruf besar semua
        return value ? value.toUpperCase() : ""
    }
})

const email = defineModel("email", { type: String })

const age = defineModel("age", {
    type: Number,
    set(value) {
        // Contoh validasi: paksa jadi angka
        return Number(value)
    }
})

const type = defineModel("type", { type: String })
const complain = defineModel("complain", { type: Boolean })
const message = defineModel("message", { type: String })
*/

// ==================================================================
// CARA 2: Pakai 1 object sekaligus (lebih ringkas & sering dipakai)
// ==================================================================

// Terima data langsung sebundel
const model = defineModel({
  type: Object,
  required: true
});

// Kalau butuh manipulasi data, pakai computed aja
const formattedName = computed(() => {
  return model.value?.name ? model.value.name.toUpperCase() : "-"
})

// Contoh VALIDASI di cara 2 (pakai computed get/set)
const validAge = computed({
    get() {
        return model.value?.age || 0
    },
    set(value) {
        // Validation: Kalau umur minus, paksa jadi 0
        if(value < 0) {
            alert("Umur tidak boleh minus bos!")
            model.value.age = 0
        } else {
            model.value.age = value
        }
    }
})

</script>

<template>
  <div>
        <h1>Hasil : </h1>
        
        <!-- CARA 1 (yang dikomentari) -->
        <!-- 
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Type: {{ type }}</p>
        <p>Complain : {{ complain }}</p>
        <p>Message : {{ message }}</p> 
        -->

        <!-- CARA 2 (yang aktif sekarang) -->
        <!-- Pakai computed/formatter kalau mau diubah tampilannya -->
        <p>Name: {{ formattedName }}</p> 
        
        <!-- Sisanya ambil langsung dari objectnya -->
        <p>Email: {{ model.email }}</p>
        <p>Type: {{ model.type }}</p>
        <p>Complain : {{ model.complain }}</p>
        <p>Message : {{ model.message }}</p>
  </div>
</template>

<style scoped>

</style>