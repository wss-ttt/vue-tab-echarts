<template>
  <div class="test">
    姓名:{{option}}
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    option: {
      type: String,
      default:'小龙女'
    }
  },
  data() {
    return {}
  },
  methods: {
    init(data) {
      console.log('init方法执行了')
      console.log('data',data)
    }
  },
  computed: {},
  watch: {
    option:{
      handler(newVal,oldVal){
        console.log('watch',newVal)
      }
    }
  }
}
</script>
<style scoped>
.test {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>