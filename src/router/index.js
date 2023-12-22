
import { createRouter, createWebHistory } from 'vue-router';



import homeView from '@/views/homeView.vue';
import shopView from '@/views/shopView.vue';
import cartView from '@/views/cartView.vue';
import loginView from '@/views/loginView.vue';
import contactView from '@/views/contactView.vue';
import detailPage from '@/views/detailPage.vue';
import checkoutView from '@/views/checkoutView.vue';
import bevestigingView from '@/views/bevestigingView.vue';
import AuthView from '@/views/AuthView.vue';
import { users } from '@/users';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: homeView
    },
    {
      path: '/shop',
      component: shopView
    },
    {
      path: '/cart',
      component: cartView,
      
    },
    {
      path: '/login',
      component: loginView
    },
    {
      path: '/detailpage/:productId',
      name: 'detailPage',
      component: detailPage
    },
    {
        path: '/checkout',
        component: checkoutView,
  
      },
    {
      path: '/FooterComponent',
      component: contactView,
    },
    {
      path: '/auth',
      component: AuthView,
    },
    {
        path: '/bevestiging',
        component: bevestigingView, 
      },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isLoggedIn()) {
   
    next('/login');
  } else {
    next();
  }
});

const isLoggedIn = () => {
  
  return localStorage.getItem('user') !== null;
};

export default router;