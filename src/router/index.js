import Vue from 'vue'
import Home from '@/views/Home/index.vue'
import Looking from '@/views/Looking/index.vue'
import Message from '@/views/Message/index.vue'
import Mine from '@/views/Mine/index.vue'
import Layout from '@/views/Layout/index.vue'

import Register from '@/components/Register/index.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect: '/layout'
    },
    {
        path:'/layout',
        component:Layout,
        redirect: '/layout/home',
        children:[
            {
                path:'home',
                component:Home,
                meta:{
                    title:'首页'
                },
            },
            {
                path:'looking',
                component:Looking,
                meta:{
                    title:'租房'
                },
            }, {
                path:'message',
                component:Message,
                meta:{
                    title:'资讯'
                },
            }, {
                path:'mine',
                component:Mine,
                meta:{
                    title:'我的'
                },
            },
        ]
    },
    {
        path:'/register',
        component:Register,
    }
];

export default new VueRouter({routes})