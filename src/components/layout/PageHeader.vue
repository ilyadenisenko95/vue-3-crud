<script setup>

</script>

<template>
  <div class="header">
    <h3>Vue 3 CRUD app</h3>
    <ul>
      <li>Посты</li>
      <li>Задачи</li>
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
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 15px 0px rgba(100, 100, 111, 0.2);

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

        li {
          font-size: 15px;
          cursor: pointer;
        }

        li:active {
          color: rgb(0, 0, 139);
          border-bottom: 1px solid rgb(0, 0, 139);
        }

}
</style>
