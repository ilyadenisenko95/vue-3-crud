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
    class="post"
    v-for="post in posts"
    :key="post.id"
  >
    <RouterLink
      class="post__link"
      :to="{ name: 'postsdetails', params: { id: post.id } }"
    >
      <div
        class="post__info"
      >
        <h2 class="post__info-title">{{ post.title }}</h2>
        <p class="post__info-text">
          {{ post.body }}
        </p>
        <span class="post__info-id">user id: {{ post.id }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.post {
position: relative;
display: flex;
width: 49%;
margin-bottom: 20px;

  &:hover {
    margin-top: 10px;
    box-shadow: 0 0 20px 2px rgb(100 100 111 / 0.15);
  }

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

@media (width <= 500px) {
.post {
  width: 100%;
}
}



</style>
