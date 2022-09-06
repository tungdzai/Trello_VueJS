<template>
<div id="id">
    <AdminLayout>
        <draggable class="container" :list="boards" :move="moveColumn">
            <div v-for="(value, index) in boards " :key="index" class="boardWrap">
                <div class="colWrap">
                    <div class="header_text">
                        <input type="text" v-model="value.title" class="updateInputTitle" @click="inlineTextAll" @blur="blurTitle(value)">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <i class="el-icon-more" style="font-size: 20px;color: #ff5f1b;"></i>
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
                        <draggable group="col_task" :list="value.cards" :move="moveCards">
                            <li v-for="element in value.cards" :key="element.id" @click="dialogFormVisible = true, clickli(element)">

                                <div class="ColorLabelWrap">
                                    <div class="colorTitleLabels" v-for="listLabels in element.labels" :key="listLabels.id" :style="{ backgroundColor:listLabels.color}"></div>
                                </div>

                                <span>{{element.title.charAt(0).toUpperCase()+element.title.slice(1)}}</span>

                                <div class="ListShowTodo">
                                    <div class="showDeadline">
                                        <i class="el-icon-time" v-if="element.deadline != null"></i>
                                        <span style="color:rgb(97, 189, 79)" v-if="element.status === 1">{{element.deadline}}</span>
                                        <span v-else>{{element.deadline}}</span>
                                    </div>
                                    <div class="showdescription" v-if="element.description != null">
                                        <i class="el-icon-s-unfold" style="color:rgb(0, 0, 255)"> </i>
                                    </div>
                                </div>

                            </li>
                            <el-dialog :visible.sync="dialogFormVisible">
                                <form class="form_des">
                                    <div class="dialog_left">
                                        <div class="text_card">
                                            <i class="el-icon-bank-card" style="color:red"></i>
                                            <input type="text" v-model="updataTitleCard" @blur="blureditCard(cloneItem)">
                                            <div class="labelWrap">
                                                <span>Nhãn</span>
                                                <div class="labelColor">
                                                    <span v-for="(showtitleLabel, index) in dataLabelsShow" :key="index" :style="{ backgroundColor: showtitleLabel.color }" @click="EditOrDelLabels(showtitleLabel)">
                                                        {{showtitleLabel.name}}
                                                    </span>
                                                </div>
                                                <i class="el-icon-plus" @click="AddLabelsColor"></i>
                                            </div>
                                        </div>
                                        <div class="deadlineWrap" v-if="deadlineShowCheck">
                                            <span>Ngày hết hạn</span>
                                            <div class="deadlineTitle">
                                                <el-checkbox @change="updateStatusCard" v-model="statusCard"></el-checkbox>
                                                <div class="deadlineShow">
                                                    {{deadlineShow}}
                                                    <span v-if="statusCard === true " class="success">Đã hoàn thành</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="desWrap">
                                            <div class="des_Wrap">
                                                <i class="el-icon-s-unfold" style="color:#0000ff"></i>
                                                <span>Mô tả</span>
                                            </div>
                                            <div class="des_cmt" v-if="checkdescription" @click="clickcheckdescription">
                                                <textarea name="" placeholder="Thêm mô tả chi tiết hơn ..." v-model="descriptionadd"></textarea>
                                            </div>
                                            <div class="des_form_click" v-else>
                                                <textarea name="" placeholder="Thêm mô tả chi tiết hơn ..." v-model="titledescription"></textarea>
                                                <div class="des_btn">
                                                    <p @click="adddescription(cloneItem)" class="button_add">Lưu</p>
                                                    <p class="button_delete" @click="deldes">Hủy</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="showFile">
                                            <div class="titleIcon">
                                                <i class="el-icon-paperclip" style="color:rgb(159 255 127)"></i>
                                                <span>Các tệp tin đính kèm</span>
                                            </div>
                                            <div class="imageUploadFileWap">
                                                <div class="imageUploadFile" v-for="showFileLoad in listUploadFile" :key="showFileLoad.id">
                                                    <div class="imgWrap">
                                                        <img :src='image+showFileLoad.path' alt="">
                                                    </div>
                                                    <div class="nameUploadFile">
                                                        <span>{{showFileLoad.name}}</span>
                                                        <div class="inputEditUploadFile">
                                                            <span @click="AddAvatartCard(showFileLoad)">Đặt ảnh bìa</span>
                                                            <span @click="DelUpLoadFile(showFileLoad)">Xóa</span>
                                                            <span @click="EditUpLoadFile(showFileLoad)">Chỉnh sửa</span>
                                                        </div>
                                                    </div>
                                                    <!-- Edit File -->
                                                    <div class="EditUpLoadFile" v-if="showFiletitle ==1 & showUpLoadFile_Id == showFileLoad.id">
                                                        <div class="titleEditWrap">
                                                            <p>Sửa tệp đính kèm</p>
                                                            <i class="el-icon-close" @click="delUpLoadFile" style=" cursor: pointer"></i>
                                                        </div>
                                                        <div class="formEditWrap">
                                                            <span>Liên kết tên</span>
                                                            <input type="text" v-model="titleEditFileUpload">
                                                            <p @click="clickUpLoadFiles(showFileLoad)">Cập nhật</p>
                                                        </div>
                                                    </div>

                                                    <!-- Xóa file -->
                                                    <div class="DeleteUpLoadFile" v-if="DeleteFiletitle ==1 & DeleteUpLoadFile_Id == showFileLoad.id">
                                                        <div class="titleEditWrap">
                                                            <p>Bạn muốn xoá tập tin đính kèm?</p>
                                                            <i class="el-icon-close" @click="clickCloseUpLoadFile"></i>
                                                        </div>
                                                        <div class="titleDelWrap">
                                                            <span>Tập tin đính kèm sẽ bị xoá vĩnh viễn và bạn sẽ không thể hoàn tác.</span>
                                                            <p @click="clickDelUpLoadFile(showFileLoad)">Xóa</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="AddUploadFile">
                                                <p @click="clickAddUploadFile" :plain="true">Thêm tệp đính kèm</p>
                                            </div>

                                        </div>

                                        <div class="list_des" v-for="(checklist, index ) in check_list_clone  " :key="index">
                                            <div class="list_des_title">
                                                <i class="el-icon-document-checked" style="color:#ff5f1b"></i>
                                                <div>
                                                    <input type="text" v-model="checklist.title" @blur="edittodo(checklist)">
                                                    <span @click="deletecheckList(checklist)">Xóa</span>
                                                </div>
                                            </div>

                                            <div class="list_des_item">
                                                <div class="passdatachilds" v-if="showdataCheckList === 1 && showCheckChildsId === checklist.id">
                                                    <div class="listChildsFor" v-for="listShowChild in listchilds" :key="listShowChild.id">

                                                        <el-checkbox @change="delStatusWorkChil(listShowChild)" v-if="listShowChild.status === 1" v-model="checked">
                                                        </el-checkbox>
                                                        <el-checkbox v-else @change="updateStatusWorkChil(listShowChild)"></el-checkbox>
                                                        <div class="editTileChilds" v-if="showUpdataChild == 1 && showTitle_Id == listShowChild.id">
                                                            <textarea class="textareaUpdataTitle" v-model="textareaUpdataTitle"></textarea>
                                                            <div class="editButtonChilds">
                                                                <div class="editButtonChilds_Left">
                                                                    <p @click="clickUpdataTitleChilds(listShowChild)">Lưu</p>
                                                                    <i class="el-icon-close" @click="closeEditChilds(listShowChild)"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span @click="editTitleChild(listShowChild)" v-else>{{listShowChild.title}}</span>
                                                        <i class="el-icon-delete" @click="deleteChild(listShowChild)"></i>
                                                    </div>
                                                </div>
                                                <div class="showCheckListChilds" @click="clickShowCheckListChilds(checklist)" v-else>
                                                    <span>Danh sách việc cần làm</span>
                                                </div>
                                                <div class="listchilds" v-if="showTitleChild === 1 && titlechild_ID === checklist.id">
                                                    <!-- v-if="showaddchildlistcheck" -->
                                                    <input type="text" placeholder="Thêm một mục" v-model="titlecheckchilds">
                                                    <div class="btn_checkListchilds">
                                                        <div class="btn_checkListchilds_addel">
                                                            <span class="save" @click="clicksavechild(checklist)">Thêm</span>
                                                            <span class="remove" @click="clickRemoveChild(checklist)">Hủy</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <p @click="showaddchildlist(checklist)">Thêm một mục</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="dialog_right">
                                        <span>Thêm vào thẻ</span>
                                        <div class="addTocard_des" @click="clickOnLables">
                                            <i class="el-icon-collection" style="color:#1f00ff"></i>
                                            <p>Nhãn</p>
                                        </div>
                                        <div class="addTocard_des" @click="clickTodo()">
                                            <i class="el-icon-folder-checked" style="color:#ff7f7f"></i>
                                            <p class="tododes">Việc cần làm</p>
                                        </div>
                                        <div class="block">
                                            <el-date-picker v-model="deadline" type="datetime" placeholder="Ngày" @blur="handleUpdateDeadline">
                                            </el-date-picker>
                                        </div>
                                        <div class="addTocard_des" @click="UploadFilesCard" :plain="true">
                                            <i class="el-icon-paperclip" style="color:rgb(159 255 127)"></i>
                                            <p>Đính file</p>
                                        </div>
                                        <div class="addTocard_des" @click="clickdeleteCard(cloneItem)">
                                            <i class="el-icon-delete" style="color:red"></i>
                                            <p>Xóa</p>
                                        </div>
                                        <div class="color_labels" v-if="onofToLables">
                                            <div class="labels_text">
                                                <p>Nhãn</p>
                                                <i class="el-icon-close" @click="clickcloseLables" style="cursor: pointer"></i>
                                            </div>
                                            <div class="seach_color">
                                                <input type="text" placeholder="Tìm nhãn">
                                            </div>
                                            <div class="form_labels">
                                                <p>Nhãn</p>
                                                <div class="colorLabelsWrap" v-for="(showtitleLabel, index) in dataLabelsShow" :key="index" @click="checkColorShowLabel(showtitleLabel)">
                                                    <span :style="{ backgroundColor: showtitleLabel.color }" class="showItemWrap">
                                                        <span>{{showtitleLabel.name}}</span>
                                                    </span>
                                                    <i class="el-icon-edit" @click="edit_colorLabel(showtitleLabel)"></i>
                                                </div>
                                            </div>
                                            <div class="updateLabels" @click="AddToNewLabel">
                                                <p>Tạo nhãn mới</p>
                                            </div>
                                        </div>
                                        <div class="todo_des" v-if="todocheck">
                                            <div class="todo_text">
                                                <p>Thêm danh sách công việc</p>
                                                <i class="el-icon-close" @click="clickdeltodo" style="cursor: pointer"></i>
                                            </div>
                                            <div class="form_todo">
                                                <p>Tiêu đề</p>
                                                <input type="text" placeholder="Việc cần làm" v-model="todo_title">
                                                <span @click="clickAddTodo(cloneItem)" style="cursor: pointer">Thêm</span>
                                            </div>
                                        </div>
                                        <div class="AddLablesNew" v-if="checkNewLable">
                                            <div class="itemLables">
                                                <i class="el-icon-arrow-left" @click="outNewLabel"></i>
                                                <span>Tạo nhãn mới</span>
                                                <i class="el-icon-close" @click="closeLablesNew" style=" cursor: pointer"></i>
                                            </div>
                                            <div class="LablesName">
                                                <p>Tên</p>
                                                <input type="text" placeholder="Thêm tên cho nhãn" v-model="titleLabel">
                                            </div>
                                            <div class="offerLabelColors">
                                                <p>Chọn một màu</p>
                                                <div class=ClickAddColor>
                                                    <span class="addColorcheck " v-for="itemColor in ListColors " :key="itemColor.id" :style="{ backgroundColor: itemColor.color }" @click="clickShowColor(itemColor)">
                                                        <i class="el-icon-check" v-if="showIconLable == 1 && IconColor_ID == itemColor.id"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="saveLableNew">
                                                <p @click="saveLabelColor(cloneItem)" :plain="true">Tạo mới</p>
                                            </div>
                                        </div>
                                        <div class="editLabelsWrap" v-if="editLabelsWrap">
                                            <div class="EditItemLables">
                                                <span>Chỉnh sửa nhãn </span>
                                                <i class="el-icon-close" @click="delEditLabels"></i>
                                            </div>
                                            <div class="EditLablesName">
                                                <p>Tên</p>
                                                <input type="text" placeholder="Thêm tên cho nhãn" v-model="EditTitleLabels">
                                            </div>
                                            <div class="EditColorLabels">
                                                <p>Chọn một màu</p>
                                                <div class=EditClickAddColor>
                                                    <span class="addColorcheck " v-for="itemColor in ListColors " :key="itemColor.id" :style="{ backgroundColor: itemColor.color }" @click="EditColorListLabels(itemColor)">
                                                        <i class="el-icon-check" v-if="(UpdataColorLabels == 1 && UpdataColorLabels_Str ==  itemColor.id) || (showIconLable == 1 && IconColor_ID == itemColor.id)"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="EditButtonLabels">
                                                <p class="btn_editLabels_Save" @click="clickSaveEditLabels">Lưu</p>
                                                <p class="btn_editLabels_delete" @click="deleteLabel">Xóa</p>
                                            </div>
                                        </div>
                                        <input type="file" @change="onChangeFile" id="fileInput" style="display:none">
                                        <!-- datePicker -->

                                    </div>
                                </form>
                            </el-dialog>
                        </draggable>
                    </ul>
                    <div class="addToCard" v-if="showAddTitleTask === 1 && TitleTask_id === value.id ">
                        <textarea placeholder="Nhập tiêu đề cho thẻ này ..." v-model="messageaddCard"></textarea>
                        <div class="buttonAddToCard">
                            <button class="Add_Card" @click="clickAddCard(value)">Thêm thẻ</button>
                            <i class="el-icon-close" @click="clickdeleteaddcard"></i>
                        </div>
                    </div>
                    <div class="fooder_add" v-else @click="toggleOpenNewCard(value.id)">
                        <i class="el-icon-plus"></i>
                        <p>Add card</p>
                    </div>
                </div>
            </div>

            <div class="AddToCard" v-if="addCard" @click="clickAdd">
                <i class="el-icon-plus"></i>
                <p>Thêm danh sách khác </p>
            </div>
            <div class="add_column" v-else>
                <div class="input_add_column">
                    <input type="text" placeholder="Nhập tiêu đề danh sách" v-model="messageAddto" @keyup="handleKeyup">
                    <div class="btn_add_column">
                        <button @click="btn_addcolumn">Thêm danh sách</button>
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
import api from '../../api'
import moment from "moment";
// import {
//     mapState
// } from 'vuex'
import draggable from "vuedraggable";
export default {
    name: 'TaskProject',
    components: {
        AdminLayout,
        draggable,
    },

    data() {
        return {
            lenghtFileUpLOAD: '',
            deadlineShowCheck: true,
            statusCard: false,
            checked: true,
            DeleteFiletitle: '',
            deadline: '',
            DeleteUpLoadFile_Id: '',
            titleEditFileUpload: '',
            showFiletitle: '',
            showUpLoadFile_Id: '',
            image: "http://vuecourse.zent.edu.vn/storage/",
            listUploadFile: [],
            UpdataColorLabels: '',
            UpdataColorLabels_Str: '',
            EditTitleLabels: '',
            editLabelsWrap: false,
            titleLabel: '',
            showIconLable: '',
            IconColor_ID: '',
            textareaUpdataTitle: '',
            showUpdataChild: '',
            showTitle_Id: '',
            showdataCheckList: '',
            showCheckChildsId: '',
            showAddTitleTask: '',
            TitleTask_id: '',
            addCard: true,
            messageAddto: '',
            messageaddCard: '',
            cloneItem: {},
            dialogFormVisible: false,
            updataTitleCard: '',
            descriptionadd: '',
            titledescription: '',
            checkdescription: true,
            // showaddchildlistcheck: false,
            check_list_clone: [],

            boards: [],
            todocheck: false,
            todo_title: '',
            showTitleChild: '',
            titlechild_ID: '',
            titlecheckchilds: '',
            listchilds: [],
            // dataclonecheck:[],
            onofToLables: false,
            checkNewLable: false,
            ListColors: [{
                    color: '#61bd4f',
                    id: 1
                },
                {
                    color: "#f2d600",
                    id: 2
                },
                {
                    color: '#ff9f1a',
                    id: 3
                },
                {
                    color: '#eb5a46',
                    id: 4
                },
                {
                    color: '#c377e0',
                    id: 5
                },
                {
                    color: '#0079bf',
                    id: 6
                },
                {
                    color: '#00c2e0',
                    id: 7
                },
                {
                    color: '#51e898',
                    id: 8
                },
                {
                    color: '#ff78cb',
                    id: 9
                },
                {
                    color: '#344563',
                    id: 10
                },
            ],
            colorCLickAdd: '',
            colorEditLabels: '',
            dataLabelsShow: [],
            objEditLabel: {},
            deadlineShow: '',
            vatatarcard: ''

        }
    },
    mounted() {
        api.getListDirectories()
            .then((res) => {
                this.boards = res.data.data;
            })
    },
    methods: {
        // changedirectory(e){
        //     console.log(e);
        // },
        AddAvatartCard(item) {
            console.log(item);
        },
        updateStatusCard() {
            let data = {
                "status": this.statusCard ? 1 : 0
            }
            api.updateStatusCard(data, this.cloneItem.id).then(() => {
                api.getlistCard(this.cloneItem.id).then(() => {})
            })
        },
        handleUpdateDeadline() {
            let data = {
                'deadline': moment(this.deadline).format('YYYY-MM-DD H:mm:ss')
            }

            api.updateDeadline(data, this.cloneItem.id).then(() => {
                api.getlistCard(this.cloneItem.id).then((res) => {
                    this.deadlineShow = res.data.data.deadline
                    this.deadlineShowCheck = true
                    this.deadline = ''
                })
            })
        },
        delStatusWorkChil(item) {
            this.showStatusID = item.id
            let data = {
                'status': item.status ? 0 : 1
            }
            api.updatechangestatus(data, item.id).then(() => {
                api.getlistCard(this.cloneItem.id).then((res) => {
                    for (let i = 0; i < res.data.data.check_lists.length; i++) {
                        if (item.check_list_id == res.data.data.check_lists[i].id) {
                            this.listchilds = res.data.data.check_lists[i].check_list_childs

                        }
                    }
                })
            })
        },
        updateStatusWorkChil(item) {
            let data = {
                'status': item.status ? 0 : 1
            }
            api.updatechangestatus(data, item.id).then(() => {
                api.getlistCard(this.cloneItem.id).then((res) => {
                    for (let i = 0; i < res.data.data.check_lists.length; i++) {
                        if (item.check_list_id == res.data.data.check_lists[i].id) {
                            this.listchilds = res.data.data.check_lists[i].check_list_childs
                        }
                    }
                })
            })
        },

        moveCards(item) {
            console.log(item);
            let data = {
                "index": item.draggedContext.futureIndex,
                "directory_id": item.relatedContext.element.directory_id
            }
            api.putcardslocation(data, item.draggedContext.element.id).then(() => {
                api.putchangecards(data, item.draggedContext.element.id).then(() => {

                })
            })
        },

        moveColumn(item) {
            let data = {
                'index': item.draggedContext.futureIndex
            }
            api.updataDirectories(data, item.draggedContext.element.id).then(() => {

            })
        },
        closeLablesNew() {
            this.checkNewLable = false
        },
        clickCloseUpLoadFile() {
            this.DeleteFiletitle = 0
        },
        clickDelUpLoadFile(item) {
            api.DelFileUpLoad(item.id).then(() => {
                api.getlistCard(this.cloneItem.id).then((res) => {
                    this.listUploadFile = res.data.data.files
                    this.DeleteFiletitle = 0
                })
            })
        },
        DelUpLoadFile(item) {
            console.log(item);
            this.DeleteFiletitle = 1
            this.DeleteUpLoadFile_Id = item.id
        },
        clickUpLoadFiles(item) {
            let data = {
                'name': this.titleEditFileUpload
            }
            api.putEditFileUpload(data, item.id).then(() => {
                api.getlistCard(this.cloneItem.id).then((res) => {
                    this.listUploadFile = res.data.data.files
                    this.showFiletitle = 0
                    this.titleEditFileUpload = ''
                })
            })
        },
        delUpLoadFile() {
            this.showFiletitle = 0
        },
        EditUpLoadFile(item) {
            this.showFiletitle = 1
            this.showUpLoadFile_Id = item.id
            this.titleEditFileUpload = item.name
        },
        UploadFilesCard() {
            document.getElementById('fileInput').click()
        },
        clickAddUploadFile() {
            document.getElementById('fileInput').click()
        },
        onChangeFile(e) {
            let formdata = new FormData();
            formdata.append("file", e.target.files[0])
            api.postFormData(formdata, this.cloneItem.id).then(() => {
                api.getlistCard(this.cloneItem.id).then((res) => {
                    this.listUploadFile = res.data.data.files
                })
            }).catch(() => {
                this.$message.error('File phải đúng định dạng: jpg, jpeg, png, txt, pdf, doc, docx, xlsx, xls, video/mp4 .');
            })
        },
        EditColorListLabels(item) {
            this.colorEditLabels = item.color
            this.showIconLable = 1;
            this.IconColor_ID = item.id;
            this.UpdataColorLabels = 0;

        },
        EditOrDelLabels(item) {
            this.objEditLabel = item
            console.log(item, "data ban đầu");
            this.editLabelsWrap = true
            this.EditTitleLabels = item.name
            let str1 = item.color
            for (let i = 0; i < this.ListColors.length; i++) {
                let str2 = this.ListColors[i].color
                let result = str1.localeCompare(str2)
                if (result == 0) {
                    this.UpdataColorLabels = 1;
                    this.UpdataColorLabels_Str = this.ListColors[i].id
                }
            }

        },
        clickSaveEditLabels() {
            let data = {
                'name': this.EditTitleLabels.charAt(0).toUpperCase() + this.EditTitleLabels.slice(1),
                'color': this.colorEditLabels
            }
            api.putEditLabels(data, this.objEditLabel.id).then(() => {
                api.getlistCard(this.cloneItem.id).then((res) => {
                    this.dataLabelsShow = res.data.data.labels
                    this.editLabelsWrap = false
                })
            })
        },
        deleteLabel() {
            console.log(this.objEditLabel);
            api.delLabel(this.objEditLabel.id).then(() => {
                api.getlistCard(this.cloneItem.id).then((res) => {
                    console.log(res.data.data.labels);
                    this.dataLabelsShow = res.data.data.labels
                    this.editLabelsWrap = false
                })
            })
        },
        edit_colorLabel(item) {
            this.objEditLabel = item
            this.editLabelsWrap = true
            this.EditTitleLabels = item.name
            let str1 = item.color
            for (let i = 0; i < this.ListColors.length; i++) {
                let str2 = this.ListColors[i].color
                let result = str1.localeCompare(str2)
                if (result == 0) {
                    this.UpdataColorLabels = 1;
                    this.UpdataColorLabels_Str = this.ListColors[i].id
                }
            }
        },
        AddLabelsColor() {
            this.checkNewLable = true
        },
        checkColorShowLabel(item) {
            console.log(item);
        },
        saveLabelColor(item) {
            let data = {
                'name': this.titleLabel.charAt(0).toUpperCase() + this.titleLabel.slice(1),
                'color': this.colorCLickAdd
            }
            api.postLabelsAddCard(data, item.id).then(() => {
                api.getlistCard(item.id).then((res) => {
                    this.dataLabelsShow = res.data.data.labels
                    this.titleLabel = ''
                    this.showIconLable = 0
                    this.checkNewLable = false
                    this.onofToLables = true
                })
            }).catch(() => {
                if (this.titleLabel.length == 0) {
                    this.$message.error('Vui lòng chọn tên cho nhãn !');
                } else {
                    this.$message.error('Vui lòng chọn màu cho nhãn !');
                }
            })
        },
        clickShowColor(item) {
            this.colorCLickAdd = item.color
            this.showIconLable = 1
            this.IconColor_ID = item.id
        },
        clickUpdataTitleChilds(item) {
            item.title = this.textareaUpdataTitle
            console.log(item.title);
            let data = {
                'title': this.textareaUpdataTitle
            }
            api.putUpdateCheckListChilds(data, item.id).then(() => {
                this.showUpdataChild = 0
            })
        },
        editTitleChild(item) {
            this.showUpdataChild = 1
            this.showTitle_Id = item.id
            this.textareaUpdataTitle = item.title

        },
        btn_addcolumn() {
            let data = {
                'index': 10,
                "title": this.messageAddto.trim(),
            }
            api.postListDirectories(data).then(() => {
                this.addCard = true
                this.messageAddto = ''
                api.getListDirectories().then((res) => {
                    this.boards = res.data.data;
                })
            })
        },
        handleKeyup(e) {
            if (e.code === 'Enter') {
                let data = {
                    'index': 10,
                    "title": this.messageAddto.trim(),
                }
                api.postListDirectories(data).then(() => {
                    this.addCard = true
                    this.messageAddto = ''
                    api.getListDirectories().then((res) => {
                        this.boards = res.data.data;
                    })
                })
            }
        },
        inlineTextAll(e) {
            e.target.focus()
            e.target.select()
        },
        clickAdd() {
            this.addCard = false
        },
        clickdeleteColumn() {
            this.addCard = true
        },
        clickdelete(item) {
            console.log(item.id)
            this.$confirm('Bạn chắc chắn muốn xóa không ?', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                api.deleteListDirectories(item.id).then(() => {
                    api.getListDirectories().then((res) => {
                        this.boards = res.data.data
                    })
                })
            })
        },
        clickAddCard(item) {
            let data = {
                "index": 20,
                "title": this.messageaddCard.trim(),
                "directory_id": item.id
            }
            api.postaddCards(data).then(() => {
                this.messageaddCard = '',
                    this.showAddTitleTask = 0
                api.getListDirectories()
                    .then((res) => {
                        this.boards = res.data.data
                    })
            })
        },
        clickli(item) {
            this.cloneItem = item
            this.updataTitleCard = item.title.charAt(0).toUpperCase() + item.title.slice(1)
            this.descriptionadd = this.cloneItem.description
            this.titledescription = this.cloneItem.description
            api.getlistCard(item.id).then((res) => {
                console.log(res);
                if (res.data.data.status === 1) {
                    this.statusCard = true
                } else {
                    this.statusCard = false
                }
                this.check_list_clone = res.data.data.check_lists
                this.dataLabelsShow = res.data.data.labels
                this.listUploadFile = res.data.data.files
                if (res.data.data.deadline == null) {
                    this.deadlineShowCheck = false
                } else {
                    this.deadlineShow = res.data.data.deadline
                }
            })
        },
        clicksavechild(item) {
            console.log(item);
            let data = {
                'title': this.titlecheckchilds,
                'check_list_id': item.id
            }
            api.postchecklistchild(data).then(() => {
                api.getlistCard(item.card_id).then((res) => {
                    this.showTitleChild = 0
                    this.titlecheckchilds = ''
                    for (let i = 0; i < res.data.data.check_lists.length; i++) {
                        if (item.id === res.data.data.check_lists[i].id) {
                            this.listchilds = res.data.data.check_lists[i].check_list_childs
                        }
                    }
                })
            })
        },
        clickShowCheckListChilds(item) {
            console.log(item);
            this.showdataCheckList = 1
            this.showCheckChildsId = item.id
            api.getlistCard(item.card_id).then((res) => {
                for (let i = 0; i < res.data.data.check_lists.length; i++) {
                    if (item.id === res.data.data.check_lists[i].id) {
                        this.listchilds = item.check_list_childs
                    }
                }
            })

        },
        clickdeleteCard(item) {
            api.deleteCards(item.id).then(() => {
                this.dialogFormVisible = false
                api.getListDirectories().then((res) => {
                    this.boards = res.data.data
                })
            })
        },
        clickcheckdescription() {
            this.checkdescription = false
        },

        showaddchildlist(item) {
            this.showdataCheckList = 1
            this.showCheckChildsId = item.id
            this.showTitleChild = 1
            this.titlechild_ID = item.id

        },
        deletecheckList(item) {
            console.log(item);
            api.deletechecklist(item.id).then(() => {
                for (let i = 0; i < this.check_list_clone.length; i++) {
                    if (item.id === this.check_list_clone[i].id) {
                        this.check_list_clone.splice(i, 1)
                    }
                }
            })
        },
        edittodo(item) {
            let data = {
                'title': item.title,
            }
            api.puteditchecklists(data, item.id).then(() => {})

        },
        clickAddTodo(item) {
            let data = {
                "title": this.todo_title,
                "card_id": item.id
            }
            console.log(item);
            api.postchecklist(data).then(() => {
                this.todocheck = false;
                this.todo_title = ''
                api.getlistCard(item.id).then((res) => {
                    this.check_list_clone = res.data.data.check_lists
                    console.log(this.check_list_clone);
                })
            })
        },
        clickTodo() {
            this.todocheck = true
        },
        clickdeltodo() {
            this.todocheck = false
        },
        deldes() {
            this.checkdescription = true
        },
        edittitltedes() {
            this.checkdescription = false
        },
        adddescription(item) {
            this.descriptionadd = this.titledescription
            this.checkdescription = true
            let data = {
                'title': this.updataTitleCard,
                'description': this.titledescription
            }
            api.puteditCards(data, item.id).then(() => {
                api.getListDirectories()
                    .then((res) => {
                        this.descriptionadd = this.titledescription
                        this.boards = res.data.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        },
        blureditCard(item) {
            if (this.updataTitleCard.length > 0) {
                let data = {
                    'title': this.updataTitleCard,
                    'description': this.titledescription
                }
                api.puteditCards(data, item.id).then(() => {
                    api.getListDirectories()
                        .then((res) => {
                            this.boards = res.data.data
                        })
                })
            }
        },

        blurTitle(item) {
            let data = {
                'title': item.title
            }
            api.editTitleDirectories(data, item.id).then(() => {})
        },

        toggleOpenNewCard(id) {
            this.showAddTitleTask = 1;
            this.TitleTask_id = id
        },
        clickdeleteaddcard() {
            this.showAddTitleTask = 0
        },

        clickRemoveChild() {
            this.showTitleChild = 0
            this.titlecheckchilds = ''
            this.showdataCheckList = 0
        },
        clickOnLables() {
            this.onofToLables = true
        },
        clickcloseLables() {
            this.onofToLables = false
        },
        AddToNewLabel() {
            this.checkNewLable = true
            this.onofToLables = false
            this.showIconLable = 0

        },
        outNewLabel() {
            this.checkNewLable = false
        },
        closeEditChilds() {
            this.showUpdataChild = 0
        },
        deleteChild(item) {
            api.deleteCheckListChilds(item.id).then((res) => {
                console.log(res);
                api.getlistCard(this.cloneItem.id).then((res) => {
                    console.log(res.data.data.check_lists);
                    for (let i = 0; i < res.data.data.check_lists.length; i++) {
                        if (item.check_list_id == res.data.data.check_lists[i].id) {
                            this.listchilds = res.data.data.check_lists[i].check_list_childs
                        }
                    }
                })
            })
        },
        delEditLabels() {
            this.editLabelsWrap = false
        }

    },
}
</script>

<style lang="scss" scoped>
.block {
    margin-bottom: 10px;
    cursor: pointer;
}

.block ::v-deep {
    .el-input__inner {
        cursor: pointer;
        background-color: #e9ecef;
        width: 177.5px;
        height: 31px;
    }
}

.block ::v-deep {
    .el-input__inner::placeholder {
        /* chạy tốt trên Chrome, Firefox, Opera, Safari 10.1+ */
        color: #606266 !important;
        opacity: 1;
        /* Firefox */
    }

    .cs-input:-ms-input-placeholder {
        /* chạy trên Internet Explorer 10-11 */
        color: #606266 !important;
    }

    .cs-input::-ms-input-placeholder {
        /* chạy trên Microsoft Edge */
        color: #606266 !important;
    }

}

.block ::v-deep {
    .el-input__icon {
        color: #b04632;
        line-height: 32px;
        font-size: 17px;
    }
}

.ListShowTodo {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;

    .showDeadline {
        display: flex;
        align-items: center;

        i {
            margin-right: 3px;
            color: #cf460c;
        }
    }
}

.success {
    background-color: rgb(97, 189, 79);
    padding: 7px;
    padding-right: 10px;
    color: #fff;
    font-weight: 500;
    border-radius: 7px;
}

.lastDeadline {
    // background-color: rgb(235, 39, 39);
    // margin-left: 10px;
    // padding: 7px;
    // padding-right: 10px;
    // color: #fff;
    // font-weight: 500;
    // border-radius: 7px;
}

.deadlineWrap {
    margin-top: 20px;

    .deadlineTitle {
        display: flex;
        margin-top: 10px;
        align-items: center;

        .deadlineShow {
            margin-left: 10px;
            background-color: #e7e9ec;
            padding: 7px;
            border-radius: 7px;
            cursor: pointer;

            &:hover {
                background-color: #c1c3c6;
            }
        }
    }
}

.showFile {
    margin-top: 30px;
    margin-bottom: 30px;

    .titleIcon {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        .el-icon-paperclip {
            font-size: 24px;
            margin-right: 10px;
        }

        span {
            font-weight: 500;
        }
    }

    .imageUploadFileWap {
        background: #fff;
        position: relative;

        .imageUploadFile {
            position: relative;
            display: flex;
            margin-bottom: 10px;
            padding: 10px;

            .imgWrap {
                width: 200px;
                background-color: #ecc1af;
                border-radius: 5px;
                margin-right: 20px;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                }
            }

            .nameUploadFile {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;

                span {
                    width: 100%;
                    font-weight: 500;
                }

                .inputEditUploadFile {
                    width: 100%;
                    display: flex;
                    text-align: right;

                    span {
                        cursor: pointer;
                    }

                }
            }

            &:hover {
                background-color: #e9ecef;
                padding: 10px;
                border-radius: 10px;
            }

        }

        .EditUpLoadFile {
            position: absolute;
            background-color: #dfe3e9ed;
            right: -390px;
            padding: 5px 15px;
            border-radius: 10px;

            .titleEditWrap {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 0;
                font-size: 17px;
                border-bottom: 1px solid;

                p {
                    margin: 0;
                }
            }

            .formEditWrap {
                margin-top: 10px;
                display: flex;
                flex-wrap: wrap;

                span {
                    width: 100%;
                    margin-bottom: 10px;
                }

                input {
                    width: 100%;
                    height: 35px;
                    border: none;
                    border-radius: 10px;
                    padding: 0 10px;
                    outline: none;
                }

                p {
                    background-color: #ff5f1b;
                    color: #fff;
                    padding: 8px 20px;
                    border-radius: 20px;
                    font-size: 15px;
                    cursor: pointer;

                    &:hover {
                        background-color: #ec4d09;
                    }
                }
            }
        }

        .DeleteUpLoadFile {
            position: absolute;
            background-color: #dfe3e9ed;
            right: -180px;
            padding: 5px 15px;
            border-radius: 10px;
            width: 270px;
            top: 100px;
            z-index: 1;

            .titleEditWrap {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px 0;
                font-size: 17px;
                border-bottom: 1px solid;

                p {
                    margin: 0;
                }

            }

            .titleDelWrap {
                margin-top: 20px;

                p {
                    background-color: #b85440;
                    text-align: center;
                    color: #fff;
                    font-weight: 600;
                    padding: 5px 0;
                    border-radius: 10px;
                    cursor: pointer;

                    &:hover {
                        background-color: #c02f12;
                    }
                }
            }
        }

    }

    .AddUploadFile {
        p {
            background-color: #ff5f1b;
            width: max-content;
            padding: 6px 12px;
            border-radius: 10px;
            cursor: pointer;
            color: #fff;

            &:hover {
                background-color: #dc4708;
            }
        }
    }
}

.ColorLabelWrap {
    display: flex;
    overflow-x: auto;
    width: 260px;
    margin-bottom: 10px;

    .colorTitleLabels {
        width: 40px;
        height: 7px;
        border-radius: 10px;
        margin-right: 5px;
    }
}

.editLabelsWrap {
    position: absolute;
    width: 300px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    top: 87px;
    right: -184px;

    .EditItemLables {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid;

        .el-icon-close {
            cursor: pointer;
            font-size: 20px;
        }

    }

    .EditLablesName {
        p {
            font-size: 16px;
            margin: 0;
            margin-top: 20px
        }

        input {
            width: 92%;
            height: 30px;
            outline: none;
            font-size: 15px;
            padding: 1px 10px
        }
    }

    .EditColorLabels {
        p {
            font-weight: bold;
        }

        .EditClickAddColor {
            display: flex;
            flex-wrap: wrap;

            span {
                text-align: center;
                border-radius: 7px;
                color: #fff;
                width: 42px;
                height: 25px;
                margin-right: 5px;
                margin-bottom: 5px;
                padding: 5px;
            }
        }

    }

    .EditButtonLabels {
        display: flex;
        justify-content: space-between;

        .btn_editLabels_Save {
            background-color: #ff5f1b;
            color: #fff;
            font-size: 15px;
            padding: 8px 15px;
            border-radius: 10px;
            cursor: pointer;

            &:hover {
                background-color: #e44907
            }
        }

        .btn_editLabels_delete {
            color: #fff;
            padding: 8px 15px;
            border-radius: 10px;
            background-color: #b04632;
            cursor: pointer;

        }
    }

}

.showCheckListChilds {
    text-align: right;

    span {
        background-color: #ff5f1b;
        padding: 5px 10px;
        color: #fff;
        font-size: 15px;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            background-color: #d14306;
        }

    }
}

.editTileChilds {
    display: flex;
    flex-wrap: wrap;

    .textareaUpdataTitle {
        width: 380px;
        height: 24px;
        max-width: 400px;
        background-color: #091e420a;
    }

    .editButtonChilds {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;

        .editButtonChilds_Left {
            display: flex;
            align-items: center;

            p {
                background-color: #ff5f1b;
                color: #fff;
                margin-right: 10px;

                &:hover {
                    background-color: #d54609;
                }
            }

            i {
                font-size: 25px;
                cursor: pointer;

                &:hover {
                    color: #ff5f1b;
                }
            }
        }
    }
}

.AddLablesNew {
    position: absolute;
    width: 300px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    top: 87px;
    right: -184px;

    .itemLables {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid;
    }

    .LablesName {
        p {
            font-size: 16px;
            margin: 0;
            margin-top: 20px
        }

        input {
            width: 92%;
            height: 30px;
            outline: none;
            font-size: 15px;
            padding: 1px 10px
        }
    }

    .offerLabelColors {
        p {
            font-weight: bold;
        }

        .ClickAddColor {
            display: flex;
            flex-wrap: wrap;

            span {
                text-align: center;
                border-radius: 7px;
                color: #fff;
                width: 42px;
                height: 25px;
                margin-right: 5px;
                margin-bottom: 5px;
                padding: 5px;
            }
        }
    }

    .saveLableNew {
        width: max-content;
        background-color: #ff5f1b;
        border-radius: 25px;
        cursor: pointer;

        p {
            color: #fff;
            font-weight: bold;
            padding: 8px 20px;
            font-size: 17px;
        }

        &:hover {
            background-color: #d44406;
        }
    }

}

.color_labels {
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 87px;
    right: -184px;
    padding: 10px;
    width: 300px;

    .labels_text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #c4c5c7;
        font-size: 17px;

        p {
            margin: 0;
        }
    }

    .seach_color {
        input {
            width: 95%;
            height: 26px;
            outline: none;
            background-color: #e9ecef;
            margin-top: 20px;
            font-size: 15px;
            border: none;
            border-radius: 10px;
            padding: 5px;
        }
    }

    .form_labels {
        text-align: center;

        .colorLabelsWrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;

            .showItemWrap {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 5px;
                text-align: left;
                padding-left: 20px;
                color: #fff;
                font-weight: 400;
                width: 93%;
                border-radius: 5px;

                &:hover {
                    opacity: 0.9;
                }
            }

            i {
                padding: 9px;

                &:hover {
                    background-color: #e9ecef;
                    border-radius: 5px;
                }
            }
        }
    }

    .updateLabels {
        p {
            background-color: #ff5f1b;
            color: #fff;
            font-weight: bold;
            text-align: center;
            border-radius: 7px;
            padding: 10px 0;
            cursor: pointer;

            &:hover {
                background-color: #cf460c;
            }
        }
    }
}

