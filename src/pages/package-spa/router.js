import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/home/index.vue';
import About from './views/about/index.vue';

Vue.use(VueRouter);

/**
 * 路由配置
 * @type {import('vue-router').RouteConfig[]}
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
];

/**
 * 路由实例
 * @type {import('vue-router').Router}
 */
const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;