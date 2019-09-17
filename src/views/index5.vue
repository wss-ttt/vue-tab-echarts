<template>
  <div class="wrapper">
    <button @click="isShow = !isShow">隐藏/显示</button>
    <index3 v-if="isShow"></index3>
  </div>
</template>

<script>
import index3 from './index3'
export default {
  components: {
      index3
  },
  props: {},
  data() {
    return {
        isShow:true
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style scoped>
</style>