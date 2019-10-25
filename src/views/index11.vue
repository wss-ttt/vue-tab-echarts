<template>
  <div class="wrapper">
    <h2 class="tips">只改变数据,实现不同的图表</h2>
    <div class="tabs">
      <button
        v-for="item in tabs"
        :key="item"
        @click="tab(item)"
        :class="{'active':current === item}"
      >{{item}}</button>
    </div>
    <div class="charts"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
let myChart = null
let oBox = null
export default {
  components: {},
  props: {},
  data() {
    return {
      tabs: ['c1', 'c2', 'c3', 'c4'],
      current: 'c1'
    }
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    // 获取dom元素(只需要获取一次)
    oBox = document.querySelector('.charts')
    this.tab('c1')
  },
  methods: {
    tab(name) {
      this.current = name
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
      switch (this.current) {
        case 'c1':
          this.initChart(1, xData, yData)
          break
        case 'c2':
          this.initChart(1, xData, yData)
          break
        case 'c3':
          this.initChart(1, xData, yData)
          break
        case 'c4':
          this.initChart(0)
          break
      }
    },
    initChart(type, xData, yData) {
      if (!echarts.getInstanceByDom(oBox)) {
        console.log('这个里面只会执行一次')
        myChart = echarts.init(oBox)
      }
      let option = type
        ? {
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
        : {
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data: [
                  { value: 235, name: '视频广告' },
                  { value: 274, name: '联盟广告' },
                  { value: 310, name: '邮件营销' },
                  { value: 335, name: '直接访问' },
                  { value: 400, name: '搜索引擎' }
                ]
              }
            ]
          }
      // 清空数据
      myChart.clear()
      myChart.setOption(option)
    }
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