<script setup>
</script>

<template>
  <h1>Детальная страница поста</h1>
  <div class="posts-detail">
    <h2 class="posts-detail__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit qui aperiam voluptatem! Adipisci laboriosam voluptas molli</h2>
    <p class="posts-detail__text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati quidem rerum fugiat placeat, excepturi dolorem vero cupiditate assumenda cumque pariatur ad nostrum delectus, doloribus eaque recusandae.
    </p>
    <div class="posts-detail__id">user id: 1</div>
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
          font-size: 16px;
          line-height: 18px;
          font-weight: 400;
          }
  }

</style>
