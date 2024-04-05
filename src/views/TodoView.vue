<script setup>
import TodoDialogAdd from '@/components/TodoDialogAdd.vue';
import TodoList from '@/components/TodoList.vue';
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';

const todoStore = useTodoStore();

// Взаимодействие с модальным окном добавления
const todoDialogCreate = ref(null);
const openCreateItemDialog = (todo) => {
  todoDialogCreate.value.openDialogCreate(todo);
};
</script>

<template>
  <div class="container">
    <h1>CRUD задачи</h1>
    <div class="task-filter">
      <div class="task-filter__change">
        <el-checkbox
          class="task-filter__checkbox"
          label="Выполнено"
          v-model="todoStore.isDoneFilter"
          border
        />
        <el-checkbox
          label="Избранное"
          v-model="todoStore.isFavoriteFilter"
          border
        />
      </div>
      <el-button
        type="primary"
        @click="openCreateItemDialog"
      >
        Добавить задачу
      </el-button>
    </div>
    <TodoList
      v-for="todo in todoStore.filteredTodos"
      :key="todo.id"
      :todo="todo"
    />

    <TodoDialogAdd ref="todoDialogCreate" />
  </div>
</template>


<style lang="scss" scoped>
.task-filter {
  display: flex;
  justify-content: space-between;
  height: 54px;
  max-width: 500px;
  margin: 0 auto;
  padding: 11px;
  border: 1px solid rgb(170 170 170);
}

.el-checkbox {
  margin-right: auto;

  &:first-of-type {
    margin-right: 10px;
  }
}

@media (width <= 480px) {
.task-filter {
  flex-wrap: wrap;
  justify-content: center;
  height: 100px;

  &__change {
    width: 100%;
    text-align: center
  }
}

.el-button {
  margin-top: 5px;
}

}

</style>
