import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'welcome',
      component:() => import('@/views/Welcome.vue'),
      children:[
        {
          path:'',
          name:'welcome-login',
          component:() => import('@/components/welcome/LoginPage.vue')
        }
      ]
    },{
      path:'/index',
      name:'index',
      component:()=>import('@/views/IndexView.vue')
    }
  ]
})

export default router
