import Vue from 'vue';
import firebase from 'firebase';
import Router from 'vue-router';
import home from './views/the-home.vue';
import login from './views/the-login.vue';
import register from './views/the-register.vue';

Vue.use(Router);

const router = new Router({
    mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/',
            name: 'home',
            component: home,
            meta: {
                requiresAuth: true
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (!currentUser && requiresAuth) {
        next('/login');
    } else {
        next();
    }
});

export default router;