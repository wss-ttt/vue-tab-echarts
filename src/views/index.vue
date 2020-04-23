<template>
  <div class="wrapper">
    <button @click="showCharts">展示图表1</button>
    <button @click="showCharts2">展示图表2</button>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <hr />
    <button @click="clear">clear</button>
    <button @click="dispose">dispose</button>
    <div id="box" v-show="isShow">aaaaaaaa</div>
    <!-- <div id="box2"></div> -->
  </div>
</template>

<script>
import echarts from 'echarts'
let myChart = null
export default {
  components: {},
  props: {},
  data() {
    return {
      // myChart:null,
      isShow: true
    }
  },
  watch: {},
  computed: {},
  methods: {
    init(type) {
      //   let myChart = null
      let box = document.querySelector('#box')
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
          //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          data: xData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            // data: [820, 932, 901, 934, 1290, 1330, 1320],
            data: yData,
            type: type
          }
        ]
      }
      myChart.setOption(option)
    },
    showCharts() {
      this.init('line')
    },
    showCharts2() {
      this.init('bar')
    },
    clear() {
      myChart.clear()
      console.log(myChart)
    },
    dispose() {
      myChart.dispose()
      console.log(myChart)
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
#box,
#box2 {
  width: 800px;
  height: 400px;
  border: 1px solid red;
}
#box:focus {
  background-color: #1acd7e;
}
</style>