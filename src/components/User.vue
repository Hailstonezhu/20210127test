<template>
<div>
  <h2>我是用户界面</h2>
  <p>{{userId}}</p>
  <p>{{$route.params.id}}</p>
  <button @click="btnClick"></button>
</div>
</template>

<script>
import router from '../router'

export default {
  name: 'User',
  computed: {
    userId () {
      // console.log(this.$route)
      return this.$route.params.id
    }
  },
  methods: {
    btnClick () {
      console.log('USER中的', this.$route)
    }
  }
  // created () {
  //   console.log('组件被创建出来后，回调该函数')
  //   document.title = '用户'
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
