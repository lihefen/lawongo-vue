// import CommonHeader from "@/components/CommonHeader.vue";
import { Toast } from "vant";
import { getUrlParam, navigateTo } from "@/utils";

/**
 * 首页应用组件
 * @description 展示首页内容，包含Vant组件示例
 */
export default {
  components: {},
  name: "HomeApp",
  data() {
    return {
      stories: [
        {
          date: "16-01-2025",
          title: "TextTextTextTextTextTe",
          body: "TextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsText",
        },
        {
          date: "16-12-2024",
          title: "TextTextTextTextTextTe",
          body: "TextsTextsTextsTextsTextsTextsTextsTextsTextsTexts",
        },
      ],
    };
  },
  created() {
    this.getLawyerInfo();
  },
  methods: {
    getLawyerInfo() {
      // TODO: 获取律师信息
      const params = getUrlParam("id");
      console.log(params);
    },
    onClickLeft() {
      console.log("onClickLeft");
      navigateTo("certified-lawyer");
    },
    onClickRight() {
      console.log("onClickRight");
    },
    /**
     * 显示提示信息
     * @returns {void}
     */
    showToast() {
      Toast("页面应用示例");
    },
  },
};
