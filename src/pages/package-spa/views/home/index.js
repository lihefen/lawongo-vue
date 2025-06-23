/**
 * 首页组件逻辑
 * @description 处理首页的业务逻辑和交互
 */

export default {
  name: 'Home',
  methods: {
    showToast() {
      this.$toast('页面应用示例');
    }
  }
};