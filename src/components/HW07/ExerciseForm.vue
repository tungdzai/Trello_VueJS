<template>
<div class="container">
    <ProductForm :product="product" @onCreateProduct="create" @onUpdateProduct="update" @onClear="clear" />
    <ProductList :products="products" @onEditProduct="edit" @onDeleteProduct="delete" />
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
        create(product) {
            this.products.push(product)
        },
        update(editableProduct) {
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
        edit(product){
            this.product=product
        },
        delete(index){
            this.products.splice(index,1)
        },
        clear(){
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
