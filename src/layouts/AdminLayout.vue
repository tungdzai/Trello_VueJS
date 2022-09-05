<template>
<div>
    <el-container>
        <el-header class="header" style="height:45px">
            <div class="headerLeftWrap">
                <slot name="header"></slot>
            </div>
            <div class="headerRightWrap">
                <div class="inputSearch">
                    <i class="el-icon-search"></i>
                    <input type="text" placeholder="Tìm kiếm..">
                </div>
                <el-badge class="icon-header">
                    <span style="color: #fff;font-size: 15px">Xin chào:{{nameshown}}</span>
                </el-badge>
                <el-dropdown style="cursor: pointer">
                    <div @click="homeTrello">
                        <el-avatar :src="image" />
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item style="padding:0 10px">
                                <div @click="accountInfo()">Tài khoản của tôi</div>
                            </el-dropdown-item>
                            <el-dropdown-item style="padding:0 10px">
                                <p @click="signout()"> Đăng xuất</p>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </div>
                </el-dropdown>
            </div>
        </el-header>
        <!-- main -->
        <el-main class="main">
            <slot>
                <router-view />
            </slot>
        </el-main>
    </el-container>
</div>
</template>

<script>
import api from '../api';
export default {
    name: 'AdminLayout',
    data() {
        return {
            datainfo: {},
            image: "",
            nameshown: '',
        }
    },
    mounted() {
        api.infoAuthme().then((res) => {
            console.log(res.data);
            this.datainfo = res.data
            this.nameshown = this.datainfo.name
            if (this.datainfo.avatar == null) {
                this.image = "https://24s.vn/anh-dai-dien-cho-facebook-de-thuong/imager_3918.jpg"
            } else {
                this.image = "http://vuecourse.zent.edu.vn/storage/users/" + this.datainfo.avatar
            }
        })
    },
    computed: {},
    watch: {},
    methods: {
        homeTrello() {
            this.$router.push({
                path: 'AdminLayout',
                query: {
                    plan: 'private'
                }
            })
        },
        accountInfo() {
            api.infoAuthme().then(() => {
                this.$router.push({
                    path: 'accountInFormation',
                    query: {
                        plan: 'info'
                    }
                })
            })
        },

        signout() {
            api.signout().then((res) => {
                console.log(res)
                this.$router.push({
                    path: 'LoginProject',
                })

            })

        }
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.main {
    cursor: pointer;
    display: flex;
}

.el-container {
    height: 100vh;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid hsl(201deg 18% 73%);
    height: 50px;
    width: 100%;
    background-color: #ff5f1b;
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

        .inputSearch {
            background-color: #fff;
            padding: 5px 10px;
            display: flex;
            align-items: center;
            border-radius: 10px;
            margin-right: 15px;

            input {
                border: none;
                outline: none;
                padding-left: 10px;
            }
        }

        .icon-header {
            margin-right: 20px;
            font-size: 24px;
        }
    }
}

.mainBody {
    width: 100%;
    padding: 24px;
}
</style>
