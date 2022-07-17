<template>
<el-row class="container">
    <el-row class="bannerWrap">
        <slot name="banner"></slot>
    </el-row>
    <el-row>
        <el-menu default-active="5" class="menutab" mode="horizontal">
            <el-menu-item index="1">Trang chủ</el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-mobile-phone"></i> Điện Thoại</template>
                <el-menu-item index="2-1">Apple</el-menu-item>
                <el-menu-item index="2-2">Samsung</el-menu-item>
                <el-menu-item index="2-3">Vivo</el-menu-item>
                <el-menu-item index="2-4">Xiaomi</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-watch"></i> Đồng hồ</template>
                <el-menu-item index="3-1">Apple Watch</el-menu-item>
                <el-menu-item index="3-2">Samsung Galaxy Watch </el-menu-item>
                <el-menu-item index="3-3">OPPO Watch</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-s-platform"></i> LAPTOP</template>
                <el-menu-item index="4-1">Dell</el-menu-item>
                <el-menu-item index="4-2">Apple </el-menu-item>
                <el-menu-item index="4-3">ASUS</el-menu-item>
                <el-menu-item index="4-4">Microsoft</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title"><i class="el-icon-headset"></i>Âm thanh</template>
                <el-menu-item index="5-1">
                    <template slot="title">Loa</template>
                </el-menu-item>
                <el-menu-item index="5-2">Tai nghe </el-menu-item>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title"><i class="el-icon-s-home"></i> SMART HOME</template>
                <el-menu-item index="6-1">Máy lọc không khí </el-menu-item>
                <el-menu-item index="6-2">Robot hút bụi</el-menu-item>
                <el-menu-item index="6-3">FPT box</el-menu-item>
                <el-menu-item index="6-4">Phụ kiện gia dụng</el-menu-item>
            </el-submenu>
            <el-menu-item index="7">Tin tức</el-menu-item>
            <el-menu-item index="8"> Giải trí</el-menu-item>
            <el-menu-item index="9">Ưu đãi HOT</el-menu-item>
        </el-menu>
    </el-row>
    <el-row class="body">
        <el-col :span="6">
            <slot name="leftAds"></slot>
        </el-col>
        <el-col :span="12" class="mainContent">
            <slot></slot>
        </el-col>
        <el-col :span="6">
            <slot name="rightAds"></slot>
        </el-col>
    </el-row>
</el-row>
</template>

<script>
export default {
    name: 'BaseLayoutHW9',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: auto;
    padding: 0;
    width: 1200px;
    background: #fff;

    .bannerWrap {
        width: 100%;
        margin: auto,
    }

    .mainContent {
        padding: 16px;
    }
}
</style>
