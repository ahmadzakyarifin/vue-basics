<script setup>
    console.info("Hello Word")

    const hello = "<b>Hello Word</b>"
    const classHello = "hello"
    const id = "hello";

    const tombolDisabled = true

    const data = {
        class : "hello",
        id : "hello"
    }

    function helloFunction(){
        return "hello function"
    }
</script>

<template>
    <div>
        <!-- 1. -->
        <h1 class="hello">Hello Word</h1>
        <!-- 2. Text Interpolation -->
        <h1 class="hello">{{ hello }}</h1>
        <!-- 3. v-html -->
        <h1 v-html=hello class="hello"></h1>
        <!-- 4. v-bind (:class , :id) -->
        <h1 v-html="hello" :class="classHello"></h1>
        <h1 v-html="hello" :id="id"></h1>
        <!-- 5. disabled dan:disabled -->
        <div style="display: flex; gap: 10px;">
            <button disabled>disabled</button>
            <button :disabled="tombolDisabled">:disabled</button>
        </div>
        <!-- 6. Multiple attribut -->
        <h1 v-html="hello" v-bind="data"></h1>
        <h1 v-html="hello" :class="data.class"></h1>
        <h1 v-html="hello" :id="data.id"></h1>
        <!-- 7. js di template ( di dalam {{}} )-->
        <h1>{{ hello.toUpperCase() }}</h1>
        <h1>{{ 20 * 20 }}</h1>
        <h1>{{ helloFunction() }}</h1>

    </div>
</template>

<style scoped>
.hello{
    color: red;
}
#hello{
    color: green;
}
</style>