<script setup>
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';

const todoStore = useTodoStore();
const isHasName = ref(true);

// создание новой задачи
const isFavorite = ref(true);
const inputName = ref('');
const addTask = () => {
  if(inputName.value.length > 0){
    todoStore.addTodo({
      id: Date.now(),
      title: inputName.value,
      isDone: false,
      isFavorite: isFavorite.value,
    });
    inputName.value = '';
    isFavorite.value = false;
    isConfirmCreateOpen.value = false;
    ElNotification({
      title: 'Задача успешно добавлена!',
      type: 'success',
    });
  }
  else{
    isHasName.value = false;
  }
};


const isConfirmCreateOpen = ref(false);
const openDialogCreate = () => {
  isConfirmCreateOpen.value = true;
  inputName.value ='';
  isFavorite.value = false;
  isHasName.value = true;
};

defineExpose({ openDialogCreate });
</script>

<template>
  <el-dialog
    title="Создать задачу"
    width="588.5px"
    v-model="isConfirmCreateOpen"
  >
    <template #footer>
      <span class="error-text" v-if="!isHasName">
        Пожалуйста, введите название!
      </span>
      <input
        class="input-text"
        type="text"
        placeholder="Название"
        v-model="inputName"
      >
      <el-checkbox
        class="checkbox"
        label="Избранное"
        v-model="isFavorite"
      />
      <div class="dialog-footer">
        <el-button
          type="primary"
          @click="addTask"
        >
          Создать
        </el-button>
        <el-button
          type="cancel"
          @click="isConfirmCreateOpen = false"
        >
          Отмена
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.input-text {
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  padding: 8px 11px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: rgb(168 171 178);
  border: 1px solid rgb(220 223 230);
  border-radius: 4px;
}

.checkbox {
  box-sizing: border-box;
  width: 100%;
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

.error-text {
  display: flex;
  justify-content: left;
  margin-bottom: 8.5px;
  font-size: 14px;
  line-height: 16.1px;
  font-weight: 400;
  color: red;
}
</style>


