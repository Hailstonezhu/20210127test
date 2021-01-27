<template>
  <div>
    <h2>这是关于</h2>
    <p>这是关于容</p>
    <button @click="timechange">
    {{nowtime}}
    </button>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'About',
  data () {
    return {
      nowtime: ''
    }
  },
  methods: {
    timechange () {
      let timer = new Date()
      this.nowtime = timer.getTime()
    }
  }
  // created () {
  //   console.log('组件被创建出来后，回调该函数')
  //   document.title = '关于'
  // }

}

router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.meta.title
  next()
})
</script>

<style scoped>

</style>
