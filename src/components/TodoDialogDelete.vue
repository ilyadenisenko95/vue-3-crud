<script setup>
import { ref } from 'vue';

defineEmits(['deletePost']);

const isConfirmDeleteOpen = ref(false);
const deleteDialogItem = ref({});

const openDialog = (todo) => {
  deleteDialogItem.value = todo;
  isConfirmDeleteOpen.value = true;
};

defineExpose({ openDialog });
</script>

<template>
  <el-dialog
    title="Удалить задачу 'Проверить
    почту'"
    width="588.5px"
    v-model="isConfirmDeleteOpen"
  >
    <template #footer>
      <div class="dialog-footer">
        <el-button type="danger" @click="$emit('deletePost')">Удалить</el-button>
        <el-button type="primary" @click="isConfirmDeleteOpen = false">
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



