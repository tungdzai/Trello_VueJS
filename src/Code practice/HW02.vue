// Cart && list
<template>
<div class="container">
    <div class="filters">
        <div class="searchWrap">
            <img src="../assets/search-solid.svg" alt="" class="prefix">
            <input type="text" placeholder="Tìm kiếm theo tên sản phẩm...." v-model="searchText" class="searchInput" @keypress="onPressSearch($event)">
            <!-- keypress() xảy ra khi một phím được nhấn xuống -->
            <img src="../assets/times-solid.svg" alt="" v-if="searchText.length>0" @click="clearSearch()" class="suffix">
        </div>
    </div>
    <table class="productList">
        <tr>
            <th>STT</th>
            <th> Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
        </tr>
        <tr v-if="products.length === 0">
            <td colspan="6" class="textCenter">Không có dữ liệu</td>
        </tr>
        <tr v-for="(product,index) in products" :key="index">
            <td>{{index+1}}</td>
            <td>
                <div class="productNameWrap">
                    <img v-if="product.image" :src="product.image" alt="">
                    <img v-else src="https://cdn.hoanghamobile.com/i/preview/Uploads/2021/01/07/40-gps-nhom-blue.png" alt="">
                    <div class="textMain">{{product.name}}</div>
                </div>
            </td>
            <td>{{formatPrice(product.price)}}</td>
            <td class="textCenter">{{product.quantity}}</td>
            <td class="textCenter">
                <span v-if="product.isAvailable" class="textGreen">Còn hàng</span>
                <span v-else class="textRed">Hết hàng</span>
            </td>
            <td>
                <button class="addToCart" @click="addToCart()">Thêm vào giỏ hàng</button>
            </td>
        </tr>
    </table>
    <div class="cartWrap">
        <div class="title">Giỏ hàng</div>
        <div class="cartEmpty" v-if="cartProducts.length === 0">
            Không có sản phẩm nào được thêm vào giỏ
        </div>
        <div class="cartProductWrap" v-for="(product, index) in cartProducts" :key="product.id">
            <div class="cartProductNameWrap">
                <img :src="product.images" v-if="product.image" alt="">
                <div>
                    <p>{{formatProductName(product.name)}}</p>
                    <div>{{formatPrice(product.price)}}</div>
                </div>
            </div>
            <div class="actions">
                <input type="number" class="quantityInput" v-model="cardProducts[index].quantity">
                <button class="removeFromCartButton"> Xóa</button>
            </div>
        </div>
        <div class="cartTotal">
            Tổng tiền: {{total}}
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: "HW01",
    data() {
        return {
            products: [{
                    name: 'iPhone 12 Pro Max Chính Hãng',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
                    price: 32990000,
                    quantity: 566,
                    isAvailable: true
                },
                {
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: '',
                    price: 21790000,
                    quantity: 123,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Chính hãng',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
                    price: 16690000,
                    quantity: 0,
                    isAvailable: false
                },
                {
                    name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
                    price: 12190000,
                    quantity: 1023,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                    image: '',
                    price: 26500000,
                    quantity: 45,
                    isAvailable: true
                }
            ],
            sourceProducts: [{
                    name: 'iPhone 12 Pro Max Chính Hãng',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
                    price: 32990000,
                    quantity: 566,
                    isAvailable: true
                },
                {
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: '',
                    price: 21790000,
                    quantity: 123,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Chính hãng',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
                    price: 16690000,
                    quantity: 0,
                    isAvailable: false
                },
                {
                    name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
                    price: 12190000,
                    quantity: 1023,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                    image: '',
                    price: 26500000,
                    quantity: 45,
                    isAvailable: true
                }

            ],
            cartProducts: [],
            searchText: '',
        }

    },
    computed: {
        total() {
            let result = 0
            return this.formatPrice(result)
        }
    },
    methods: {
        formatPrice(price) {
            return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' đ'
        },
        clearSearch() {
            this.searchText = '',
                this.products = this.sourceProducts
        },
        formatProductName(name = '') {
            if (name && name.length > 25) {
                name = `${name.substring(0, 25)}...`
            }
            return name
        },
        onPressSearch(event) {
            if (this.searchText && event.code === 'Enter') {
                this.products = this.sourceProducts.filter((product) => {
                    let name = product.name.toLowerCase()
                    return name.includes(this.searchText.toLowerCase())
                })
            } else {
                this.products = this.sourceProducts
            }

        },
        addToCart(product){
            if(product.quantity ===0){
                alert('Sản phẩm hết hàng')
                return false
            }
            let inCartProducts = this.inCartProducts.filter((cartProduct) =>{
                return cartProduct.id === product.id
            })
            if(inCartProducts.length > 0){
                
            }
        }

    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 24px;
    color: #253036;
    height: 100vh;

    .filters {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        .searchWrap {
            position: relative;
            width: 272px;

            .prefix {
                position: absolute;
                width: 16px;
                height: 16px;
                top: 12px;
                left: 12px;
                cursor: pointer;
            }

            .searchInput {
                width: 200px;
                padding: 12px 35px;
                border-radius: 5px;
                border: 1px solid #d8e0ea;
                outline: none;
                font-size: 14px;
            }

            .suffix {
                position: absolute;
                top: 14px;
                height: 14px;
                width: 14px;
                right: 10px;
                cursor: pointer;
            }

        }

    }

    table {
        border: 1px solid #d8e0ea;
        ;
        border-spacing: 0;
        width: 800px;

        .textCenter {
            text-align: center;
        }

        .textGreen {
            color: #39cd74;
        }

        .textRed {
            color: #f54b5e;

        }

        th {
            background: #f2f6fe;
            padding: 14px;
            border-right: 1px solid #d8e0ea;
            border-bottom: 1px solid #d8e0ea;
        }

        td {
            text-align: center;
            padding: 12px;
            font-size: 14px;
            border-right: 1px solid #d8e0ea;

        }

        .productNameWrap {
            display: flex;
            align-items: center;

            img {
                width: 40px;
                height: 40px;
                margin: 0 8px;
            }
        }
    }

    .cartWrap {
        border: 1px solid #d8e0ea;
        width: 500px;
        height: 500px;
        margin-left: 20px;
        padding: 24px;
        position: relative;

        .title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .cartEmpty {
            text-align: center;
            margin-top: 100px;
        }

        .cartProductWrap {
            height: 60px;
            border-bottom: 1px solid #d8e0ea;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .cartProductNameWrap {
                display: flex;
                align-items: center;

                img {
                    margin-right: 8px;
                    width: 40px;
                    height: 40px;
                }
            }

            .actions {
                display: flex;
                align-items: center;

                .quantityInput {
                    width: 80px;
                    height: 30px;
                    margin-right: 12px;
                    border: 1px solid #d8e0ea;
                }

                .removeFromCartButton {
                    width: 60px;
                    height: 30px;
                    background: #f54b5e;
                    border: unset;
                    border-radius: 5px;
                    color: #fff;
                    cursor: pointer;
                }
            }

        }

        .cartTotal {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 24px;
            color: #f54b5e;
            font-size: 20px;
            font-weight: bold;
        }

    }

}
</style>
