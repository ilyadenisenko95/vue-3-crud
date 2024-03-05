<script setup>
import { fetchPost } from '@/api/posts.js';
import PostList from '@/components/PostList.vue';

// const consoleLogPost = async (id) => {
//   const post = await fetchPost(id);
//   console.log(post);
// };
// consoleLogPost(1);
// consoleLogPost(2);
// consoleLogPost(15);

const posts = [
  {id: 1, title: 'Vue.js', body: 'Описание поста'},
  {id: 2, title: 'Vue.js1', body: 'Описание поста1'},
  {id: 3, title: 'Vue.js2', body: 'Описание поста2'},

];
</script>

<template>
  <h1>Получение списка всех постов</h1>
  <div>
    <PostList :posts="posts" />
  </div>
  <el-button type="primary">Загрузить страницу 2</el-button>
</template>


<style lang="scss" scoped>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    grid-auto-rows: minmax(186px, auto);
  }

  .el-button {
    display: block;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
