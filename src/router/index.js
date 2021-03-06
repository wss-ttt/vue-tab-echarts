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
      path: '/index2_2',
      name: 'index2_2',
      component: resolve => require(['@/views/index2_2'], resolve)
    },
    {
      path: '/index2_3',
      name: 'index2_3',
      component: resolve => require(['@/views/index2_3'], resolve)
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
      path: '/index5_2',
      name: 'index5_2',
      component: resolve => require(['@/views/index5_2'], resolve)
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
      path:'/beijingMap2', // 绘制北京市(包括其他省份) 第二种实现方法
      name:'beijingMap2',
      component: resolve => require(['@/views/beijingMap2.vue'], resolve)
    },
    {
      path:'/wuhanMap',     // 绘制武汉市(包括其它市) 第一种实现方法
      name:'wuhanMap',
      component: resolve => require(['@/views/wuhanMap.vue'], resolve)
    },
    {
      path:'/wuhanMap2',    // 绘制武汉市(包括其他市) 第二种实现方法
      name:'wuhanMap2',
      component: resolve => require(['@/views/wuhanMap2.vue'], resolve)
    },
    {
      path:'/dymProvince',
      name:'dymProvince',
      component: resolve => require(['@/views/dymProvince.vue'], resolve)
    },
    {
      path:'/index10',
      name:'index10',
      component: resolve => require(['@/views/index10.vue'], resolve)
    },
    {
      path:'/dom',
      name:'dom',
      component: resolve => require(['@/views/dom.vue'], resolve)
    },
    {
      path:'/index11',
      name:'index11',
      component: resolve => require(['@/views/index11.vue'], resolve)
    },
    {
      path:'/echart',
      name:'echart',
      component: resolve => require(['@/views/echart.vue'], resolve)
    },
    {
      path:'/views2/index',
      name:'views2-index',
      component: resolve => require(['@/views2/index.vue'], resolve)
    },
    {
      path:'/views2/test',
      name:'views2-test',
      component: resolve => require(['@/views2/test.vue'], resolve)
    },
  ]
})
