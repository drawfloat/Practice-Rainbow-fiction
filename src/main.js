import Vue from 'vue'

// 引入mint-ui
import {
    Header
} from 'mint-ui';

Vue.component(Header.name, Header);

// 引入MUI
import './lib/mui/css/mui.min.css'

import App from './App.vue'

var vm = new Vue({
    el: "#app",
    data: {

    },
    methods: {

    },
    render: cE => cE(App)
})