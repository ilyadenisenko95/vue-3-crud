<script setup>
defineEmits(['deletePost', 'closeDialog']);


</script>

<template>
  <el-dialog
    title="Создать задачу"
    width="588.5px"
  >
    <template #footer>
      <input class="modal__add-input" type="text" placeholder="Название">
      <el-checkbox class="modal__add-checkbox" label="Избранное" />
      <div class="dialog-footer">
        <el-button
          type="primary"
          @click="$emit('closeDialog')"
        >
          Создать
        </el-button>
        <el-button @click="$emit('closeDialog')" type="cancel">Отмена</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
  input {
    box-sizing: border-box;
    width: 548.5px;
    height: 32px;
    padding: 8px 11px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    color: rgb(168 171 178);
    border: 1px solid rgb(220 223 230);
    border-radius: 4px;
  }

  .el-checkbox {
    box-sizing: border-box;
    width: 548.5px;
    height: 32px;
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 11px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color:#606266;
    border: 1px solid rgb(220 223 230);
    border-radius: 4px;
  }
</style>