.listchilds {
    display: flex;
    flex-wrap: wrap;

    input {
        width: 100%;
        padding: 7px 14px;
        border: 1px solid #b6b8ba;
        height: 22px;
        border-radius: 10px;
        outline: none;
    }

    .btn_checkListchilds {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;

        .btn_checkListchilds_addel {
            .save {
                background-color: #ff5f1b;
                color: #fff;
                padding: 5px 10px;
                border-radius: 10px;
                margin-right: 20px;

                &:hover {
                    background-color: #db4b0d;
                }
            }

            .remove {
                padding: 5px 15px;
                border-radius: 10px;
                margin-right: 20px;

                &:hover {
                    background-color: #e9ecef
                }
            }
        }
    }
}

.list_des {
    margin-bottom: 60px;
}

.list_des_item {
    .passdatachilds {
        .listChildsFor {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 10px;
            padding: 5px;
            border-radius: 5px;

            span {
                margin-left: 10px;
                width: 90%;
                cursor: pointer;
            }

            .el-icon-delete {
                color: #fff;
            }

            &:hover {
                background-color: #e9ecef;
                padding: 5px;
                border-radius: 5px;

                .el-icon-delete {
                    color: rgb(230, 29, 29);
                    cursor: pointer;
                }

            }
        }

    }

    p {
        background-color: #eef1f5;
        width: max-content;
        padding: 6px 12px;
        border-radius: 10px;

        &:hover {
            background-color: #e9ecef;
            cursor: pointer;
        }
    }
}

