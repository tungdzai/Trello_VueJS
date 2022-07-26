<template>
<div class="lesson_2">
    <h1 v-if="2>1">SỐ 2 lớn hơn số 1</h1>
    <h1 v-else>Số 2 nhỏ hơn số 1 </h1>

    <h1 v-show="2>1">Số 2 lớn hơn số 1 luôn đúng</h1>
    <!-- Ẩn và hiện phần tử web theo điều kiện là sử dụng v-show, cách dùng tương tự với v-if -->

    <div v-if="gender === 'nam'">
        Giới tính nam
    </div>
    <div v-else-if="gender === 'nu'">
        Giới tính nữ

    </div>
    <div v-else>
        Giới tính khác
    </div>
    <hr>
    <div v-for="product in products" :key="product.id">
        <p>ID:{{product.id}}</p>
        <p>Name:{{product.name}}</p>
        <p>Price:{{product.price}}</p>
        <p>Quantity:{{product.quantity}}</p>
        <hr>
    </div>
    <div v-for="(food, index) in foods" :key="index">
        <p>{{index}}</p>
        <p>ID:{{food.id}}</p>
        <p>name:{{food.name}}</p>
        <p>price:{{food.price}}</p>
        <p>Quantity:{{food.quantity}}</p>
        <hr>
    </div>
    <div v-for="(food, index) in foods" :key="index">
        <div v-if="food.quantity<=20">
            <p>{{index}}</p>
            <p>ID:{{food.id}}</p>
            <p>name:{{food.name}}</p>
            <p>price:{{food.price}}</p>
            <p>Quantity:{{food.quantity}}</p>
            <hr>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Lesson_2',
    data() {
        return {
            gender: 'nam',
            products: [{
                    id: 1,
                    name: 'Iphone 13 promax',
                    price: 30000000,
                    quantity: 20,
                },
                {
                    id: 2,
                    name: 'Iphone 12 promax',
                    price: 25000000,
                    quantity: 4,
                },
                {
                    id: 3,
                    name: 'Iphone 11 promax',
                    price: 20000000,
                    quantity: 10,
                }

            ],

            foods: [{
                    id: 1,
                    name: 'milo',
                    price: 24000,
                    quantity: 15,
                },
                {
                    id: 2,
                    name: 'cafe',
                    price: 24000,
                    quantity: 40,
                },
                {
                    id: 3,
                    name: 'chichi',
                    price: 24000,
                    quantity: 20,
                }

            ]
        }

    }
}
</script>

<style scoped>
</style>
