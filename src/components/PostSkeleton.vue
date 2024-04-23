<script setup>
import { POSTS_PER_PAGE } from '@/api/posts.js';
</script>

<template>
  <template v-for="skeleton in POSTS_PER_PAGE" :key="skeleton">
    <el-skeleton class="skeleton">
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
  </template>
</template>

<style lang="scss" scoped>
.skeleton {
  width: 49%;
  padding-top: 20px;

  &__body {
    padding: 14px;
  }

  &__description {
    width: 90%;
    height: 25px;
  }
}
</style>
