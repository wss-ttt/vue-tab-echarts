<template>
  <div class="line-chart" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
import uuidv1 from 'uuid/v1'
export default {
  props: {
    data: {
      type: Object
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
      // 图标基本配置
      baseConfig: {
        title: {
          text: '折线图'
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
        }
      },
      id: '',
      myChart: null
    }
  },
  computed: {},
  components: {},
  created() {
    let id = uuidv1()
    this.id = id
  },
  mounted() {},
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
      console.log('initChart')
      console.log('data', this.data)
      let oBox = document.getElementById(this.id)
      this.myChart = echarts.init(oBox)
      if (this.isEmptyObject(this.data)) {
        console.log('数据为空的情况')
        // 数据为空
        oBox.removeAttribute('_echarts_instance_')
        oBox.innerHTML = '暂无数据'
      } else {
        console.log('数据不为空的情况')
        // 数据不为空
        // let option = this.baseConfig
        // let option = Object.assign({},this.baseConfig)  // 复制值

        let option = JSON.parse(JSON.stringify(this.baseConfig))// 深拷贝
        option.xAxis.data = this.data.xAxis.data
        option.title.text = this.data.title.text
        option.series = this.data.series
        this.myChart.setOption(option)
        window.addEventListener('resize', () => {
          this.myChart.resize()
        })
      }
    },
    isEmptyObject(obj) {
      return Object.keys(obj).length === 0
    },
    clearChart() {
      this.myChart.clear()
    },
    setOptionBaseConfig() {
      this.myChart.setOption(this.baseConfig)
    },
    init(data){
      let option = JSON.parse(JSON.stringify(this.baseConfig))
      option.xAxis.name = data.xAxis.name
      option.yAxis.name = data.yAxis.name
      this.myChart.clear()
      this.myChart.setOption(option)
    }

  }
}
</script>
<style scoped>
.line-chart {
  border: 1px solid #ccc;
}
</style>