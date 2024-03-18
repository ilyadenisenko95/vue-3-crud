<script setup>
import { useCounter } from '@/stores/counter';
import { ref } from 'vue';

const counter = useCounter();

// const input = ref('hello');
</script>


<template>
  <h1>Детальная страница задачи</h1>
  <div class="todos-detail">
    <el-input
      class="todos-detail__input"
      v-model="input"
      placeholder=""
    />
    <el-checkbox
      class="todos-detail__checkbox"
      v-model="checked3"
      label="Избранное"
      border
    />
    <el-checkbox
      class="todos-detail__checkbox"
      v-model="checked3"
      label="Выполнено"
      border
    />
    <div class="todos-detail__control">
      <el-button type="primary">Сохранить</el-button>
      <el-button
        type="danger"
      >
        Удалить
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .todos-detail {
    &__input {
      margin-bottom: 16px;
    }

      &__checkbox {
        width: 100%;
        margin-bottom: 16px;
      }
  }

</style>
