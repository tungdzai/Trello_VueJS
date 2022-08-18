<template>
<div id="id">
    <AdminLayout>
        <draggable class="container">
            <div v-for="(value, index) in boards " :key="index" class="boardWrap">
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
                        <draggable group="col_task">
                            <li v-for="element in value.cards" :key="element.id">
                                {{element.title}}
                            </li>
                        </draggable>
                    </ul>
                    <div class="addToCard" v-if="!value.checkaddCard">
                        <textarea placeholder="Nhập tiêu đề cho thẻ này ..." v-model="messageaddCard" ></textarea>
                        <div class="buttonAddToCard">
                            <button class="Add_Card" @click="clickAddCard(value)">Thêm thẻ</button>
                            <i class="el-icon-close" @click="clickdeleteaddcard(value)"></i>
                        </div>
                    </div>
                    <div class="fooder_add" @click="toggleOpenNewCard(value)" v-if="value.checkaddCard">
                        <i class="el-icon-plus"></i>
                        <p>Add card</p>
                    </div>
                </div>
            </div>
            <div class="AddToCard" v-if="addCard" @click="clickAdd">
                <i class="el-icon-plus"></i>
                <p>Thêm danh sách khác </p>
            </div>
            <div class="add_column" v-if="!addCard">
                <div class="input_add_column">
                    <input type="text" placeholder="Nhập tiêu đề danh sách" v-model="messageAddto" @keyup="handleKeyup">
                    <div class="btn_add_column" >
                        <button @click="btn_addcolumn()">Thêm danh sách</button>
                        <i class="el-icon-close" @click="clickdeleteColumn"></i>
                    </div>
                </div>
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
            addCard: true,
            messageAddto: '',
            messageaddCard: ''
        }
    },
    watch: {},
    methods: {
        clickAddCard(item) {
            let newCard = {
                "id": Math.floor(Math.random() * 100000),
                "title": this.messageaddCard.trim(),
            }
            if (this.messageaddCard.length > 0) {
                for (let i = 0; i < this.boards.length; i++) {
                    if (item.id === this.boards[i].id) {
                        console.log(this.boards[i].cards)
                        this.boards[i].cards.push(newCard)
                        this.messageaddCard = ''
                        this.boards[i].checkaddCard = true
                    }
                }

            }
        },
        btn_addcolumn() {
            let newColmnAdd = {
                'id': Math.floor(Math.random() * 100000),
                "title": this.messageAddto.trim(),
                "checkaddCard": true,
                "cards": []
            }
            if (this.messageAddto.length > 0) {
                this.boards.push(newColmnAdd)
                this.addCard = true
                this.messageAddto = ''
            }
        },
        handleKeyup(e) {
            if (e.code === 'Enter') {
                let newColmnAdd = {
                    'id': Math.floor(Math.random() * 100000),
                    "title": this.messageAddto.trim(),
                    "checkaddCard": true,
                    "cards": []
                }
                if (this.messageAddto.length > 0) {
                    this.boards.push(newColmnAdd)
                    this.addCard = true
                    this.messageAddto = ''
                }
            }
        },
        clickAdd() {
            this.addCard = false
        },
        clickdeleteColumn() {
            this.addCard = true
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
            for (let i = 0; i < this.boards.length; i++) {
                if (item.id === this.boards[i].id) {
                    this.boards[i].checkaddCard = false
                }
            }
        },
        clickdeleteaddcard(item) {
            for (let i = 0; i < this.boards.length; i++) {
                if (item.id === this.boards[i].id) {
                    this.boards[i].checkaddCard = true
                }
            }
        }

    },
}
</script>

<style lang="scss" scoped>
.fooder_add {
    display: flex;
    align-items: center;

    p {
        margin: 0;
    }

    &:hover {
        background: #cdcecf;
        padding: 5px;
        border-radius: 10px;
    }
}

.AddToCard {
    display: flex;
    align-items: center;
    height: max-content;
    background-color: #e9ecef;
    margin-left: 20px;
    padding: 5px 20px;
    padding-right: 0;
    border-radius: 10px;
    text-align: left;
    width: 250px;
    cursor: pointer;

    p {
        margin: 0;
    }
}

.add_column {
    width: 270px;
    background-color: #e9ecef;
    height: max-content;
    border-radius: 10px;
    margin-left: 20px;

    .input_add_column {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        border: none;

        input {
            width: 100%;
            border: none;
            padding: 10px 5px;
            outline: none;
            border-radius: 10px;
            margin-bottom: 10px;

        }

        .btn_add_column {
            display: flex;
            align-items: center;

            button {
                height: 32px;
                min-height: 32px;
                background-color: #0079bf;
                border-radius: 5px;
                border: none;
                box-shadow: none;
                color: #fff
            }

            i {
                font-size: 27px;
                color: #42526e;
                margin-left: 10px;
            }
        }

    }

}

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

.container {
    display: flex;
    overflow-x: auto;
    margin-top: 10px;
    top: 50px;

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
                max-height: 300px;

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
