import Vue from "vue";
import { NavBar, Toast, Search, DropdownMenu, DropdownItem } from "vant";
import "vant/lib/index.css";
import App from "./app/index.vue";

// 注册Vant组件
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Search);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

/**
 * 初始化Vue实例
 * @description 挂载路由配置和根组件
 */
new Vue({
  render: (h) => h(App),
}).$mount("#app");
