<template>
<div>
    <BaseLayout>
        <template #header>
            Quán lý sản phẩm
        </template>
        <div class="btnWrap">
            <p class="title">{{title}}</p>
            <button class="btn" @click="clickbtn()">Click</button>
        </div>
        <el-table :data="sanpham" style="width: 100%">
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
import { mapState , mapMutations} from 'vuex'
export default {
    name: 'QuanLySanPham',
    components: {
        BaseLayout
    },
    computed: {
      ...mapState('about', [
       'sanpham',
       'title'
      ]),
    },
    methods: {
      ...mapMutations('about', [
        'updatetitle'
      ]),
      clickbtn(){
        this.updatetitle();
        
      }
    },
    data() {
        return {
           
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
