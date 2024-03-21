<script setup>
import { useCounter } from '@/stores/counter';
import { ref } from 'vue';


const counter = useCounter();
const isHasName = ref(true);

// создание новой задачи
const isFavirite = ref(true);
const inputName = ref('');
const addTask = () => {
  if(inputName.value.length > 0){
    counter.addTodo({
      id: Date.now(),
      title: inputName.value,
      isDone: false,
      isFavorite: isFavirite.value,
    });
    inputName.value = '';
    isFavirite.value = false;
    isConfirmCreateOpen.value = false;
  }
  else{
    isHasName.value = false;
  }
};

const isConfirmCreateOpen = ref(false);

const openDialogCreate = () => {
  isConfirmCreateOpen.value = true;
  inputName.value ='';
  isFavirite.value = false;
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
      <span
        v-if="!isHasName"
        class="dialog-footer__text"
      >Пожалуйста, введите название!</span>
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
          @click="isConfirmCreateOpen = false"
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

  .el-checkbox {
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

  span {
    display: flex;
    justify-content: left;
    margin-bottom: 8.5px;
    font-size: 14px;
    line-height: 16.1px;
    font-weight: 400;
    color: red;

  }
</style>


