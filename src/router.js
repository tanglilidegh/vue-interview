import Vue from 'vue';
import VueRouter from 'vue-router';
import pageA from './pages/page-a.vue';
import pageB from './pages/page-b.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/pagea', component: pageA},
  {path: '/pageb', component: pageB},
];

const router = new VueRouter({
  routes
});

export default router;