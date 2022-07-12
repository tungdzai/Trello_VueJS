<template>
<div class="container">
    <LoginForm @emitData="emitData" />
    <LoginMessage :email="email" :password="password" />
    <!-- Cú pháp dùng prop đẩy data từ component cha (FormLogin) xuống component con (LoginMessage) -->
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
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        emitData(data) {
            
            this.email = data.email
            this.password = data.password
        }
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
