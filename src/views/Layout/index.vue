<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <van-tabbar route>
            <van-tabbar-item replace icon="home-o" to="/layout/home">首页</van-tabbar-item>
            <van-tabbar-item replace icon="search" to="/layout/looking">租房</van-tabbar-item>
            <van-tabbar-item replace icon="newspaper-o" to="/layout/message">资讯</van-tabbar-item>
            <van-tabbar-item replace icon="user-circle-o" to="/layout/mine">我的</van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>