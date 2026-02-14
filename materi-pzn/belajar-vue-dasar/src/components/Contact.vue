<script setup>
import { ref } from 'vue';
import ContactForm from './ContactForm.vue';
import ContactList from './ContactList.vue';

const contactData = ref({
  name: "",
  email: "",
  age: 0,
  type: "reguler",
  complain: false,
  message: ""
})

const submittedData = ref(null);

function onSave() {
  console.log(contactData.value);
  // Simpan data ke variable baru untuk ditampilkan
  submittedData.value = { ...contactData.value };
}
</script>

<template>
  <div>
    <ContactForm v-model="contactData" @submit="onSave" />
    <!-- <ContactForm @submit="onSave" /> -->

    <!-- <div v-if="submittedData">
        <h1>Hasil : </h1>
        <p>Name: {{ submittedData.name }}</p>
        <p>Email: {{ submittedData.email }}</p>
        <p>Type: {{ submittedData.type }}</p>
        <p>Complain : {{ submittedData.complain }}</p>
        <p>Message : {{ submittedData.message }}</p>
    </div> -->

    <!-- Cara 1: Kirim satu-satu (kompleks tapi fleksibel) -->
    <!-- 
    <ContactList
      v-if="submittedData"
      v-model:name="submittedData.name"
      v-model:email="submittedData.email"
      v-model:age="submittedData.age" 
      v-model:type="submittedData.type"
      v-model:complain="submittedData.complain"
      v-model:message="submittedData.message"
    /> 
    -->

    <!-- Cara 2: Kirim langsung satu object (lebih simpel) -->
    <ContactList v-if="submittedData" v-model="submittedData"/>

  </div>
</template>

<style scoped></style>
```