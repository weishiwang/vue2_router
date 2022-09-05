import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Setting from '@/components/menus/MySettings.vue'
import Rights from '@/components/menus/MyRights.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Goodes from '@/components/menus/MyGoods.vue'
import UserDtail from '@/components/user/MyUserDetail.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
  { path:'/',redirect:'/login'},
  { path:'/login',component: Login},
  { path:'/home',component: Home,
  redirect:'/home/yonghu', children:[
    // {path:'/',redirect:Users},
    {path:'yonghu',component:Users},
    {path:'quanxian',component:Rights},
    {path:'shangpin',component:Goodes},
    {path:'dingdan',component:Orders},
    {path:'xitong',component:Setting},
    {path:'xiangqing/:id',component:UserDtail,props: true}
  ]}
]
})


router.beforeEach(function(to,from,next){
  if(to.path==='/home'){
    const token = localStorage.getItem('token')
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})


export default router