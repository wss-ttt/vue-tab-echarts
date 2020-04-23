<template>
  <div class="test">
    <v-test :option="testData" ref="test"></v-test>
    <button @click="test">改变testData值</button>
  </div>
</template>
<script>
import VTest from './components/test'
export default {
  components: {
    VTest
  },
  props: {},
  data() {
    return {
      testData: ''
    }
  },
  methods: {
    test() {
      this.testData = '乔峰'
      this.$refs['test'].init(this.testData)
    }
  },
  computed: {},
  watch: {}
}
</script>
<style scoped>
</style>