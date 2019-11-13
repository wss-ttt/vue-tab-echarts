<template>
  <div class="line-chart" :id="id" :style="{height:height,width:width}"></div>
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
        title:{
          text:'折线图'
        },
        xAxis: {
          type: 'category',
          //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            // data: [820, 932, 901, 934, 1290, 1330, 1320],
            data: [],
            type: 'line'
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
        console.log('这个执行了没')
        this.initChart()
      },
      deep: true
    }
  },
  methods: {
    initChart() {
      let oBox = document.getElementById(this.id)
      let myChart = echarts.init(oBox)
      if (this.isEmptyObject(this.data)) {
        // 数据为空
        oBox.removeAttribute('_echarts_instance_')
        oBox.innerHTML = '暂无数据'
      } else {
        // 数据不为空
        let option = this.baseConfig
        option.xAxis.data = this.data.xData
        option.series[0].data = this.data.yData
        option.title.text = this.data.title.text
        myChart.setOption(option)
        window.addEventListener('resize', () => {
          myChart.resize()
        })
      }
    },
    isEmptyObject(obj) {
      return Object.keys(obj).length === 0
    }
  }
}
</script>
<style scoped>
.line-chart {
  border: 1px solid #ccc;
}
</style>