<template>
  <div class="wrapper">
    <div class="map"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/lib/chart/map'
// import 'echarts/map/js/china.js'
import 'echarts/map/js/province/beijing.js'
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
      let oBox = document.querySelector('.map')
      let myChart = echarts.init(oBox)
      let option = {
        tooltip: {
          trigger:'item'
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
            mapType: '北京',
            roam: true,  // 是否可以移动地图
            label: {
              normal: {
                show: false //省份名称
              },
              emphasis: {
                show: false
              }
            },
            zoom:1.2,  // 地图的显示倍数
            /* data: [
              { name: '北京', value: Math.round(Math.random() * 500) },
              { name: '天津', value: Math.round(Math.random() * 500) },
              { name: '上海', value: Math.round(Math.random() * 500) },
              { name: '重庆', value: Math.round(Math.random() * 500) },
              { name: '河北', value: Math.round(Math.random() * 500) },
              { name: '河南', value: Math.round(Math.random() * 500) },
              { name: '云南', value: Math.round(Math.random() * 500) },
              { name: '辽宁', value: Math.round(Math.random() * 500) },
              { name: '黑龙江', value: Math.round(Math.random() * 500) },
              { name: '湖南', value: Math.round(Math.random() * 500) },
              { name: '安徽', value: Math.round(Math.random() * 500) },
              { name: '山东', value: Math.round(Math.random() * 500) },
              { name: '新疆', value: Math.round(Math.random() * 500) },
              { name: '江苏', value: Math.round(Math.random() * 500) },
              { name: '浙江', value: Math.round(Math.random() * 500) },
              { name: '江西', value: Math.round(Math.random() * 500) },
              { name: '湖北', value: Math.round(Math.random() * 500) },
              { name: '广西', value: Math.round(Math.random() * 500) },
              { name: '甘肃', value: Math.round(Math.random() * 500) },
              { name: '山西', value: Math.round(Math.random() * 500) },
              { name: '内蒙古', value: Math.round(Math.random() * 500) },
              { name: '陕西', value: Math.round(Math.random() * 500) },
              { name: '吉林', value: Math.round(Math.random() * 500) },
              { name: '福建', value: Math.round(Math.random() * 500) },
              { name: '贵州', value: Math.round(Math.random() * 500) },
              { name: '广东', value: Math.round(Math.random() * 500) },
              { name: '青海', value: Math.round(Math.random() * 500) },
              { name: '西藏', value: Math.round(Math.random() * 500) },
              { name: '四川', value: Math.round(Math.random() * 500) },
              { name: '宁夏', value: Math.round(Math.random() * 500) },
              { name: '海南', value: Math.round(Math.random() * 500) },
              { name: '台湾', value: Math.round(Math.random() * 500) },
              { name: '香港', value: Math.round(Math.random() * 500) },
              { name: '澳门', value: Math.round(Math.random() * 500) }
            ]  */
          }
        ]
      }
      myChart.setOption(option)
      window.addEventListener('resize',()=>{
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