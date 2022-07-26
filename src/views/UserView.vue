<template>
    <div>
        <button @click="btnView">Đây là view</button>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "userView",
    methods:{
        btnView(){
            this.$router.push({ name: 'users', params: { userId: '123' } })
            
        }
    }

}
</script>
