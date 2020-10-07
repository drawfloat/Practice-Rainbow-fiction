import Vue from 'vue'

// 引入mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
// import {
//     Header,
//     Button,
//     Swipe,
//     SwipeItem,
//     Cell,
//     Navbar,
//     TabItem,
//     TabContainer,
//     TabContainerItem,
//     Lazyload,
//     Loadmore,
//     InfiniteScroll
// } from 'mint-ui';

// // Vue.use(MintUI)
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);
// Vue.component(Cell.name, Cell);
// Vue.component(Navbar.name, Navbar);
// Vue.component(Loadmore.name, Loadmore);
// Vue.component(TabItem.name, TabItem);

// Vue.use(Lazyload);
// Vue.use(InfiniteScroll);

// 引入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'


// 导入vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        subtract(state, obj) {
            state.count -= (obj.a + obj.b);
        }
    },
    getters: {
        optCount(state) {
            return '当前的值为：' + state.count;
        }
    }
})


import App from './App.vue'

var vm = new Vue({
    el: "#app",
    data: {

    },
    methods: {

    },
    // components: {
    //     APP
    // },
    render: cE => cE(App),
    router,
    store
})