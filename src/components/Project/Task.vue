<template>
<div id="app">
    <AdminLayout>
        <Container class="container" orientation="horizontal" @drop="onColumnDrop">
         <!-- :get-child-payload="getChildPayload" -->
            <Draggable v-for="(value, index) in boards " :key="index" class="boardWrap">
                <div class="colWrap">
                    <div class="header_text">
                        <p>{{value.title}}</p>
                    </div>
                    <ul>
                        <Container group-name="col_task" drag-class="card-ghost" @drop="onCardDrop" >
                        <!-- :get-child-payload="getCardPayload" -->
                            <Draggable v-for="element in value.cards" :key="element.id">
                                <li>
                                    {{element.title}}
                                </li>
                            </Draggable>
                        </Container>
                    </ul>
                    <div class="fooder_add">Add card</div>
                </div>
            </Draggable>
        </Container>
    </AdminLayout>
</div>
</template>

<script>
import AdminLayout from '../../layouts/AdminLayout.vue'

import {
    mapState
} from 'vuex'
import {
    applyDrag
} from '../../utils/drop'
import {
    Container,
    Draggable
} from 'vue-smooth-dnd'
export default {
    name: 'TaskProject',
    components: {
        AdminLayout,
        Container,
        Draggable,
    },
    computed: {
        ...mapState('about', [
            'boards',
            'setBoards'
        ]),
    },
    data() {
        return {
        }
    },
    methods: {
        onColumnDrop(dropResult) {
            let newBoard=[...this.boards]
            newBoard=applyDrag(newBoard,dropResult)
            console.log(newBoard)
        },
        // getChildPayload(index) {
        //     return  this.boards[index]        
        // },
        onCardDrop(dropResult){
            console.log(dropResult)
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    overflow-x: auto;
    margin-top: 10px;

    .boardWrap {
        background: #e9ecef;
        border-radius: 10px;
        width: 300px;
        margin-left: 15px;

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

                button {
                    border: none;
                    background-color: #e9ecef;
                }

                p {
                    margin-bottom: 0;
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

.card-ghost {
    transition: transform 0.18s ease;
    transform: rotateZ(5deg)
}

.card-ghost-drop {
    transition: transform 0.18s ease-in-out;
    transform: rotateZ(0deg)
}
</style>
