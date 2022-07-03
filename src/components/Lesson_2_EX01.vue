<template>
<div class="container" :style="bgr_color">
    <input type="text" placeholder="Mời bạn nhập" v-model="name">
</div>
</template>

<script>
export default {
    name: 'Lesson_2_EX01',
    data() {
        return {
            name: '',
            bgr_color: "background-color:#ffffff"

        }
    },
    watch: {
        name(value) {
            if (value.length <= 10 || value.legth >= 1) {
                this.bgr_color = "background-color:red"
            }
            else if( value.length <= 20 || value.legth > 11){
                this.bgr_color = "background-color:blue"
            }

        }
    }

}
</script>

<style lang="scss" scoped>
.container {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    margin: 0 auto;

    input {
        padding: 5px;
    }
}
</style>
