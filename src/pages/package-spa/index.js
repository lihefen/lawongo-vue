import Vue from 'vue';
import router from './router';
import App from './index.vue';
import { Card, Divider, Row, Col, Tag, Cell, CellGroup } from 'vant';
import 'vant/lib/index.css';

// 注册Vant组件
Vue.use(Card);
Vue.use(Divider);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tag);
Vue.use(Cell);
Vue.use(CellGroup);

/**
 * 初始化Vue实例
 * @description 挂载路由配置和根组件
 */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');