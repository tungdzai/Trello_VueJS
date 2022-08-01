<template>
<div class="container">
    <div class="frmWrap">
        <div class="LogoWrap">
            <span> <img src="../../assets/images/zent1.png" alt=""></span>
            <p class="text">Mật khẩu mới sẽ được gửi vào mail của bạn .</p>
        </div>

        <el-form :model="ruleForm" ref="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
            <el-form-item prop="email" label="Email" :rules="[
      { required: true, message: 'Email không được để trống !', trigger: 'blur' },
      { type: 'email', message: 'Email chưa đúng định dạng !', trigger: ['blur', 'change'] }
    ]">
                <el-input v-model="ruleForm.email"></el-input>
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
        loginform(){
            this.$router.push({ name: 'FormLogin', params: { FormLoginId: '111' } })
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 0;
    padding: 0;

    .frmWrap {
        width: 450px;
        margin: 0 auto;
        border: 1px solid #000;

        .LogoWrap {
            img {
                width: 50%;
            }
            p{
                color: rgb(143, 138, 138);
            }
        }

        .demo-ruleForm {
            padding-right: 90px;
        }

    }

}
</style>
