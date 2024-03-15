import { createRouter, createWebHistory } from 'vue-router';
import PostsView from '../views/PostsView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'post',
      component: PostsView,
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
    },

    {
      path: '/details',
      name: 'postsdetails',
      component: () => import('../views/PostsDetailView.vue'),
    },
    {
      path: '/task',
      name: 'tasksdetails',
      component: () => import('../views/TodosDetailView.vue'),
    },
  ],
});

export default router;
