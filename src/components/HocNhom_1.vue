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
    
 </div>
  
</template>

<script>
export default {
    name:"HocNhom_1",
    data(){
        return{
            Array1:[1,2,3,4,5],
            Array2:[5,6,7,8],
            Array3:[9,10,11,12,13],
            
            word:[
                "Tùng",
                "Cúc",
                "Nam",
                "Nguyễn",
                "aaaaaaa"
            ]
                

        }

    },
    methods:{
        handconcat(){
            console.log(this.Array1.concat(this.Array2));
        },
        handFilter(){
            let result= this.word.filter(word =>word.length >4)
            console.log(result)
            let result_1 = this.word.filter(word =>word.length>15)
            console.log(result_1)
            let result_2 = this.word.filter(function(word){
                return word.length>1;
                
            })
            console.log(result_2)
        },
        handFind(){
            let result= this.Array1.find(el => el >2)
            console.log(result)
        },
        handePop(){

            console.log(this.word)
            this.word.pop()
            console.log(this.word)
        },
        handeShift(){
            console.log(this.word)
            this.word.shift()
            console.log(this.word)

        },
        handePush(){
            console.log(this.word)
            this.word.push("hoàng")
            console.log(this.word)

        },
        handeunShift(){
            console.log(this.word)
            this.word.unshift("hoàng")
            console.log(this.word)
        },
        handeReverse(){
            console.log(this.word)
            this.word.reverse()
            console.log(this.word)

        },
        handeCharAt(){
            let fullname = "Tùng DZai"
            console.log(fullname.charAt(0))
        }

    }
}
</script>

<style scoped>
</style>
