<script setup>
import TodoDialogAdd from '@/components/TodoDialogAdd.vue';
import TodoList from '@/components/TodoList.vue';
import { useCounter } from '@/stores/counter';
import { ref } from 'vue';



const counter = useCounter();

// Взаимодействие с модальным окном добавления

const createNewTodo = ref(false);



</script>

<template>
  <h1>CRUD задачи</h1>
  <div class="page-layout__add">
    <div class="page-layout__add-checkbox">
      <el-checkbox label="Выполнено" border />
      <el-checkbox label="Избранное" border />
    </div>
    <el-button
      type="primary"
      @click="createNewTodo = true"
    >
      Добавить задачу
    </el-button>
  </div>
  <TodoList
    v-for="todo in counter.todos"
    :key="todo.id"
    :todo="todo"
  />

  <TodoDialogAdd
    @close-dialog="createNewTodo = false"
    v-model="createNewTodo"
  />
</template>


<style lang="scss" scoped>

  .el-button {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .page-layout__add {
  display: flex;
  justify-content: space-between;
  width: 500px;
  height: 54px;
  margin: 0 auto;
  padding: 11px;
  border: 1px solid rgb(170 170 170);

    &-checkbox, .el-button {
      margin: 0;
    }


    &-checkbox {
      display: flex;
      justify-content: space-between;
      width: 245px;
    }

      .el-checkbox {
        margin: 0;
      }

  }

</style>
