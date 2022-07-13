import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant组件
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入移动适配
import 'amfe-flexible/index.min.js'

// 加载全局样式
import './styles/index.less'
// 导入icon图标样式
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

Vue.use(Vant)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
