import Vue from "vue";
import { NavBar, Toast, Icon, Grid, GridItem, Steps, Step } from "vant";
import "vant/lib/index.css";
import App from "./app/index.vue";

// 注册Vant组件
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Steps);
Vue.use(Step);

/**
 * 初始化Vue实例
 * @description 挂载路由配置和根组件
 */
new Vue({
  render: (h) => h(App),
}).$mount("#app");
