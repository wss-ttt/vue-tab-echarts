<template>
  <div class="c3"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
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
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
.c3{
  height: 400px;
  width: 100%;
}
</style>