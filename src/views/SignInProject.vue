<template>
<el-form :model="ruleForm" ref="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
    <h1>Đăng nhập</h1>
    <el-form-item prop="email" :rules="[
                  { required: true, message: 'Email không được để trống !', trigger: 'blur' },
                  { type: 'email', message: 'Email chưa đúng định dạng !', trigger: ['blur', 'change'] }
                ]">
        <input v-model="ruleForm.email" placeholder="Email"/>
    </el-form-item>

    <el-form-item prop="pass">
        <input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="PassWord" />
    </el-form-item>
    <el-button @click="submitForm('ruleForm')">Đăng nhập</el-button>
</el-form>
</template>

<script>
import api from '../api';
import {
    mapMutations
} from 'vuex'

export default {
    name: 'SignInProject',
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
        return {
            ruleForm: {
                pass: '',
                email: ''
            },
            rules: {
                pass: [{
                    validator: validatePass,
                    trigger: 'blur'
                }],
            },
        };
    },
    methods: {
        ...mapMutations('auth', ['updateAccessToken', 'updateStatusLogin']),
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let sigin = {
                        email: this.ruleForm.email,
                        password: this.ruleForm.pass,
                    }
                    api.login(sigin).then((res) => {
                        this.updateAccessToken(res.data.access_token)
                        console.log(res.data.access_token)
                        this.updateStatusLogin(true);
                        this.$router.push({
                            path: 'AdminLayout',
                            query: {
                                plan: 'private'
                            }
                        })
                    })
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
        outline: none;
    }

}
</style>
