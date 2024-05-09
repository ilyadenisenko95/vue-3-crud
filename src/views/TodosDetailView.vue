<script setup>
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const todoStore = useTodoStore();

const route = useRoute();
const pageRouteId = Number(route.params.id);
const detailTodo = todoStore.todos.find((el) => el.id === pageRouteId);

const title = ref('');
const isDone = ref(false);
const isFavorite = ref(false);
title.value = detailTodo.title;
isDone.value = detailTodo.isDone;
isFavorite.value = detailTodo.isFavorite;

const isHasText = ref(true);
const router = useRouter();
const updateTodo = () => {
  detailTodo.title = title.value;
  detailTodo.isDone = isDone.value;
  detailTodo.isFavorite = isFavorite.value;
  if(title.value.length > 0){
    router.push({ name: 'task' });
    ElNotification({
      title: 'Задача успешно редактирована!',
      type: 'success',
    });
  } else {
    isHasText.value = false;
  }
};

const deleteTodo = () => {
  todoStore.deleteTodos(pageRouteId);
  router.push({ name: 'task' });
};
</script>

<template>
  <div class="container">
    <h1>Детальная страница задачи</h1>
    <div class="todos-detail">
      <span class="todos-detail__error" v-if="!isHasText">
        Пожалуйста, введите название!
      </span>
      <el-input
        class="todos-detail__input"
        v-model="title"
      />
      <el-checkbox
        class="todos-detail__checkbox"
        v-model="isFavorite"
        label="Избранное"
        border
      />
      <el-checkbox
        class="todos-detail__checkbox"
        v-model="isDone"
        label="Выполнено"
        border
      />
      <div class="todos-detail__control">
        <el-button type="primary" @click="updateTodo">
          Сохранить
        </el-button>
        <el-button type="danger" @click="deleteTodo">
          Удалить
        </el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todos-detail {
  &__input {
    margin-bottom: 16px;
  }

  &__error {
    display: flex;
    justify-content: left;
    margin-bottom: 8.5px;
    font-size: 14px;
    line-height: 16.1px;
    font-weight: 400;
    color: red;
  }

  &__checkbox {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
}
</style>
