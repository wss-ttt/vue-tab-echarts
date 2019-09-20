<template>
  <div class="wrapper">
    <h2 class="tips">3个单独图表组件,进行引入进来</h2>
    <div class="tabs">
      <button
        v-for="item in tabs"
        :key="item"
        @click="tab(item)"
        :class="{'active':isShow === item}"
      >{{item}}</button>
    </div>
    <a1 v-show="isShow === 'a1'" ref="a1"></a1>
    <a2 v-show="isShow === 'a2'" ref="a2"></a2>
    <a3 v-show="isShow === 'a3'" ref="a3"></a3>
  </div>
</template>

<script>
import echarts from 'echarts'
import a1 from './components/a1'
import a2 from './components/a2'
import a3 from './components/a3'
export default {
  components: {
    a1,
    a2,
    a3
  },
  props: {},
  data() {
    return {
      tabs: ['a1', 'a2', 'a3'],
      isShow: 'a1',
      count1: 0,
      count2: 0,
      count3: 0
    }
  },
  watch: {},
  computed: {},
  methods: {
    tab(name) {
      this.isShow = name
      switch (this.isShow) {
        case 'a1':
          console.log('a1')
          this.$nextTick(() => {
            this.count1++
            if (this.count1 > 1) return
            console.log('init')
            this.$refs['a1'].initChart_c1()
          })
          break
        case 'a2':
          this.$nextTick(() => {
            console.log('a2')
            this.count2++
            if (this.count2 > 1) return
            console.log('init')
            this.$refs['a2'].initChart_c2()
          })
          break
        case 'a3':
          this.$nextTick(() => {
            console.log('a3')
            this.count3++
            if (this.count3 > 1) return
            console.log('init')
            this.$refs['a3'].initChart_c3()
          })
          break
      }
    }
  },
  created() {},
  mounted() {
    this.tab('a1')
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
.active {
  background-color: #1acd7e;
}
</style>