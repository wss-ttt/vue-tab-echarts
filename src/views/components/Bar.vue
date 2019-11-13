<template>
  <div class="bar-chart" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
import uuidv1 from 'uuid/v1'
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      baseConfig: {
        xAxis: {
          type: 'category'
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            // data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      },
      id: ''
    }
  },
  computed: {},
  components: {},
  created() {
    let id = uuidv1()
    this.id = id
  },
  mounted() {
    this.initChart()
  },
  destroyed() {},
  watch: {
    data: {
      handler(newVal, oldVal) {
        this.initChart()
      },
      deep: true
    }
  },
  methods: {
    initChart() {
      let oBox = document.getElementById(this.id)
      let myChart = echarts.init(oBox)
      let option = this.baseConfig
      option.xAxis.data = this.data.xData
      option.series[0].data = this.data.yData
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }
}
</script>
<style scoped>
.bar-chart {
  border: 1px solid #ccc;
}
</style>