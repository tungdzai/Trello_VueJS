<template>
<div class="ProductForm">
    <div class="title">Sản phẩm</div>

    <div class="input_text">
        <span>Tên sản phẩm </span>
        <br>
        <input type="text" placeholder="Nhập tên sản phẩm">
        <div class="errorname">1</div>
    </div>
    <div class="input_text">
        <span>Đơn giá </span>
        <br>
        <input type="text" placeholder="Nhập đơn giá sản phẩm">
        <div class="errorprice">1</div>
    </div>
    <div class="input_text">
        <span>Số lượng</span>
        <br>
        <input type="text" placeholder="Nhập số lượng sản phẩm">
        <div class="errorquantity">1</div>
    </div>
    <div class="inputWrap">
        <button class="create_new">Tạo mới</button>
        <button class="default">Hủy</button>
    </div>

</div>
</template>

<script>
export default {
    name: 'ProductForm'
}
</script>

<style lang="scss" scoped>
.ProductForm {
    border-radius: 10px;
    background: #fff;
    width: 500px;
    padding: 15px;
    position: relative;
    border: 1px solid #a5a7aa;

    .title {
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 15px;
        color: #68c2f2;
        text-align: left;
    }
    .input_text{
        margin-bottom: 20px;
        text-align: left;
        padding: 10px;
        input{
            width: 100%;
            margin: 15px 0 ;
            padding: 5px;
            height: 30px;
            border-radius: 10px;
            border: none;
            background-color: #d9dce0;
            outline: none;
        }
        span{
            font-size: 17px;
        }
    }
    .inputWrap{
        margin-bottom: 20px;
        button{
            height: 40px;
            background-color: #68c2f2;
            font-size: 16px;
            border-radius: 10px;
            padding: 0 30px;
            font-weight: 600;
            border: none;
            margin: 10px;
            color: #fff;
            cursor: pointer;
        }
    }
}
</style>
