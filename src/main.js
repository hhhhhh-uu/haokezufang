import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Vant from 'vant';
import store from './store'
import '@/assets/font/iconfont.css';
import 'vant/lib/index.css';
import 'amfe-flexible/index.min.js';
Vue.use(Vant);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
