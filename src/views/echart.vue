<template>
  <div class="wrapper">
    <button @click="query">查询</button>
    <button @click="noData">暂无数据</button>
    <button @click="hasData">有数据</button>
    <v-line :data="lineData1" width="100%" height="300px"></v-line>
  </div>
</template>

<script>
import VLine from './components/Line'
import VBar from './components/Bar'
export default {
  props: {},
  data() {
    return {
      lineData1: {},
      barData: {}
    }
  },
  computed: {},
  components: {
    VLine,
    VBar
  },
  created() {},
  mounted() {
    this.query()
  },
  destroyed() {},
  watch: {},
  methods: {
    // 模拟产生随机数据(这里只有一个series 也就是只有一组数据)
    query() {
      let series = []
      let data = []
      // 获取数据
      for (let i = 1; i <= 7; i++) {
        let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
        data.push(num)
      }
      // 组装series
      series.push({
        type:'line',
        data:data
      })
      // 组装option
      this.lineData1 = {
        title:{
          text:'数据分析图'
        },
        xAxis:{
          data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series:series
      }
    },
    // 测试数据为空的情况
    noData() {
      this.lineData1 = {}
    },
    // 测试数据不为空的情况
    hasData() {
      // 这种方法不行(会报错)
      /* this.lineData1.title.text = '数据分析图'
      this.lineData1.xAxis.data = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
      ]
      this.lineData1.series = [
        {
          type: 'line',
          data: [120, 200, 150, 80, 70, 110, 130]
        }
      ] */
      // 这种方法是可行的
      this.lineData1 = {
        title: {
          text: '数据分析图'
        },
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
          {
            type: 'line',
            data: [120, 200, 150, 80, 70, 110, 130]
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
.chart {
  height: 400px;
}
</style>