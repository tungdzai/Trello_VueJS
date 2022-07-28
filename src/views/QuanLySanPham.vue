<template>
<div>
    <BaseLayout>
        <template #header>
            Quán lý sản phẩm
        </template>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Ngày nhập" width="180">
            </el-table-column>
            <el-table-column prop="name" label="Tên sản phẩm" width="280">
            </el-table-column>
            <el-table-column prop="inputmoney" label="Giá nhập vào" width="180">
            </el-table-column>
            <el-table-column prop="inputnumber" label="Số lượng nhập vào" width="180">
            </el-table-column>
            <el-table-column prop="outputnumber" label="Số lượng bán ra" width="180">
            </el-table-column>
            <el-table-column prop="outputmoney" label="Giá bán ra">
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
import BaseLayout from '../layouts/BaseLayout.vue'
export default {
    name: 'QuanLySanPham',
    components: {
        BaseLayout
    },
    data() {
        return {
            tableData: [{
                    date: '28-7-2022',
                    name: 'Quần Jeans Wash Scratch Simwood Denim 1579',
                    inputmoney: '595,000₫',
                    inputnumber:'3000',
                    outputnumber:'2400',
                    outputmoney:"900,000đ"
                },
                {
                    date: '28-7-2022',
                    name: 'Áo Thun Overspray Stencil Shapes 1568',
                    inputmoney: '295,000₫',
                    inputnumber:'3000',
                    outputnumber:'2400',
                    outputmoney:"900,000đ",
                },
                {
                    date: '28-7-2022',
                    name: 'Quần Shorts Light Blue Ripped Slimfit Simwood Denim 1547',
                    inputmoney: '395,000₫ ',
                    inputnumber:'3000',
                    outputnumber:'2400',
                    outputmoney:"900,000đ"
                },
                {
                    date: '28-7-2022',
                    name: 'Túi Xách 1137',
                    inputmoney: '187,500₫',
                    inputnumber:'3000',
                    outputnumber:'2400',
                    outputmoney:"900,000đ"
                }
            ]
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
