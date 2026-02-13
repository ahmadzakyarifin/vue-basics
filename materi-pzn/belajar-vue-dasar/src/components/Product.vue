<script setup>
import { onWatcherCleanup, ref, watch, watchEffect } from 'vue';
import ProductDetails from './ProductDetails.vue';

    // const productId = ref("")
    const productId = ref("product1")
    const product = ref(null)

    // watch(productId, async(newVal,oldVal) => {
    //     if (newVal) {
    //         const response = await fetch(`/${newVal}.json`)
    //         product.value = await response.json()
    //     } else {
    //         product.value = null
    //     }
    // })

    // watch(productId, async(newVal,oldVal) => {
    //     const response = await fetch(`/${newVal}.json`)
    //     product.value = await response.json()
    // },{
    //     // ini untuk default dropdown yang akan tampil pertama kali
    //     immediate : true
    // })

    watchEffect(async () => {
        onWatcherCleanup(() => {
            console.log("ini clean up")
        })

        const response = await fetch(`/${productId.value}.json`)
        product.value = await response.json()
    })
</script>

<template>
    <div>
        <label for="productId">Product Id : 
            <select name="productId" id="productId" v-model="productId">
                <option value="product1">Product 1</option>
                <option value="product2">Product 2</option>
                <option value="product3">Product 3</option>
            </select>
        </label>

        <!-- <div v-if="product">
            <p>Id : {{ product.id }}</p>
            <p>Name : {{ product.name }}</p>
            <p>Price : {{ product.price }}</p>
        </div> -->

        <ProductDetails :id="product.id" :name="product.name" :price="product.price"/>
    </div>
</template>

<style scoped>

</style>