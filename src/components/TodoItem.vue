<script setup>
import TodoDialogDelete from '@/components/TodoDialogDelete.vue';
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';

defineProps({
  todo: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const todoStore = useTodoStore();

// Взаимодействие с модальным окном удаления
const todoDialogDelete = ref(null);
const openDeleteItemDialog =(todo) => {
  todoDialogDelete.value.openDialog(todo);
};
</script>

<template>
  <div
    class="task"
    :class="[ todo.isDone && 'task--done' ]"
    @click="todoStore.changePostDone(todo.id)"
  >
    <div class="task__top">
      <h2
        class="task__title"
        :class="[ todo.isDone && 'task__title--done' ]"
      >
        {{ todo.title }}
      </h2>
      <div class="task__status" @click.stop="todoStore.changeFavorite(todo.id)">
        <img
          v-if="!todo.isFavorite"
          src="../assets/icons/star.svg"
          alt="star"
        >
        <img
          v-else
          src="../assets/icons/StarFull.svg"
          alt="star"
        >
      </div>
    </div>
    <div class="task__fix">
      <RouterLink
        class="task__fix-text"
        :class="[ todo.isDone && 'task__fix-text--done' ]"
        :to="{ name: 'taskdetails', params: { id: todo.id } }"
        @click.stop
      >
        Редактировать
      </RouterLink>
      <el-button
        type="danger"
        @click.stop="openDeleteItemDialog"
      >
        Удалить
      </el-button>
    </div>
  </div>
  <TodoDialogDelete
    ref="todoDialogDelete"
    @deletePost="todoStore.deleteTodos(todo.id)"
  />
</template>


<style lang="scss" scoped>
.task {
  position: relative;
  max-width: 500px;
  min-height: 116px;
  margin: 20px auto;
  margin-right: auto;
  margin-left: auto;
  padding: 17px;
  border: 1px solid rgb(119 119 119);

  &:hover {
    border: 1px solid rgb(0 0 0);
    box-shadow: 0 0 20px 2px rgb(100 100 111 / 0.15);
    transition: 300ms;
    translate: 0 -2px;
  }

  &:focus {
    border: 2px solid rgb(0 0 0);
  }

  &--done {
    border: 1px solid rgb(144 238 144);
  }

  &__title {
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    color: #999;
  }

  &__title--done {
    color: #90EE90;
  }

  &__top {
    display: flex;
    justify-content: space-between;
  }

  &__status {
    display: flex;
    justify-content: center;
    border: 1px solid rgb(220 223 230);
    border-radius: 4px;
  }

  &__fix {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
  }

  &__fix-text {
    font-size: 16px;
    line-height: 18.4px;
    font-weight: 400;
    text-decoration: none;
    color: rgb(51 51 51);
    cursor: pointer;
  }

  &__fix-text--done {
    color: #999;
  }

  &__fix-text:hover {
    border-bottom: 1px solid #000;
  }
}

img {
  padding: 7px;
}

.el-button {
  padding: 9px 20px;
}
</style>
