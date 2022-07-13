<template>
<<<<<<< HEAD
<div class="container">
    <div class="loginWrap">
        <div class="inputWrap">
            <div class="inputLabel">Tên đăng nhập</div>
            <input type="text">
        </div>
        <div class="inputWrap">
            <div class="inputLabel">Mật khẩu</div>
            <input type="password">
        </div>
        <button class="loginButton">Đăng nhập</button>
    </div>
    <div class="infoWrap">
        <div class="infoLabel">
            Xin chào
        </div>
    </div>
=======
<div class="loginWrap">
    <div class="inputWrap">
        <div class="inputLabel">Tên đăng nhập</div>
        <input type="text" v-model="email">
    </div>
    <div class="inputWrap">
        <div class="inputLabel">Mật khẩu</div>
        <input type="password" v-model="password">
    </div>
    <button class="loginButton" @click="selectedComponentB">Đăng nhập</button>
>>>>>>> 133aa0d45b4dcbb733926731663a83354b215b63
</div>
</template>

<script>
export default {
<<<<<<< HEAD
  import 
}

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;

    .loginWrap {
        background: #f5f5f5;
        border: 1px solid #6E6E6E;
        padding: 24px;
        height: 250px;
        width: 300px;

        .inputWrap {
            margin-bottom: 12px;

            .inputLabel {
                font-weight: bold;
                margin-bottom: 8px;
                text-align: left;
            }

            input {
                width: 292px;
                height: 30px;
            }
        }

        button {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            margin-top: 20px;
            background: #0080dd;
            color: #fff;
            border: unset;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
        }
    }

    .infoWrap {
        background: #fff;
        border: 1px solid #6E6E6E;
        padding: 24px;
        height: 250px;
        width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 24px;

        .infoLabel {
            font-weight: bold;
            color: #00AAAA;
        }
=======
    name: "LoginForm",
    data() {
        return {
            email: '',
            password: ''
        }

    },
    methdos: {
        selectedComponentB() {
            let data = {
                email: this.email,
                password: this.password
            }
            // phát ra sự kiện 'emitData' với dữ liệu là data'
            this.$emit('emitData', data);
        }
    }
}
</script>

<style lang="scss" scoped>
.loginWrap {
    background: #f5f5f5;
    border: 1px solid #6E6E6E;
    padding: 24px;
    height: 250px;
    width: 300px;

    .inputWrap {
        margin-bottom: 12px;

        .inputLabel {
            font-weight: bold;
            margin-bottom: 8px;
            text-align: left;
        }

        input {
            width: 292px;
            height: 30px;
        }
    }

    button {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        margin-top: 20px;
        background: #0080dd;
        color: #fff;
        border: unset;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
>>>>>>> 133aa0d45b4dcbb733926731663a83354b215b63
    }
}
</style>
