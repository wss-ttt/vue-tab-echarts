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
      path: '/index',
      name: 'index',
      component: resolve => require(['@/views/index'], resolve)
    },
    {
      path: '/index2',
      name: 'index2',
      component: resolve => require(['@/views/index2'], resolve)
    },
    {
      path: '/index3',
      name: 'index3',
      component: resolve => require(['@/views/index3'], resolve)
    },
    {
      path: '/index4',
      name: 'index4',
      component: resolve => require(['@/views/index4'], resolve)
    },
    {
      path: '/index5',
      name: 'index5',
      component: resolve => require(['@/views/index5'], resolve)
    },
    {
      path: '/index6',
      name: 'index6',
      component: resolve => require(['@/views/index6'], resolve)
    },
    {
      path: '/index7',
      name: 'index7',
      component: resolve => require(['@/views/index7'], resolve)
    },
    {
      path: '/index8',
      name: 'index8',
      component: resolve => require(['@/views/index8.vue'], resolve)
    },
    {
      path: '/index9',
      name: 'index9',
      component: resolve => require(['@/views/index9.vue'], resolve)
    },
    {
      path: '/china',   // 中国地图 第一种实现方法
      name: 'china',
      component: resolve => require(['@/views/china.vue'], resolve)
    },
    {
      path: '/china2',  // 中国地图 第二种实现方法
      name: 'china2',
      component: resolve => require(['@/views/china2.vue'], resolve)
    },
    {
      path:'/beijingMap',  // 绘制北京市(包括其他省份) 第一种实现方法
      name:'beijingMap',
      component: resolve => require(['@/views/beijingMap.vue'], resolve)
    },
    {
      path:'/beijingMap2',
      name:'beijingMap2',
      component: resolve => require(['@/views/beijingMap2.vue'], resolve)
    }
  ]
})
