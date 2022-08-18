<template>
<div>
    <input type="file" @change="changefile">
    <button @click="uploadfile"> Up Load</button>
</div>
</template>

<script>
// import _ from "lodash"
import axios from 'axios'

export default {
    name: "ThucHanh03",
    mounted() {
        // this.join()
        // this.last()
        // this.chunk()
        // this.fill()
        // this.drop()
        // this.sortBy()
        // this.has()
        // this.pick()
    },
    data() {
        return {
            file: '',
            filename: ''
        }

    },
    methods: {
        uploadfile() {

            let data = new FormData();
            console.log(data)
            data.append('file', this.file);
            data.append('file_name', this.filename);
            axios({
                method: 'post',
                url: 'https://250d-58-187-74-149.ap.ngrok.io/api/upload',
                data: data
            }).then(() => {
            })

        },
        changefile(e) {
            this.file = e.target.files[0]
            console.log(this.file)
            this.filename = e.target.files[0].name
        }
        // join() {
        //     let arr = ['a', 'b', 'c']
        //     let kq = _.join(arr, '~');
        //     console.log(kq)
        // },
        // last() {
        //     let arr = [1, 2, 3]
        //     let kq = _.last(arr);
        //     console.log(kq)
        // },
        // chunk() {
        //     let arr = ['a', 'b', 'c', 'd', 'e']
        //     let kq = _.chunk(arr, 2);
        //     console.log(kq)

        // }, // /
        // fill() {
        //     let arr = [1, 2, 3, 4, 5, 6, 7, 8]
        //     let kq = _.fill(arr, '*', 1, 4);
        //     console.log(kq)

        // }, 
        // drop() {
        //     let arr = [1, 2, 3, 4]
        //     let kq = _.drop(arr, 2);
        //     console.log(kq)

        // },
        // sortBy() {
        //     let users = [{
        //             'user': 'fred',
        //             'age': 48
        //         },
        //         {
        //             'user': 'barney',
        //             'age': 36
        //         },
        //         {
        //             'user': 'fred',
        //             'age': 40
        //         },
        //         {
        //             'user': 'barney',
        //             'age': 34
        //         }
        //     ]
        //     let kq = _.sortBy(users, ['user', 'age'])
        //     console.loq(kq)

        // },
        // has() {
        //     let  object = { 'a': { 'b': 2 } };
        //     let kq = _.has(object, 'a')
        //     console.log(kq)

        // },
        // //boolean

        // pick(){
        //     let object = { 'a': 1, 'b': '2', 'c': 3 };
        //     let kq=_.pick(object,['a','b'])
        //     console.log(kq)

        // }

    }
}
</script>
