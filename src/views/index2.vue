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
import echarts from 'echarts'
export default {
  components: {},
  props: {},
  data() {
    return {
      tabs: ['c1', 'c2', 'c3'],
      isShow: 'c1',
    }
  },
  watch: {},
  computed: {},
  methods: {
    tab(name) {
      this.isShow = name
      switch (this.isShow) {
        case 'c1':
          this.$nextTick(() => {
            this.initChart_c1()
          })
          break
        case 'c2':
          this.$nextTick(() => {
            this.initChart_c2()
          })
          break
        case 'c3':
          this.$nextTick(() => {
            this.initChart_c3()
          })
          break
      }
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
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    initChart_c2() {
      //   let myChart = null
      let box = document.querySelector('.c2')
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
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    initChart_c3() {
      //   let myChart = null
      let box = document.querySelector('.c3')
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
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  },
  created() {},
  mounted() {
    this.tab('c1')
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