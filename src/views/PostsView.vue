<script setup>
import { fetchPosts } from '@/api/posts.js';
import PostList from '@/components/PostList.vue';
import { onMounted, ref } from 'vue';


const posts = ref([]);
const isPostsLoading = ref(false);

onMounted(async () => {
  isPostsLoading.value = true;
  setTimeout(async () => {
    posts.value = await fetchPosts(0, 4);
    isPostsLoading.value = false;

  }, 500);


});


let postStartNumber = 4;
let postEndNumber = 8;
const postPage = ref(2);
const loadPosts = async () => {
  setTimeout(async () => {
    const loadPost =  await fetchPosts(postStartNumber, postEndNumber);
    posts.value = [...posts.value, ...loadPost];
    console.log(loadPost);
    postStartNumber += 4;
    postEndNumber += 4;
    postPage.value += 1;
    console.log(postPage);
  }, 500);
};



</script>

<template>
  <h1>Получение списка всех постов</h1>
  <div>
    <PostList
      :posts="posts"
      v-if="!isPostsLoading"
    />
    <el-skeleton v-else :rows="5" animated />
  </div>
  <el-button @click="loadPosts" type="primary">Загрузить страницу {{ postPage }}</el-button>
</template>


<style lang="scss" scoped>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;


    .el-button {
      display: block;
      margin-right: auto;
      margin-bottom: 20px;
      margin-left: auto;
    }
  }
</style>
