import { createRouter, createWebHistory } from 'vue-router';
import { getCookie } from '~/assets/utils/cookies-utils';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
            beforeEnter: () => {
                const token = getCookie('auth_token');

                if (!token) {
                    return {
                        name: 'auth',
                    };
                }
            },
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('../views/AuthView.vue'),
            beforeEnter: () => {
                const token = getCookie('auth_token');

                if (token) {
                    return {
                        name: 'home',
                    };
                }
            },
        },
    ],
});

export default router;
