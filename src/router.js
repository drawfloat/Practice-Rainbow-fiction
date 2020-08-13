import VueRouter from 'vue-router'

import bookshelf from './components/tabbar/bookshelf.vue'
import concentration from './components/tabbar/concentration.vue'
import discovery from './components/tabbar/discovery.vue'
import myself from './components/tabbar/myself.vue'

var router = new VueRouter({
    routes: [{
        path: '/',
        component: bookshelf
    }, {
        path: '/bookshelf',
        component: bookshelf
    }, {
        path: '/concentration',
        component: concentration
    }, {
        path: '/discovery',
        component: discovery
    }, {
        path: '/myself',
        component: myself
    }],
    linkActiveClass: 'mui-active'
})

export default router