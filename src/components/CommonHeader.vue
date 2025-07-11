<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :left-arrow="showBack"
    @click-left="onClickLeft"
  />
</template>

<script>
/**
 * 公共头部组件
 * @description 基于Vant NavBar封装的通用头部组件，支持自定义标题和返回功能
 */
export default {
  name: 'CommonHeader',
  props: {
    /**
     * 标题文本
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * 左侧文本
     */
    leftText: {
      type: String,
      default: ''
    },
    /**
     * 是否显示返回箭头
     */
    showBack: {
      type: Boolean,
      default: false
    },
    /**
     * 返回的页面路径
     */
    backPath: {
      type: String,
      default: ''
    }
  },
  methods: {
    /**
     * 点击左侧按钮的处理函数
     * @returns {void}
     */
    onClickLeft() {
      if (this.backPath) {
        window.location.href = this.backPath;
      } else {
        this.$emit('click-left');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/* 可以添加自定义样式 */
// :deep(.van-icon) {
//   color: rgba(0, 0, 0, 0.7);
//   font-size: 24px;
// }
</style>