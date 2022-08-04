<template>
<div>
    <AdminLayout>
        <template #header>
            <span class="user">Thông tin tài khoản</span>
        </template>
        <div class="accountinfoWrap">
            <div class="info infoWrap">
                <div class="info_left">
                    <div class="info_left_acc">
                        <form action="#">
                            <div class="form_info">
                                <div class="form_avtar">
                                    <div class="avtarWrap">
                                        <div class="avatarView">
                                            <img class="default" src="https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png" alt="">
                                            <div class="edit">
                                                <img class="edit_img" src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form_name">
                                    <div class="form_control">
                                        <span class="input_name">Họ & Tên</span>
                                        <input type="text" class="input_text" placeholder="Thêm họ tên">
                                    </div>
                                    <div class="form_control">
                                        <span class="input_name">Nickname</span>
                                        <input type="text" class="input_text" placeholder="Thêm nickname">
                                    </div>
                                </div>
                            </div>
                            <div class="form_control">
                                <span class="input_name"> Ngày sinh </span>
                                <div class="input_birthday">
                                    <select name="day">
                                        <option value="0">Ngày</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                    <select name="month">
                                        <option value="0">Tháng</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <select name="year">
                                        <option value="0">Năm</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                        <option value="1949">1949</option>
                                        <option value="1948">1948</option>
                                        <option value="1947">1947</option>
                                        <option value="1946">1946</option>
                                        <option value="1945">1945</option>
                                        <option value="1944">1944</option>
                                        <option value="1943">1943</option>
                                        <option value="1942">1942</option>
                                        <option value="1941">1941</option>
                                        <option value="1940">1940</option>
                                        <option value="1939">1939</option>
                                        <option value="1938">1938</option>
                                        <option value="1937">1937</option>
                                        <option value="1936">1936</option>
                                        <option value="1935">1935</option>
                                        <option value="1934">1934</option>
                                        <option value="1933">1933</option>
                                        <option value="1932">1932</option>
                                        <option value="1931">1931</option>
                                        <option value="1930">1930</option>
                                        <option value="1929">1929</option>
                                        <option value="1928">1928</option>
                                        <option value="1927">1927</option>
                                        <option value="1926">1926</option>
                                        <option value="1925">1925</option>
                                        <option value="1924">1924</option>
                                        <option value="1923">1923</option>
                                        <option value="1922">1922</option>
                                        <option value="1921">1921</option>
                                        <option value="1920">1920</option>
                                        <option value="1919">1919</option>
                                        <option value="1918">1918</option>
                                        <option value="1917">1917</option>
                                        <option value="1916">1916</option>
                                        <option value="1915">1915</option>
                                        <option value="1914">1914</option>
                                        <option value="1913">1913</option>
                                        <option value="1912">1912</option>
                                        <option value="1911">1911</option>
                                        <option value="1910">1910</option>
                                        <option value="1909">1909</option>
                                        <option value="1908">1908</option>
                                        <option value="1907">1907</option>
                                        <option value="1906">1906</option>
                                        <option value="1905">1905</option>
                                        <option value="1904">1904</option>
                                        <option value="1903">1903</option>
                                        <option value="1902">1902</option>
                                        <option value="1901">1901</option>
                                        <option value="1900">1900</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form_control">
                                <span class="input_name">Giới tính</span>
                                <el-radio-group v-model="radio">
                                    <el-radio :label="1" class="input_name">Nam</el-radio>
                                    <el-radio :label="2" class="input_name">Nữ</el-radio>
                                    <el-radio :label="3" class="input_name">Khác</el-radio>
                                </el-radio-group>
                            </div>
                            <div class="form_control form_submit">
                                <button class="submit">Lưu thay đổi</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="info_right">
                    <span class="info_title">Số điện thoại và mail</span>
                    <div class="list_info">
                        <div class="list_item">
                            <div class="info  info_item">
                                <img src="	https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png" alt="">
                                <div class="detail">
                                    <span>Số điện thoại</span>
                                    <span>0334463900</span>
                                </div>
                            </div>
                            <div class="status">
                                <span></span>
                                <button class="button active">Cập nhật</button>
                            </div>
                        </div>
                        <div class="list_item">
                            <div class="info info_item">
                                <img src="	https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png" alt="">
                                <div class="detail">
                                    <span>Địa chỉ Email</span>
                                    <span>tungnguyen0603202@gmail.com</span>
                                </div>
                            </div>
                            <div class="status">
                                <span></span>
                                <button class="button active">Cập nhật</button>
                            </div>
                        </div>
                    </div>
                    <span class="info_title">Bảo mật</span>
                    <div class="list_info">
                        <div class="list_item">
                            <div class="info  info_item">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png" alt="">
                                <div class="detail">
                                    <span>Đổi mật khẩu</span>
                                </div>
                            </div>
                            <div class="status">
                                <span></span>
                                <button class="button active">Cập nhật</button>
                            </div>
                        </div>
                    </div>
                    <span class="info_title">Liên kết mạng xã hội</span>
                    <div class="list_info">
                        <div class="list_item">
                            <div class="info  info_item">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/facebook.png" alt="">
                                <div class="detail">
                                    <span>Facebook</span>
                                </div>
                            </div>
                            <div class="status">
                                <span></span>
                                <button class="button active">Liên kết</button>
                            </div>
                        </div>
                        <div class="list_item">
                            <div class="info  info_item">
                                <img src="		https://frontend.tikicdn.com/_desktop-next/static/img/account/google.png" alt="">
                                <div class="detail">
                                    <span>Google</span>
                                </div>
                            </div>
                            <div class="status">
                                <span></span>
                                <button class="button active">Liên kết</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </AdminLayout>
