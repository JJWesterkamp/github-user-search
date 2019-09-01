import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '@/components/Search';
import User from '@/components/User';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'search',
        component: Search,
    },
    {
        path: '/user/:login',
        name: 'user',
        component: User,
    },
];

export default new VueRouter({
    routes,
});
