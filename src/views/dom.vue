<template>
  <div class="dom">
    <button id="btn1" @click="initBar">柱状图</button>
    <button id="btn2" @click="initPie">饼状图</button>
    <button id="btn3" @click="initBar2">柱状图2</button>
    <hr />
    <div class="chart"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
let myChart = null
let oBox = null
export default {
  props: {},
  data() {
    return {}
  },
  mounted() {
    // 获取dom元素
    oBox = document.querySelector('.chart')
    myChart = echarts.init(oBox)
    this.initBar()
  },
  destroyed() {},
  watch: {},
  methods: {
    initBar() {
      let option = {
        title: {
          text: '柱状图'
          // x:'right'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
      // 清空数据
      myChart.clear()
      myChart.setOption(option)
    },
    initBar2() {
      let option = {
        title: {
          text: '柱状图2'
          // x:'right'
        },
        xAxis: {
          type: 'category',
          data: [
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六',
            '周天',
            'aaa',
            'bbb'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [142, 230, 151, 28, 370, 110, 130, 45, 987],
            type: 'bar'
          }
        ]
      }
      // 清空数据
      myChart.clear()
      myChart.setOption(option)
    },
    initPie() {
      let option = {
        title: {
          text: '某站点用户访问来源',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      // 清空数据
      myChart.clear()
      myChart.setOption(option)
    }
  }
}
</script>
<style scoped>
.chart {
  width: 400px;
  height: 400px;
  background-color: aliceblue;
}
</style>