.list_des_title {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 15px;

    input {
        border: none;
        width: 80%;
        margin-left: 10px;
        font-size: 17px;
        height: 20px;

    }

    div {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    span {
        padding: 5px 10px;
        border-radius: 10px;

        &:hover {
            background-color: #e9ecef;
            padding: 5px 10px;
            border-radius: 10px;
        }
    }
}

.form_todo {
    margin-bottom: 20px;

    p {
        font-size: 17px;
    }

    input {
        width: 95%;
        height: 28px;
        outline: none;
        margin-bottom: 25px;
    }

    span {
        background-color: #ff5f1b;
        padding: 5px 15px;
        border-radius: 10px;
        color: #fff;
        font-weight: bold;

        &:hover {
            background-color: #e34603;
        }

    }
}

.todo_text {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;

    p {
        margin-right: 48px;
    }
}

.tododes {
    position: relative;
}

.todo_des {
    position: absolute;
    top: 160px;
    right: -150px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;

}

.labelWrap {
    span {
        font-size: 13px;
    }

    .labelColor {
        display: flex;
        flex-wrap: wrap;

        span {
            margin-right: 5px;
            margin-bottom: 10px;
            color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
        }
    }

    .el-icon-plus {
        background-color: #e9ecef;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: #ff5f1b;
            color: #fff;
        }
    }
}

