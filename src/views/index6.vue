<template>
  <div class="wrapper">
    <h2 class="tips">3个单独图表组件,进行引入进来</h2>
    <div class="tabs">
      <button v-for="item in tabs" 
      :key="item" 
      @click="tab(item)"
      :class="{'active':isShow === item}"
      >{{item}}</button>
    </div>
    <c1 v-if="isShow === 'c1'" ref="c1"></c1>
    <c2 v-if="isShow === 'c2'" ref="c2"></c2>
    <c3 v-if="isShow === 'c3'" ref="c3"></c3>
  </div>
</template>

<script>
import echarts from 'echarts'
import c1 from './components/c1'
import c2 from './components/c2'
import c3 from './components/c3'
export default {
  components: {
      c1,c2,c3
  },
  props: {},
  data() {
    return {
      tabs: ['c1', 'c2', 'c3'],
      isShow: 'c1'
    }
  },
  watch: {},
  computed: {},
  methods: {
    tab(name) {
      this.isShow = name
      /* switch (this.isShow) {
        case 'c1':
          this.$nextTick(() => {
            this.$refs['c1'].initChart_c1()
          })
          break
        case 'c2':
          this.$nextTick(() => {
            this.$refs['c2'].initChart_c2()
          })
          break
        case 'c3':
          this.$nextTick(() => {
            this.$refs['c3'].initChart_c3()
          })
          break
      } */
    },
  },
  created() {},
  mounted() {
      this.tab('c1')
  }
}
</script>
<style scoped>
.charts {
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
  float: left;
}
.active{
    background-color: #1acd7e;
}
</style>