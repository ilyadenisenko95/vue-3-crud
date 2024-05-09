<template>
  <div class="header">
    <div class="header__menu">
      <h3 class="header__title">Vue 3 CRUD app</h3>
      <ul class="header__list list">
        <router-link
          class="list__item"
          :class="{ active: $route.name === 'post' }"
          :to="{ name: 'post' }"
        >
          Посты
        </router-link>
        <router-link
          class="list__item"
          :class="{ active: $route.name === 'task' }"
          :to="{ name: 'task' }"
        >
          Задачи
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 50px;
  background: rgb(255 255 255);
  box-shadow: 0 2px 15px 0 rgb(100 100 111 / 0.2);

  &__menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1064px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 32px;
  }

  &__title {
    font-size: 15px;
  }

  &__router:hover {
    color: rgb(0 0 139);
  }

  .active {
    text-decoration: none;
    color: rgb(0 0 139);
    border-bottom: 1px solid rgb(0 0 139)
  }
}

.list {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    min-width: 128px;
    padding: 0;

  &__item {
    font-size: 15px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
  }
}

@media (width <= 768px) {
  .header__menu {
    padding: 0 20px;

  }
}
</style>
