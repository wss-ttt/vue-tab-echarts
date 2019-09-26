<template>
  <div class="wrapper">
    <button @click="map('湖北')">湖北省</button>
    <button @click="map('湖南')">湖南省</button>
    <button @click="map('河南')">河南省</button>
    <div class="map"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/province/hubei.js'
import 'echarts/map/js/province/hunan.js'
import 'echarts/map/js/province/henan.js'
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
    map(name) {
        this.initMap(name)
    },
    initMap(name) {
      let oBox = document.querySelector('.map')
      let myChart = echarts.init(oBox)
      let option = {
        title: {
          text: name,
          x: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        geo: {
          map: name,
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