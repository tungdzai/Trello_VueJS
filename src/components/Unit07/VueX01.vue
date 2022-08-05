<template>
<div>
    VueX01+{{count}}
    <br>
    {{doneTodos}}
    <br>
    {{$store.getters.getTodoByIndex(4)}}
    <br>
    <button @click="btn">Click me</button>
</div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations
} from 'vuex'
export default {
    name: 'VueX01',
    computed: {
        ...mapState([
            'count'
        ]),
        ...mapGetters([
            'doneTodos',
        ])
    },
    mounted() {
        console.log(this.$store.getters.getTodoByIndex(1));
    },
    methods: {
        ...mapMutations([
            'increment',
        ]),
        btn(){
            let input= {
                name:"Zent",
                number:10
            }
            this.increment(input)
        }
    }
}
</script>
