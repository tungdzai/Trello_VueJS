<template>
<div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <loginForm /> -->
    <!-- <HW_2/> -->
    <!-- <HocNhom_1/> -->
    <!-- <Lesson_2/> -->
    <!-- <Lesson_2_Computed/> -->
    <!-- <Lesson_2_EX01/> -->
    <!-- <HW_4 /> -->
    <!-- <HW_5 /> -->
    <!-- <HocNhom_2/> -->
    <!-- <FormLogin/> cần support -->
    <!-- <ThucHanh01/> -->
    <TodoComponent/>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import loginForm from './components/LoginForm.vue'
// import HW_2 from './components/HW_2.vue'
// import HocNhom_1 from './components/HocNhom_1.vue'
// import Lesson_2 from './components/Lesson_2.vue'
// import Lesson_2_Computed from './components/Lesson_2_Computed.vue'
// import Lesson_2_EX01 from './components/Lesson_2_EX01.vue'
// import HW_5 from './components/HW_5.vue'
// import HocNhom_2 from './components/HocNhom_2.vue'
// import FormLogin from './components/Unit03/FormLogin.vue'
// import ThucHanh01 from './components/Unit04/ThucHanh01.vue'
import TodoComponent from './components/HW06/TodoComponent.vue'

export default {
    name: 'App',
    components: {
        // HelloWorld,
        // loginForm
        // HW_2
        // HocNhom_1
        // Lesson_2
        // Lesson_2_Computed
        // Lesson_2_EX01
        // HW_4
        // HW_5
        // HocNhom_2
        // FormLogin
        // ThucHanh01
        TodoComponent
        
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
