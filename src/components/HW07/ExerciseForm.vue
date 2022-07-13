<template>
<div class="container">
    <ProductForm />
    <ProductList />
</div>
</template>

<script>
import ProductForm from './ProductForm.vue'
import ProductList from './ProductList.vue'
export default {
    name: 'ExerciseForm',
    components: {
        ProductForm,
        ProductList
    },
    data() {
        return {
            products: [],
            product: {}
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    padding: 24px;
    color: #253036;
    display: flex;
    align-items: flex-start;
}
</style>
