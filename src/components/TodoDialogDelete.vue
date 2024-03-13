<script setup>
defineEmits(['deletePost', 'closeDialog']);
</script>

<template>
  <el-dialog
    title="Удалить задачу 'Проверить
    почту'"
    width="588.5px"
    :before-close="handleClose"
  >
    <template #footer>
      <div class="dialog-footer">
        <el-button type="danger" @click="$emit('deletePost')">Удалить</el-button>
        <el-button type="primary" @click="$emit('closeDialog')">
          Отмена
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
  .el-button {
    width: 268px;
  }
</style>



