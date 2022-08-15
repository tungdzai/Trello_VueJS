<template>
<div id="id">
    <AdminLayout>
        <draggable class="container">
            <Draggable v-for="(value, index) in boards " :key="index" class="boardWrap">
                <div class="colWrap">
                    <div class="header_text">
                        <input type="text" v-model="value.title" class="updateInputTitle" @click="inlineTextAll">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <i class="el-icon-more" style="font-size: 20px"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <el-button type="text">Thêm sanh sách</el-button>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <el-button type="text" @click="clickdelete(value)">Xóa danh sách</el-button>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <el-button type="text"> Thêm thẻ</el-button>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <ul>
                        <draggable  group="col_task">
                            <li v-for="element in value.cards" :key="element.id">
                                {{element.title}}
                            </li>
                        </draggable>
                    </ul>
                    <div class="addToCard" v-if="showAddToCard">
                        <textarea placeholder="Nhập tiêu đề cho thẻ này ..."></textarea>
                        <div class="buttonAddToCard">
                            <button class="Add_Card">Thêm thẻ</button>
                            <i class="el-icon-close"></i>
                        </div>
                    </div>
                    <div class="fooder_add"  v-if='!showAddToCard' @click="toggleOpenNewCard(value)"><i class="el-icon-plus"></i> Add card</div>
                </div>
            </Draggable>
            <div class="add_column">
                <input type="text" placeholder="Nhập tiêu đề danh sách" v-model="message" @keyup="handleKeyup">
                <button :disabled="isButtonDisabled" @click="btn_addcolumn"><i class="el-icon-arrow-right"></i></button>
            </div>
        </draggable>
    </AdminLayout>
</div>
</template>

<script>
import AdminLayout from '../../layouts/AdminLayout.vue'

import {
    mapState
} from 'vuex'
import draggable from "vuedraggable";
export default {
    name: 'TaskProject',
    components: {
        AdminLayout,
        draggable,
    },
    computed: {
        ...mapState('about', [
            'boards',
        ]),
    },
    data() {
        return {
            message: '',
            isButtonDisabled: true,
            showAddToCard: false,
        }
    },
    watch: {
        message(value) {
            if (value.length > 0) {
                this.isButtonDisabled = false
            }
        }
    },
    methods: {

        btn_addcolumn() {
            let newColmnAdd = {
                'id': 10,
                "title": this.message.trim(),
                "cards": []
            }
            this.boards.push(newColmnAdd)
            this.message = ''
        },
        handleKeyup(e) {
            if (e.code === 'Enter') {
                let newColmnAdd = {
                    'id': Math.floor(Math.random() * 100000),
                    "title": this.message.trim(),
                    "cards": []
                }
                this.boards.push(newColmnAdd)
                this.message = ''
            }
        },
        clickdelete(item) {
            this.$confirm('Bạn chắc chắn muốn xóa không ?', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                for (let i = 0; i < this.boards.length; i++) {
                    if (item.id === this.boards[i].id) {
                        console.log('xóa đi ko nói nhiều')
                        this.boards.splice(i, 1)
                    }
                }
            }).catch(() => {
                console.log('clone')
            });
        },
        inlineTextAll(e) {
            e.target.focus()
            e.target.select()

        },
        toggleOpenNewCard(item) {    
            for( let i = 0 ; i< this.boards.length; i++){
                if(item.id === this.boards[i].id){
                    this.showAddToCard=true
                }
            }
        }

    },
}
</script>

<style lang="scss" scoped>
.buttonAddToCard {
    display: flex;
    background-color: #e9ecef;
    margin-top: 10px;
    align-items: center;

    button {
        border: none;
        padding: 10px 20px;
        background-color: rgb(38, 156, 206);
        border-radius: 10px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        margin-right: 10px;

        &:hover {
            background-color: rgba(38, 156, 206, 0.9);
        }
    }

    .el-icon-close {
        font-size: 30px;
        font-weight: bold;
        color: rgb(106, 106, 106);
        cursor: pointer;

        &:hover {
            color: rgba(106, 106, 106, 0.6);
        }
    }
}

textarea {
    max-width: 273px;
    width: 258px;
    height: 81px;
    border: none;
    padding: 10px;
    border-radius: 10px;
    outline: none;
}

.updateInputTitle {
    width: 100%;
    background-color: #e9ecef;
    border: none;
    outline: none;
    font-size: 20px;

    &:focus {
        background-color: #fff;
        padding: 3px;
        padding-left: 5px;
        border-radius: 10px;
    }
}

.add_column {
    width: 220px;
    display: flex;
    background-color: #e9ecef;
    border-radius: 10px;
    height: 22px;
    padding: 10px;
    margin-left: 15px;

    input {
        width: 100%;
        border: none;
        background-color: #e9ecef;
        outline: none;

    }

    button {
        background-color: #e9ecef;
        border: none;
    }
}

.container {
    display: flex;
    overflow-x: auto;
    margin-top: 10px;
    width: 125%;

    .boardWrap {
        background: #e9ecef;
        border-radius: 10px;
        width: 300px;
        margin-left: 15px;
        height: max-content;

        .colWrap {
            text-align: left;
            padding: 10px;

            .header_text {
                color: rgb(5, 5, 5);
                font-size: 17px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 15px;
                margin-top: 10px;

                p {
                    margin: 0;
                    padding: 0;
                }

                span {
                    margin-left: 10px;
                }
            }

            ul {
                list-style-type: none;
                padding: 0;
                overflow-y: auto;
                max-height: 370px;

                &::-webkit-scrollbar {
                    -webkit-appearance: none;
                }

                &::-webkit-scrollbar:vertical {
                    width: 0px;
                }

                &::-webkit-scrollbar-thumb {
                    background-color: #e9ecef;
                }

                li {
                    background-color: #fff;
                    padding: 10px;
                    margin-top: 10px;
                    border-radius: 10px;

                    .img_title {
                        width: 100%;
                        border-radius: 10px;
                    }

                }

            }

        }
    }

}

</style>
