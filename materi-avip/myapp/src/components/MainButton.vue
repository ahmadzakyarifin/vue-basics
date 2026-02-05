<script setup>
    const namanya = 'idan'
    const showname = () => console.log(namanya)

    // const disableButton = true
    // const styleDisableButton = 'text-3xl bg-black text-white'

    // bind multiple attribut
    const object = {
        id : 1,
        disabled : true,
        class : 'text-3xl bg-black text-white mt-10'
    }

    const isLoading = false

    const url = "/home"

    const dynamic = {
        attr : "href",
        url : "/home"
    }

</script>

<template>
    <!-- <button>Button</button> -->

    <h1>{{ namanya }}</h1>
    <button @click="showname">Show Name</button>

    <!-- 06 disable -->
    <!-- <button :disabled="disableButton" :class="styleDisableButton">Button Disable</button> -->
    <button v-bind="object">Button Disable</button>

    <!--  07 javascript expression -->
    <button :id="`ini id ke ${object.id}`" :disabled="isLoading" >{{ isLoading ? "masih loding" : "submit" }}</button>

    <!-- 08 directive -->
    <div>
        <a :href="url">
            <h1>haii</h1>
        </a>
    </div>

    <!-- 09 Dynamic argument -->
    <div>
        <a :[dynamic.attr]="dynamic.url">
            <h1>hallo</h1>
        </a>
    </div>



</template>

<!-- scoped artinya style css hanya berlaku di component ini saja -->
<style scoped>

</style>

<!-- 🧠 RINGKASAN
1️⃣ Tanpa setup (cara lama)
Pakai data()
Pakai methods
Harus return
Lebih panjang

2️⃣ Pakai setup (cara baru – Vue 3)
Semua ditulis di satu tempat
Tidak pakai return
Lebih singkat & rapi
Disarankan untuk Vue 3 -->