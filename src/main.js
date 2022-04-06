import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'mdui/dist/css/mdui.min.css'; // 注意修改 css 文件的路径
// import "mdui/dist/js/mdui.min"
import mdui from 'mdui';

Vue.config.productionTip = false
Vue.prototype.$mdui=mdui
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
