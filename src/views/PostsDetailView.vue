<script setup>
import {fetchPost} from '@/api/posts.js';
import {useCounter} from '@/stores/counter';
import {ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';

const isPostLoading = ref(false);

onMounted(async () => {
  isPostLoading.value = true;
  setTimeout(async () => {
    isPostLoading.value = false;
  }, 500);
});

const post = ref([]);

const route = useRoute();

const loadPost = async () => {
  const myPost = await fetchPost(route.params.id);
  post.value = myPost;
};
loadPost();



</script>

<template>
  <h1>Детальная страница поста</h1>
  <el-skeleton v-if="isPostLoading" :rows="5" animated />
  <div
    class="posts-detail"
    v-else
  >
    <h2 class="posts-detail__title">{{ post.title }}</h2>
    <p class="posts-detail__text">
      {{ post.body }}
    </p>
    <div class="posts-detail__id">user id: {{ $route.params.id }}</div>
  </div>
</template>

<style lang="scss" scoped>

.posts-detail {
&__title {
  font-size: 21px;
  line-height: 26px;
  font-weight: 700;
}

&__text {
  margin: 20px 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
}

  &__id {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  }
}

</style>
