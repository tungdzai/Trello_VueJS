<template>
    <div class="wrap">
        <div>
            <input type="checkbox" v-model="checked">
            <span class="title" :class="task.isComplete ? 'complete' : ''">{{task.title}}</span>
        </div>
        <button
            v-if="task.isComplete"
            class="deleteButton"
            @click="onDelete"
        >
            Xóa
        </button>
    </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['task'],
    data () {
      return {
        checked: false,
      }
    },
    methods: {
      onDelete () {
        this.$emit('onDeleteItem')
      }
    },
    watch: {
      checked (value) {
        this.$emit('changeStatus', value)
      }
    }
  }
</script>

<style lang="scss" scoped>


    .wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        padding: 12px;
        border-bottom: 1px solid #d8e0ea;

        .title {
            margin-left: 12px;
            color: #253036;

        
        }

        .deleteButton {
            background: #f54b5e;
            border: unset;
            font-size: 14px;
            font-weight: bold;
            color:#fff;
            width: 60px;
            height: 40px;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 8px;
        }
    }
</style>