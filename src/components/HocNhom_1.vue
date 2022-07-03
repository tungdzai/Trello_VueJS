<template>
<div>
    <button @click="handconcat">Click</button>
    <button @click="handFilter">Filter</button>
    <button @click="handFind">Find</button>
    <button @click="handePop">Pop</button>
    <button @click="handeShift">Shift</button>
    <button @click="handePush">Push</button>
    <button @click="handeunShift">UnShift</button>
    <button @click="handeReverse">Reverse</button>
    <button @click="handeCharAt">CharAt</button>
    <button @click="handeIndexOf">IndexOf</button>
    <button @click="handelastIndexOf">lastIndexOf</button>
    <button @click="handeReplace">Replace</button>
    <button @click="handeReplaceAll">ReplaceAll</button>
    <button @click="handeSlice">Slice</button>
    <button @click="handeSplit">Split</button>
    <button @click="handeToLowerCase">ToLowerCase</button>
    <button @click="handeToUpperCase">ToUpperCase</button>
    <button @click="handeTrim">Trim</button>
    <button @click="handeTrimStart">TrimStart</button>
    <button @click="handeTrimEnd">TrimEnd</button>
</div>
</template>

<script>
export default {
    name: "HocNhom_1",
    data() {
        return {
            Array1: [1, 2, 3, 4, 5],
            Array2: [5, 6, 7, 8],
            Array3: [9, 10, 11, 12, 13],

            word: [
                "Tùng",
                "Cúc",
                "Nam",
                "Nguyễn",
                "aaaaaaa"
            ]

        }

    },
    methods: {
        handconcat() {
            console.log(this.Array1.concat(this.Array2));
        },
        handFilter() {
            let result = this.word.filter(word => word.length > 4)
            console.log(result)
            let result_1 = this.word.filter(word => word.length > 15)
            console.log(result_1)
            let result_2 = this.word.filter(function (word) {
                return word.length > 1;

            })
            console.log(result_2)
        },
        handFind() {
            let result = this.Array1.find(el => el > 2)
            console.log(result)
        },

        // Xóa phần tử cuối mảng
        handePop() {

            console.log(this.word)
            this.word.pop()
            console.log(this.word)
        },
        // Xóa phẩn tử đầu của mảng 
        handeShift() {
            console.log(this.word)
            this.word.shift()
            console.log(this.word)

        },
        // Thêm phần tử vào cuối mảng
        handePush() {
            console.log(this.word)
            this.word.push("hoàng")
            console.log(this.word)

        },
        // Thêm phần tử vào đầu mảng
        handeunShift() {
            console.log(this.word)
            this.word.unshift("hoàng")
            console.log(this.word)
        },
        // Đảo ngược phần tủ chuỗi
        handeReverse() {
            console.log(this.word)
            this.word.reverse()
            console.log(this.word)

        },

        // Trả về kí tự ở vị trí trên chuỗi .Note: khoảng trắng cũng là 1 vị trí.
        handeCharAt() {
            let fullname = "Tùng DZai"
            console.log(fullname.charAt(0))
        },
        // Tìm vị trí của từ trong một chuỗi
        handeIndexOf() {
            let word = "cộng hòa xã hội chủ xã nghĩa việt xã nam"
            console.log(word.indexOf("xã")) //Tìm vị trí của từ "xã" từ trái sang phải 
            console.log(word.indexOf("xã", 10)) //TÌm vị trí của từ "xã" từ trái sang phải và vị trí bắt đầu từ 10.

        },

        handelastIndexOf() {
            let word = "cộng hòa xã hội chủ xã nghĩa việt xã nam"
            console.log(word.lastIndexOf("xã")) //Tìm vị trí từ "xã" cuối cùng của chuỗi từ trái sang phải
            console.log(word.lastIndexOf("xã", 19)) //Tìm vị trí từ "xã" cuối cùng của chuối từ phải sang trái vị trí bắt đầu từ 19
        },
        // Thay thế từ trong chuỗi
        handeReplace() {
            let word = "cộng hòa xã hội chủ xã nghĩa việt xã nam"
            console.log(word.replace("xã", "tùng")) //Thay thế từ "xã" ở đầu chuỗi thành từ "tùng"

        },
        handeReplaceAll() {
            let word = "cộng hòa xã hội chủ xã nghĩa việt xã nam"
            console.log(word.replaceAll("xã", "tùng")) //Thay thế tất cả từ "xã" thành từ "tùng"

        },

        // Cắt chuỗi
        handeSlice() {
            let word = "cộng hòa xã hội chủ xã nghĩa việt xã nam"
            console.log(word.slice(5)) //Cắt chuỗi từ vị trí số 5 đến cuối chuỗi 
            console.log(word.slice(5, 33)) //Cắt chuỗi từ vị trí số 5 đến vị trí số 33
            console.log(word.slice(-5)) // Cắt chuỗi từ phải sang trái
        },
        //Cắt chuối theo điều kiện 
        handeSplit() {
            let str = "Hi anh Tùng"
            console.log(str.split()) // Gộp chuỗi thành 1 phần từ của mảng
            console.log(str.split("")) // Tách chữ cái thành từng phần tử của mảng
            console.log(str.split("", 5)) // Tách chữ cái thành từng phần tử của mảng và cắt mảng lấy ra 5 phần từ đầu tiên 

        },
        //Chuyển chuỗi in hoa thành chữ in thường 
        handeToLowerCase() {
            let str = "xin CHÀO SếP TùNG"
            console.log(str.toLowerCase())
        },
        //CHuyển chuỗi in thường thành chuỗi in hoa 
        handeToUpperCase() {
            let str = "xin chào đại ca tùng đẹp zai"
            console.log(str.toUpperCase())
        },
        //Loại bỏ khoảng trắng 2 đầu của chuỗi 
        handeTrim(){
            let str ="   Hello     World      "
            console.log(str.trim())
        },
        //Loại bỏ khoảng trắng đầu của chuỗi 
        handeTrimStart(){
            let str ="   Hello     World      "
            console.log(str.trimStart())
        },
        //Loại bỏ khoảng trắng cuối của chuỗi 
        handeTrimEnd(){
            let str ="   Hello     World      "
            console.log(str.trimEnd())
        }



    }
}
</script>

<style scoped>
</style>
