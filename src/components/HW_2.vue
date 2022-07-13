<template>
<div class="calculator">
    <div class="display">{{hien_thi || '0'}}</div>
    <div class="btn" @click="clear">C</div>
    <div class="btn" @click="del">del</div>
    <div class="btn" @click="phantram">%</div>
    <div class="btn clc" @click="chia">/</div>
    <div class="btn" @click="so('7')">7</div>
    <div class="btn" @click="so('8')">8</div>
    <div class="btn" @click="so('9')">9</div>
    <div class="btn clc" @click="nhan">*</div>
    <div class="btn" @click="so('4')">4</div>
    <div class="btn" @click="so('5')">5</div>
    <div class="btn" @click="so('6')">6</div>
    <div class="btn clc" @click="tru">-</div>
    <div class="btn" @click="so('1')">1</div>
    <div class="btn" @click="so('2')">2</div>
    <div class="btn" @click="so('3')">3</div>
    <div class="btn clc" @click="cong">+</div>
    <div class="btn zero" @click="so('0')">0</div>
    <div class="btn dot" @click="dot">.</div>
    <div class="btn clc" @click="add">=</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            previous: null,
            hien_thi: '',
            clc: null,

            clcClicked: false,
        }
    },
    methods: {
        clear() {
            this.hien_thi = '';
        },
        del() {
            this.hien_thi = this.hien_thi - 1;
        },
        phantram() {
            this.hien_thi = parseFloat(this.hien_thi) / 100;
        },
        so(number) {
            if (this.clcClicked) {
                this.hien_thi = '';
                this.clcClicked = false;
            }
            this.hien_thi = this.hien_thi + number;
        },
        dot() {
            if (this.hien_thi.indexOf('.') === -1) {
                this.so('.');

            }
        },
        setPrevious() {
            this.previous = this.hien_thi;
            this.clcClicked = true;
        },
        chia() {
            this.clc = (a, b) => b / a;
            this.setPrevious();
        },
        nhan() {
            this.clc = (a, b) => a * b;
            this.setPrevious();

        },
        tru() {
            this.clc = (a, b) => b - a;
            this.setPrevious();
        },
        cong() {
            this.clc = (a, b) => a + b;
            this.setPrevious();
        },
        add() {
            this.hien_thi = this.clc(
                parseFloat(this.hien_thi ),
                parseFloat(this.previous),

            )
        },

    }
}
</script>

<style lang="scss" scoped>
.calculator {
    width: 350px;
    margin: 0 auto;
    font-size: 35px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
}

.display {
    grid-column: 1/5;
    background-color: black;
    color: white;
    text-align: right;
    padding: 0.4rem;

}

.btn {
    background-color: #eee;
    border: 1px solid rgb(105, 104, 104);
    color: black;

}

.clc {
    background-color: rgb(240, 176, 56);
    color: white;

}

.zero {
    grid-column: 1/3;
}
</style>
