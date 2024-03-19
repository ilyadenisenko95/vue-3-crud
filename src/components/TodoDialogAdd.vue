<script setup>
import { useCounter } from '@/stores/counter';
import { ref, onBeforeUnmount } from 'vue';


const counter = useCounter();
const emits = defineEmits(['deletePost', 'closeDialog']);

// создание новой задачи
const isFavirite = ref(false);
const inputName = ref('');
const addTask = () => {
  counter.addTodo({
    id: Date.now(),
    title: inputName.value,
    isDone: false,
    isFavorite: isFavirite.value,
  });
  inputName.value = '';
  emits('closeDialog');
  isFavirite.value = false;
};

onBeforeUnmount(() => {
  isFavirite.value = false;
});

const closeFavorite = () => {
  console.log(123);
};
</script>

<template>
  <el-dialog
    @before-close="closeFavorite"
    title="Создать задачу"
    width="588.5px"
  >
    <template #footer>
      <input
        v-model="inputName"
        class="modal__add-input"
        type="text"
        placeholder="Название"
      >
      <el-checkbox
        v-model="isFavirite"
        class="modal__add-checkbox"
        label="Избранное"
      />
      <div class="dialog-footer">
        <el-button
          type="primary"
          @click="addTask"
        >
          Создать
        </el-button>
        <el-button
          @click="$emit('closeDialog')"
          type="cancel"
        >
          Отмена
        </el-button>
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


