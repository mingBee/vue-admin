
import {routes} from './routes'
import VueRouter from 'vue-router'
// let extraRouters=JSON.parse(window.localStorage.getItem('extraMenu'))||[];
// debugger;
// let route=routes.concat(extraRouters);
const router = new VueRouter({
  routes
})
export default router;