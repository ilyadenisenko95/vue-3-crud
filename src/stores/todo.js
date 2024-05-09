import { todosMock } from '@/mocks/todos';
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [ ...todosMock ],
    isDoneFilter: false,
    isFavoriteFilter: false,
  }),
  getters: {
    filteredTodos() {

      if (this.isDoneFilter & this.isFavoriteFilter) {
        return this.todos.filter((el) => {
          return el.isDone && el.isFavorite;
        });
      }

      if (this.isDoneFilter) {
        return this.todos.filter((el) => el.isDone);
      }

      if (this.isFavoriteFilter) {
        return this.todos.filter((el) => el.isFavorite);
      }
      return this.todos;

    },
  },

  actions: {
    deleteTodos(id) {
      this.todos = this.todos.filter(el => el.id !== id);
      ElNotification({
        title: 'Задача успешно удалена!',
        type: 'success',
      });
    },

    changeFavorite(id) {
      const todo = this.todos.find((el) => el.id === id);
      if(todo.isFavorite === false){
        todo.isFavorite = true;
      }
      else{
        todo.isFavorite = false;
      }
    },

    changePostDone(id) {
      const todoDone = this.todos.find((el) => el.id === id);
      if(todoDone.isDone === false){
        todoDone.isDone = true;
      }
      else{
        todoDone.isDone = false;
      }
    },

    // создание новой задачи
    addTodo(el) {
      this.todos.unshift(el);
    },


  },


});