.AddToCard {
    p {
        width: 250px;
    }
}

.dialog_right {
    span {
        font-size: 17px;
    }

    .addTocard_des {
        background-color: #e9ecef;
        padding: 7px;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 10px;

        i {
            font-size: 17px;
            margin-right: 5px;
        }

        p {
            margin: 0;
        }

        &:hover {
            background-color: #e9ecef;
        }

    }
}

.des_form_click {
    width: 100%;

    textarea {
        width: 100%;
        max-width: 360px;
        height: 100px;
        background-color: #e9ecef;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .des_btn {
        display: flex;

        .button_add {
            border: none;
            background-color: #ff5f1b;
            color: #fff;
            font-size: 17px;
            font-weight: 500;
            padding: 5px 10px;
            border-radius: 7px;
            margin-right: 10px;
            cursor: pointer;
        }

        .button_delete {
            border: none;
            font-size: 17px;
            font-weight: 500;
            margin-right: 10px;
            padding: 5px 10px;
            background-color: #fff;
            cursor: pointer;

            &:hover {
                background-color: #e9ecef;
                padding: 5px 10px;
                border-radius: 7px;
            }

        }

    }
}

.des_cmt {
    width: 100%;

    textarea {
        width: 100%;
        max-width: 360px;
        height: 45px;
        background-color: #e9ecef;
        margin-top: 20px;
    }

}

