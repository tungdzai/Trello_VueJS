<template>
<el-container>
    <el-aside class="sideBar">
        <el-menu text-color="#fff" background-color="#001529" active-text-color="#ffd04b" default-active='active()'>
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span>Tổng quan</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-s-shop"></i>
                <span @click="QuanLySanPham">Quản lý sản phẩm</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span @click="QuanLyHoaDon">Quản lý hóa đơn</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-s-data"></i>
                <span @click="BaoCaoThongKe">Báo cáo thống kê</span>
            </el-menu-item>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Quản lý chi nhánh</span>
                </template>
                <el-menu-item-group title="Hoạt động">
                    <el-menu-item index="1-1">Sản phẩm</el-menu-item>
                    <el-menu-item index="1-2">Đơn hàng</el-menu-item>
                    <el-menu-item index="1-3">Khách hàng</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Báo cáo">
                    <el-menu-item index="1-4">Doanh thu</el-menu-item>
                    <el-menu-item index="1-5">Tồn kho</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="6">
                <i class="el-icon-s-tools"></i>
                <span>Cài đặt hệ thống</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
    <el-container>
        <el-header class="header">
            <div class="headerLeftWrap">
                <slot name="header"></slot>
            </div>
            <div class="headerRightWrap">
                <el-badge :value="12" class="icon-header">
                    <i class="el-icon-message-solid"></i>
                </el-badge>
                <el-dropdown>
                    <el-avatar src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg" />
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
                        <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
                        <el-dropdown-item>Cấu hình</el-dropdown-item>
                        <el-dropdown-item>
                            <p @click="Logout"> Đăng xuất</p>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-header>
        <!-- main -->
        <el-main>
            <slot>
                <router-view/>
            </slot>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
export default {
    name: 'BaseLayout',
    data() {
        return {

        }
    },
    methods:{
        active(){
            return 2
        },
        Logout(){
            this.$router.push({ name: 'FormLogin', params: { FormLoginId: '112' } })
        },
        QuanLySanPham(){
             this.$router.push({ name: 'QuanLySanPham', params: { BaseLayoutId: '111' } })
        },
        BaoCaoThongKe(){
             this.$router.push({ name: 'BaoCaoThongKe', params: { BaseLayoutId: '111' } })
        },
        QuanLyHoaDon(){
             this.$router.push({ name: 'QuanLyHoaDon', params: { BaseLayoutId: '111' } })
        }

    }



}
</script>

<style lang="scss" scoped>
.sideBar {
    width: 200px;
    height: 100vh;
    background: #001529;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d8e0ea;
    height: 60px;
    width: 100%;
    background: #f2f6fe;
    padding: 0 24px;

    .headerLeftWrap {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
        color: #253036;
    }

    .headerRightWrap {
        display: flex;
        align-items: center;

        .icon-header {
            margin-right: 40px;
            font-size: 24px;
        }
    }
}

.mainBody {
    width: 100%;
    padding: 24px;
}
</style>
