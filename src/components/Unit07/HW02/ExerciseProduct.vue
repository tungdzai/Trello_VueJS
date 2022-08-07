<template>
<div class="container">
    <ProductForm />
    <ProductList />
</div>
</template>

<script>
import ProductForm from './ProductForm.vue';
import ProductList from './ProductList.vue';
export default {
    name: 'ExerciseProduct',
    components: {
        ProductForm,
        ProductList
        
    }
}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
}

</style>
