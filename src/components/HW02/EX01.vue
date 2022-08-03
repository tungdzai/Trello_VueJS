<template>
<div class="textWrap">
    <p>Ban đầu:{{text}}</p>
    <p>Đảo ngược:{{reverseText}}</p>
</div>
</template>

<script>
export default {
    data() {
        return {
            text: 'Hi Sếp Tùng'
        }
    },
    computed: {
        reverseText() {
            return this.text.split('').reverse().join('')
            // Phương join() thức này tạo và trả về một chuỗi 
            // mới bằng cách nối tất cả các phần tử trong một mảng
            // (hoặc một đối tượng giống mảng), được phân tách bằng 
            // dấu phẩy hoặc một chuỗi phân tách được chỉ định.Nếu mảng 
            // chỉ có một mục, thì mục đó sẽ được trả về mà không cần sử dụng dấu phân tách.
        }
    }
}
</script>
