import { createRouter, createWebHashHistory } from 'vue-router'
import SignupPageView from "@/views/SignupPageView.vue";
import AddPostView from "@/views/AddPostView.vue";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPageView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
