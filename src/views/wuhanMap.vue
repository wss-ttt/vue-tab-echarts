<template>
  <div class="wrapper">
    <div class="map"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/lib/chart/map'
// 引入武汉地图的数据
import wuhan from '@/mapData/wuhan.json'
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
        geo: {
          map: '武汉',
          label: {
            normal: {
              show: true, // 是否显示省份的名字
              color: '#fff'
            },
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              borderWidth: 1,
              areaColor: 'red',
              borderColor: '#3CC3FF'
            },
            emphasis: {
              areaColor: 'blue'
            }
          }
        },
        series: [
          {
            name: '年度总项目数据查询',
            type: 'map',
            geoIndex: 0, // 不可以缺失
            data: []
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
  height: 500px;
  background-color: #ccc;
  margin: 50px auto;
}
</style>