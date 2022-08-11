<template>
<div id="app">
    <AdminLayout>
        <Container class="container" orientation="horizontal">
            <Draggable v-for="(value, index) in boards " :key="index" class="boardWrap">
                <div class="colWrap">
                    <div class="header_text"> {{value.title}}</div>
                    <ul>
                        <Container  group-name="col_task">
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
    Container,
    Draggable
} from 'vue-smooth-dnd'
export default {
    name: 'TaskProject',
    components: {
        AdminLayout,
        Container,
        Draggable
    },
    computed: {
        ...mapState('about', [
            'boards',
        ]),
    },
    data() {
        return {
            upperDropPlaceholderOptions: {
                className: 'cards-drop-preview',
                animationDuration: '150',
                showOnTop: true
            },
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    overflow-x: auto;
    margin: 20px;

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

            }

            ul {
                list-style-type: none;
                padding: 0;
                overflow-y: auto;
                max-height: 400px;

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
