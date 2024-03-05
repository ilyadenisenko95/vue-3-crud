<script setup>

</script>

<template>
  <div class="page-layout__add">
    <div class="page-layout__add-checkbox">
      <el-checkbox v-model="checked3" label="Выполнено" border />
      <el-checkbox v-model="checked4" label="Избранное" border />
    </div>
    <el-button type="primary">Добавить задачу</el-button>
  </div>
</template>

<style lang="scss" scoped>

.page-layout__add {
  display: flex;
  justify-content: space-between;
  width: 500px;
  height: 54px;
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  padding: 11px;
  border: 1px solid rgb(170, 170, 170);


    .page-layout__add-checkbox {
      display: flex;
      justify-content: space-between;
      width: 245px;
    }

      .el-checkbox {
        margin: 0;
      }

  }
</style>
