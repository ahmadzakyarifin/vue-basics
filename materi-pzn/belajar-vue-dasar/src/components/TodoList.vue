<script setup>
    const items = [
        {
            id : 1,
            name : "ikan",
            done : false
        },
         {
            id : 2,
            name : "ayam",
            done : false
        },
         {
            id : 3,
            name : "kuda",
            done : true
        },
         {
            id : 4,
            name : "sapi",
            done : false
        },
    ]
</script>

<template>
    <div>
        <ul>
        <template v-for="item in items" >
            <li v-if="item.done" v-bind:key="item.id">
            {{ item.name }}
            </li>
        </template>
        </ul>
        <ul>
            <li v-for="item of items" :key="item.id" style="margin-top: 5px;">
                <ul>
                    <li v-for="(value,key) in item" :key="key">
                        {{ key }} : {{ value }}
                    </li>
                </ul>
            </li>
        </ul>
        <div>
        <div v-for="n in 10" v-bind:key="n">
            <h5> Angka {{ n }}</h5>
        </div>
        </div>
    </div>
</template>

<style scoped>

</style>