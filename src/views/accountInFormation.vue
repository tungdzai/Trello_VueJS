<template>
<div>
    <AdminLayout>
        <template #header>
            <span class="user">Thông tin tài khoản</span>
        </template>
        <div class="accountinfoWrap">
            <div class="info infoWrap">
                <div class="info_left">
                    <div class="info_left_acc">
                        <form action="#">
                            <div class="form_info">
                                <div class="form_avtar">
                                    <div class="avtarWrap">
                                        <div class="avatarView">
                                            <!-- avatar -->
                                            <img class="default" :src='image' alt="">
                                            <div class="edit" @click="editImg">
                                                <img ids="edit_img" src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form_name">
                                    <div class="form_control">
                                        <span class="input_name">Họ & Tên</span>
                                        <input type="text" class="input_text" placeholder="Thêm họ tên" v-model="inputname">
                                    </div>
                                </div>
                            </div>
                            <div class="form_control form_submit">
                                <button class="submit" @click="uploadfile">Lưu thay đổi</button>
                            </div>
                            <input id="image" type="file" @change="changePreviewAvatar" style="display:none" />
                        </form>
                    </div>
                </div>
                <div class="info_right">
                    <span class="info_title">E-mail</span>
                    <div class="list_info">
                        <div class="list_item">
                            <div class="info info_item">
                                <img src="	https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png" alt="">
                                <div class="detail">
                                    <span>Địa chỉ Email</span>
                                    <span>{{inputemail}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="info_title">Bảo mật</span>
                    <div class="list_info">
                        <div class="list_item">
                            <div class="info  info_item">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png" alt="">
                                <div class="detail">
                                    <span>Đổi mật khẩu</span>
                                </div>
                            </div>
                            <div class="status">
                                <span></span>
                                <button class="button active" @click="clickpass">Cập nhật</button>
                            </div>
                        </div>
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
    name: 'accountInFormation',
    components: {
        AdminLayout
    },
    data() {
        return {
            radio: '',
            inputname: '',
            inputemail: '',
            datainfo: {},
            image: ""
        }
    },
    mounted() {
        api.infoAuthme().then((res) => {
            this.datainfo = res.data
            this.inputname = this.datainfo.name;
            this.inputemail = this.datainfo.email
            if (this.datainfo.avatar == null) {
                this.image = "https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png"
            } else {
                this.image = "http://vuecourse.zent.edu.vn/storage/users/" + this.datainfo.avatar
                
            }
        })
    },
    methods: {
        editImg() {
            document.getElementById('image').click()
        },
        uploadfile() {
            let formdata = new FormData();
            formdata.append('name', this.inputname)
            formdata.append('avatar', document.getElementById("image").files[0])
            api.postdatauser(formdata).then(() => {
                api.infoAuthme().then((res) => {
                    this.datainfo = res.data
                    this.inputname = this.datainfo.name;
                    this.inputemail = this.datainfo.email
                    if (this.datainfo.avatar == null) {
                        this.image = "https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png"
                    } else {
                        this.image = "http://vuecourse.zent.edu.vn/storage/users/" + this.datainfo.avatar
                        location.reload()
                    }
                })
            })
        },
        changePreviewAvatar(e) {
            console.log(e);
            const file = e.target.files[0];
            this.image = URL.createObjectURL(file);
        },
        clickemail() {
            this.$router.push({
                path: 'email',
                query: {
                    plan: 'update'
                }
            })
        },
        clickpass() {
            this.$router.push({
                path: 'pass',
                query: {
                    plan: 'update'
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
// #image{
//     position: absolute;
//     left: 120px;
//     top: 221px;
// }
.user {
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
}

.el-radio-group {
    display: flex;
}

.accountinfoWrap {
    background-color: #e9ecef;
    width: 100%;
}

.info {
    display: flex;
    justify-content: center;

    .info_left {
        margin-top: 15px;
        width: 553px;
        padding: 16px 24px 16px 16px;
        border: none;
        border-radius: 10px;
        background-color: #fff;
        margin-right: 10px;

        .info_left_acc {
            background-color: rgb(255, 255, 255);
            border-radius: 4px;
            margin-top: 16px;

            .form_info {
                display: flex;

                .avtarWrap {
                    display: flex;
                    position: relative;
                    border: 4px solid #fea077;
                    width: 112px;
                    height: 112px;
                    background-color: rgb(240, 248, 255);
                    border-radius: 50%;
                    justify-content: center;
                    align-items: center;

                    .avatarView {
                        cursor: pointer;
                        display: flex;

                        img {
                            width: 110px;
                            border-radius: 50%;
                            height: 110px;
                            max-width: 100%;
                        }

                        .edit {
                            position: absolute;
                            width: 16px;
                            height: 16px;
                            background-color: rgb(100, 100, 109);
                            border-radius: 50%;
                            right: 9px;
                            bottom: 3px;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img {
                                width: 10px;
                                height: 10px;
                                max-width: 100%;
                            }
                        }
                    }
                }

                .form_name {
                    width: 100%;

                    .form_control {
                        display: flex;
                        align-items: center;
                        margin: 0 0 34px;

                        .input_name {
                            width: 100px;
                            min-width: 110px;
                            font-size: 14px;
                            color: rgb(51, 51, 51);
                            margin-right: 16px;
                        }

                        .input_text {
                            height: 15px;
                            width: 100%;
                            border-radius: 4px;
                            padding: 10px 12px;
                            border: 1px solid rgb(229, 229, 231);
                        }
                    }
                }
            }

            .form_control {
                display: flex;
                margin: 0px 0px 34px;
                justify-content: center;

                .input_name {
                    width: 110px;
                    min-width: 110px;
                    font-size: 14px;
                    color: rgb(51, 51, 51);
                    margin-right: 16px;
                }

                .input_birthday {
                    display: flex;

                    select {
                        width: 100px;
                        border: 1px solid rgb(204, 204, 204);
                        height: 34px;
                        padding: 6px 12px;
                        line-height: 34px;
                        outline: none;
                        border-radius: 4px;
                        margin: 0px 12px 0px 0px;
                        background: 0px center;
                        box-shadow: none;
                    }
                }

                .submit {
                    border: 0px;
                    height: 40px;
                    border-radius: 4px;
                    color: rgb(255, 255, 255);
                    font-size: 14px;
                    background-color: #ff5f1b;
                    cursor: pointer;
                    margin-top: 40px;
                    padding: 0 40px;

                    &:hover {
                        background-color: #f65009;
                        font-weight: bold;

                    }
                }
            }
        }
    }

    .info_right {
        width: calc(60% - 553px);
        padding: 16px 16px 16px 24px;
        margin-top: 15px;
        width: 553px;
        padding: 16px 24px 16px 16px;
        border: none;
        border-radius: 10px;
        background-color: #fff;
        margin-right: 10px;

        span {
            display: flex;
        }

        .info_title {
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            color: rgb(100, 100, 109);
        }

        .list_info {
            background-color: rgb(255, 255, 255);
            border-radius: 4px;
            margin-bottom: 16px;

            .list_item {
                border-top: 1px solid rgb(248, 248, 248);
                border: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 19px 0px;

                .info_item {
                    background-color: #fff;

                    img {
                        width: 24px;
                        height: 24px;
                    }

                    .detail {
                        display: flex;
                        flex-direction: column;

                        span {
                            font-size: 14px;
                            line-height: 20px;
                            margin: 0px 0px 0px 6px;
                            color: rgb(56, 56, 61);
                            text-align: left;
                        }
                    }
                }

                .status {
                    color: #ff5f1b;
                    justify-content: space-between;
                    display: flex;

                    .button {
                        height: 28px;
                        border-radius: 4px;
                        font-size: 14px;
                        cursor: pointer;
                        padding: 0px 12px;
                        color: #ff5f1b;
                        border: 1px solid #ff5f1b;
                        background-color: rgb(255, 255, 255);

                        &:hover {
                            color: #fff;
                            background-color: #ff5f1b;
                        }
                    }
                }
            }
        }
    }

}
</style>
