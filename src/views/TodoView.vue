<script setup>
import TodoDialogAdd from '@/components/TodoDialogAdd.vue';
import TodoList from '@/components/TodoList.vue';
import { useCounter } from '@/stores/counter';
import { ref } from 'vue';



const counter = useCounter();

// Взаимодействие с модальным окном добавления


const todoDialogCreate = ref(null);
const openCreateItemDialog = (todo) => {
  todoDialogCreate.value.openDialogCreate(todo);
};

</script>

<template>
  <h1>CRUD задачи</h1>
  <div class="page-layout__add">
    <div class="page-layout__add-checkbox">
      <el-checkbox label="Выполнено" v-model="counter.isDoneFilter" border />
      <el-checkbox label="Избранное" v-model="counter.isFavoriteFilter" border />
    </div>
    <el-button
      type="primary"
      @click="openCreateItemDialog"
    >
      Добавить задачу
    </el-button>
  </div>
  <TodoList
    v-for="todo in counter.filteredTodos"
    :key="todo.id"
    :todo="todo"
  />

  <TodoDialogAdd ref="todoDialogCreate" />
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
