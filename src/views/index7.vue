<template>
  <div class="wrapper">
    <h2 class="tips">一开始,就初始化所有的图表</h2>
    <div class="tabs">
      <button
        v-for="item in tabs"
        :key="item"
        @click="tab(item)"
        :class="{'active':isShow === item}"
      >{{item}}</button>
    </div>
    <div class="showCharts">
      <div class="charts c1" v-show="isShow === 'c1'" ref="c1"></div>
      <div class="charts c2" v-show="isShow === 'c2'" ref="c2"></div>
      <div class="charts c3" v-show="isShow === 'c3'" ref="c3"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  components: {},
  props: {},
  data() {
    return {
      tabs: ['c1', 'c2', 'c3'],
      isShow: 'c1'
    }
  },
  watch: {},
  computed: {},
  methods: {
    tab(name) {
      this.isShow = name
    },
    initChart_c1() {
      //   let myChart = null
      let box = document.querySelector('.c1')
      let myChart = null
      myChart = echarts.init(box)
      let xData = []
      let yData = []
      for (let i = 1; i <= 3000; i++) {
        xData.push('' + i)
      }
      // 模拟随机产生的数据
      for (let i = 1; i <= 3000; i++) {
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
      myChart.setOption(option)
      /* window.addEventListener('resize', () => {
        myChart.resize()
      }) */
    },
    initChart_c2() {
      let oChart = document.querySelector('.showCharts')
      let w = oChart.offsetWidth
      console.log(w)
      let h = '400px'
      //   let myChart = null
      let box = document.querySelector('.c2')
      // box.style.width = w + 'px'
      // box.style.height = h
      let myChart = null
      myChart = echarts.init(box)
      let xData = []
      let yData = []
      for (let i = 1; i <= 3000; i++) {
        xData.push('' + i)
      }
      // 模拟随机产生的数据
      for (let i = 1; i <= 3000; i++) {
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
      myChart.setOption(option)
      /* window.addEventListener('resize', () => {
        myChart.resize()
      }) */
    },
    initChart_c3() {
      let oChart = document.querySelector('.showCharts')
      let w = oChart.offsetWidth
      console.log(w)
      let h = '400px'
      //   let myChart = null
      let box = document.querySelector('.c3')
      // box.style.width = w + 'px'
      // box.style.height = h
      let myChart = null
      myChart = echarts.init(box)
      let xData = []
      let yData = []
      for (let i = 1; i <= 3000; i++) {
        xData.push('' + i)
      }
      // 模拟随机产生的数据
      for (let i = 1; i <= 3000; i++) {
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
      myChart.setOption(option)
      /* window.addEventListener('resize', () => {
        myChart.resize()
      }) */
    }
  },
  created() {},
  mounted() {
    // 一开始就初始化所有的图表,这样做有一个问题就是第一个tab的图表能
    // 正常显示,其他都不能正常显示  所以需要初始化图表之前进行设置宽度
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
.active {
  background-color: #1acd7e;
}
</style>