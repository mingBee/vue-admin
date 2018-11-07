import {routes, asynRoutes} from '@/route/routes'
import {filterRouter} from '@/util/util'

const menu= {
  state:{
    menu:routes, //菜单列表
    extraMenu:[], //过滤后的需要添加的菜单
    authList:window.localStorage.getItem('setAuthList')||['table','list','menuAdmin','role','nav3'] //权限列表
  },
  getters:{
    menuAuth(state){  //有权限的菜单列表
      return state.menu.concat(state.extraMenu);
    }
  },
  mutations:{
    initMenu(state){
      state.extraMenu=filterRouter(asynRoutes,state.authList);
      window.localStorage.setItem('extraMenu',JSON.stringify(state.extraMenu));
    },
    setAuthList(state,list){  // 设置authList
      state.authList=list;
      window.localStorage.setItem('setAuthList',list);
    }
  }
}

export default menu;