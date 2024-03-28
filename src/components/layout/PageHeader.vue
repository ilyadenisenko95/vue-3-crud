<script setup>


</script>

<template>
  <div class="header">
    <h3>Vue 3 CRUD app</h3>
    <ul>
      <router-link
        class="header-router"
        :to="{ name: 'post' }"
        :class="{ active: $route.name === 'post' }"
      >
        Посты
      </router-link>
      <router-link
        class="header-router"
        :to="{ name: 'task' }"
        :class="{ active: $route.name === 'todo' }"
      >
        Задачи
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 220px;
  background: rgb(255 255 255);
  box-shadow: 0 2px 15px 0 rgb(100 100 111 / 0.2);

    &-router {
      font-size: 15px;
      text-decoration: none;
      color: #333;
      cursor: pointer;
    }

    .active {
      color: rgb(0 0 139);
      border-bottom: 1px solid rgb(0 0 139);
    }
  }

  h3 {
      font-size: 15px;
    }

  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    min-width: 128px;
    padding: 0;
  }

  li:hover {
    color: rgb(0 0 139);
    }

</style>
