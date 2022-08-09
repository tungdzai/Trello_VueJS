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
            <td>{{formatPrice(product.price)}}</td>
            <td class="text_input">{{product.quantily}}</td>
            <td class="text_input">
                <p class="textGreen" v-if="product.quantily>0">Còn hàng</p>
                <p class="textRed" v-else>Hết hàng</p>
            </td>
            <td class="btnWrap">
                <button class="editButton" @click="clickedit(product)">Sửa</button>
                <button class="deleteButton" @click="clickdelete(product)">Xóa</button>
            </td>
        </tr>

    </table>
    <div class="paginationWrap">
        <div class="pagination">
            <!-- {{ total === 0 ? 'Hiển thị 0 - 0 trên tổng 0 (0 trang)' :
                `Hiển thị ${from} - ${to} trên tổng ${total} (${lastPage} trang)`}} -->
        </div>
        <div class="paginationbtn">
            <button class="button_pagination">
                <img src="../../../assets/icons/back.png" alt="">
            </button>
            <button class="button_pagination">
                <img src="../../../assets/icons/next.png" alt="">
            </button>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapMutations
} from 'vuex'
export default {
    name: 'ProductList',
    computed: {
        ...mapState([
            'ListProducts',
        ]),
    },
    methods: {
        formatPrice(price) {
            return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' đ'
        },
        clickdelete(item) {
            for (let i = 0; i < this.ListProducts.length; i++) {
                if (item.id === this.ListProducts[i].id) {
                    this.ListProducts.splice(i, 1)
                }
            }
        },
        ...mapMutations([
            'edit',
        ]),
        clickedit(itemEdit) {
            this.edit = itemEdit
        }
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
            width: 100px;
            border-right: 1px solid #a5a7aa;
            padding: 15px;
            font-size: 14px;

            .textGreen {
                color: rgb(114, 190, 114);
            }

            .textRed {
                color: rgb(226, 116, 116);
            }

            .text_input {
                text-align: center;
            }

            .editButton {
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

            .deleteButton {
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

        .btnWrap {
            display: flex;
            width: 140px;
        }

        .input_id {
            text-align: left
        }
    }

    .paginationWrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;

        .paginationbtn {
            display: flex;

            button {
                cursor: pointer;
                padding: 0;
                margin-left: 10px;
                border: none;
                background-color: #fff;

                img {
                    width: 100%;
                    height: 28px;

                }
            }

        }

    }
}
</style>