import { defineStore } from 'pinia';
// import { ref, computed } from 'vue';

export const useCounter = defineStore('counter', {
  state: () => ({
    todos: [
      {
        id: 4,
        title: 'Проверить почту',
        isDone: false,
        isFavorite: false,
      },
      {
        id: 3,
        title: 'Сделать кофе',
        isDone: true,
        isFavorite: true,
      },
      {
        id: 2,
        title: 'Почистить зубы',
        isDone: true,
        isFavorite: false,
      },
      {
        id: 1,
        title: 'Проснуться',
        isDone: true,
        isFavorite: false,
      },
    ],
    activeTab: 2,
  }),
  getters: {
    // myFilter() {
    //   return this.todos.filter((el) => el.isDone);
    // },
  },

  actions: {
    deleteTodos(id) {
      this.todos = this.todos.filter(el => el.id !== id);
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

    changeActiveTab(id) {
      this.activeTab=id;
    },



  },


});
