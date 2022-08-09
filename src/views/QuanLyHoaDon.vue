<template>
<div>
    <BaseLayout>
        <template #header>
            Quản lý hóa đơn
        </template>
        <el-table :data="hoadon" style="width: 100%">
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
import BaseLayout from '../layouts/BaseLayout.vue'
import { mapState } from 'vuex'
export default {
    name: 'QuanLyHoaDon',
    components: {
        BaseLayout
    },
    data() {
    },
    computed: {
      ...mapState('home', [
       'hoadon'
      ]),
    },

}
</script>

<style lang="scss" scoped>
.paginationWrap {
    margin-top: 20px;
    text-align: right;
}
</style>