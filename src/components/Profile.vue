<template>
<div>
  <h2>我是Pro组件</h2>
  <p>{{$route.query.name}}</p>
  <p>{{$route.query.age}}</p>
  <p>{{$route.query.sex}}</p>
</div>
</template>

<script>
import router from '../router'

export default {
  name: 'Profile'
  // created () {
  //   console.log('组件被创建出来后，回调该函数')
  //   document.title = '档案'
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
