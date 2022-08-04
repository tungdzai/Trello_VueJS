<template>
<div class="container" :class="{'sign_up_active' : signIn }">
    <div class="overlay-container">
        <div class="overlay">
            <div class="overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                    To keep connected with us please login with your personal info
                </p>
                <button class="ghost" id="signIn" @click="signIn = !signIn">Sign In</button>
            </div>
            <div class=" overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUp" @click="signIn = !signIn">Sign Up</button>
            </div>
        </div>
    </div>
    <div class="form-container sign-up">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <el-form-item prop="email" :rules="[
                  { required: true, message: 'Please input email address!', trigger: 'blur' },
                  { type: 'email', message: 'Please input correct email address !', trigger: ['blur', 'change'] }
                ]">
                <el-input v-model="ruleForm.email" placeholder="Email"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="PassWord"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="Confirm"></el-input>
            </el-form-item>
            <button type="primary" @click="submitForm('ruleForm')">Sign Up</button>
        </el-form>
    </div>
    <div class="form-container sign-in">
        <el-form :model="ruleForm" ref="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
            <h1>Sign in</h1>
            <el-form-item prop="email" :rules="[
                  { required: true, message: 'Please input email address!', trigger: 'blur' },
                  { type: 'email', message: 'Please input correct email address !', trigger: ['blur', 'change'] }
                ]">
                <input v-model="ruleForm.email" placeholder="Email" />
            </el-form-item>

            <el-form-item prop="pass">
                <input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="PassWord" />
            </el-form-item>
            <a>Forgot your password?</a>
            <button @click="submitForm('ruleForm')">Sign In</button>
        </el-form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please input the password !'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please input the password again'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('Two inputs don\'t match!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: '',
                checkPass: '',
                email: ''
            },
            rules: {
                pass: [{
                    validator: validatePass,
                    trigger: 'blur'
                }],
                checkPass: [{
                    validator: validatePass2,
                    trigger: 'blur'
                }],
            },
            signIn: false,
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('Đăng nhập thành công ');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;

    .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;

    }

    .overlay {
        background: #ff416c;
        background: linear-gradient(to right, #ff4b2b, #ff416c);
        background: linear-gradient(to right, #ff4b2b, #ff416c);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        color: #ffffff;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;

        @mixin overlays($propert) {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            text-align: center;
            top: 0;
            height: calc(100% - 140px);
            width: calc(50% - 80px);
            transform: translateX($propert);
            transition: transform 0.6s ease-in-out;
        }

        .overlay-left {
            padding: 70px 150px;
            @include overlays(-20%);
        }

        .overlay-right {
            padding: 70px 40px;
            @include overlays(0);
            right: 0;
        }
    }

    .sign-in {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    .sign-up {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }
}

h1 {
    font-weight: bold;
    margin: 0;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}

span {
    font-size: 12px;
}

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

button {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;

    &:active {
        transform: scale(0.95);

        &:focus {
            outline: none;
        }
    }
}

button.ghost {
    background-color: transparent;
    border-color: #ffffff;
}

form {
    position: absolute;
    top: 0;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 90px 60px;
    text-align: center;

    input {
        background-color: #eee;
        border: none;
        padding: 12px 30px;
        margin: 8px 0;
        width: calc(100% - 30px);
        border-radius: 15px;
    }

}

.social-container {
    margin: 20px 0;
    display: flex;
}
.social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign_up_active {
    .sign-in {
        transform: translateX(100%);
    }

    .sign-up {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show 0.6s;
    }

    .overlay-container {
        transform: translateX(-100%);
    }

    .overlay {
        transform: translateX(50%);
    }

    .overlay-left {
        transform: translateX(0);
    }

    .overlay-right {
        transform: translateX(20%);
    }
}

@keyframes show {

    0% {
        opacity: 0;
        z-index: 1;
    }

    49% {
        opacity: 0;
        z-index: 1;
    }

    50% {
        opacity: 1;
        z-index: 10;
    }
}
</style>
