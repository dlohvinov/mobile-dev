import Vue from 'vue';
import firebase from 'firebase';
import Router from 'vue-router';
import home from './views/the-home.vue';
import login from './views/the-login.vue';
import register from './views/the-register.vue';
import mailList from './views/the-mail-list.vue';
import mailNew from './views/mail-new.vue';
import openedMail from './views/opened-mail-item.vue';
import profile from './views/the-profile.vue';
import unknown from './views/the-unknown.vue';

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
            },
            children: [
                {
                    path: '/mails',
                    name: 'mails',
                    component: mailList,
                },
                {
                    path: '/mails/new',
                    name: 'new-mail',
                    component: mailNew,
                },
                {
                    path: '/mails/:id',
                    name: 'mail',
                    component: openedMail,
                },
                {
                    path: '/unknown',
                    name: 'unknown',
                    component: unknown,
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: profile,
                },
            ]
        },
    ]
});

router.beforeEach(async  (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    firebase.auth().onAuthStateChanged((currentUser) => {
        if (!currentUser && requiresAuth) {
            next('/login');
        } else {
            next();
        }
    });

});

export default router;