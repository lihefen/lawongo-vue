import Vue from "vue";
import {
  Button,
  NavBar,
  Toast,
  Icon,
  Search,
  Grid,
  GridItem,
  DropdownMenu,
  DropdownItem,
} from "vant";
import "vant/lib/index.css";
import App from "./app/index.vue";

// 注册Vant组件
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

/**
 * 初始化Vue实例
 * @description 挂载路由配置和根组件
 */
new Vue({
  render: (h) => h(App),
}).$mount("#app");
