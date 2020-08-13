import Vue from 'vue'

// 引入mint-ui
import {
    Header,
    Swipe,
    SwipeItem
} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

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

// axios.defaults.baseURL = '/api'
// axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(VueAxios, axios)


import App from './App.vue'

var vm = new Vue({
    el: "#app",
    data: {

    },
    methods: {

    },
    render: cE => cE(App),
    router
})