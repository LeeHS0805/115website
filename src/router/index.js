import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    historyMode: false,
    routes: [{
            //主页
            path: '/',
            name: 'index',
            component: () =>
                import ('../pages/index/index.vue')
        }, {
            //动态新闻页
            path: '/dynamic',
            name: 'Dynamic',
            component: () =>
                import ('../pages/dynamic/index.vue'),
            //浏览新闻的详细页面（作为子页面运行）
            children: []
        }, {
            //留言板页
            path: '/orgShow',
            name: 'orginazation',
            component: () =>
                import ('../pages/orgShow/index.vue')
        },
        {
            //留言板页
            path: '/msgBoard',
            name: 'Board',
            component: () =>
                import ('../pages/msgBoard/index.vue')
        }, {
            //介绍页面
            path: '/about',
            name: 'Name',
            component: () =>
                import ('../pages/about/index.vue')
        }
    ]
})