<template>
  <div id="app">
<!--    <router-link to="/home" active-class="active" tag="button">首页</router-link>-->
<!--    <router-link to="/about">关于</router-link>-->
<!--    <router-link :to="'/user/' + userId">用户</router-link>-->
<!--    <router-link :to="{path:'/profile',query:{name:'long',age:'12',sex:'male'}}">我的</router-link>-->
    <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button>
    <button @click="userclick">用户</button>
    <button @click="profileclick">档案</button>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    // 通过代码修改路由 vue-router 跳路径
    homeclick () {
      // push => pushState
      this.$router.push('/home')
      console.log('homeclick')
    },
    aboutclick () {
      // this.$router.replace('/about')
      this.$router.replace('/about')
      console.log('aboutclick')
    },
    userclick () {
      this.$router.push('/user/' + this.userId)
    },
    profileclick () {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'long',
          age: '18',
          sex: 'male'
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  color:#f00;
}
</style>
