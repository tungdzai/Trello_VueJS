<template>
<div class="container">
    <ProductForm :product="product" @onCreateProduct="createProduct" @onUpdateProduct="updateProduct" @onClear="clearData" />
    <ProductList :products="products" @onEditProduct="editProduct" @onDeleteProduct="deleteProduct" />
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
    },
    methods: {
        createProduct(product) {
            this.products.push(product)
        },
        updateProduct(editableProduct) {
            let index = this.products.findIndex((product) => {
                return product.id === editableProduct.id
            })
            if (index !== -1) {
                let newProducts = JSON.parse(JSON.stringify(this.products))
                newProducts[index] = {
                    ...newProducts[index],
                    name: editableProduct.name,
                    price: editableProduct.price,
                    quantity: editableProduct.quantity,
                }
                this.products = newProducts
            }
        },
        editProduct(product){
            this.product=product
        },
        deleteProduct(index){
            this.products.splice(index,1)
        },
        clearData(){
            this.product={}
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
