import router from './index'

let routers=JSON.parse(window.localStorage.getItem('extraMenu'))||[];
let registerRouteFresh = true
router.beforeEach((to,from,next)=>{
  if(registerRouteFresh){
    router.addRoutes(routers);
    registerRouteFresh=false;
  }
})