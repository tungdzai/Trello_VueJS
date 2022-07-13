<template>
<div class="container" ref="bdr_color">
    <input type="number" min="0" max="100" v-model="title">
</div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            bgr_color: "background-color:#ffffff"
        }
    },
    watch: {
        title(value) {

            if (value <= 10 && value >= 1) {
                this.$refs.bdr_color.style.backgroundColor = 'gray';
            } else if (value <= 30 && value > 11) {
                this.$refs.bdr_color.style.backgroundColor = 'green';
            } else if (value <= 50 && value > 31) {
                this.$refs.bdr_color.style.backgroundColor = 'blue';
            } else if (value <= 70 && value > 51) {
                this.$refs.bdr_color.style.backgroundColor = 'violet';
            }else{
                this.$refs.bdr_color.style.backgroundColor = '#ffffff';
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 300px;
    height: 300px;
    border: 1px solid black;
}
</style>
