<template>
  <div class="wrapper">
    <button v-for="item in btns" @click="toggle(item.title)" :key="item.title" :class="{'active':isShow === item.title}">{{item.name}}</button>
    <div class="map" v-if="isShow === 'map'"></div>
    <div class="info" v-if="isShow === 'bar'"></div>
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
    return {
      btns:[{
        name:'地图',
        title:'map'
      },{
        name:'柱状图',
        title:'bar'
      }],
      isShow: 'map'
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {
    this.toggle(this.isShow)
  },
  destroyed() {},
  watch: {},
  methods: {
    toggle(title){
      this.isShow = title
      if(title === 'map'){
        this.$nextTick(()=>{
          this.initMap()
        })
      }
      if(title === 'bar'){
        this.$nextTick(()=>{
          this.initChartBar()
        })
      }
    },
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
          roam: true,   // 是否可以缩放地图
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
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    initChartBar() {
      let myCharts = null
      let oBox = document.querySelector('.info')
      myCharts = echarts.init(oBox)
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {},
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
      myCharts.clear()
      myCharts.setOption(option)
      window.addEventListener('resize', () => {
        myCharts.resize()
      })
    }
  }
}
</script>
<style scoped>
.map {
  height: 500px;
  background-color: red;
}
.info {
  height: 500px;
  background-color: green;
}
.active{
  background-color: azure;
  font-weight: bold;
}
</style>