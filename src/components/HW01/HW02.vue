<template>
<div class="calculator">
    <input type="string" class="calculator-input" v-model="value">
    <div class="calculator-row">
        <div class="calculator-col" @click="clear()">C</div>
        <div class="calculator-col" @click="del()">del</div>
        <div class="calculator-col" @click="addExpresion('%')">%</div>
        <div class="calculator-col" @click="addExpresion('/')">/</div>
    </div>
    <div class="calculator-row">
        <div class="calculator-col" @click="addExpresion(7)">7</div>
        <div class="calculator-col" @click="addExpresion(8)">8</div>
        <div class="calculator-col" @click="addExpresion(9)">9</div>
        <div class="calculator-col" @click="addExpresion('*')">*</div>
    </div>
    <div class="calculator-row">
        <div class="calculator-col" @click="addExpresion(4)">4</div>
        <div class="calculator-col" @click="addExpresion(5)">5</div>
        <div class="calculator-col" @click="addExpresion(6)">6</div>
        <div class="calculator-col" @click="addExpresion('-')">-</div>
    </div>
    <div class="calculator-row">
        <div class="calculator-col" @click="addExpresion(1)">1</div>
        <div class="calculator-col" @click="addExpresion(2)">2</div>
        <div class="calculator-col" @click="addExpresion(3)">3</div>
        <div class="calculator-col" @click="addExpresion('+')">+</div>
    </div>
    <div class="calculator-row">
        <div class="calculator-col wide">
            <button class="calculator-btn" @click="addExpresion(0)">0</button>
        </div>
        <div class="calculator-col">
            <button class="calculator-btn action" @click="addExpresion('.')">.</button>
        </div>
        <div class="calculator-col">
            <button class="calculator-btn accent action" @click="getResult()">=</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            value: 0
        }
    },
    methods: {
        clear() {
            this.value = 0
        },
        del() {
            this.value = this.value.slice(0, -1);
        },
        addExpresion(e) {
            if (Number.isInteger(this.value)) {
                this.value = '';
            }
            this.value += e;
        },
        getResult() {
                this.value = eval(this.value);
            },
    }
}
</script>

<style lang="scss" scoped>
.calculator {
    .calculator-row {
        display: flex;
        justify-content: center;

        .calculator-col {
            border: 1px solid #ccc;
            padding: 10px;
        }
    }
}
</style>
