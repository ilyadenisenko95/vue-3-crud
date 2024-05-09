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
      let filteredTodos = this.todos;
      if (this.isDoneFilter) {
        filteredTodos = filteredTodos.filter(todo => todo.isDone);
      }
      if (this.isFavoriteFilter) {
        filteredTodos = filteredTodos.filter(todo => todo.isFavorite);
      }
      return filteredTodos;
    },
  },

  actions: {
    deleteTodos(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      ElNotification({
        title: 'Задача успешно удалена!',
        type: 'success',
      });
    },

    changeFavorite(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.isFavorite = !todo.isFavorite;
    },

    changePostDone(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.isDone = !todo.isDone;
    },

    addTodo(todo) {
      this.todos.unshift(todo);
    },
  },
});
