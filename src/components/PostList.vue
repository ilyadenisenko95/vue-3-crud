<script setup>
defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="posts"
    v-for="post in posts"
    :key="post.id"
  >
    <RouterLink
      class="posts__link"
      :to="{ name: 'postsdetails', params: { id: post.id } }"
    >
      <div
        class="posts__info"
      >
        <h2 class="posts__info-title">{{ post.title }}</h2>
        <p class="posts__info-text">
          {{ post.body }}
        </p>
        <span class="posts__info-id">user id: {{ post.id }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
  .posts {
    position: relative;
    display: flex;
    width: 49%;
    margin-bottom: 20px;

      &__link {
      text-decoration: none;
      color: #000;
      }

      &__info {
        height: 100%;
        padding: 17px;
        cursor: pointer;
        border: 1px solid rgb(170 170 170);
      }

        &__info-title {
        font-size: 17px;
        line-height: 22px;
        font-weight: 600;
        }

          &__info-id {
            position: absolute;
            right: 20px;
            bottom: 20px;
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
