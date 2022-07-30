<template>
  <div>
    <div class="am-flexbox search-box">
      <div class="am-flexbox search">
        <div class="location">
          <span class="name">北京</span>
          <i class="iconfont icon-arrow"></i>
        </div>
        <van-field left-icon="search" placeholder="请输入小区地址" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.search-box {
  padding: 25px 10px 0;
  z-index: 2;
}
.search-box .search {
  flex: 1 1;
  height: 34px;
  margin: 0 10px;
}
.search-box .search.location {
  padding: 5px 5px 5px 8px;
  font-size: 12px;
}

.am-flexbox {
  display: flex;
}
</style>
