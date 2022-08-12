<template>
<div>
    <el-table :data="products" style="width: 100%">
        <el-table-column prop="id" label="Date" width="180">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
        <el-table-column prop="price" label="Address">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
// import axios from 'axios'
import api from '../../api'
export default {
    name: 'listPr',
    data() {
        return {
            products: [],
        }
    },
    mounted() {
        // axios({
        //     method: 'get',
        //     url: 'http://vuecourse.zent.edu.vn/api/products',
        // }).then((response) => {
        //     this.products = response.data.data.data
        // }).catch((error) => {
        //     console.log(error);
        // });
        api.getproducts().then((response) => {
            this.products = response.data.data.data
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
        let sanpham = {
            name: "iphone",
            price: 560000,
            description: 'Chụp ảnh siêu nét, pin cực khỏe'
        }
        api.saveProducts(sanpham).then((response) => {
            this.products = response.data.data.data
            console.log(response);
        }).catch((error) => {
            // handle error
            console.log(error);
        });

    }
}
</script>

<style lang="scss" scoped>
</style>
