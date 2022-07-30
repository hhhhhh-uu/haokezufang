<template>
  <div id="root">
    <div class="App">
      <div>
        <div class="My_title__39w3V">
          <img
            class="My_bg__2j-VX"
            src="http://liufusong.top:8080/img/profile/bg.png"
            alt=""
          />
          <div class="My_info__eOYeg">
            <div class="My_myIcon__3cKIV">
              <img
                class="My_avatar__2Fbh7"
                src="http://liufusong.top:8080/img/profile/avatar.png"
                alt=""
              />
            </div>
            <div class="My_user__B6O1D">
              <div class="My_name__3U2NB">游客</div>
              <div class="My_edit__3wqlv">
                <a role="button" class="am-button-small" href="#/register">
                  <span>去登录</span></a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="am-flexbox">
          <div class="am-flexbox-item">
            <div class="am-grid-item-content">
              <div class="My_menuItem__2dsTt">
                <i class="iconfont icon-coll"></i>
                <span>我的收藏</span>
              </div>
            </div>
          </div>
          <div class="am-flexbox-item">
            <div class="am-grid-item-content">
              <a href="#/favorate">
                <div class="My_menuItem__2dsTt">
                  <i class="iconfont icon-ind"></i>
                  <span>我的出租</span>
                </div>
              </a>
            </div>
          </div>
          <div class="am-flexbox-item">
            <div class="am-grid-item-content">
              <a href="#/favorate">
                <div class="My_menuItem__2dsTt">
                  <i class="iconfont icon-record"></i>
                  <span>看房记录</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="My_ad__1wZZj">
          <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#root,
.App {
  color: #333;
  background-color: #fff;
}
.My_title__39w3V {
  min-height: 300px;
  position: relative;
}
.My_bg__2j-VX {
  width: 100%;
}
.My_info__eOYeg {
  position: absolute;
  background: #fff;
  width: 85%;
  height: 55%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
}
.My_myIcon__3cKIV {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
}
.My_avatar__2Fbh7 {
  width: 100%;
  border-radius: 50%;
}
.My_user__B6O1D {
  padding-top: 15px;
}
.My_name__3U2NB {
  margin-top: -30px;
  margin-bottom: 10px;
}
.My_edit__3wqlv {
  margin-top: 18px;
}
.am-button-small {
  font-size: 13px;
  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  display: inline-block;
  color: #fff;
  background-color: #21b97a;
  border-radius: 5px;
}
.am-flexbox-item {
  position: relative;
  margin-left: 0;
  box-sizing: border-box;
  flex: 1 1;
}
.am-grid-item-content {
  position: absolute;
  top: 50px;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 15px 0;
}
.My_menuItem__2dsTt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 13px;
  color: #333;
  font-size: 12px;
}
.My_ad__1wZZj {
  margin-top: 190px;
  text-align: center;
}
.My_ad__1wZZj img {
  width: 95%;
}
</style>
