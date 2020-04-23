<template>
  <div class="wrapper">
    <v-line :data="lineData" ref="line" height="400px" width="400px"></v-line>
    <button @click="change">改变数据</button>
    <button @click="setOptionBaseConfig">setOptionBaseConfig</button>
  </div>
</template>

<script>
import VLine from './components/line'
export default {
  components: {
    VLine
  },
  props: {},
  data() {
    return {
      lineData: {}
    }
  },
  created() {},
  mounted() {
    this.lineData = {
      title: {
        text: '11班成绩图'
      },
      xAxis: {
        data: ['乔峰', '杨过', '小龙女']
      },
      series: [
        {
          type: 'line',
          name: '成绩',
          data: [100, 200, 300]
        }
      ]
    }
  },
  activated() {},
  updated() {},
  destroyed() {},
  methods: {
    change() {
      let myChart = this.$refs['line'].myChart
      this.setOptionBaseConfig()
      myChart.showLoading({
        text: 'loading',
        textColor: '#000',
        maskColor: 'rgba(255,255,255,0)'
      })
      this.$http({
        url: 'http://localhost:3000/users/list',
        method: 'get'
      }).then(data => {
        myChart.hideLoading()
        console.log(data)
      })
    },
    setOptionBaseConfig() {
      let line = this.$refs['line']
      let option = {
        xAxis: {
          name: '时间'
        },
        yAxis: {
          name: '基波频率(Hz)'
        }
      }
      line.init(option)
    }
  },
  computed: {},
  watch: {}
}
</script>
<style scoped>
</style>