<template>
<div class="container">
    <div class="frmLogin">
        <div class="frmWrap">
            <div class="LogoWrap">
                <span> <img src="../../assets/images/logoflixgo.png" alt=""></span>
                <p class="text">Mật khẩu mới sẽ được gửi vào Email của bạn </p>
            </div>

            <el-form :model="ruleForm" ref="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
                <el-form-item prop="email" label="Email" :rules="[
      { required: true, message: 'Email không được để trống !', trigger: 'blur' },
      { type: 'email', message: 'Email chưa đúng định dạng !', trigger: ['blur', 'change'] }
    ]">
                    <el-input v-model="ruleForm.email" placeholder="Email..."></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" :plain="true">Gửi mật khẩu</el-button>
                </el-form-item>
                <el-form-item>
                    <p @click="loginform">Đăng nhập</p>
                </el-form-item>
            </el-form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ForgotPass',
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Password không được để trống !'));
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
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message({
                        message: 'Đã gửi lại mật khẩu thành công .',
                        type: 'success'
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        loginform() {
            this.$router.push({
                name: 'FormLogin',
                params: {
                    FormLoginId: '111'
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    background-color: #46b4d6;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;

    .frmLogin {
        width: 450px;
        margin: 0 auto;

        .frmWrap {
            width: 450px;
            margin: 0 auto;
            background-color: #fff;
            border: unset;
            border-radius: 10px;
            position: absolute;
            z-index: 1;
            margin-top: 200px;

            .LogoWrap {
                img {
                    width: 50%;
                }
                p{
                   color: rgb(204, 197, 197);
                }
            }
            .demo-ruleForm {
                padding-right: 90px;
            }

            .forgotpass {
                background-color: #fff;
                border: unset;
                cursor: pointer;
            }

        }

    }

}
</style>
