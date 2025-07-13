import CommonHeader from "@/components/CommonHeader.vue";
import { Toast } from "vant";
import LawyerPage from "./components/lawyer-page.vue";

/**
 * 首页应用组件
 * @description 展示首页内容，包含Vant组件示例
 */
export default {
  components: {
    CommonHeader,
    LawyerPage,
  },
  name: "HomeApp",
  methods: {
    /**
     * 显示提示信息
     * @returns {void}
     */
    showToast() {
      Toast("页面应用示例");
    },
  },
};
