<script setup>
import { fetchPosts, POSTS_PER_PAGE } from '@/api/posts.js';
import { sleep } from '@/components/helpers/helpers.js';
import PostList from '@/components/PostList.vue';
import PostSkeleton from '@/components/PostSkeleton.vue';
import { onMounted, ref } from 'vue';

const posts = ref([]);
const isPostsLoading = ref(false);
onMounted(async () => {
  isPostsLoading.value = true;
  setTimeout(async () => {
    posts.value = await fetchPosts(0, POSTS_PER_PAGE);
    isPostsLoading.value = false;
  }, 500);
});

const delayButton= ref(false);
let postStartNumber = POSTS_PER_PAGE;
let postEndNumber = POSTS_PER_PAGE * 2;
const postPage = ref(2);
const loadPosts = async () => {
  isPostsLoading.value = true;
  delayButton.value = true;
  const loadPost =  await fetchPosts(postStartNumber, postEndNumber);
  await sleep(500);
  posts.value = [...posts.value, ...loadPost];
  postStartNumber += POSTS_PER_PAGE;
  postEndNumber += POSTS_PER_PAGE;
  postPage.value += 1;
  delayButton.value = false;
  isPostsLoading.value = false;
};
</script>

<template>
  <div class="container">
    <h1>Получение списка всех постов</h1>
    <div class="posts-page__posts posts">
      <PostList :posts="posts" />
      <PostSkeleton
        v-if="isPostsLoading"
        :loading="loading"
        animated
      />
    </div>
    <el-button
      type="primary"
      :loading="delayButton"
      @click="loadPosts"
    >
      Загрузить страницу {{ postPage }}
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.el-button {
  display: block;
  margin: 20px auto;
}

@media (width <= 500px) {
  .skeleton {
    width: 100%;
  }
}
</style>
