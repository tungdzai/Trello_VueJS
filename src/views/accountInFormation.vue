<template>
<div>
    <AdminLayout>
        <template #header>
            Thông tin tài khoản
        </template>
        <div class="info">
            <div class="info_left"></div>
            <div class="info_right"></div>
        </div>
    </AdminLayout>
</div>
</template>

<script>
import AdminLayout from '../layouts/AdminLayout.vue'
export default {
    name: 'accountInFormation',
    components: {
        AdminLayout
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
.paginationWrap {
    margin-top: 20px;
    text-align: right;
}
</style>
