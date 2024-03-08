<script setup>

defineProps({
  todo: {
    type: Object,
    required: true,
    default: () => {},
  },
});

defineEmits(['someMyEvent']);

</script>

<template>
  <div class="page-layout__task task">
    <div class="task__top">
      <h2
        v-if="!todo.isDone"
      >
        {{ todo.title }}
      </h2>
      <h2
        v-else
        style="color:#90EE90;"
      >
        {{ todo.title }}
      </h2>
      <div class="task__status">
        <img v-if="!todo.isFavorite" src="../assets/icons/star.svg" alt="star">
        <img v-else src="../assets/icons/StarFull.svg" alt="star">
      </div>
    </div>
    <div class="task__fix">
      <div class="task__fix-text">Редактировать</div>

      <el-button
        @click="$emit('someMyEvent')"
        type="danger"
      >
        Удалить
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .task {
    position: relative;
    width: 500px;
    min-height: 116px;
    margin-right: auto;
    margin-bottom: 20px;
    margin-left: auto;
    padding: 17px;
    border: 1px solid rgb(170 170 170);

      &__top {
        display: flex;
        justify-content: space-between;
      }

        &__status {
          display: flex;
          justify-content: center;
          border: 1px solid rgb(220 223 230);
          border-radius: 4px;
        }

          &__fix {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 12px;
          }

            &__fix-text {
              font-size: 16px;
              line-height: 18.4px;
              font-weight: 400;
              cursor: pointer;
            }

              &__fix-text:hover {
                border-bottom: 1px solid #000;
              }
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  img {
    padding: 7px;
  }
</style>
