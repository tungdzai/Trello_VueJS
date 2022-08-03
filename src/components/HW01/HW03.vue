<template>
<div class="formWrap">
    <div class="formRight">
        <div class="inputWrap">
            <div class="inputLabel">Họ và tên</div>
            <input type="text" class="input_text" placeholder="Họ và tên" v-model="name">
        </div>
        <div class="inputWrap">
            <div class="inputLabel">Ngày sinh</div>
            <input type="text" class="input_text" placeholder="Ngày sinh" v-model="birth">
        </div>
        <div class="inputWrap">
            <div class="inputLabel">Số điện thoại</div>
            <input type="text" class="input_text" placeholder="Số điện thoại" v-model="phone">
        </div>
        <div class="inputWrap">
            <div class="inputLabel">Link facebook</div>
            <input type="text" class="input_text" placeholder="Link facebook" v-model="facebook">
        </div>
        <div class="btn">
            <button class="save" @click="save">Save</button>
            <button class="clear" @click="clear">Clear</button>
        </div>
    </div>
    <div class="formLeft">
        <div class="title">Họ và tên:{{titlename}}</div>
        <div class="title">Ngày sinh:{{titlebirth}}</div>
        <div class="title">HSố điện thoại:{{titlephone}}</div>
        <div class="title">Link facebook:{{titlefacebook}}</div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            facebook: '',
            phone: '',
            birth: '',
            titlename: '',
            titlephone: '',
            titlebirth: '',
            titlefacebook: ''

        }
    },
    methods:{
        save(){
            this.titlename=this.name,
            this.titlebirth=this.birth,
            this.titlephone=this.phone,
            this.titlefacebook=this.facebook
        },
        clear(){
            this.titlename=''
            this.titlebirth=''
            this.titlephone=''
            this.titlefacebook=''
        }
    }

}
</script>

<style lang="scss" scoped>
.formWrap {
    display: flex;

    .formRight {
        margin: 20px;
        border: 1px solid #000;
        height: 300px;
        width: 300px;
    }

    .formLeft {
        margin: 20px;
        border: 1px solid #000;
        height: 300px;
        width: 500px;
    }
}
</style>
