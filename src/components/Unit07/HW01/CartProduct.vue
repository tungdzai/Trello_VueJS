<template>
<div class="cartWrap">
    <div class="cart">Giỏ hàng</div>
    <div class="cart_empty" v-if="cartProducts.length === 0">
        Không có sản phẩm nào được thêm vào giỏ
    </div>
    <div class="cartProduct" v-for="product in cartProducts" :key="product.id">
        <div class="cartProduct_name">
            <img :src="product.image" alt="">
            <div>
                <p>{{formatProductName(product.name)}}</p>
                <span>{{formatPrice(product.price)}}</span>
            </div>
        </div>
        <div class="actions">
            <input class="quantity_input" type="number" v-model="product.quantity">
            <button class="delete" @click="deleteProduct">Xoá</button>
        </div>
    </div>
    <div class="cartTotal">
        Tổng tiền:
        {{sum}}
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    name: 'CartProduct',
    computed: {
        ...mapState([
            'cartProducts'
        ]),
        sum() {
            let result = 0;
            this.cartProducts.map((product) => {
                result += product.quantity * product.price
            })
            return this.formatPrice(result)

        }

    },
    methods: {
        formatPrice(price) {
            return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' đ'
        },
        formatProductName(name = '') {
            if (name && name.length > 25) {
                name = `${name.substring(0, 25)}...`
            }
            return name
        },
        deleteProduct(index) {
             this.cartProducts.splice(index, 1)
          

        }

    },
}
</script>

<style lang="scss" scoped>
.cartWrap {
    position: relative;
    border: 1px solid #abadaf;
    margin-left: 40px;
    width: 700px;
    height: 450px;
    padding: 24px;

    .cart {
        text-align: left;
        font-size: 20px;
        font-weight: 600;
    }

    .cart_empty {
        text-align: center;
    }

    .cartTotal {
        position: absolute;
        font-weight: 600;
        font-size: 25px;
        bottom: 0;
        right: 0;
        padding: 25px;
        color: red;

    }

    .cartProduct {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        border-bottom: 1px solid #abadaf;

        .cartProduct_name {
            display: flex;
            align-items: center;

            img {

                margin-right: 15px;
                width: 50px;
                height: 50px;
            }

            div {
                display: flex;
                align-items: center;

                span {
                    margin-left: 80px;
                }
            }
        }

        .actions {
            display: flex;
            align-items: center;

            .quantity_input {
                width: 50px;
                height: 50px;
                margin-right: 12px;
                border: none;
            }

            .delete {
                padding: 7px;
                width: 80px;
                border: none;
                border-radius: 10px;
                background: red;
                color: #fff;
                cursor: pointer;
            }

        }
    }
}

// .cartWrap {
//     border: 1px solid #abadaf;
//     width: 500px;
//     height: 500px;
//     margin-left: 20px;
//     padding: 24px;
//     position: relative;

//     .cart {
//         font-size: 18px;
//         font-weight: bold;
//         margin-bottom: 20px;
//     }

//     .cartEmpty {
//         text-align: center;
//         margin-top: 100px;
//     }

//     .cartProductWrap {
//         height: 60px;
//         border-bottom: 1px solid $colorStroke;
//         display: flex;
//         align-items: center;
//         justify-content: space-between;

//         .cartProductNameWrap {
//             display: flex;
//             align-items: center;

//             img {
//                 margin-right: 8px;
//                 width: 40px;
//                 height: 40px;
//             }
//         }

//         .actions {
//             display: flex;
//             align-items: center;

//             .quantityChangeInput {
//                 width: 80px;
//                 height: 30px;
//                 margin-right: 12px;
//                 border: 1px solid $colorStroke;
//             }

//             .removeFromCartButton {
//                 width: 60px;
//                 height: 30px;
//                 background: $colorRed;
//                 border: unset;
//                 border-radius: 5px;
//                 color: $colorWhite;
//                 cursor: pointer;
//             }
//         }
//     }

//     .cartTotal {
//         position: absolute;
//         bottom: 0;
//         right: 0;
//         padding: 24px;
//         color: $colorRed;
//         font-size: 20px;
//         font-weight: bold;
//     }
// }
</style>
