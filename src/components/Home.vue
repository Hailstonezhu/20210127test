<template>
<div>
  <h2>这是首页</h2>
  <p>这是首页内容</p>

  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/message">消息</router-link>

  <router-view></router-view>
</div>
</template>

<script>
import router from '../router'

export default {
  name: 'Home'
  // created () {
  //   console.log('组件被创建出来后，回调该函数')
  //   document.title = '首页'
  // }
  // mounted () {
  //   console.log('当组件的template被挂载到DOM节点时,回调该函数')
  // },
  // updated () {
  //   console.log('界面发生刷新的时候，回调该函数（双向绑定的数据发生改变时，界面也就跟着刷新）')
  // }
}

router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  console.log(to.matched[0].meta.title)
  next()
})

</script>

<style scoped>

</style>
