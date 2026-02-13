<script setup>
import { onBeforeMount, onMounted, onUpdated, reactive, ref, useTemplateRef } from 'vue';

  const note = ref('')
  const notes = reactive([])
  const noteInput = useTemplateRef("noteInput")

  function addNote(){
    notes.push(note.value)
    note.value = ''
    noteInput.value.focus()

    onBeforeMount(()=>{
      console.log("before mount")
    })

    onMounted(()=>{
      console.log("mounted")
    })

    onUpdated(()=>{
      console.log("updated")
    })
  }

  function removeNote(index){
    notes.splice(indexedDB,1)
  }
</script>

<template>
  <div>
    <h1>Add Note :</h1>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <input type="text" placeholder="Masukkan..." v-model="note" ref="noteInput" style="padding: 15px; border-radius: 10px;">
      <button @click="addNote" class="product-card">Simpan</button>
    </div>
    <h1>Daftar Note : </h1>
    <ul>
      <li v-for="(note,index) in notes" v-bind:key="note.id" >
        <div style="display: flex; justify-content: space-between; margin-top: 10px;">
          {{ index + 1 }}. {{ note }} 
          <button @click="removeNote(index)">🗑️</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.product-card {
  transition: 0.3s;
}
.product-card:hover {
  cursor: pointer;
  transform: scale(1.1);
  background-color: gray
}

</style>