.edit_des {
    margin-left: 10px;
    background: #f7f7f7;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #e9ecef;
    }
}

.addTocard_des {
    display: flex;
    align-items: center;
}

.form_des {
    display: flex;
    width: 100%;
}

.dialog_left {
    width: 70%;
    padding-right: 15px;
}

.dialog_right {
    width: 30%;
}

.text_card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 20px;

    input {
        border: none;
        font-size: 17px;
        width: 86%;
        margin-left: 5px;
        outline: none;
        padding: 5px 10px;

        &:focus {
            background: #e9ecef;
            padding: 5px 10px;
            border-radius: 5px;

        }
    }
}

.des_Wrap {
    display: flex;
    align-items: center;
    font-size: 17px;
    margin-top: 20px;

    i {
        font-size: 20px;
        margin-right: 20px;
    }
}

.des_text {
    textarea {
        border: 1px solid #ccc;
    }
}

.fooder_add {
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 10px;

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
        width: 250px;

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
                background-color: #ff5f1b;
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
        background-color: #ff5f1b;
        border-radius: 10px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        margin-right: 10px;

        &:hover {
            background-color: #e9581b;
        }
    }

    .el-icon-close {
        font-size: 30px;
        font-weight: bold;
        color: rgb(106, 106, 106);
        cursor: pointer;

        &:hover {
            color: #ff5f1b;
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
    width: 100%;
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
            width: 280px;

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