</div>
</template>

<script>
import AdminLayout from '../layouts/AdminLayout.vue'
export default {
    name: 'accountInFormation',
    components: {
        AdminLayout
    },
    data() {
        return {
            radio: '',

        }
    },
}
</script>

<style lang="scss" scoped>
.user {
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
}

.info {
    display: flex;
    background-color: #e9ecef;
    justify-content: center;

    .info_left {
        margin-top: 15px;
        width: 553px;
        padding: 16px 24px 16px 16px;
        border: none;
        border-radius: 10px;
        background-color: #fff;
        margin-right: 10px;

        .info_left_acc {
            background-color: rgb(255, 255, 255);
            border-radius: 4px;
            margin-top: 16px;

            .form_info {
                display: flex;

                .avtarWrap {
                    display: flex;
                    position: relative;
                    border: 4px solid rgb(194, 225, 255);
                    width: 112px;
                    height: 112px;
                    background-color: rgb(240, 248, 255);
                    border-radius: 50%;
                    justify-content: center;
                    align-items: center;

                    .avatarView {
                        cursor: pointer;
                        display: flex;

                        img {
                            width: 50px;
                            height: 50px;
                            max-width: 100%;
                        }

                        .edit {
                            position: absolute;
                            width: 16px;
                            height: 16px;
                            background-color: rgb(100, 100, 109);
                            border-radius: 50%;
                            right: 9px;
                            bottom: 3px;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img {
                                width: 10px;
                                height: 10px;
                                max-width: 100%;
                            }
                        }
                    }
                }

                .form_name {
                    width: 100%;

                    .form_control {
                        display: flex;
                        align-items: center;
                        margin: 0 0 34px;

                        .input_name {
                            width: 100px;
                            min-width: 110px;
                            font-size: 14px;
                            color: rgb(51, 51, 51);
                            margin-right: 16px;
                        }

                        .input_text {
                            height: 15px;
                            width: 100%;
                            border-radius: 4px;
                            padding: 10px 12px;
                            border: 1px solid rgb(229, 229, 231);
                        }
                    }
                }
            }

            .form_control {
                display: flex;
                margin: 0px 0px 34px;
                justify-content: center;

                .input_name {
                    width: 110px;
                    min-width: 110px;
                    font-size: 14px;
                    color: rgb(51, 51, 51);
                    margin-right: 16px;
                }

                .input_birthday {
                    select {
                        width: 100px;
                        border: 1px solid rgb(204, 204, 204);
                        height: 34px;
                        padding: 6px 12px;
                        line-height: 34px;
                        outline: none;
                        border-radius: 4px;
                        margin: 0px 12px 0px 0px;
                        background: 0px center;
                        box-shadow: none;
                    }
                }

                .submit {
                    border: 0px;
                    height: 40px;
                    border-radius: 4px;
                    color: rgb(255, 255, 255);
                    font-size: 14px;
                    background-color: rgb(11, 116, 229);
                    cursor: pointer;
                    margin-top: 40px;
                    padding: 0 40px;
                }
            }
        }
    }

    .info_right {
        width: calc(60% - 553px);
        padding: 16px 16px 16px 24px;
        margin-top: 15px;
        width: 553px;
        padding: 16px 24px 16px 16px;
        border: none;
        border-radius: 10px;
        background-color: #fff;
        margin-right: 10px;

        span {
            display: flex;
        }

        .info_title {
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            color: rgb(100, 100, 109);
        }

        .list_info {
            background-color: rgb(255, 255, 255);
            border-radius: 4px;
            margin-bottom: 16px;

            .list_item {
                border-top: 1px solid rgb(248, 248, 248);
                border: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 19px 0px;

                .info_item {
                    background-color: #fff;

                    img {
                        width: 24px;
                        height: 24px;
                    }

                    .detail {
                        display: flex;
                        flex-direction: column;

                        span {
                            font-size: 14px;
                            line-height: 20px;
                            margin: 0px 0px 0px 6px;
                            color: rgb(56, 56, 61);
                            text-align: left;
                        }
                    }
                }

                .status {
                    color: rgb(27, 168, 255);
                    justify-content: space-between;
                    display: flex;

                    .button {
                        height: 28px;
                        border-radius: 4px;
                        font-size: 14px;
                        cursor: pointer;
                        padding: 0px 12px;
                        color: rgb(11, 116, 229);
                        border: 1px solid rgb(11, 116, 229);
                        background-color: rgb(255, 255, 255);
                    }
                }
            }
        }
    }

}
</style>
