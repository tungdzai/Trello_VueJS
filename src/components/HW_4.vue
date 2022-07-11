<template>
<div class="container">
    <div class="filters">
        <div class="searchWrap">
            <img src="../assets/search-solid.svg" class="prefix" alt="">
            <input class="searchInput" type="text" placeholder="Tìm kiếm theo tên sản phẩm" v-model="searchText" @keypress="onPressSearch($event)">
            <img v-if="searchText.length > 0" @click="clearSearch()" src="../assets/times-solid.svg" class="suffix" alt="">
        </div>
    </div>
    <table>
        <tr>
            <th>STT</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Trạng thái</th>
        </tr>
        <tr v-if="products.length === 0">
            <td colspan="5" class="textCenter">Không có dữ liệu</td>
        </tr>
        <tr v-for="(product, index) in products" :key="index">
            <td class="textCenter">{{index + 1}}</td>
            <td>
                <div class="productNameWrap">
                    <img v-if="product.image" :src="product.image" alt="">
                    <img v-else src="" alt="">
                    <div class="textMain">{{product.name}}</div>
                </div>
            </td>
            <td>{{formatPrice(product.price)}}</td>
            <td class="textCenter">{{product.quantity}}</td>
            <td class="textCenter">
                <span v-if="product.isAvailable" class="textGreen">Còn hàng</span>
                <span v-else class="textRed">Hết hàng</span>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: 'HW_4',
    data() {
        return {
            sourceProducts: [{
                    name: 'iPhone 12 Pro Max Chính Hãng',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
                    price: 32990000,
                    quantity: 566,
                    isAvailable: true
                },
                {
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
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
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
                    price: 26500000,
                    quantity: 45,
                    isAvailable: true
                }
            ],
            products: [{
                    name: 'iPhone 12 Pro Max Chính Hãng',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
                    price: 32990000,
                    quantity: 566,
                    isAvailable: true
                },
                {
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
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
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_2__7.jpg',
                    price: 26500000,
                    quantity: 45,
                    isAvailable: true
                }
            ],
            searchText: ''
        }
    },
    methods: {
        formatPrice(price) {
            return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' đ'
        },
        clearSearch() {
            this.searchText = ''
            this.products = this.sourceProducts
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
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    width: 100%;
    padding: 24px;
    color: #253036;

    .textCenter {
        text-align: center;
    }

    .textGreen {
        color: #39cd74;
    }

    .textRed {
        color: #f54b5e;
        ;
    }

    .textMain {
        color: #0080dd;
    }

    .filters {
        margin-bottom: 30px;
        display: flex;
        align-items: center;

        .searchWrap {
            position: relative;
            width: 272px;

            .prefix {
                width: 16px;
                height: 16px;
                position: absolute;
                top: 12px;
                left: 12px;
            }

            .searchInput {
                width: 200px;
                padding: 12px 35px;
                border-radius: 2px;
                border: 1px solid #d8e0ea;
                outline: unset;
                font-size: 14px;
            }

            .suffix {
                position: absolute;
                top: 14px;
                right: 10px;
                width: 14px;
                height: 14px;
                cursor: pointer;
            }
        }
    }

    table {
        border: 1px solid #d8e0ea;
        ;
        border-spacing: 0;
        width: 800px;

        th {
            background: #f2f6fe;
            padding: 14px;
            border-right: 1px solid #d8e0ea;
            ;
            border-bottom: 1px solid #d8e0ea;
            ;
        }

        td {
            text-align: left;
            padding: 12px;
            font-size: 14px;
            border-right: 1px solid #d8e0ea;
            ;
        }

        .productNameWrap {
            display: flex;
            align-items: center;

            img {
                margin-right: 8px;
                width: 40px;
                height: 40px;
            }
        }
    }
}
</style>
