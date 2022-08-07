<template>
<div class="ProductList">
    <table>
        <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
        </tr>
        <tr v-if="ListProducts.length === 0">
            <td colspan="6" class="textCenter">Không có dữ liệu</td>
        </tr>
        <tr v-for="product in ListProducts" :key="product.id">
            <td class="input_id">SP{{product.id}}</td>
            <td>
                <p class="text_input">{{product.name}}</p>
            </td>
            <td>{{product.price}}</td>
            <td class="text_input">{{product.quantity}}</td>
            <td class="text_input">
                <p class="textGreen" v-if="product.quantity >0">Còn hàng</p>
                <p class="textRed" v-else>Hết hàng</p>
            </td>
            <td class="btnWrap">
                <button class="editButton" @click="editProduct(product)">Sửa</button>
                <button class="deleteButton" @click="deleteProduct(index)">Xóa</button>
            </td>
        </tr>

    </table>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    name: 'ProductList',
    computed: {
        ...mapState([
            'ListProducts',

        ]),
    },
}
</script>

<style lang="scss">
.ProductList {
    margin-left: 50px;
    table {
        border: 1px solid #a5a7aa;
        border-spacing: 0;
        width: 700px;
        border-radius: 10px;

        th {
            border-radius: 10px 0 0;
            padding: 15px;
            background-color: #fff;
            border-right: 1px solid #a5a7aa;
            border-bottom: 1px solid #a5a7aa;
        }

        td {
           
            border-right: 1px solid #a5a7aa;
            padding: 15px;
            font-size: 14px;
            .textGreen{
                color: rgb(114, 190, 114);
            }
             .textRed{
                color: rgb(226, 116, 116);
            }
            .text_input{
             text-align: center;
            }
            .editButton{
                background: #f2994a;
                border: none;
                font-size: 13px;
                font-weight: 600;
                color: #fff;
                padding: 0 20px;
                height: 40px;
                border-radius: 10px;
                cursor: pointer;
                margin-right: 5px;
            }
            .deleteButton{
                 background: rgb(223, 45, 45);
                border: none;
                font-size: 13px;
                font-weight: 600;
                color: #fff;
                padding: 0 20px;
                height: 40px;
                border-radius: 10px;
                cursor: pointer;
                margin-left: 5px;

            }
        }
        .btnWrap{
            display: flex;
        }
        .input_id{
            text-align:left
        }
    }
}
</style>
