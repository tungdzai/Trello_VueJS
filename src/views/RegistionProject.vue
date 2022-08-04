<template>
<el-form :model="ruleForm" ref="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
    <h1>Create Account</h1>
    <el-form-item prop="name">
        <input v-model="ruleForm.name"   placeholder="Name"/>
    </el-form-item>
    <el-form-item prop="email" :rules="[
                  { required: true, message: 'Please input email address!', trigger: 'blur' },
                  { type: 'email', message: 'Please input correct email address !', trigger: ['blur', 'change'] }
                ]">
        <input v-model="ruleForm.email" placeholder="Email" />
    </el-form-item>

    <el-form-item prop="pass">
        <input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="PassWord" />
    </el-form-item>

    <el-form-item prop="checkPass">
        <input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="Confirm" />
    </el-form-item>
    <el-button @click="submitForm('ruleForm')">Sign Up</el-button>
</el-form>
</template>

<script>
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
                email: '',
                name: ''
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
                name: [{
                        required: true,
                        message: 'Please input Activity name',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        message: 'Length should be 3',
                        trigger: 'blur'
                    }
                ],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('Đăng kí thành công !');
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
    padding: 0 65px;
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

.h1 {
    font-weight: bold;
    margin: 0;
}
</style>
