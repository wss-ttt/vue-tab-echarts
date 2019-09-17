<template>
  <div class="wrapper">
    <h2 class="tips">只改变数据,实现不同的图表</h2>
    <div class="tabs">
      <button v-for="item in tabs" :key="item" 
      @click="tab(item)" 
      :class="{'active':current === item}">{{item}}</button>
    </div>
    <div class="charts"></div>
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
      current:'c1'
    }
  },
  watch: {},
  computed: {},
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
          this.initChart(xData, yData)
          break
        case 'c2':
          this.initChart(xData, yData)
          break
        case 'c3':
          this.initChart(xData, yData)
          break
      }
    },
    initChart(xData, yData) {
      //   let myChart = null
      let box = document.querySelector('.charts')
      let myChart = null
      myChart = echarts.init(box)

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