<template>
  <div class="wrapper">
    <div class="map"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/lib/chart/map'
// 引入武汉地图的数据
import wuhan from '@/mapData/武汉市.json'
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  components: {},
  created() {},
  mounted() {
    this.initMap()
  },
  destroyed() {},
  watch: {},
  methods: {
    initMap() {
      // 注册地图数据
      echarts.registerMap('武汉', wuhan)
      let oBox = document.querySelector('.map')
      let myChart = echarts.init(oBox)
      let option = {
        title: {
          text: '武汉市',
          x: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        //左侧小导航图标
        /* visualMap: {
          show: true,
          x: 'left',
          y: 'center',
          splitList: [
            { start: 500, end: 600 },
            { start: 400, end: 500 },
            { start: 300, end: 400 },
            { start: 200, end: 300 },
            { start: 100, end: 200 },
            { start: 0, end: 100 }
          ],
          color: [
            '#5475f5',
            '#9feaa5',
            '#85daef',
            '#74e2ca',
            '#e6ac53',
            '#9fb5ea'
          ]
        }, */
        series: [
          {
            name: '数据',
            type: 'map',
            mapType: '武汉',
            roam: true, // 是否可以移动地图
            label: {
              normal: {
                show: true //省份名称
              },
              emphasis: {
                show: false
              }
            },
            zoom: 1.2 ,// 地图的显示倍数
            data: [
            ] 
          }
        ]
      }
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }
}
</script>
<style scoped>
.map {
  height: 800px;
  background-color: #ccc;
  margin: 50px auto;
}
</style>