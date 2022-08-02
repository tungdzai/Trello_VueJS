<template>
<div class="formWrap">
    <div class="formRight">
        <div class="inputWrap">
            <div class="inputLabel">Nhập tiêu đề</div>
            <input type="text" class="input_text" placeholder="Nhập tiêu đề" v-model="title">
        </div>
        <div class="inputWrap">
            <div class="inputLabel">Nhập nội dung</div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Nhập nội dung" v-model="content"></textarea>
        </div>
    </div>
    <div class="formLeft">
        <div class="title">{{title}}</div>
        <div class="content" v-html="content"></div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            title:'',
            content:''

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
