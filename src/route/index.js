
import route from './routes'
import VueRouter from 'vue-router'

import {filterRouter} from '@/util/util'
// let route1=routes;
let authList=window.localStorage.getItem('setAuthList')||['table','list','menuAdmin','role','nav3'] //权限列表
let extraRouters=filterRouter(route.asynRoutes,authList);
let routes=route.routes;

const router = new VueRouter({
  routes
})
router.addRoutes(extraRouters);
export default router;