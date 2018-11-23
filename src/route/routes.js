import Login from '../views/Login.vue'
import NotFound from '../views/404.vue'
import Home from '../views/Home.vue'
import Role from '../views/menu/roles.vue'
import Main from '../views/Main.vue'
import Table from '../views/nav1/Table.vue'
import Form from '../views/nav1/Form.vue'
import user from '../views/nav1/user.vue'
import Page4 from '../views/nav2/Page4.vue'
import Page5 from '../views/nav2/Page5.vue'
import Page6 from '../views/nav3/Page6.vue'
import echarts from '../views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        leaf: true,//只有一个节点
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页' }
        ]
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    },
    { path: '/main', component: Main },
];

let asynRoutes=[
    {
        path: '/',
        component: Home,
        name: '菜单管理',
        iconCls: 'el-icon-tickets',//图标样式class
        children: [
            { path: '/role', component: Role, name: '角色管理',meta:{name:'role'} }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true ,meta:{name:'home'} },
            { path: '/table', component: Table, name: 'Table' ,meta:{name:'table'}},
            { path: '/form', component: Form, name: 'Form',meta:{name:'form'} },
            { path: '/user', component: user, name: '列表',meta:{name:'list'} },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4' ,meta:{name:'page4'}},
            { path: '/page5', component: Page5, name: '页面5' ,meta:{name:'page5'}}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' ,meta:{name:'nav3'}}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '表格',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts表格' ,meta:{name:'echarts'}}
        ]
    }    
];

export default {routes,asynRoutes}
