import VueRouter from 'vue-router'

import bookshelf from './components/tabbar/bookshelf.vue'
import concentration from './components/tabbar/concentration.vue'
import discovery from './components/tabbar/discovery.vue'
import myself from './components/tabbar/myself.vue'
import details from './components/books/details.vue'
import book from './components/books/book.vue'

var router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/bookshelf'
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
    }, {
        name:'bookDetail',
        path: '/details/:gender/:major',
        component: details
    }, {
        name: 'bookInfo',
        path: '/book/:id',
        component: book
    }],
    linkActiveClass: 'mui-active'
})

export default router