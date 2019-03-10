// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './routes/routes';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(VueRouter)

axios.defaults.baseURL = "https://wd1991145099otodfz.wilddogio.com/"

const router = new VueRouter({
  routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   // alert('还没有登录，请先登录!')
//   // next()

//   if(to.path === '/login' || to.path === '/register') {
//     next()
//   }else {
//     alert('还没有登录，请先登录!')
//     next('/login')
//   }
// })

// router.afterEach((to, from) => {
//   alert('aaa')
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
