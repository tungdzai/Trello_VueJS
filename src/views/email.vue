<template>
<div>
    <AdminLayout>
        <template #header>
            <span class="user">Cập nhật email</span>
        </template>
        <div class="emailWrap">
            <div class="emailinfo">
                <div class="info_number">
                    <span class="text">Email</span>
                    <div class="inputemailWrap">
                        <img src="	https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png" alt="">
                        <input type="text" placeholder="Nhập email">
                        <button>Lưu thay đổi</button>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</div>
</template>

<script>
import AdminLayout from '../layouts/AdminLayout.vue'
export default {
    name: 'emailUpdate',
    components: {
        AdminLayout
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

.emailWrap {
    background-color: #fff;
    width: 50%;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    margin-top: 20px;

    .emailinfo {
        padding: 20px;
        .info_number {
            border: 1px solid #e9ecef;
            width: 380px;
            margin: 0 auto;
            padding: 15px;
            text-align: left;
            border-radius: 10px;


            .inputemailWrap {
                display: flex;
                position: relative;
                flex-wrap: wrap;

                img {
                    width: 28px;
                    height: 28px;
                    position: absolute;
                    top: 8%;
                    left: 5px;

                }

                input {
                    border: 1px solid  rgb(196, 196, 207);
                    width: 100%;
                    height: 40px;
                    border-radius: 4px;
                    margin: 4px 0px 34px;
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
                    background-color: rgb(11, 116, 229);
                    cursor: pointer;
                }

            }

        }

    }
}
</style>
