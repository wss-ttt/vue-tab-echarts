<template>
  <div class="wrapper">
    <button
      v-for="item in btns"
      @click="toggle(item.title)"
      :key="item.title"
      :class="{'active':isShow === item.title}"
    >{{item.name}}</button>
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
      btns: [
        {
          name: '地图',
          title: 'map'
        },
        {
          name: '柱状图',
          title: 'bar'
        }
      ],
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
    toggle(title) {
      this.isShow = title
      if (title === 'map') {
        this.$nextTick(() => {
          this.initMap()
        })
      }
      if (title === 'bar') {
        this.$nextTick(() => {
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
          formatter: function(params) {
            let info = `<p style="font-size:16px;">用户名:${params.name}</p>
                                        <p style="font-size:14px;">异常概率:${
                                          params.value[2]
                                        }`
            return info
          },
          backgroundColor: 'rgba(0,0,0,.5)', //提示标签背景颜色
          textStyle: {
            color: '#fff'
          } //提示标签字体颜色
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
          roam: true, // 是否可以缩放地图
          itemStyle: {
            normal: {},
            emphasis: {}
          }
        },
        series: [
          {
            type: 'scatter', // 没有阴影的圆点
            coordinateSystem: 'geo',
            data: [
              {
                name: 'aa',
                value: [114.885646, 30.982124, 100]
              },
              {
                name: 'bb',
                value: [114.878082, 31.002104, 200]
              }
            ]
          }
        ]
      }
      myChart.clear()
      myChart.setOption(option)
      // 添加单击事件
      myChart.on('click',(params)=>{
        console.log(params)
      })
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
*{
  margin:0;
  padding: 0;
}
.map {
  height: 800px;
  background-color: #1acd7e;
}
.info {
  height: 800px;
  background-color: #1acd7e;
}
.active {
  background-color: azure;
  font-weight: bold;
}
</style>