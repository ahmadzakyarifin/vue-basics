<script setup>
// const model = defineModel()
const model = defineModel({
  type: Object,
  required: true,
  default: () => ({
    name: "",
    email: "",
    age: 0,
    type: "reguler",
    complain: false,
    message: ""
  })
});
const emit = defineEmits(["submit"]);

function submit() {
  emit("submit");
}
</script>
<template>
  <form @submit.prevent="submit">
    <h1>Contact Us</h1>
    <div>
      <label for="name">Name : </label>
      <input type="text" v-model.trim="model.name" />
    </div>
    <div>
      <label for="email">Email : </label>
      <input type="text" v-model.trim="model.email" />
    </div>
    <div>
      <label for="age">Age : </label>
      <input type="number" v-model.number="model.age" />
    </div>
    <div>
      <label for="type">Type : </label>
      <select name="type" id="type" v-model="model.type">
        <option value="reguler">Reguler</option>
        <option value="vip">VIP</option>
      </select>
    </div>
    <div>
      <label for="complain">Complain : </label>
      <input type="checkbox" id="complain" v-model="model.complain" />
    </div>
    <div>
      <label for="message">Message : </label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        v-model="model.message"
      ></textarea>
    </div>
    <button type="submit">Simpan</button>
  </form>
</template>

<style scoped></style>
