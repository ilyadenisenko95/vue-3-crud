<script setup>
import TodoList from '@/components/TodoList.vue';
</script>

<template>
  <h1>CRUD задачи</h1>
  <el-button type="primary">Добавить задачу</el-button>
  <MyCheckbox />
  <TodoList />
</template>


<style lang="scss" scoped>

  .el-button {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

</style>
