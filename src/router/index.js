import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            component: () => import('@/layout/index'),
            children: [
                {
                    path: '/home',
                    component: () => import('@/views/home'),
                    meta: { title: '首页' }
                },
            ]
        },
        {
            path: '/404',
            component: () => import('@/views/404'),
            meta: { title: '404' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ],
    // mode: 'history'
});
