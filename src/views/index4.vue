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
// 在同一个dom上绘制不同的图表
import echarts from 'echarts'
let myChart = null
//   let myChart = null
let oBox = null
export default {
  components: {},
  props: {},
  data() {
    return {
      tabs: ['c1', 'c2', 'c3','c4'],
      current: 'c1',
      myChart: null
    }
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    oBox = document.querySelector('.charts')
    this.tab('c1')
  },
  methods: {
    tab(name) {
      this.current = name
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
      switch (this.current) {
        case 'c1':
          this.initChart(xData, yData)
          break
        case 'c2':
          this.initChart(xData, yData)
          break
        case 'c3':
          this.initChart(xData, yData)
          break
        case 'c4':
          this.initPie()
          break
      }
    },
    initChart(xData, yData) {
      if (!echarts.getInstanceByDom(oBox)) {
        myChart = echarts.init(oBox)
      }
      let option = {
        xAxis: {
          type: 'category',
          data: xData
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
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
    initPie() {
      let option = {
        title: {
          text: '某站点用户访问来源',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      // 清空数据
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
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