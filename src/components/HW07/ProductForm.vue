<template>
<div class="formWrap">
    <div class="title">Sản phẩm</div>
    <div class="inputWrap">
        <div class="inputLabel">Tên sản phẩm <span>*</span></div>
        <input type="text" placeholder="Nhập tên sản phẩm" v-model="name">
        <div class="errorMsg">
            {{nameErrorMsg}}
        </div>
    </div>
    <div class="inputWrap">
        <div class="inputLabel">Đơn giá <span>(*)</span></div>
        <input type="number" placeholder="Nhập đơn giá sản phẩm" v-model="price">
        <div class="errorMsg">
            {{priceErrorMsg}}
        </div>
    </div>
    <div class="inputWrap">
        <div class="inputLabel">Số lượng <span>(*)</span></div>
        <input type="number" placeholder="Nhập số lượng sản phẩm" v-model="quantity">
        <div class="errorMsg">
            {{quantityErrorMsg}}
        </div>
    </div>
    <div class="formActions">
        <button class="saveButton" @click="saveProduct">Tạo mới</button>
        <button class="defaultButton" @click="clearData">Hủy</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProductForm',
    props: ['product'],
    data() {
        return {
            name: '',
            price: '',
            quantity: '',
            nameErrorMsg: '',
            priceErrorMsg: '',
            quantityErrorMsg: '',
        }
    },
    watch: {
        name() {
            this.nameErrorMsg = ''
        },
        price() {
            this.priceErrorMsg = ''
        },
        quantity() {
            this.quantityErrorMsg = ''
        },
        product() {
            this.name = this.product.name
            this.price = this.product.price
            this.quantity = this.product.quantity
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.formWrap {
    border: 1px solid #d8e0ea;
    width: 500px;
    min-height: 400px;
    margin-right: 20px;
    padding: 24px;
    position: relative;

    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #0080dd;
    }

    .inputWrap {
        margin-bottom: 12px;

        .inputLabel {
            font-weight: bold;
            margin-bottom: 8px;
            text-align: left;

            span {
                color: #f54b5e;
            }
        }

        input {
            width: 100%;
            height: 40px;
            border: 1px solid #d8e0ea;
            border-radius: 5px;
            outline: unset;
            font-size: 14px;

            &:hover,
            &:active,
            &:focus {
                border: 1px solid #0080dd;
            }
        }
    }

    .formActions {
        padding: 24px 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .saveButton {
            background: #0080dd;
            border: unset;
            font-size: 14px;
            font-weight: bold;
            color: #fff;
            width: 80px;
            height: 40px;
            border-radius: 5px;
            cursor: pointer;
        }

        .defaultButton {
            background: #d8e0ea;
            border: unset;
            font-size: 14px;
            font-weight: bold;
            color: #253036;
            width: 80px;
            height: 40px;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 8px;
        }
    }

    .errorMsg {
        color: #f54b5e;
        margin-top: 4px;
        font-size: 12px;
    }

    .hasError {
        border: 1px solid #f54b5e !important;
    }
}
</style>
