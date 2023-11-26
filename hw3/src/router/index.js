import { createRouter, createWebHashHistory } from 'vue-router'
import SignupPageView from "@/views/SignupPageView.vue";
import AddPostView from "@/views/AddPostView.vue";
import MainPageView from '@/views/MainPageView.vue';

const routes = [
  {
    path: '/',
    name: 'signup',
    component: SignupPageView
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: AddPostView
  },
  {
    path: '/main',
    name: 'main',
    component: MainPageView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
