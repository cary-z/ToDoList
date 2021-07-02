import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/mainpage',
    component: () => import('../views/MainPage.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/Home.vue'),
      }
    ]
  },
  {
    path: '/',
    redirect: '/otherspage',
    component: () => import('../views/OthersPage.vue'),
    children: [
      {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import('../views/sign/SignIn.vue'),
      }
    ]
  }
]

// console.log(process.env.BASE_URL)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router