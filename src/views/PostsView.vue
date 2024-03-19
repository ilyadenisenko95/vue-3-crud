<script setup>
import { fetchPosts } from '@/api/posts.js';
import PostList from '@/components/PostList.vue';
import { useCounter } from '@/stores/counter';
import { onMounted, ref } from 'vue';
const counter = useCounter();


const posts = ref([]);
const isPostsLoading = ref(false);
onMounted(async () => {
  setTimeout(async () => {
    posts.value = await fetchPosts(0, 4);
  }, 500);


});

const delayButton= ref(false);
let postStartNumber = 4;
let postEndNumber = 8;
const postPage = ref(2);
const loadPosts = async () => {
  isPostsLoading.value = true;
  delayButton.value = true;
  setTimeout(async () => {
    const loadPost =  await fetchPosts(postStartNumber, postEndNumber);
    posts.value = [...posts.value, ...loadPost];
    postStartNumber += 4;
    postEndNumber += 4;
    postPage.value += 1;
    delayButton.value = false;
    isPostsLoading.value = false;
  }, 1000);
};



</script>

<template>
  <h1>Получение списка всех постов</h1>
  <div>
    <PostList
      :posts="posts"
    />
    <el-skeleton v-if="isPostsLoading" :rows="5" animated />
  </div>
  <el-button
    :loading="delayButton"
    @click="loadPosts"
    type="primary"
  >
    Загрузить страницу {{ postPage }}
  </el-button>
</template>


<style lang="scss" scoped>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;


    .el-button {
      display: block;
      margin: 20px auto;
    }
  }
</style>
