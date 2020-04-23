<template>
  <div class="wrapper">
      <button @click="isShow = true">显示</button>
      <button @click="isShow = false">隐藏</button>
      <div id="main" v-show="isShow"></div>
      <index3 v-show="isShow"></index3>
  </div>
</template>

<script>
import echarts from 'echarts'
import index3 from './index3'
export default {
  components: {
    index3
  },
  props: {},
  data() {
    return {
      isShow: true
    }
  },
  watch: {},
  computed: {},
  methods: {
    initChart() {
      let oBox = document.getElementById('main')
      let myChart = null
      myChart = echarts.init(oBox)
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
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  },
  created() {},
  mounted() {
      this.initChart()
  }
}
</script>
<style scoped>
#main{
    width:100%;
    height: 400px;
    border:1px solid red;
}
</style>