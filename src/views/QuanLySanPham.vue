<template>
<div>
    <BaseLayout>
        <template #header>
            Quản lý sản phẩm
        </template>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="180">
            </el-table-column>
            <el-table-column prop="address" label="Address">
            </el-table-column>
        </el-table>

        <div class="paginationWrap">
            <el-pagination background layout="prev, pager, next" :total="60">
            </el-pagination>
        </div>
    </BaseLayout>
</div>
</template>

<script>
import BaseLayout from '../views/QuanLySanPham.vue'
export default {
    name: 'QuanLySanPham',
    components: {
        BaseLayout
    },
    data() {
        return {
            tableData: [{
                date: '2022-15-07',
                name: 'Áo thun',
                address: ''
            }, {
                date: '2022-15-07',
                name: 'ÁO sơ mi',
                address: ''
            }, {
                date: '2022-15-07',
                name: 'Quần Jean',
                address: ''
            }, {
                date: '2022-15-07',
                name: 'Dép LV',
                address: ''
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
.paginationWrap {
    margin-top: 20px;
    text-align: right;
}
</style>