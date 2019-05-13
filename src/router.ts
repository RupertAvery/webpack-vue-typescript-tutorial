import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes = <RouteConfig[]>[
    {
        path: '/',
        component: require('./components/home/home.vue').default
    },
    {
        path: '/register',
        component: require('./components/registration/registration-form.vue').default
    },
    /* Fallback */
    { path: '*', redirect: '/' },
];

const router = new VueRouter({ mode: 'history', routes: routes });

export default router;