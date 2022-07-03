<template>
<div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <loginForm /> -->
    <!-- <HW_2/> -->
    <!-- <HocNhom_1/> -->
    <!-- <Lesson_2/> -->
    <!-- <Lesson_2_Computed/> -->
    <Lesson_2_EX01/>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import loginForm from './components/LoginForm.vue'
// import HW_2 from './components/HW_2.vue'
// import HocNhom_1 from './components/HocNhom_1.vue'
// import Lesson_2 from './components/Lesson_2.vue'
// import Lesson_2_Computed from './components/Lesson_2_Computed.vue'
import Lesson_2_EX01 from './components/Lesson_2_EX01.vue'
export default {
    name: 'App',
    components: {
        // HelloWorld,
        // loginForm
        // HW_2
        // HocNhom_1
        // Lesson_2
        // Lesson_2_Computed
        Lesson_2_EX01
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
