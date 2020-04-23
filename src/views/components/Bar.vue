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
        },
        yAxis: {
          type: 'value'
        }
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
    console.log('bar 页面')
    // this.initChart()
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
      if (this.isEmptyObject(this.data)) {
        console.log('数据为空的情况')
        // 数据为空
        oBox.removeAttribute('_echarts_instance_')
        oBox.innerHTML = '暂无数据'
      } else {
        console.log('数据不为空的情况')
        // 数据不为空
        let option = this.baseConfig
        option.xAxis.data = this.data.xAxis.data
        option.title.text = this.data.title.text 
        option.series = this.data.series
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
.bar-chart {
  border: 1px solid #ccc;
}
</style>