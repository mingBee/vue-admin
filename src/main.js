import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//import './assets/theme/theme-green/index.css'
import VueRouter from 'vue-router'
import store from './vuex/index'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import router from './route/index'
// import './route/permission'
import Mock from './mock'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'
import {filterRouter} from '@/util/util'
import routes from './route/routes'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

// let authList=window.localStorage.getItem('setAuthList')||['table','list','menuAdmin','role','nav3'] //权限列表
// let extraRouters=filterRouter(routes.asynRoutes,authList);
let registerRouteFresh = true;
debugger;
router.beforeEach((to, from, next) => {

  debugger;
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    if(registerRouteFresh){
      // router.addRoutes(extraRouters);
      registerRouteFresh=false;
      next();
    }else{
      next();
    }
  }
})



//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

