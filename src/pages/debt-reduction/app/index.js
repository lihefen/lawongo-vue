import CommonHeader from '@/components/CommonHeader.vue';
import { navigateTo } from '@/utils';
import { Toast } from 'vant';

/**
 * 首页应用组件
 * @description 展示首页内容，包含Vant组件示例
 */
export default {
  components: {
    CommonHeader
  },
  name: 'HomeApp',
  methods: {
    /**
     * 显示提示信息
     * @returns {void}
     */
    showToast() {
      Toast('页面应用示例');
    }
  }
};