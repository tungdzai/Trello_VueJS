<template>
<div>
    <BaseLayoutHW9>
        <template #banner>
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="image in images" :key="image">
                    <img :src="image" alt="">
                </el-carousel-item>
            </el-carousel>
        </template>
        <template #leftAds>
            <img src="https://i.pinimg.com/170x/a1/85/24/a185243f0706fc1eeff946983df0ff75.jpg" alt="">
        </template>
        <div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">Âm thanh</a></el-breadcrumb-item>
                <el-breadcrumb-item>Tai nghe </el-breadcrumb-item>
            </el-breadcrumb>
            <div class="headphone">
                <img src="https://promotion.sony.com.vn/Data/Sites/1/Product/5548/mdrzx110apbce.jpg" alt="">
                <div class="text_headphone">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae non eaque nulla expedita dicta eligendi reiciendis impedit cumque voluptatum veritatis, id laudantium, laborum enim blanditiis provident tenetur, totam officia ea?</div>
            </div>

        </div>

        <template #rightAds>
            <img src="https://i.pinimg.com/170x/a1/85/24/a185243f0706fc1eeff946983df0ff75.jpg" alt="">
        </template>
    </BaseLayoutHW9>
</div>
</template>

<script>
import BaseLayoutHW9 from './BaseLayoutHW9.vue'
export default {
    name: 'NewsDetailPage',
    components: {
        BaseLayoutHW9
    },
    data() {
        return {
            images: [
                'https://img4.thuthuatphanmem.vn/uploads/2020/06/26/hinh-anh-banner-quang-cao-dien-may_033705887.png',
                'https://www.duchuymobile.com/images/promo/34/s20-plus-pc-banner.jpg',
                'https://didongvang.com/files/assets/banner01.jpg',
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.el-carousel__item img {
    height: 300px;
    width: 100%;
}
.headphone img{
    width: 90%;
}
</style>
