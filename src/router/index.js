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
      path: '/task',
      name: 'task',
      component: () => import('../views/TodoView.vue'),
    },

    {
      path: '/details/:id',
      name: 'postsdetails',
      component: () => import('../views/PostsDetailView.vue'),
    },
    {
      path: '/task/:id',
      name: 'taskdetails',
      component: () => import('../views/TodosDetailView.vue'),
    },


  ],
});

export default router;
