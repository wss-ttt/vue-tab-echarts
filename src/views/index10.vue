<template>
  <div class="wrapper">
    <button @click="init">请求有数据的接口</button>
    <button @click="init2">请求没有数据的接口</button>
    <div id="main"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
let myChart = null
export default {
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {
  },
  destroyed() {},
  watch: {},
  methods: {
    // 请求有数据的接口
    init() {
      let oBox = document.querySelector('#main')
      myChart = echarts.init(oBox)
      myChart.showLoading()
      this.getData().then(data => {
        myChart.hideLoading()
        if (data.xData.length === 0) {
          console.log('执行了没')
          oBox.innerHTML = '<div style="text-align:center;color:red;">暂无数据</div>'
          oBox.removeAttribute('_echarts_instance_')
        } else {
          console.log('绘制图表')
          this.initChart(data.xData, data.yData)
        }
      })
    },
    // 请求没有数据的接口
    init2() {
      let oBox = document.querySelector('#main')
      myChart = echarts.init(oBox)
      myChart.showLoading()
      this.getData2().then(data => {
        myChart.hideLoading()
        if (data.xData.length === 0) {
          oBox.innerHTML = '<div style="text-align:center;color:red;">暂无数据</div>'
          oBox.removeAttribute('_echarts_instance_')
        } else {
          this.initChart(this.chartData.xData, this.chartData.yData)
        }
      })
    },
    initChart(xData, yData) {
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {},
        xAxis: [
          {
            type: 'category',
            data: xData
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            data: yData,
            type: 'bar'
          }
        ]
      }
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    getData() {
      return new Promise((resolve, reject) => {
        this.$http({
          url: 'http://localhost:3000/electric',
          method: 'get'
        }).then(({ data }) => {
          console.log(data)
          resolve(data)
        })
      })
    },
    getData2() {
      return new Promise((resolve, reject) => {
        this.$http({
          url: 'http://localhost:3000/nodata',
          method: 'get'
        }).then(({ data }) => {
          console.log(data)
          resolve(data)
        })
      })
    }
  }
}
</script>
<style scoped>
#main {
  width: 500px;
  height: 500px;
  border: 1px solid red;
  margin: 100px auto;
}
</style>