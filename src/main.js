import Vue from 'vue'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-default/index.css'
import '../public/assets/css/iconfont.css'

import App from './App'
import store from './store'
import router from './router'

Vue.use(ElementUI)
Vue.config.devtools = true
NProgress.configure({ ease: 'ease', speed: 500 })

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App),
})
