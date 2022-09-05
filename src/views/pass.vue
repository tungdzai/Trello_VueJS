<template>
<div>
    <AdminLayout>
        <template #header>
            <span class="user">Đổi mật khẩu</span>
        </template>
        <div class="passWrap">
            <div class="passinfo">
                <div class="info_number">
                    <span class="text">Đổi mật khẩu</span>
                    <div class="inputpassWrap">
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png" alt="">
                        <input type="password" placeholder="Nhập lại mật khẩu mới " v-model="passnew">
                    </div>
                    <div class="inputpassWrap">
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png" alt="">
                        <input type="password" placeholder="Xác nhận lại mật khẩu mới" v-model="passconfirm">
                    </div>
                    <div class="inputpassWrap">
                        <button @click="clickupdatapass" :plain="true">Lưu thay đổi</button>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</div>
</template>

<script>
import AdminLayout from '../layouts/AdminLayout.vue'
import api from '../api'
export default {
    name: 'passUpdate',
    components: {
        AdminLayout
    },
    data() {
        return {
            passconfirm: '',
            passnew: ''
        }
    },
    mounted() {
        api.infoAuthme().then((res) => {
            console.log(res);
        })
    },
    methods: {
        clickupdatapass() {
            let data = {
                'password': this.passnew,
                "password_confirmation": this.passconfirm
            }
            if ( this.passconfirm.length === 0 || this.passnew.length === 0) {
                this.$message({
                    showClose: true,
                    message: 'Mật khẩu không được để trống',
                    type: 'warning'
                });
            } else {
                api.putUpdataPass(data).then((res) => {
                    console.log(res);
                    this.$message({
                        showClose: true,
                        message: 'Đổi mật khẩu thành công .',
                        type: 'success'
                    });

                }).catch(() => {
                    this.$message({
                        showClose: true,
                        message: 'Mật khẩu không trùng khớp',
                        type: 'error'
                    });
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.user {
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
}

.passWrap {
    background-color: #fff;
    width: 50%;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    margin-top: 20px;

    .passinfo {
        padding: 20px;

        .info_number {
            border: 1px solid #e9ecef;
            width: 380px;
            margin: 0 auto;
            padding: 15px;
            text-align: left;
            border-radius: 10px;

            .inputpassWrap {
                display: flex;
                position: relative;
                flex-wrap: wrap;

                img {
                    width: 28px;
                    height: 28px;
                    position: absolute;
                    top: 15%;
                    left: 5px;

                }

                input {
                    border: 1px solid rgb(196, 196, 207);
                    width: 100%;
                    height: 40px;
                    border-radius: 4px;
                    margin: 4px 0px 15px;
                    padding-left: 40px;
                    outline: none;

                }

                button {
                    border: 0px;
                    width: 100%;
                    height: 40px;
                    border-radius: 4px;
                    color: rgb(255, 255, 255);
                    font-size: 14px;
                    background-color:#ff5f1b;
                    cursor: pointer;
                    &:hover{
                        background-color:#f84f07;
                        font-weight: bold;
                    }
                    
                }

            }

        }

    }
}
</style>
