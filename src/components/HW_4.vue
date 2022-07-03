<template>
<div class="container">
    <div class="searchWrap">
        <img src="../assets/search-solid.svg" alt="" class="icon_search">
        <input type="text" class="searchInput" placeholder="Tìm kiếm sản phẩm ..." v-model="searchText">
        <img src="../assets/times-solid.svg" alt="" class="suffix" v-if="searchText.length > 0" @click="clearSearch()">
    </div>
    <table>
        <tr>
            <th>STT</th>
            <th>Sản phẩm</th>
            <th>Giá </th>
            <th>Số lượng</th>
            <th>Trạng thái </th>
        </tr>
        <tr v-if="products.length === 0">
            <td colspan="5" class="testCenter">Không có dữ liệu</td>
        </tr>
        <tr v-for="(product, index) in products" :key="index">
            <td class="textCenter">{{index+1}}</td>
            <td>
                <div class="productNameWrap">
                    <img :src="product.image" alt="" v-if="product.image">
                    <div class="textMain">{{product.name}}</div>
                </div>
            </td>
            <td>{{formatPrice(product.price)}}</td>
            <td class="textCenter">{{product.quantity}}</td>
            <td class="textCenter">
                <span v-if="product.isAvailable"  class="textGreen">Còn hàng</span>
                <span v-else class="textRed">Hết hàng </span>
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
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_3__7.jpg',
                    price: 32990000,
                    quantity: 566,
                    isAvailable: true
                },
                {
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_3__7.jpg',
                    price: 21790000,
                    quantity: 123,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Chính hãng',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_3__7.jpg',
                    price: 16690000,
                    quantity: 0,
                    isAvailable: false
                },
                {
                    name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_3__7.jpg',
                    price: 12190000,
                    quantity: 1023,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_3__7.jpg',
                    price: 26500000,
                    quantity: 45,
                    isAvailable: true
                }
            ],
            products: [{
                    name: 'iPhone 12 Pro Max Chính Hãng',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_3__7.jpg',
                    price: 32990000,
                    quantity: 566,
                    isAvailable: true
                },
                {
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_3__7.jpg',
                    price: 21790000,
                    quantity: 123,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Chính hãng',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_3__7.jpg',
                    price: 16690000,
                    quantity: 0,
                    isAvailable: false
                },
                {
                    name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_3__7.jpg',
                    price: 12190000,
                    quantity: 1023,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                    image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-pro-max_3__7.jpg',
                    price: 26500000,
                    quantity: 45,
                    isAvailable: true
                }
            ],
            searchText: ''
        }
    },
    methods: {
        clearSearch() {
            this.searchText = '';
        },
        formatPrice(price) {
            return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' đ'
        },
    }

}
</script>

<style lang="scss" scoped>
.container {
    .searchWrap {
        .icon_search {
            width: 1.6%;
            position: absolute;
            z-index: 1;
            padding: 2px;
        }

        .searchInput {
            padding: 4px;
            position: relative;
            padding-left: 30px;
            outline: none;
            border-radius: 5px;
            border: 1px solid #ccc;

        }

        .suffix {
            width: 1.5%;
            position: absolute;
            z-index: 1;
            margin-left: -20px;

        }

    }
    table{
        border: 1px solid #ccc;
        border-spacing: 0;
        width: 800px;
    }
}
</style>
