import Vue from "vue";
import { Button, Cell, NavBar, CellGroup, Toast, Icon } from "vant";
import "vant/lib/index.css";
import App from "./app/index.vue";

// 注册Vant组件
Vue.use(Button);
Vue.use(Cell);
Vue.use(NavBar);
Vue.use(CellGroup);
Vue.use(Toast);
Vue.use(Icon);

/**
 * 初始化Vue实例
 * @description 挂载路由配置和根组件
 */
new Vue({
  render: (h) => h(App),
}).$mount("#app");
