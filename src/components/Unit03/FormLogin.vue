<template>
<div class="container">
    <LoginForm/>
    <LoginMessage/>
</div>
</template>

<script>
import LoginForm from './LoginForm.vue'
import LoginMessage from './LoginMessage.vue'
export default {
    name: "FormLogin",
    components: {
        LoginForm,
        LoginMessage,
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;

}
</style>
