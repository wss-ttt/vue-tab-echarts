import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/index',
      name:'index',
      component:resolve=>require(['@/views/index'],resolve)
    },
    {
      path:'/index2',
      name:'index2',
      component:resolve=>require(['@/views/index2'],resolve)
    },
    {
      path:'/index3',
      name:'index3',
      component:resolve=>require(['@/views/index3'],resolve)
    },
    {
      path:'/index4',
      name:'index4',
      component:resolve=>require(['@/views/index4'],resolve)
    },
    {
      path:'/index5',
      name:'index5',
      component:resolve=>require(['@/views/index5'],resolve)
    },
    {
      path:'/index6',
      name:'index6',
      component:resolve=>require(['@/views/index6'],resolve)
    }
  ]
})
