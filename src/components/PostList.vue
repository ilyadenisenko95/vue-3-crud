<script setup>
defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="posts" v-for="post in posts" :key="post.id">
    <div class="posts__info">
      <h2 class="posts__info-title">{{ post.title }}</h2>
      <p class="posts__info-text">
        {{ post.body }}
      </p>
      <div class="posts__info-id">user id: 1</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .posts {
    display: flex;

    &__info {
      padding: 17px;
      border: 1px solid rgb(170 170 170);
    }

      &__info-title {
      font-size: 17px;
      line-height: 22px;
      font-weight: 600;
      }

        &__info-id {
          display: flex;
          justify-content: flex-end;
          font-size: 13px;
          line-height: 16px;
          font-weight: 400;
        }

        &__info-text {
          margin: 16px 0;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
        }
  }

</style>
