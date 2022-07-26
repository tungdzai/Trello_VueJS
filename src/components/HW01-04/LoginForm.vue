<template>
<div class="container">
    <div class="leftPanel">
        <div class="inputWrap">
            <div class="inputLabel">Họ và tên</div>
            <input type="text" placeholder="Họ và Tên" v-model="name">
            <p class="error_name">{{error_name}}</p>
        </div>
        <div class="inputWrap">
            <div class="inputLabel">Ngày sinh</div>
            <input type="text" placeholder="Ngày sinh" v-model="birth">
        </div>
        <div class="inputWrap">
            <div class="inputLabel">Số điện thoại</div>
            <input type="text" placeholder="Số điện thoại" v-model="phone">
            <p class="error_name">{{error_phone}}</p>
        </div>
        <div class="inputWrap">
            <div class="inputLabel">Link facebook</div>
            <input type="text" placeholder="Facebook" v-model="facebook">
        </div>
        <div class="inputWrap">
            <button class="btn_save" @click="add">Save</button>
            <button class="btn_clear" @click="reset">Clear</button>
        </div>

    </div>
    <div class="rightPanel">
        <div class="title">
            <span class="infoLabel">Họ tên:</span>
            <span class="infoValue">{{fullName}}</span>
        </div>
        <div class="title">
            <span class="infoLabel">Ngày sinh:</span>
            <span class="infoValue">{{birthday}}</span>
        </div>
        <div class="title">
            <span class="infoLabel">Số điện thoại:</span>
            <span class="infoValue">{{numberPhone}}</span>
        </div>
        <div class="title">
            <span class="infoLabel">Link facebook:</span>
            <span class="infoValue"><a href="linkFB" target="_blank">{{linkFB}}</a></span>
        </div>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            birth: '',
            phone: '',
            facebook: '',
            fullName: '',
            birthday: '',
            numberPhone: '',
            linkFB: '',
            error_name: ''

        }

    },
    methods: {
        reset() {
            this.name = ''
            this.birth = ''
            this.phone = ''
            this.facebook = ''
            this.fullName = ''
            this.birthday = ''
            this.numberPhone = ''
            this.linkFB = ''
            this.error_name = ''

        },

        validate() {
            if (!this.name) {
                this.error_name = 'Bạn chưa nhập Họ và Tên'
            } else if (this.name.length <= 7) {
                this.error_name = 'Họ và tên chưa đúng định dạng'
                this.fullName = ''

            } else {
                this.error_name = ''
                this.fullName = this.name
            }
        },
        add() {

            this.birthday = this.birth
            this.numberPhone = this.phone
            this.linkFB = this.facebook
            this.validate()
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    .leftPanel {
        background: #ffffff;
        border: 1px solid #000000;
        padding: 24px;
        border-radius: 10px;
        height: 350px;
        width: 300px;

        .inputWrap {
            margin-bottom: 10px;

            .inputLabel {
                text-align: left;
                font-weight: bold;
                margin-bottom: 8px;
            }

            input {
                height: 40px;
                width: 100%
            }

            .btn_save {
                margin-right: 10px;
                padding: 10px;
            }

            .btn_clear {
                margin-left: 10px;
                padding: 10px;
            }

            .error_name {
                text-align: left;
                color: red;
                opacity: 0.4;
            }
        }
    }

    .rightPanel {
        background: #ffffff;
        border: 1px dashed #000000;
        padding: 24px;
        border-radius: 10px;
        height: 350px;
        width: 500px;
        margin-left: 80px;

        .title {
            text-align: left;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;

            a {
                text-decoration: none;
            }
        }
    }
}
</style>
