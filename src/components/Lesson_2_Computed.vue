<template>
<div class="container">
    <p>{{reverseMsg}}</p>
    <p>Number+a={{addA}}</p>
    <p>Number+b={{addB}}</p>
    <button @click="a++">Tăng sumA lên 1 </button>
    <button @click="b++">Tăng sumB lên 1 </button>
    <hr>
    <div>
        <input type="text" placeholder="Họ và Tên" v-model="fullname">
        <button :disabled="isButtonDisabled">SAVE</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Lesson_2_Computed',
    data() {
        return {
            isButtonDisabled: true,
            fullname: '',
            msg: "Nguyen Viet Tung",
            number: 0,
            a: 10,
            b: 20,
        }
    },
    // Thay đổi khi sự phụ thuộc thay đổi . Ví dụ khi a thay đổi thì addA thay đổi không ảnh hưởng đến addB
    computed: {
        reverseMsg() {
            return this.msg.split('').reverse().join('')
        },
        addA() {
            console.log('addA runing')
            return this.number + this.a;
        },
        addB() {
            console.log('addB runing')
            return this.number + this.b;
        }

    },
    watch: {
        fullname(value) {
            if (value.length >= 10) {
                this.isButtonDisabled = false
            } else {
                this.isButtonDisabled = true
                
            }
        }

    }

}
</script>

<style></style>
