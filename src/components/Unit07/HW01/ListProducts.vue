<template>
<div class="container">
    <div class="ListProducts">
        <table>
            <tr>
                <th>STT</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
            </tr>
            <tr v-for="product in products" :key="product.id">
                <td class="text_index">{{product.id}}</td>
                <td>
                    <div class="name_product">
                        <img v-if="product.image" :src="product.image" alt="">
                        <div class="text_name">{{formatProductName(product.name)}}</div>
                    </div>
                </td>
                <td>{{formatPrice(product.price)}}</td>
                <td class="text_quantily">{{product.quantity}}</td>
                <td class="text_quantily">
                    <p v-if="product.quantity > 0" class="textGreen">Còn hàng</p>
                    <p v-else class="textRed">Hết hàng</p>
                </td>
                <td>
                    <button class="add" @click="addToCart(product)">Thêm vào giỏ</button>
                </td>
            </tr>
        </table>
    </div>
    <CartProduct />
</div>
</template>

<script>
import CartProduct from './CartProduct.vue';
import {
    mapState
} from 'vuex'
export default {
    name: 'ListProducts',
    components: {
        CartProduct
    },
    computed: {
        ...mapState([
            'products',
            'cartProducts'
        ]),
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
        addToCart(product) {
            if (product.quantity === 0) {
                alert('Sản phẩm hết hàng')
                return false;

            } else {
                let inCart = this.cartProducts.filter((cartProduct) => {
                    return cartProduct.id === product.id
                })
                if (inCart.length > 0) {
                    let indexInCart = this.cartProducts.findIndex((cartProduct) => {
                        return cartProduct.id === product.id
                    })
                    if (indexInCart !== -1) {
                        this.cartProducts[indexInCart].quantity = parseInt(this.cartProducts[indexInCart].quantity) + 1
                        console.log(product)
                    }
                } else {
                    console.log(product)
                    this.cartProducts.push({
                        ...product,
                        quantity: 1,
                        
                    })
                }
            }

        },

    }

}
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    padding: 24px;
    color: #253036;
    display: flex;
    background-color: #fff;

    .ListProducts {
        .text_index {
            text-align: center;
        }

        .textGreen {
            color: green;
        }

        .textRed {
            color: red;
        }

        .text_name {
            color: #75b2dd;
        }

        table {
            border: 1px solid #abadaf;
            width: 900px;
            border-spacing: 0;

            th {
                background: #8591aa;
                padding: 14px;
                border-right: 1px solid #abadaf;
            }

            td {
                text-align: left;
                font-size: 16px;
                border-right: 1px solid#abadaf;
                padding: 15px;
            }

            .text_quantily {
                text-align: center;
                padding: 20px;
            }

            .name_product {
                display: flex;
                align-items: center;

                img {
                    margin-right: 15px;
                    width: 50px;
                    height: 50px;
                }
            }

            .add {
                background: rgb(168, 226, 144);
                font-size: 16px;
                font-weight: 600;
                color: rgb(100, 95, 95);
                width: 120px;
                padding: 10px 0;
                border-radius: 5px;
                cursor: pointer;
                border: none;
            }
        }
    }
}
</style>
