<template>
  <div class="wrapper">
    <h2 class="tips">使用v-show,查看性能</h2>
    <div class="tabs">
      <button v-for="item in tabs" :key="item" @click="tab(item)" :class="{'active':isShow === item}">{{item}}</button>
    </div>
    <div class="charts c1" v-show="isShow === 'c1'"></div>
    <div class="charts c2" v-show="isShow === 'c2'"></div>
    <div class="charts c3" v-show="isShow === 'c3'"></div>
  </div>
</template>
<script>
// 该案例存在一个bug 就是在缩放当前窗口的时候 其他tab标签页的图表又压缩了
// 对阵index2.vue页面的问题,进行解决
// 使用echarts中的resize进行,还是会有问题,图表都被压缩了
// 但是如果把resize放在$nextTick中,就能完美的解决问题了
import echarts from 'echarts'
export default {
  components: {},
  props: {},
  data() {
    return {
      tabs: ['c1', 'c2', 'c3'],
      isShow: 'c1',
      myChart1:null,
      myChart2:null,
      myChart3:null
    }
  },
  watch: {},
  computed: {},
  methods: {
    tab(name) {
      this.isShow = name
      switch (this.isShow) {
        case 'c1':
            console.log('tab c1')
            this.$nextTick(()=>{
              this.myChart1.resize()
            })
          break
        case 'c2':
            console.log('tab c2')
            this.$nextTick(()=>{
              this.myChart2.resize()
            })
          break
        case 'c3':
            console.log('tab c3')
            this.$nextTick(()=>{
              this.myChart3.resize()
            })
          break
      }
    },
    initChart_c1() {
      //   let myChart = null
      /* let box = document.querySelector('.c1')
      this.myChart1 = echarts.init(box) */
      let xData = []
      let yData = []
      for (let i = 1; i <= 30; i++) {
        xData.push('' + i)
      }
      // 模拟随机产生的数据
      for (let i = 1; i <= 30; i++) {
        var num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
        yData.push(num)
      }
      let option = {
        xAxis: {
          type: 'category',
          data: xData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: yData,
            type: 'line'
          }
        ]
      }
      this.myChart1.setOption(option)
      window.addEventListener('resize', () => {
        this.myChart1.resize()
      })
    },
    initChart_c2() {
      /* let box = document.querySelector('.c2')
      this.myChart2 = echarts.init(box) */
      let xData = []
      let yData = []
      for (let i = 1; i <= 30; i++) {
        xData.push('' + i)
      }
      // 模拟随机产生的数据
      for (let i = 1; i <= 30; i++) {
        var num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
        yData.push(num)
      }
      let option = {
        xAxis: {
          type: 'category',
          data: xData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: yData,
            type: 'bar'
          }
        ]
      }
      this.myChart2.setOption(option)
      window.addEventListener('resize', () => {
        this.myChart2.resize()
      })
    },
    initChart_c3() {
      /* let box = document.querySelector('.c3')
      this.myChart3 = echarts.init(box) */
      let xData = []
      let yData = []
      for (let i = 1; i <= 30; i++) {
        xData.push('' + i)
      }
      // 模拟随机产生的数据
      for (let i = 1; i <= 30; i++) {
        var num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
        yData.push(num)
      }
      let option = {
        xAxis: {
          type: 'category',
          data: xData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: yData,
            type: 'line'
          }
        ]
      }
      this.myChart3.setOption(option)
      window.addEventListener('resize', () => {
        this.myChart3.resize()
      })
    }
  },
  created() {},
  mounted() {
      let box1 = document.querySelector('.c1')
      this.myChart1 = echarts.init(box1)
      let box2 = document.querySelector('.c2')
      this.myChart2 = echarts.init(box2)
      let box3 = document.querySelector('.c3')
      this.myChart3 = echarts.init(box3)
      this.initChart_c1()
      this.initChart_c2()
      this.initChart_c3()
  }
}
</script>
<style scoped>
.charts {
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
  float: left;
}
.active{
    background-color: #1acd7e;
}
</style>