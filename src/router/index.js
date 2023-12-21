
import { createRouter, createWebHistory } from 'vue-router';



import homeView from '@/views/homeView.vue';
import shopView from '@/views/shopView.vue';
import cartView from '@/views/cartView.vue';
import loginView from '@/views/loginView.vue';
import contactView from '@/views/contactView.vue';
import detailPage from '@/views/detailPage.vue';
import checkoutView from '@/views/checkoutView.vue';
import testView from '@/views/testView.vue';


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
      component: cartView
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
        path: '/bevestiging',
        component: testView, 
      },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});



export default router;