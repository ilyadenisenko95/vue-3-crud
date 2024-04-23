<script setup>
import {fetchPost} from '@/api/posts.js';
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
  <div class="container">
    <h1>Детальная страница поста</h1>
    <el-skeleton
      class="skeleton"
      v-if="isPostLoading"
      :loading="loading"
      animated
    >
      <template #template>
        <div class="skeleton__body">
          <el-skeleton-item variant="h3" />
          <div class="skeleton__description" style="height: 16px; margin-top: 9px;">
            <el-skeleton-item variant="text" style=" width: 95%; margin-top: 8px" />
            <el-skeleton-item variant="text" style="width: 90%; margin-top: 8px; " />
            <el-skeleton-item variant="text" style=" width: 30%; margin-top: 8px; " />
          </div>
          <el-skeleton-item variant="text" style="width: 12%; margin-top: 60px; margin-bottom: 19px;  margin-left: 87%;" />
        </div>
      </template>
    </el-skeleton>
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

@media (width <= 500px) {
.posts-detail {
  &__title {
    font-size: 18px;
  }

  &__text {
    font-size: 16px;
  }
}
}
</style>
