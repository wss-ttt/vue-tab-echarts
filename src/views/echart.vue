<template>
  <div class="wrapper">
    <button @click="query">查询</button>
    <button @click="noData">暂无数据</button>
    <button @click="hasData">有数据</button>
    <v-line :data="lineData1" width="100%" height="300px"></v-line>
    <v-line :data="lineData2" width="100%" height="300px"></v-line>
    <v-bar :data="barData" width="100%" height="300px"></v-bar>
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
      lineData2: {},
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
    this.lineData1 = {
      xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      yData: [820, 932, 901, 934, 1290, 1330, 1320],
      title:{
        text:'第一个折线图'
      }
    }
    this.lineData2 = {
      xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      yData: [820, 932, 901, 934, 1290, 1330, 1320],
      title:{
        text:'第二个折线图'
      }
    }
    this.barData = {
      xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      yData: [120, 200, 150, 80, 70, 110, 130]
    }
  },
  destroyed() {},
  watch: {},
  methods: {
    query() {
      this.lineData1.yData = []
      this.barData.yData = []
      this.lineData2.yData = []
      for (let i = 1; i <= 7; i++) {
        let num = Math.floor(Math.random() * (1500 - 100 + 1) + 100) // 向下取整
        this.lineData1.yData.push(num)
        this.lineData2.yData.push(num)
        this.barData.yData.push(num)
      }
    },
    // 测试数据为空的情况
    noData() {
      this.lineData2 = {}
    },
    // 测试数据不为空的情况
    hasData() {
      // 这种方法不行
      /* this.lineData2.xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      this.lineData2.yData = [120, 200, 150, 80, 70, 110, 130] */
      // 这种方法是可行的
      this.lineData2 ={
        xData:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        yData:[120, 200, 150, 80, 70, 110, 130]
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